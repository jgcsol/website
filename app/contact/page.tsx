import Link from "next/link";
import { JSX } from "react";

export default function ContactPage(): JSX.Element {
  return (
    <main className="bg-white text-gray-900">
      
      {/* HEADER */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Get in Touch
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          Tell us about your project, automation needs, or cloud goals.
          We’ll respond within 1 business day.
        </p>
      </section>

      {/* CONTACT FORM */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <form
          action="mailto:contact@jgcsolutions.com"
          method="POST"
          encType="text/plain"
          className="space-y-6"
        >
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Company (optional)</label>
            <input
              type="text"
              name="company"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">
              How can we help?
            </label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* ALTERNATIVE CONTACT */}
        <div className="mt-10 text-center text-gray-600">
          <p>
            Prefer email? Reach us directly at{" "}
            <a
              href="mailto:contact@jgcsolutions.com"
              className="text-blue-600 font-medium"
            >
              contact@jgcsolutions.com
            </a>
          </p>
        </div>
      </section>

    </main>
  );
}
