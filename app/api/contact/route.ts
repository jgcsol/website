import { NextRequest, NextResponse } from "next/server";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

// AWS SES client
const ses = new SESClient({ region: "us-east-1" }); 

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();
        const { name, email, company, message } = data;

        if (!name || !email || !message) {
            return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 });
        }

        const command = new SendEmailCommand({
            Source: "contact@jgcsolutions.com", // must be verified in SES
            Destination: {
                ToAddresses: ["contact@jgcsolutions.com"], // where you want to receive submissions
            },
            Message: {
                Subject: { Data: `Contact Form Submission from ${name}` },
                Body: {
                    Text: {
                        Data: `
                            Name: ${name}
                            Email: ${email}
                            Company: ${company || "N/A"}
                            Message: ${message}`,
                    },
                },
            }});

        await ses.send(command);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("SES Error:", error);
        return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
    }
}
