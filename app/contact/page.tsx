"use client";

import { useCallback, useEffect, useState } from "react";
import {reCaptcha} from './util/recaptcha'

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
    <section className="contact container">
      <h1 className="contact__title">Contact JGC Solutions</h1>

      <p className="contact__lead">Tell us about your project and we’ll respond within 1 business day.</p>

      <form onSubmit={handleSubmit} className="form">
        <div className="field">
          <label>Name *</label>
          <input name="name" required />
        </div>

        <div className="field">
          <label>Email *</label>
          <input type="email" name="email" required />
        </div>

        <div className="field">
          <label>Company</label>
          <input name="company" />
        </div>

        <div className="field field--full">
          <label>Message *</label>
          <textarea name="message" rows={5} required />
        </div>

        <div className="form__actions">
          <button type="submit" disabled={loading} className="btn btn--primary">
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>

        {feedback && (
          <p className={`feedback ${isError ? "feedback--error" : "feedback--success"}`}>
            {feedback}
          </p>
        )}
      </form>
    </section>
  );
}


