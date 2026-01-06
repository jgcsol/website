"use client";

import { useState } from "react";

const API_ENDPOINT =
  "https://xjkvcuwg7f.execute-api.us-east-1.amazonaws.com/contact"; 


export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);
    setIsError(false);

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name")?.toString() || "",
      email: formData.get("email")?.toString() || "",
      company: formData.get("company")?.toString() || "",
      message: formData.get("message")?.toString() || "",
    };

    try {
      const res = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // 👇 SAFETY CHECK — avoids JSON parse crash
      if (!res.ok) {
        throw new Error(`Request failed (${res.status})`);
      }

      const result = await res.json();

      if (result.success) {
        setFeedback("✅ Message sent successfully. We'll be in touch shortly.");
        setIsError(false);
        form.reset();
      } else {
        setFeedback(result.error || "❌ Failed to send message.");
        setIsError(true);
      }
    } catch (err) {
      console.error(err);
      setFeedback("❌ Unable to send message. Please try again later.");
      setIsError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="max-w-2xl mx-auto px-6 py-20">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
        Contact JGC Solutions
      </h1>

      <p className="text-center text-gray-600 mb-12">
        Tell us about your project and we’ll respond within 1 business day.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block font-medium mb-1">Name *</label>
          <input
            name="name"
            required
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Email *</label>
          <input
            type="email"
            name="email"
            required
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Company</label>
          <input
            name="company"
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Message *</label>
          <textarea
            name="message"
            rows={5}
            required
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {feedback && (
          <p
            className={`text-center font-medium ${
              isError ? "text-red-600" : "text-green-600"
            }`}
          >
            {feedback}
          </p>
        )}
      </form>
    </section>
  );
}
