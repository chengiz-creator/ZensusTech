import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="page">
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-inner">
          <div className="hero-content">
            <p className="hero-pill">Next-generation Cloud &amp; Managed Services</p>
            <h1>Cloud transformation with confidence and security.</h1>
            <p className="hero-subtitle">
              ZensusTech helps you migrate, modernize, and manage multi-cloud
              environments across Azure, AWS, and GCP with DevOps, automation,
              and always-on operations.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="primary-btn">
                Talk to our cloud experts
              </Link>
              <Link to="/services" className="secondary-link">
                Explore services
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-label">Multi-cloud platforms</span>
                <span className="stat-value">Azure · AWS · GCP</span>
              </div>
              <div className="stat">
                <span className="stat-label">Focus areas</span>
                <span className="stat-value">Migration · DevOps · DR</span>
              </div>
              <div className="stat">
                <span className="stat-label">Engagement model</span>
                <span className="stat-value">24/7 managed services</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <h1>About Us</h1>
        <p>
          ZensusTech is a next-generation cloud technology and managed services
          company helping businesses accelerate their digital transformation
          journey with confidence and security.
        </p>
        <p>
          Our expertise spans across Microsoft Azure, Amazon Web Services (AWS),
          and Google Cloud Platform (GCP) — empowering organizations to leverage
          the power of the cloud for innovation, efficiency, and growth.
        </p>
        <p>We deliver end-to-end cloud solutions, including:</p>
        <ul>
          <li>Cloud migration &amp; modernization</li>
          <li>Application transformation</li>
          <li>Microsoft 365 enablement</li>
          <li>Database management</li>
          <li>DevOps automation</li>
          <li>Disaster recovery planning</li>
        </ul>
        <p>
          Our certified cloud professionals design and manage secure, scalable,
          and cost-efficient environments tailored to each customer’s goals. By
          combining automation, AI, and DevOps practices, we help organizations
          modernize legacy systems, enhance productivity, and ensure business
          continuity.
        </p>
      </section>

      <section className="section">
        <h2>Vision</h2>
        <p>
          To be a global leader in cloud transformation and managed services,
          enabling organizations to innovate faster, scale efficiently, and
          operate securely in the digital era.
        </p>
        <h2>Mission</h2>
        <p>
          To simplify and accelerate cloud adoption through cutting-edge
          solutions, automation, and continuous optimization. We deliver
          measurable business value through secure, compliant, and sustainable
          cloud strategies.
        </p>
      </section>

      <section className="section">
        <h2>Core Values</h2>
        <ul>
          <li>Customer Success – Driving long-term success with innovative cloud strategies.</li>
          <li>Integrity – Transparency, trust, and accountability.</li>
          <li>Innovation – Adopting emerging technologies to deliver advanced solutions.</li>
          <li>Excellence – Continuous learning, improvement, and automation.</li>
          <li>Collaboration – Partnering with clients and cloud providers to deliver impactful results.</li>
        </ul>
      </section>

      <section className="section highlight">
        <h2>Why Choose Us</h2>
        <ul className="grid">
          <li>
            <span className="bullet-icon">☁️</span>
            <span>Multi-cloud expertise: Azure, AWS, GCP</span>
          </li>
          <li>
            <span className="bullet-icon">🛡️</span>
            <span>Certified cloud architects &amp; security specialists</span>
          </li>
          <li>
            <span className="bullet-icon">🚀</span>
            <span>Proven migration &amp; modernization methodologies</span>
          </li>
          <li>
            <span className="bullet-icon">🏗️</span>
            <span>Application modernization excellence</span>
          </li>
          <li>
            <span className="bullet-icon">💼</span>
            <span>Microsoft 365 expertise &amp; licensing</span>
          </li>
          <li>
            <span className="bullet-icon">🗄️</span>
            <span>Database optimization</span>
          </li>
          <li>
            <span className="bullet-icon">⚙️</span>
            <span>DevOps-driven delivery</span>
          </li>
          <li>
            <span className="bullet-icon">🧬</span>
            <span>Disaster recovery strategies</span>
          </li>
          <li>
            <span className="bullet-icon">📊</span>
            <span>Cost optimization &amp; governance</span>
          </li>
          <li>
            <span className="bullet-icon">📞</span>
            <span>24/7 managed services &amp; proactive support</span>
          </li>
          <li>
            <span className="bullet-icon">🤖</span>
            <span>Innovation, automation &amp; future-readiness</span>
          </li>
        </ul>
      </section>

      <section className="section cta">
        <h2>Partner With Us</h2>
        <p>
          We are your strategic cloud transformation partner — helping you
          modernize applications, optimize infrastructure, and ensure business
          continuity.
        </p>
      </section>
    </div>
  );
}

export default Home;
