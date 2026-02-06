import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies | JGC Solutions",
  description: "Real-world examples of cloud solutions built with AWS to improve performance, scalability, and operational efficiency.",
};

type CaseStudy = {
  title: string;
  description: string;
  stack: string[];
  outcome: string;
  diagram?: string;
};

const caseStudies: CaseStudy[] = [
  {
    title: "Static Marketing Website with Global CDN",
    description:
      "Designed and deployed a fast, secure static marketing website using AWS services and CI/CD automation.",
    stack: ["S3", "CloudFront", "Route 53", "GitHub Actions"],
    outcome:
      "Achieved sub-100ms global load times with zero server maintenance and minimal hosting costs.",
    diagram: "/images/staticWebsiteDiagram.png",
  },
  {
    title: "Serverless Backend for Web Application",
    description:
      "Built a scalable backend API for a web application using a serverless-first approach.",
    stack: ["AWS Lambda", "API Gateway", "DynamoDB", "IAM"],
    outcome:
      "Enabled automatic scaling with pay-per-use pricing and eliminated infrastructure management.",
    diagram: "/images/backendDiagram.png"
  },
  {
    title: "Business Workflow Automation",
    description:
      "Automated repetitive reporting and notification workflows for a small business.",
    stack: ["AWS Lambda", "EventBridge", "SES", "S3"],
    outcome:
      "Reduced manual effort by 70% and improved reporting reliability.",
      diagram: "/images/automatedWorkflow.png"
  },
  {
    title: "AI-Powered Document Processing",
    description:
      "Implemented automated document extraction and analysis using AWS AI services.",
    stack: ["AWS Textract", "AWS Comprehend", "Lambda", "S3"],
    outcome:
      "Converted unstructured documents into searchable, structured data.",
      diagram: "/images/documentProcessor.png"
  },
];

export default function PortfolioPage() {
  return (
    <main>

      {/* HEADER */}
      <section className="portfolio container">
        <h1 className="text-4xl md:text-5xl font-bold">Portfolio & Case Studies</h1>
        <p className="mt-6 text-lg">Real-world examples of cloud solutions built with AWS to improve performance, scalability, and operational efficiency.</p>
      </section>

      {/* CASE STUDIES */}
      <section className="container portfolio__grid pb-20">
        {caseStudies.map((project) => (
          <div key={project.title} className="portfolio__item">
            <h3 className="portfolio__title">{project.title}</h3>

            <p className="portfolio__excerpt">{project.description}</p>

            <div className="mt-4">
              <p className="font-medium">Technology Stack</p>
              <ul className="mt-2" style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem'}}>
                {project.stack.map((tech) => (
                  <li key={tech} className="text-sm" style={{background:'#f3f4f6',padding:'0.25rem 0.6rem',borderRadius:999}}>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-4">
              <span className="font-medium">Outcome:</span> {project.outcome}
            </p>

            {project.diagram && (
              <Image src={project.diagram} alt={`${project.title} architecture diagram`} className="mt-6 rounded-lg border" width={600} height={400} />
            )}
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-20 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">Want similar results for your business?</h2>
        <p className="mt-4">Let’s discuss your goals and design a solution that fits your needs.</p>

        <Link href="/contact" className="mt-8 inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">Schedule a Consultation</Link>
      </section>

    </main>
  );
}
