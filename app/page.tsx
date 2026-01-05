import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Cloud-Powered Software Solutions<br />
          <span className="text-blue-600">Built on AWS</span>
        </h1>

        <p className="mt-6 text-lg max-w-3xl mx-auto text-gray-600">
          JGC Solutions helps businesses automate workflows, modernize legacy systems,
          and launch scalable cloud applications using AWS — without the cost of
          maintaining servers or full-time engineering teams.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/contact"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Get a Free Consultation
          </Link>

          <Link
            href="/portfolio"
            className="px-6 py-3 rounded-lg border border-gray-300 font-semibold hover:bg-gray-100 transition"
          >
            View Portfolio
          </Link>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">
            Services
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Cloud Application Development",
                text: "Custom web applications, APIs, and dashboards built using serverless AWS services for performance and scalability."
              },
              {
                title: "Business Process Automation",
                text: "Eliminate repetitive tasks with AWS-powered automation, scheduled jobs, notifications, and reporting."
              },
              {
                title: "Cloud Migration & Modernization",
                text: "Move legacy systems to AWS to reduce infrastructure cost, improve reliability, and enable growth."
              },
              {
                title: "AI Document & Resume Processing",
                text: "Extract and analyze documents using AWS Textract and Comprehend to unlock searchable business data."
              },
              {
                title: "Startup MVP Backends",
                text: "Launch faster with secure, scalable backend infrastructure without hiring a full engineering team."
              },
              {
                title: "Ongoing Support & Optimization",
                text: "Monitoring, enhancements, and cost optimization through predictable monthly support plans."
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl p-6 shadow-sm border"
              >
                <h3 className="text-xl font-semibold">
                  {service.title}
                </h3>
                <p className="mt-3 text-gray-600">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY JGC SOLUTIONS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">
            Why JGC Solutions
          </h2>

          <div className="mt-12 grid md:grid-cols-2 gap-10">
            <ul className="space-y-4 text-gray-700">
              <li>✔ AWS-first, serverless architecture</li>
              <li>✔ Lower operational cost than traditional hosting</li>
              <li>✔ Fast delivery with modern tooling</li>
              <li>✔ Java & cloud engineering expertise</li>
              <li>✔ Transparent pricing and support options</li>
            </ul>

            <div className="bg-blue-50 rounded-xl p-8">
              <p className="text-lg font-semibold text-blue-800">
                Typical Results
              </p>
              <p className="mt-4 text-gray-700">
                Clients reduce infrastructure costs, eliminate manual processes,
                and gain systems that scale automatically as their business grows —
                all while avoiding long-term vendor lock-in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-blue-600 py-20 text-white text-center">
        <h2 className="text-3xl font-bold">
          Ready to modernize your software?
        </h2>
        <p className="mt-4 text-lg">
          Let’s talk about how AWS can simplify your operations and reduce cost.
        </p>

        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>

    </main>
  );
}
