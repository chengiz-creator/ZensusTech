import React from 'react';

const serviceGroups = [
  {
    title: 'Cloud & Infrastructure',
    items: [
      {
        icon: '☁️',
        name: 'Cloud Migration & Modernization',
        description:
          'Seamless migration with minimal disruption, including re-platforming and re-architecting with cloud-native services.',
      },
      {
        icon: '🛰️',
        name: 'Azure Infrastructure Management',
        description:
          'End-to-end Azure provisioning, configuration, monitoring, optimization, and performance continuity.',
      },
      {
        icon: '🧩',
        name: 'Multi-Cloud & Hybrid Cloud',
        description:
          'Interoperable, governed environments across Azure, AWS, and GCP with hybrid connectivity.',
      },
    ],
  },
  {
    title: 'Security, Operations & DevOps',
    items: [
      {
        icon: '🛡️',
        name: 'Security, Compliance & Cost Optimization',
        description:
          'Cloud security controls, compliance frameworks, and continuous cost optimization to reduce unnecessary spend.',
      },
      {
        icon: '🤖',
        name: 'Managed Services & Automation',
        description:
          '24/7 managed cloud operations with AI-driven automation and proactive incident prevention.',
      },
      {
        icon: '⚙️',
        name: 'DevOps Services',
        description:
          'Automation, CI/CD pipelines, and reliable release cycles to accelerate secure application delivery.',
      },
      {
        icon: '🌀',
        name: 'Disaster Recovery & Business Continuity',
        description:
          'Resilient DR architectures and runbooks for uninterrupted business operations.',
      },
    ],
  },
  {
    title: 'Applications, Data & Productivity',
    items: [
      {
        icon: '🚀',
        name: 'Application Modernization',
        description:
          'Re-architecting, re-platforming, and refactoring into cloud-native microservices, containers, and serverless.',
      },
      {
        icon: '🧮',
        name: 'Database Services',
        description:
          'Design, deployment, management, and performance tuning for SQL, NoSQL, and cloud databases.',
      },
      {
        icon: '💼',
        name: 'Microsoft 365 Solutions',
        description:
          'End-to-end Microsoft 365 deployment, security, and adoption for a modern, productive workforce.',
      },
      {
        icon: '📜',
        name: 'Microsoft 365 Licensing',
        description:
          'License consultation, procurement, and lifecycle management for compliance and cost efficiency.',
      },
    ],
  },
];

function Services() {
  return (
    <div className="page">
      <section className="section">
        <h1>Services</h1>
        <p>
          ZensusTech provides end-to-end cloud transformation and managed services across
          infrastructure, applications, security, and productivity.
        </p>
      </section>

      {serviceGroups.map((group) => (
        <section key={group.title} className="section services-section">
          <h2>{group.title}</h2>
          <div className="services-grid">
            {group.items.map((item) => (
              <article key={item.name} className="service-card">
                <div className="service-icon">{item.icon}</div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default Services;
