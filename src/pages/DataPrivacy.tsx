import LegalPageLayout from "@/components/LegalPageLayout";

const CONTACT_BLOCK = (
  <div className="space-y-2">
    <p>For any data or privacy enquiries, contact us at <a href="mailto:info@mjwgroup.co.za" className="text-teal underline underline-offset-2">info@mjwgroup.co.za</a>.</p>
  </div>
);

const sections = [
  {
    id: "scope",
    title: "Scope",
    content: (
      <p>This Data & Privacy Notice applies across the main MJW Group website, all MJW Group subdomains, all current and future applications — including Vaulta, Obstrata, Ledgera, Vectra, Braaia, Sitemarkа, Budgeta, and any future app, portal, dashboard, software product, beta environment, hosted tool, or digital service — and all dashboards, portals, hosted services, and digital products operated by MJW Business Solutions t/a MJW Group.</p>
    ),
  },
  {
    id: "categories",
    title: "Categories of Information",
    content: (
      <>
        <p>The MJW Group ecosystem may process the following categories of personal and operational information:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Identity information (name, surname, ID number where applicable)</li>
          <li>Contact details (email address, telephone number, physical address)</li>
          <li>Account information (username, login credentials, profile details)</li>
          <li>Billing information (payment details, invoices, subscription records)</li>
          <li>Support records (queries, correspondence, feedback)</li>
          <li>Technical data (IP address, browser type, operating system, device identifiers)</li>
          <li>Device and usage logs (access times, feature usage, session data, navigation patterns)</li>
          <li>Uploaded files (documents, images, records, attachments)</li>
          <li>Workflow records (tasks, actions, assignments, status updates)</li>
          <li>Operational data (reports, dashboards, metrics, configuration settings)</li>
          <li>Business records (financial entries, property records, tenant data, inspection logs)</li>
          <li>Other information submitted through the platforms by users</li>
        </ul>
      </>
    ),
  },
  {
    id: "collection",
    title: "How Information Is Collected",
    content: (
      <>
        <p>Information may be collected through:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Direct user input during registration, onboarding, or account setup</li>
          <li>User submissions, uploads, and form entries</li>
          <li>Communications with MJW Group (email, support, feedback)</li>
          <li>Cookies, local storage, and session management tools</li>
          <li>Analytics and performance monitoring services</li>
          <li>Platform usage, feature interaction, and navigation patterns</li>
          <li>Administrator actions and configuration changes</li>
          <li>Integrations with third-party services</li>
          <li>System and platform logs</li>
        </ul>
      </>
    ),
  },
  {
    id: "purpose",
    title: "Purpose of Processing",
    content: (
      <>
        <p>Personal information may be processed for the following purposes:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Operating, maintaining, and improving the platforms</li>
          <li>Creating and administering user accounts</li>
          <li>Authenticating users and managing access controls</li>
          <li>Providing technical and customer support</li>
          <li>Processing subscriptions, payments, and billing</li>
          <li>Delivering requested features, services, and functionality</li>
          <li>Improving service quality, performance, and user experience</li>
          <li>Monitoring security, detecting threats, and preventing misuse</li>
          <li>Enforcing agreements, policies, and terms</li>
          <li>Complying with legal, regulatory, and statutory obligations</li>
        </ul>
      </>
    ),
  },
  {
    id: "lawful-basis",
    title: "Lawful Basis",
    content: (
      <>
        <p>The processing of personal information may rely on one or more of the following lawful bases, as applicable under the Protection of Personal Information Act (POPIA) and other relevant legislation:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><span className="text-foreground font-medium">Consent</span> — where the user has given clear and voluntary consent</li>
          <li><span className="text-foreground font-medium">Contract</span> — where processing is necessary to perform or enter into an agreement</li>
          <li><span className="text-foreground font-medium">Legal obligation</span> — where processing is required by law or regulation</li>
          <li><span className="text-foreground font-medium">Legitimate interests</span> — where processing is necessary for the legitimate interests of MJW Business Solutions t/a MJW Group, provided such interests are not overridden by the rights and interests of the data subject</li>
          <li><span className="text-foreground font-medium">Protection of legitimate interests</span> — where processing is necessary to protect the legitimate interests of the data subject or another natural person</li>
        </ul>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and Similar Technologies",
    content: (
      <p>MJW Group platforms may use cookies, local storage, session management tools, diagnostics, and analytics technologies for authentication, session persistence, user preferences, performance measurement, service quality improvement, diagnostics, and security purposes. Users may manage cookie preferences through their browser settings, though disabling certain cookies may affect platform functionality.</p>
    ),
  },
  {
    id: "sharing",
    title: "Sharing of Information",
    content: (
      <>
        <p>Personal information may be shared with the following categories of recipients where reasonably necessary and lawful:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Hosting and cloud infrastructure providers</li>
          <li>Storage and backup service providers</li>
          <li>Analytics and performance monitoring providers</li>
          <li>Payment processors and billing services</li>
          <li>Communication and notification providers</li>
          <li>Customer support tools and providers</li>
          <li>Contractors, consultants, and technical advisers</li>
          <li>Professional advisers (legal, accounting, audit)</li>
          <li>Regulators and law enforcement where required by law</li>
          <li>Integration partners where the user has enabled such integrations</li>
        </ul>
        <p>MJW Business Solutions t/a MJW Group does not sell personal information to third parties.</p>
      </>
    ),
  },
  {
    id: "cross-border",
    title: "Cross-Border Processing",
    content: (
      <p>Some service providers, infrastructure components, or integration partners may be located outside the Republic of South Africa. Where personal information is transferred to a jurisdiction outside South Africa, MJW Business Solutions t/a MJW Group takes reasonable steps to ensure that such transfers are conducted in accordance with applicable data protection legislation, including but not limited to the requirements of POPIA regarding transborder information flows.</p>
    ),
  },
  {
    id: "security",
    title: "Security Safeguards",
    content: (
      <>
        <p>MJW Business Solutions t/a MJW Group implements reasonable technical and organisational safeguards to protect personal information, including but not limited to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Access controls and authentication mechanisms</li>
          <li>Encrypted connections (TLS/SSL) for data in transit</li>
          <li>Encryption at rest for stored data where appropriate</li>
          <li>System logs and audit trails</li>
          <li>Regular backups and disaster recovery procedures</li>
          <li>Role-based permissions and least-privilege access principles</li>
          <li>Environment separation and secure deployment practices</li>
        </ul>
        <p>No system, network, or transmission method can be guaranteed to be absolutely secure. Users are encouraged to protect their own credentials and report any suspected security incidents promptly.</p>
      </>
    ),
  },
  {
    id: "retention",
    title: "Retention",
    content: (
      <p>Personal information is retained only for as long as reasonably necessary to fulfil the purposes for which it was collected, including service delivery, compliance with legal and regulatory obligations, security, backups, dispute resolution, and operational continuity. When personal information is no longer required, it will be securely deleted, anonymised, or de-identified in accordance with applicable law and internal retention policies.</p>
    ),
  },
  {
    id: "third-party-data",
    title: "User Responsibility for Uploaded Third-Party Data",
    content: (
      <p>Where users upload, submit, manage, or store information relating to other individuals through any MJW Group platform — including but not limited to tenant records, patient records, family data, employee data, customer data, or other third-party personal information — users are solely responsible for ensuring they have lawful authority, notice, consent, or mandate to process such information. MJW Business Solutions t/a MJW Group processes such information on behalf of the user and relies on the user's representations regarding lawful authority.</p>
    ),
  },
  {
    id: "data-subject-rights",
    title: "Data Subject Rights",
    content: (
      <>
        <p>Subject to applicable law, users and data subjects may have the right to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Request access to personal information held about them</li>
          <li>Request correction of inaccurate or incomplete personal information</li>
          <li>Object to the processing of personal information on reasonable grounds</li>
          <li>Request deletion of personal information where lawfully permitted</li>
          <li>Withdraw consent where consent was the basis for processing</li>
        </ul>
        <p>Requests may be submitted to <a href="mailto:Info@mjwgroup.co.za" className="text-teal underline underline-offset-2">Info@mjwgroup.co.za</a>. MJW Business Solutions t/a MJW Group will respond to valid requests within a reasonable period and in accordance with applicable law.</p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children's Information",
    content: (
      <p>MJW Business Solutions t/a MJW Group does not knowingly collect personal information from children under the age of 18, except where a specific product explicitly permits it and a lawful basis exists or an authorised responsible person (such as a parent or legal guardian) has provided consent. Where MJW Business Solutions t/a MJW Group becomes aware that children's personal information has been collected without appropriate authorisation, reasonable steps will be taken to delete such information.</p>
    ),
  },
  {
    id: "sensitive",
    title: "Sensitive / Special Personal Information",
    content: (
      <p>Users must not upload, submit, or store special or sensitive personal information — including but not limited to health information, biometric data, religious or philosophical beliefs, political opinions, trade union membership, sexual orientation, or criminal records — through any MJW Group platform without a lawful basis and proper authority. Where a specific product is designed to handle such information (for example, a health management platform), the product-specific terms and safeguards apply in addition to this notice.</p>
    ),
  },
  {
    id: "marketing",
    title: "Direct Marketing",
    content: (
      <p>MJW Business Solutions t/a MJW Group may send service-related notices, administrative communications, and operational updates as necessary for the administration and operation of the platforms. Any marketing communications will be handled in accordance with applicable law, including the provision of opt-out mechanisms where required. Users may opt out of marketing communications at any time by following the unsubscribe instructions provided or by contacting MJW Business Solutions t/a MJW Group.</p>
    ),
  },
  {
    id: "security-incidents",
    title: "Security Incidents",
    content: (
      <p>Where a personal information security incident occurs and notification is legally required, MJW Business Solutions t/a MJW Group will take reasonable steps to notify affected parties and the relevant regulatory authority in accordance with the requirements of POPIA and other applicable legislation. Notification will include, where possible, a description of the incident, the categories of information affected, and the steps being taken to address the incident.</p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this Notice",
    content: (
      <p>This Data & Privacy Notice may be updated, revised, or amended from time to time. The latest published version shall apply from its stated effective date. Material changes will be communicated where practicable. Users are encouraged to review this notice periodically to remain informed of how their personal information is handled.</p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    content: CONTACT_BLOCK,
  },
];

const DataPrivacy = () => (
  <LegalPageLayout
    title="Data & Privacy Notice"
    subtitle="How MJW Business Solutions t/a MJW Group collects, uses, stores, secures, shares, and processes personal information across the MJW Group ecosystem."
    sections={sections}
  />
);

export default DataPrivacy;
