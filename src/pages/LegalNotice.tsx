import LegalPageLayout from "@/components/LegalPageLayout";

const CONTACT_BLOCK = (
  <div className="space-y-2">
    <p>For any legal or operational enquiries, contact us at <a href="mailto:info@mjwgroup.co.za" className="text-teal underline underline-offset-2">info@mjwgroup.co.za</a>.</p>
  </div>
);

const sections = [
  {
    id: "identity",
    title: "Identity of Operator",
    content: (
      <p>The MJW Group website, all MJW Group applications, subdomains, dashboards, portals, software tools, hosted services, beta environments, and related digital services are operated by MJW Business Solutions t/a MJW Group, a company registered in the Republic of South Africa (Reg: 2020/924581/07).</p>
    ),
  },
  {
    id: "scope",
    title: "Scope of Application",
    content: (
      <>
        <p>This Legal Notice applies across the full MJW Group ecosystem, including but not limited to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>The main MJW Group website and all associated subdomains</li>
          <li>All current applications, including Vaulta, Obstrata, Ledgera, Vectra, Braaia, Sitemarkа, and Budgeta</li>
          <li>All future applications, portals, tools, dashboards, admin environments, beta environments, and hosted digital products published or operated by MJW Business Solutions t/a MJW Group</li>
          <li>All client portals, hosted services, and related digital infrastructure</li>
        </ul>
      </>
    ),
  },
  {
    id: "information",
    title: "Information Published on Platforms",
    content: (
      <p>Content, visuals, screenshots, dashboards, examples, templates, prompts, reports, metrics, product descriptions, commentary, outputs, articles, summaries, and other material published on MJW Group platforms are provided for general informational, operational, and commercial purposes unless expressly stated otherwise. No representation is made that such content is exhaustive, complete, or free from error.</p>
    ),
  },
  {
    id: "no-advice",
    title: "No Professional Advice",
    content: (
      <p>Nothing on any MJW Group platform constitutes legal advice, tax advice, financial advice, medical advice, healthcare advice, engineering advice, insurance advice, compliance certification, or other regulated professional advice. Users requiring professional advice should consult a suitably qualified and registered professional. No advisory, fiduciary, or professional relationship is created by the use of any MJW Group platform unless expressly agreed in writing by MJW Business Solutions t/a MJW Group.</p>
    ),
  },
  {
    id: "user-responsibility",
    title: "User Responsibility",
    content: (
      <p>Users remain solely responsible for verifying information, outputs, AI-generated text, calculations, reminders, recommendations, alerts, summaries, data extracts, workflows, reports, and records before relying on them for any decision, action, transaction, submission, or regulatory purpose. MJW Group platforms are tools designed to assist users, not to replace professional judgement, independent verification, or due diligence.</p>
    ),
  },
  {
    id: "product-purpose",
    title: "Product Purpose",
    content: (
      <p>MJW Group products are designed to support administration, information management, digital coordination, workflows, reporting, operational visibility, planning, records, dashboards, and related use cases. Real-world decisions, actions, and outcomes arising from the use of any platform remain the sole responsibility of the user. MJW Business Solutions t/a MJW Group does not guarantee specific outcomes, results, savings, efficiencies, or returns from the use of any platform.</p>
    ),
  },
  {
    id: "availability",
    title: "Availability and Changes",
    content: (
      <p>MJW Business Solutions t/a MJW Group may at any time and without prior notice update, suspend, improve, replace, repackage, withdraw, rebrand, or modify platforms, features, integrations, access methods, pricing, service structure, support arrangements, or related infrastructure. MJW Business Solutions t/a MJW Group will use reasonable efforts to communicate material changes where practicable but is not obligated to provide advance notice in all circumstances.</p>
    ),
  },
  {
    id: "third-party",
    title: "Third-Party Services",
    content: (
      <p>MJW Group platforms may depend on, connect to, or integrate with third-party providers, including but not limited to hosting providers, AI tools, analytics services, payment processors, communication tools, storage providers, mapping services, and APIs. Such third-party services may be governed by their own terms, conditions, and privacy policies. MJW Business Solutions t/a MJW Group is not responsible for the performance, availability, security, or policies of third-party services and does not endorse or warrant any third-party provider.</p>
    ),
  },
  {
    id: "ip",
    title: "Intellectual Property",
    content: (
      <p>All rights, title, and interest in the MJW Group ecosystem — including software, source code, object code, layouts, workflows, structures, branding, content, product names, logos, templates, reports, media, prompts, dashboards, documentation, and related material — belong to MJW Business Solutions t/a MJW Group or its licensors and are protected by applicable intellectual property laws. No licence, right, or interest in any intellectual property is granted to users except as expressly provided in the applicable Terms of Service.</p>
    ),
  },
  {
    id: "permitted-use",
    title: "Permitted Use",
    content: (
      <>
        <p>Users may use MJW Group services only for lawful purposes and in accordance with the applicable Terms of Service. Users may not:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Misuse, exploit, disrupt, or interfere with any platform or its infrastructure</li>
          <li>Reverse engineer, decompile, disassemble, or attempt to derive the source code of any platform</li>
          <li>Scrape, harvest, or systematically extract data from any platform</li>
          <li>Republish, redistribute, or resell platform content or features without written permission</li>
          <li>Use any platform for unlawful, fraudulent, abusive, or harmful purposes</li>
        </ul>
      </>
    ),
  },
  {
    id: "security",
    title: "Security",
    content: (
      <p>MJW Business Solutions t/a MJW Group employs reasonable technical and organisational security measures to protect the integrity, confidentiality, and availability of its platforms and data. However, no website, application, transmission channel, or system can be guaranteed absolutely secure. Users are responsible for protecting their own credentials, devices, and access methods. MJW Business Solutions t/a MJW Group shall not be liable for unauthorised access resulting from user negligence or failure to safeguard credentials.</p>
    ),
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    content: (
      <p>To the fullest extent permitted by applicable law, MJW Business Solutions t/a MJW Group, its directors, employees, agents, contractors, and affiliates shall not be liable for any indirect, consequential, incidental, special, punitive, or exemplary damages, including but not limited to loss of business, revenue, profit, data, goodwill, or opportunity, arising from the use of or inability to use any MJW Group service, downtime, inaccurate inputs, reliance on outputs, third-party failures, or any cause beyond the reasonable control of MJW Business Solutions t/a MJW Group, subject to applicable law. Nothing in this clause excludes or limits liability that cannot lawfully be excluded or limited.</p>
    ),
  },
  {
    id: "governing-law",
    title: "Governing Law",
    content: (
      <p>This Legal Notice, and any dispute arising from or in connection with it, shall be governed by and construed in accordance with the laws of the Republic of South Africa. The courts of the Republic of South Africa shall have jurisdiction in respect of any dispute arising from or in connection with this Legal Notice.</p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    content: CONTACT_BLOCK,
  },
];

const LegalNotice = () => (
  <LegalPageLayout
    title="Legal Notice"
    subtitle="Legal information applicable to MJW Business Solutions t/a MJW Group and all MJW Group websites, applications, tools, dashboards, hosted services, and digital platforms."
    sections={sections}
  />
);

export default LegalNotice;
