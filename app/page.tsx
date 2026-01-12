import Link from "next/link";

export default function Home() {
  const services = [
    {
      title: "Cloud Application Development",
      text: "Custom web applications, APIs, and dashboards built using serverless AWS services for performance and scalability.",
    },
    {
      title: "Business Process Automation",
      text: "Eliminate repetitive tasks with AWS-powered automation, scheduled jobs, notifications, and reporting.",
    },
    {
      title: "Cloud Migration & Modernization",
      text: "Move legacy systems to AWS to reduce infrastructure cost, improve reliability, and enable growth.",
    },
    {
      title: "AI Document & Resume Processing",
      text: "Extract and analyze documents using AWS Textract and Comprehend to unlock searchable business data.",
    },
    {
      title: "Startup MVP Backends",
      text: "Launch faster with secure, scalable backend infrastructure without hiring a full engineering team.",
    },
    {
      title: "Ongoing Support & Optimization",
      text: "Monitoring, enhancements, and cost optimization through predictable monthly support plans.",
    },
  ];

  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero container">
        <h1 className="hero__title">
          Cloud-Powered Software Solutions<br />
          <span className="hero__highlight">Built on AWS</span>
        </h1>

        <p className="hero__lead">
          JGC Solutions helps businesses automate workflows, modernize legacy systems,
          and launch scalable cloud applications using AWS — without the cost of
          maintaining servers or full-time engineering teams.
        </p>

        <div className="hero__actions">
          <Link href="/contact" className="btn btn--primary">
            Get a Free Consultation
          </Link>

          <Link href="/portfolio" className="btn btn--ghost">
            View Portfolio
          </Link>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="services">
        <div className="container">
          <h2 className="text-3xl font-bold text-center">Services</h2>

          <div className="services__grid mt-12">
            {services.map((service) => (
              <div key={service.title} className="service-card">
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__text">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY JGC SOLUTIONS */}
      <section className="why">
        <div className="container">
          <h2 className="text-3xl font-bold text-center">Why JGC Solutions</h2>

          <div className="why__grid mt-12">
            <ul className="why__list">
              <li>✔ AWS-first, serverless architecture</li>
              <li>✔ Lower operational cost than traditional hosting</li>
              <li>✔ Fast delivery with modern tooling</li>
              <li>✔ Java & cloud engineering expertise</li>
              <li>✔ Transparent pricing and support options</li>
            </ul>

            <div className="results-card">
              <p className="results-card__title">Typical Results</p>
              <p className="mt-4">
                Clients reduce infrastructure costs, eliminate manual processes,
                and gain systems that scale automatically as their business grows —
                all while avoiding long-term vendor lock-in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta">
        <h2 className="cta__title">Ready to modernize your software?</h2>
        <p className="cta__lead">Let’s talk about how AWS can simplify your operations and reduce cost.</p>

        <div className="cta__actions">
          <Link href="/contact" className="btn btn--white">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
