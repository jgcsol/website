import { NextRequest, NextResponse } from "next/server";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

// AWS SES client using env variables
const ses = new SESClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, email, company, message } = data;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const command = new SendEmailCommand({
      Source: process.env.SES_FROM_EMAIL!, // Verified email
      Destination: { ToAddresses: [process.env.SES_TO_EMAIL!] },
      Message: {
        Subject: { Data: `Contact Form Submission from ${name}` },
        Body: {
          Text: {
            Data: 
                `Name: ${name}
                Email: ${email}
                Company: ${company || "N/A"}
                Message: ${message}`,
          },
        },
      },
    });

    await ses.send(command);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("SES Error:", error);
    return NextResponse.json(
      { success: false, error: (error as any).message || "Failed to send email" },
      { status: 500 }
    );
  }
}
