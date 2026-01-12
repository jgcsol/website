import Link from "next/link";

export default function Pricing() {
  return (
    <main>

      {/* HEADER */}
      <section className="pricing container">
        <h1 className="text-4xl md:text-5xl font-bold ">Simple, Transparent Pricing</h1>
        <p className="mt-6 text-lg">Flexible pricing designed for small and mid-sized businesses. Fixed-price projects or monthly support — no long-term lock-in.</p>
      </section>

      {/* PRICING CARDS */}
      <section className="pricing bg-gray-50">
        <div className="container pricing__grid">

          <div className="pricing__card">
            <h3 className="text-xl font-semibold">Starter</h3>
            <p className="mt-2">Ideal for automation or small cloud projects</p>

            <p className="mt-6 pricing__price">$500 – $3,500</p>

            <ul className="pricing__features">
              <li className="pricing__feature">✔ Business process automation</li>
              <li className="pricing__feature">✔ AWS Lambda & scheduled jobs</li>
              <li className="pricing__feature">✔ Reporting & notifications</li>
              <li className="pricing__feature">✔ Fixed-price delivery</li>
            </ul>

            <div className="pricing__cta">
              <Link href="/contact" className="btn btn--ghost">Get Started</Link>
            </div>
          </div>

          <div className="pricing__card" style={{borderWidth:2,borderColor:'#2563eb'}}>
            <h3 className="text-xl font-semibold" style={{color:'#2563eb'}}>Growth</h3>
            <p className="mt-2">Custom applications & cloud modernization</p>

            <p className="mt-6 pricing__price">$2,500 – $15,000</p>

            <ul className="pricing__features">
              <li className="pricing__feature">✔ Serverless web applications</li>
              <li className="pricing__feature">✔ APIs, dashboards, integrations</li>
              <li className="pricing__feature">✔ AWS architecture design</li>
              <li className="pricing__feature">✔ Weekly progress updates</li>
            </ul>

            <div className="pricing__cta">
              <Link href="/contact" className="btn btn--primary">Request a Quote</Link>
            </div>
          </div>

          <div className="pricing__card">
            <h3 className="text-xl font-semibold">Scale</h3>
            <p className="mt-2">Long-term support & cloud optimization</p>

            <p className="mt-6 pricing__price">$100 – $600<span style={{fontSize:'0.875rem',fontWeight:400}}>/mo</span></p>

            <ul className="pricing__features">
              <li className="pricing__feature">✔ Monitoring & bug fixes</li>
              <li className="pricing__feature">✔ Cost optimization</li>
              <li className="pricing__feature">✔ Feature enhancements</li>
              <li className="pricing__feature">✔ Priority support</li>
            </ul>

            <div className="pricing__cta">
              <Link href="/contact" className="btn btn--ghost">Start a Retainer</Link>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ / FOOTER CTA */}
      <section className="py-20 text-center max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold">Not sure which option fits?</h2>
        <p className="mt-4">Every project starts with a free consultation to define scope, timeline, and pricing — no obligation.</p>

        <Link href="/contact" className="mt-8 inline-block px-8 py-3 btn btn--primary">Schedule a Free Consultation</Link>
      </section>

    </main>
  );
}
