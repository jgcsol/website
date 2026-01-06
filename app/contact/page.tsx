"use client";
import { useState } from "react";

export default function ContactForm() {
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name")?.toString() || "",
            email: formData.get("email")?.toString() || "",
            company: formData.get("company")?.toString() || "",
            message: formData.get("message")?.toString() || "",
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            const result = await res.json();

            if (result.success) {
                alert("Message sent successfully!");
                data.name = ""
                data.email = ""
                data.company = ""
                data.message = ""
            } else {
                alert("Failed to send message: " + (result.error || "Unknown error"));
            }
        } catch (err) {
            alert("Error sending message: " + err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label className="block font-medium mb-1">Name</label>
                <input type="text" name="name" required className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>

            <div>
                <label className="block font-medium mb-1">Email</label>
                <input type="email" name="email" required className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>

            <div>
                <label className="block font-medium mb-1">Company (optional)</label>
                <input type="text" name="company" className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>

            <div>
                <label className="block font-medium mb-1">Message</label>
                <textarea name="message" rows={5} required className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>

            <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition">
                {loading ? "Sending..." : "Send Message"}
            </button>
        </form>
    );
}
