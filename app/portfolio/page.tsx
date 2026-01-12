import Link from "next/link";

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
      diagram: "/images/documentProcessor2.png"
  },
];

export default function PortfolioPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* HEADER */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Portfolio & Case Studies
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          Real-world examples of cloud solutions built with AWS to improve
          performance, scalability, and operational efficiency.
        </p>
      </section>

      {/* CASE STUDIES */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-8">
        {caseStudies.map((project) => (
          <div
            key={project.title}
            className="border rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>

            <p className="mt-3 text-gray-600">{project.description}</p>

            <div className="mt-4">
              <p className="font-medium">Technology Stack</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="text-sm bg-gray-100 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-4 text-gray-700">
              <span className="font-medium">Outcome:</span> {project.outcome}
            </p>

            {project.diagram && (
              <img
                src={project.diagram}
                alt={`${project.title} architecture diagram`}
                className="mt-6 rounded-lg border"
              />
            )}
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-20 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">
          Want similar results for your business?
        </h2>
        <p className="mt-4 text-gray-600">
          Let’s discuss your goals and design a solution that fits your needs.
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Schedule a Consultation
        </Link>
      </section>

    </main>
  );
}
