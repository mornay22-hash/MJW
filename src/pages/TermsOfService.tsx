import LegalPageLayout from "@/components/LegalPageLayout";

const CONTACT_BLOCK = (
  <div className="space-y-2">
    <p>For any legal or operational enquiries, contact us at <a href="mailto:info@mjwgroup.co.za" className="text-teal underline underline-offset-2">info@mjwgroup.co.za</a>.</p>
  </div>
);

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    content: (
      <p>By accessing, browsing, registering for, trialling, subscribing to, or using any MJW Group platform — including any website, application, dashboard, portal, tool, or hosted service operated by MJW Business Solutions t/a MJW Group — you agree to be bound by these Terms of Service. If you do not agree with any provision of these Terms, you must not access or use the platform.</p>
    ),
  },
  {
    id: "definitions",
    title: "Definitions",
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li><span className="text-foreground font-medium">"Platform"</span> means any website, application, dashboard, portal, tool, hosted service, beta environment, or digital product operated by MJW Business Solutions t/a MJW Group, whether current or future, including but not limited to Vaulta, Obstrata, Ledgera, Vectra, Braaia, Sitemarkа, Budgeta, and the main MJW Group website.</li>
        <li><span className="text-foreground font-medium">"User"</span> means any individual, household, organisation, business, institution, or entity that accesses, registers for, subscribes to, or uses any Platform.</li>
        <li><span className="text-foreground font-medium">"Account"</span> means any registered user profile, login, subscription, or authenticated session created on or through a Platform.</li>
        <li><span className="text-foreground font-medium">"Content"</span> means any information, data, text, files, images, documents, records, reports, workflows, submissions, uploads, or other material submitted, uploaded, created, generated, or stored on or through a Platform.</li>
        <li><span className="text-foreground font-medium">"Applicable Law"</span> means the laws, regulations, and statutory instruments of the Republic of South Africa, including the Protection of Personal Information Act (POPIA), the Electronic Communications and Transactions Act (ECTA), and the Consumer Protection Act (CPA), as amended from time to time.</li>
      </ul>
    ),
  },
  {
    id: "eligibility",
    title: "Eligibility and Authority",
    content: (
      <p>Users must have the legal capacity to enter into binding agreements. Where a user accesses a Platform on behalf of a business, household, institution, organisation, family group, or other entity, the user represents and warrants that they have the authority to bind that entity to these Terms. If the user does not have such authority, the user accepts personal liability for compliance with these Terms.</p>
    ),
  },
  {
    id: "electronic-acceptance",
    title: "Electronic Acceptance",
    content: (
      <p>Electronic acceptance — including click acceptance, account creation, activation, subscription, trial registration, and continued use of a Platform after presentation of these Terms — may constitute binding acceptance of these Terms in accordance with the Electronic Communications and Transactions Act (ECTA) and applicable law.</p>
    ),
  },
  {
    id: "accounts",
    title: "Accounts and Security",
    content: (
      <>
        <p>Users are responsible for providing accurate, complete, and current information when creating an Account. Users must safeguard their login credentials and must not share access with unauthorised individuals. Users are responsible for all activity that occurs under their Account.</p>
        <p>MJW Business Solutions t/a MJW Group reserves the right to request verification of identity or authority at any time and to suspend or restrict access where verification is not provided.</p>
      </>
    ),
  },
  {
    id: "subscriptions",
    title: "Subscription / Trial / Paid Services",
    content: (
      <p>Services may be offered on a free, trial, beta, invite-only, subscription, usage-based, quoted, or custom-priced basis. Pricing, billing terms, entitlements, limitations, and renewal conditions may appear on relevant product pages, invoices, quotes, order forms, or signup flows. MJW Business Solutions t/a MJW Group reserves the right to introduce, modify, or withdraw pricing structures at any time. Where a service transitions from free or trial to paid, users will be notified in advance where practicable.</p>
    ),
  },
  {
    id: "fair-use",
    title: "Fair and Lawful Use",
    content: (
      <>
        <p>Users agree not to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Use any Platform for unlawful, fraudulent, malicious, or harmful purposes</li>
          <li>Upload, transmit, or distribute malware, viruses, or other harmful code</li>
          <li>Attempt to gain unauthorised access to any system, network, or account</li>
          <li>Scrape, harvest, or systematically extract data without written permission</li>
          <li>Impersonate any person, entity, or MJW Group representative</li>
          <li>Disrupt, overload, or interfere with the normal operation of any Platform</li>
          <li>Breach the privacy or data protection rights of any individual</li>
          <li>Infringe the intellectual property rights of MJW Business Solutions t/a MJW Group or any third party</li>
          <li>Misuse any Platform in a manner that brings MJW Group into disrepute</li>
        </ul>
      </>
    ),
  },
  {
    id: "user-content",
    title: "User Content and Permissions",
    content: (
      <p>Users retain all rights, title, and interest in their own Content. By submitting, uploading, or storing Content on a Platform, users grant MJW Business Solutions t/a MJW Group a limited, non-exclusive, royalty-free licence to host, store, process, display, transmit, secure, back up, support, and operate the Platform in connection with the services provided. This licence does not transfer ownership of Content and exists solely to enable MJW Business Solutions t/a MJW Group to deliver the services.</p>
    ),
  },
  {
    id: "sensitive-data",
    title: "Sensitive / Third-Party / Regulated Data",
    content: (
      <p>Users are solely responsible for ensuring they have lawful authority, mandate, consent, or legal basis where they upload, manage, store, process, or share personal information, health-related information, children's data, family data, financial records, tenant records, customer data, employee records, or other regulated or confidential information through any Platform. MJW Business Solutions t/a MJW Group does not verify the lawfulness of user-submitted data and relies on users to comply with applicable data protection and privacy laws.</p>
    ),
  },
  {
    id: "outputs",
    title: "Outputs and Automation",
    content: (
      <p>Analytics, AI outputs, summaries, reports, alerts, reminders, extracted information, dashboards, calculations, recommendations, and other system outputs are generated based on user data and system logic. Such outputs are provided as informational tools and require independent validation before reliance. MJW Business Solutions t/a MJW Group does not warrant the accuracy, completeness, or fitness for purpose of automated outputs and accepts no liability for decisions made on the basis of such outputs.</p>
    ),
  },
  {
    id: "availability",
    title: "Availability / Updates / Support",
    content: (
      <p>Platforms may be updated, patched, modified, suspended, redesigned, migrated, or maintained from time to time. MJW Business Solutions t/a MJW Group will use reasonable efforts to minimise disruption but does not guarantee uninterrupted access. Scheduled maintenance, emergency fixes, infrastructure changes, and feature updates may result in temporary unavailability. Support may be provided at the discretion of MJW Business Solutions t/a MJW Group and may vary by product, plan, or access level.</p>
    ),
  },
  {
    id: "suspension",
    title: "Suspension / Restriction / Termination",
    content: (
      <>
        <p>MJW Business Solutions t/a MJW Group may suspend, restrict, or terminate access to any Platform or Account at its discretion where:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>A user breaches these Terms or any applicable policy</li>
          <li>A security risk, vulnerability, or threat is identified</li>
          <li>A legal or regulatory obligation requires restriction</li>
          <li>Identity or authority verification fails or is not provided</li>
          <li>Non-payment occurs in relation to a paid service</li>
          <li>Misuse, abuse, or harmful activity is detected or suspected</li>
        </ul>
        <p>MJW Business Solutions t/a MJW Group will use reasonable efforts to notify affected users where practicable, except where immediate action is necessary to protect the Platform, other users, or third parties.</p>
      </>
    ),
  },
  {
    id: "ip-restrictions",
    title: "Intellectual Property Restrictions",
    content: (
      <>
        <p>Users may not, without the prior written permission of MJW Business Solutions t/a MJW Group:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Reverse engineer, decompile, or disassemble any Platform or its components</li>
          <li>Mirror, copy, or replicate platform logic, workflows, or features</li>
          <li>Remove, alter, or obscure proprietary notices, branding, or attributions</li>
          <li>Resell, sublicense, or redistribute access to any Platform</li>
          <li>Create derivative works based on any Platform without authorisation</li>
        </ul>
      </>
    ),
  },
  {
    id: "beta",
    title: "Beta Features",
    content: (
      <p>Beta, pilot, preview, test, or experimental features may be made available from time to time. Such features are provided on an as-is basis, may contain errors or limitations, and may be changed, withdrawn, or discontinued at any time without notice. Use of beta features is at the user's own risk. MJW Business Solutions t/a MJW Group accepts no liability for any loss, damage, or disruption arising from the use of beta features.</p>
    ),
  },
  {
    id: "third-party-tools",
    title: "Third-Party Tools",
    content: (
      <p>MJW Business Solutions t/a MJW Group is not responsible for the performance, availability, security, data practices, or policy changes of external third-party providers, including but not limited to hosting services, cloud infrastructure, payment processors, AI engines, analytics platforms, communication tools, and integration partners. Where Platform functionality depends on third-party services, disruptions or changes to those services may affect Platform availability or features. MJW Business Solutions t/a MJW Group will use reasonable efforts to mitigate such impacts where possible.</p>
    ),
  },
  {
    id: "warranties",
    title: "Warranties Disclaimer",
    content: (
      <p>To the fullest extent permitted by applicable law, all Platforms are made available on an "as-is" and "as-available" basis. MJW Business Solutions t/a MJW Group does not make any representations or warranties, whether express, implied, statutory, or otherwise, including but not limited to warranties of merchantability, fitness for a particular purpose, title, or non-infringement. MJW Business Solutions t/a MJW Group does not warrant that any Platform will be uninterrupted, error-free, secure, or free from viruses or harmful components.</p>
    ),
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    content: (
      <p>To the fullest extent permitted by applicable law, MJW Business Solutions t/a MJW Group, its directors, employees, agents, contractors, and affiliates shall not be liable for any indirect, consequential, incidental, special, punitive, or exemplary damages, including but not limited to loss of revenue, profit, business, opportunity, goodwill, or data, arising from or in connection with the use of or inability to use any Platform, regardless of the cause of action or theory of liability. Nothing in these Terms excludes or limits liability that cannot lawfully be excluded or limited under applicable law.</p>
    ),
  },
  {
    id: "indemnity",
    title: "Indemnity",
    content: (
      <p>Users agree to indemnify, defend, and hold harmless MJW Business Solutions t/a MJW Group, its directors, employees, agents, and affiliates from and against any claims, demands, losses, damages, liabilities, costs, and expenses (including reasonable legal fees) arising from or in connection with the user's unlawful use of any Platform, the user's Content, the user's breach of these Terms, or the user's failure to obtain necessary permissions, authority, or consents.</p>
    ),
  },
  {
    id: "consumer-rights",
    title: "Consumer Rights",
    content: (
      <p>Nothing in these Terms is intended to exclude or limit any rights that cannot lawfully be excluded or limited under the Consumer Protection Act (CPA) or other applicable consumer protection legislation. Where any provision of these Terms conflicts with mandatory consumer rights, the applicable statutory provision shall prevail to the extent of the conflict.</p>
    ),
  },
  {
    id: "governing-law",
    title: "Governing Law",
    content: (
      <p>These Terms of Service, and any dispute arising from or in connection with them, shall be governed by and construed in accordance with the laws of the Republic of South Africa. The courts of the Republic of South Africa shall have jurisdiction in respect of any dispute arising from or in connection with these Terms.</p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    content: CONTACT_BLOCK,
  },
];

const TermsOfService = () => (
  <LegalPageLayout
    title="Terms of Service"
    subtitle="Terms governing access to and use of all MJW Group websites, applications, software products, tools, dashboards, portals, and hosted services operated by MJW Business Solutions t/a MJW Group."
    sections={sections}
  />
);

export default TermsOfService;
