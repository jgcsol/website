import Link from "next/link";

export default function Pricing() {
  return (
    <main className="bg-white text-gray-900">
      
      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Simple, Transparent Pricing
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          Flexible pricing designed for small and mid-sized businesses.
          Fixed-price projects or monthly support — no long-term lock-in.
        </p>
      </section>

      {/* PRICING CARDS */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          {/* STARTER */}
          <div className="bg-white border rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold">Starter</h3>
            <p className="mt-2 text-gray-600">
              Ideal for automation or small cloud projects
            </p>

            <p className="mt-6 text-3xl font-bold">
              $500 – $3,500
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>✔ Business process automation</li>
              <li>✔ AWS Lambda & scheduled jobs</li>
              <li>✔ Reporting & notifications</li>
              <li>✔ Fixed-price delivery</li>
            </ul>

            <Link
              href="/contact"
              className="mt-8 inline-block w-full text-center px-6 py-3 border rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Get Started
            </Link>
          </div>

          {/* GROWTH */}
          <div className="bg-white border-2 border-blue-600 rounded-xl p-8 shadow-md">
            <h3 className="text-xl font-semibold text-blue-600">
              Growth
            </h3>
            <p className="mt-2 text-gray-600">
              Custom applications & cloud modernization
            </p>

            <p className="mt-6 text-3xl font-bold">
              $2,500 – $15,000
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>✔ Serverless web applications</li>
              <li>✔ APIs, dashboards, integrations</li>
              <li>✔ AWS architecture design</li>
              <li>✔ Weekly progress updates</li>
            </ul>

            <Link
              href="/contact"
              className="mt-8 inline-block w-full text-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Request a Quote
            </Link>
          </div>

          {/* SCALE */}
          <div className="bg-white border rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold">Scale</h3>
            <p className="mt-2 text-gray-600">
              Long-term support & cloud optimization
            </p>

            <p className="mt-6 text-3xl font-bold">
              $100 – $600<span className="text-base font-normal">/mo</span>
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>✔ Monitoring & bug fixes</li>
              <li>✔ Cost optimization</li>
              <li>✔ Feature enhancements</li>
              <li>✔ Priority support</li>
            </ul>

            <Link
              href="/contact"
              className="mt-8 inline-block w-full text-center px-6 py-3 border rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Start a Retainer
            </Link>
          </div>

        </div>
      </section>

      {/* FAQ / FOOTER CTA */}
      <section className="py-20 text-center max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold">
          Not sure which option fits?
        </h2>
        <p className="mt-4 text-gray-600">
          Every project starts with a free consultation to define scope,
          timeline, and pricing — no obligation.
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Schedule a Free Consultation
        </Link>
      </section>

    </main>
  );
}
