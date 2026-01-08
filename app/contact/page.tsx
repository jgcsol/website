"use client";

import { useCallback, useEffect, useState } from "react";
import {reCaptcha} from './util/recaptcha'
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const API_ENDPOINT =
  "https://o3zeql0j4a.execute-api.us-east-1.amazonaws.com/contact";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);
  const [token, setToken] = useState("")

    const refreshCaptcha = useCallback(() => {
      reCaptcha('contact', (token) => setToken(token));
    }, []);
  
    useEffect(() => {
      if (!token || token === "") refreshCaptcha();
    }, [token, refreshCaptcha]);

  

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  setLoading(true);
  setFeedback(null);
  setIsError(false);

  const form = e.currentTarget;
  const formData = new FormData(form);

  try {
    // 1️⃣ Wait until grecaptcha is ready
    await new Promise<void>((resolve) => {
      window.grecaptcha.ready(resolve);
    });

    // 2️⃣ Execute reCAPTCHA v3
    const token = await window.grecaptcha.execute(
      process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
      { action: "contact" }
    );

    if (!token) {
      throw new Error("reCAPTCHA token missing");
    }

    // 3️⃣ Build payload AFTER token exists
    const payload = {
      name: formData.get("name")?.toString() || "",
      email: formData.get("email")?.toString() || "",
      company: formData.get("company")?.toString() || "",
      message: formData.get("message")?.toString() || "",
      captchaToken: token,
    };

    const res = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error(`Request failed (${res.status})`);
    }

    const result = await res.json();

    if (result.success) {
      setFeedback("✅ Message sent successfully.");
      setIsError(false);
      form.reset();
    } else {
      throw new Error(result.error || "Submission failed");
    }
  } catch (err) {
    console.error(err);
    setFeedback("❌ Unable to send message.");
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
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Email *</label>
          <input
            type="email"
            name="email"
            required
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Company</label>
          <input
            name="company"
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Message *</label>
          <textarea
            name="message"
            rows={5}
            required
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold"
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


