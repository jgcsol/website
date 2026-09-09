import Link from "next/link";
import Image from "next/image";
import Badges from "./components/badges";

export default function Home() {
  return (
    <main>
      {/* HERO SECTION (Profile) */}
      <section className="hero container">
        <div className="hero__inner">
          <div className="hero__media">
            <Image src="/images/profile.png" alt="Jesus Cabrero" width={260} height={260} className="profile-image" />
          </div>

          <div className="hero__content">
            <p>
              <strong>Hi, I'm Jesus.</strong>
              <br /><br />

              I'm a software engineer, problem solver, husband, and father of three who
              enjoys building technology that makes complicated things simpler.
              <br /><br />

              I have 5+ years of professional experience developing full-stack and
              cloud-based applications, with a strong focus on{" "}
              <strong>Java, Spring Boot, React, SQL, and AWS</strong>. I've worked across
              software development, cloud infrastructure, APIs, data systems, automation,
              and AI integration, giving me an appreciation for the entire journey from
              an idea to a production application.
              <br /><br />

              I'm especially interested in <strong>AI engineering and practical AI
                solutions</strong>. I enjoy finding ways to take emerging technology and
              turn it into something useful for a business or its customers. I've
              integrated LLMs into applications, built AI-powered document processing and
              matching solutions, and worked with cloud-native architectures designed to
              scale.
              <br /><br />

              Outside of technology, I'm a family man first. I'm a husband and father of
              three, and when I'm not behind a computer, you'll probably find me{" "}
              <strong>bowling, playing sports, watching sports, or spending time with my
                family</strong>.
              <br /><br />

              I believe good software engineering isn't just about writing code. It's
              about understanding the problem, finding the right solution, and building
              something that people can actually use.
              <br /><br />

              <strong>I build. I solve problems. I keep learning. And I'm always looking
                for the next challenge.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* CREDENTIALS SECTION */}
      <section className="badges__container mt-6">
        <h2 className="text-3xl font-bold text-center">AWS Certified & Accredited</h2>
        <p className="credentials__subtitle">Verified expertise in cloud architecture and AWS solutions</p>
        <Badges badges={[
          { id: 'a644b510-8cde-4636-8bf7-3ae93491d531' },
          { id: '87a97b88-fd09-465e-bdbf-9c7fa1abf81c' },
        ]} />
      </section>
    </main>
  );
}
