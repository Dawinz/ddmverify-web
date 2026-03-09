export default function PrivacyPolicyPage() {
  return (
    <div className="container-shell py-10 sm:py-14 lg:py-16 max-w-3xl space-y-8">
      <header className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
          Privacy Policy
        </h1>
        <p className="text-sm text-slate-400">
          This Privacy Policy explains how Qwanum Technologies (&quot;Qwanum&quot;, &quot;we&quot;, &quot;us&quot;
          or &quot;our&quot;) collects, uses and protects personal information in connection with the DDM Verify
          platform and related websites, including ddmverify.com and admin.ddmverify.com (together, the
          &quot;Services&quot;).
        </p>
        <p className="text-[11px] text-slate-500">
          Last updated: {new Date().getFullYear()}
        </p>
      </header>

      <section className="space-y-2 text-sm text-slate-300">
        <h2 className="text-lg font-semibold text-slate-50">1. Controller</h2>
        <p>
          For the purposes of applicable data protection laws, Qwanum Technologies is the controller of personal
          information processed in connection with the operation of DDM Verify, except where we act as a processor
          on behalf of our customers who use the platform to run their own verification workflows.
        </p>
      </section>

      <section className="space-y-2 text-sm text-slate-300">
        <h2 className="text-lg font-semibold text-slate-50">2. Information we collect</h2>
        <p>Depending on how you interact with the Services, we may collect:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            <span className="font-medium">Account and profile data</span>, such as name, email address, role,
            organisation and authentication credentials for admin users.
          </li>
          <li>
            <span className="font-medium">Verification data</span>, provided by our customers to support their
            verification processes, which may include identity documents (for example, passports or national IDs),
            supporting documents, and data fields needed to complete checks.
          </li>
          <li>
            <span className="font-medium">Usage and log data</span>, including activity events within the admin
            console, audit trails, device information, IP address, browser type and timestamps.
          </li>
          <li>
            <span className="font-medium">Support and communication data</span>, such as the content of enquiries you
            send to us and related contact details.
          </li>
        </ul>
        <p>
          Where we process verification data, we generally do so on behalf of our customers and in accordance with
          their instructions and internal policies.
        </p>
      </section>

      <section className="space-y-2 text-sm text-slate-300">
        <h2 className="text-lg font-semibold text-slate-50">3. How we use information</h2>
        <p>We use personal information, as appropriate, to:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Provide, operate and maintain the DDM Verify platform and related services.</li>
          <li>Authenticate and authorise admin and operational users.</li>
          <li>
            Enable customers to configure and run verification workflows, queues and decisions in line with their
            internal policies.
          </li>
          <li>
            Maintain security, prevent fraud and abuse, and generate audit logs of access and actions in the platform.
          </li>
          <li>Respond to enquiries, provide customer support and improve our Services.</li>
          <li>Meet legal, regulatory and contractual obligations.</li>
        </ul>
      </section>

      <section className="space-y-2 text-sm text-slate-300">
        <h2 className="text-lg font-semibold text-slate-50">4. Legal bases</h2>
        <p>
          Where required by law (for example under GDPR), we rely on one or more of the following legal bases to
          process personal information:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Performance of a contract with our customers and users of the Services.</li>
          <li>Compliance with legal obligations, including record‑keeping and reporting duties.</li>
          <li>
            Our legitimate interests in operating, securing and improving DDM Verify, provided those interests are not
            overridden by your rights and interests.
          </li>
          <li>Your consent, where we rely on it for specific optional features.</li>
        </ul>
      </section>

      <section className="space-y-2 text-sm text-slate-300">
        <h2 className="text-lg font-semibold text-slate-50">5. Sharing and international transfers</h2>
        <p>
          We may share personal information with trusted service providers who help us host, operate and support the
          Services (for example cloud hosting, logging and email providers). These providers are bound by contractual
          obligations to protect the information and only process it on our instructions.
        </p>
        <p>
          Where data is transferred across borders, we take appropriate measures to protect it in line with applicable
          laws, such as using standard contractual clauses or other recognised safeguards.
        </p>
      </section>

      <section className="space-y-2 text-sm text-slate-300">
        <h2 className="text-lg font-semibold text-slate-50">6. Retention</h2>
        <p>
          We retain personal information for as long as necessary to fulfil the purposes outlined in this Privacy
          Policy, including to meet legal, accounting or reporting requirements and to support customer audit needs.
          Our customers may define their own retention rules for verification records inside DDM Verify; in those
          cases, we retain data in accordance with their configuration and instructions.
        </p>
      </section>

      <section className="space-y-2 text-sm text-slate-300">
        <h2 className="text-lg font-semibold text-slate-50">7. Your rights</h2>
        <p>
          Depending on your location and applicable law, you may have rights such as access, rectification, erasure,
          restriction, objection, and data portability in relation to your personal information.
        </p>
        <p>
          If we process your information on behalf of a customer (for example, as part of a verification workflow),
          we may direct your request to that customer, as they are typically the primary controller of that data.
        </p>
      </section>

      <section className="space-y-2 text-sm text-slate-300">
        <h2 className="text-lg font-semibold text-slate-50">8. Security</h2>
        <p>
          We implement technical and organisational measures designed to protect personal information, including
          encrypted transport, access controls, role‑based permissions and audit logging for sensitive operations in
          the admin console. No system can be guaranteed to be 100% secure, but we strive to maintain a level of
          security appropriate to the risk.
        </p>
      </section>

      <section className="space-y-2 text-sm text-slate-300">
        <h2 className="text-lg font-semibold text-slate-50">9. Third‑party links</h2>
        <p>
          The Services may contain links to third‑party websites or services. This Privacy Policy does not cover how
          those third parties process personal data. We encourage you to review the privacy notices of any third‑party
          services you use.
        </p>
      </section>

      <section className="space-y-2 text-sm text-slate-300">
        <h2 className="text-lg font-semibold text-slate-50">10. Changes to this policy</h2>
        <p>
          We may update this Privacy Policy from time to time. When we do, we will revise the &quot;Last updated&quot;
          date at the top of this page. Material changes may also be communicated through the Services or by other
          appropriate means.
        </p>
      </section>

      <section className="space-y-2 text-sm text-slate-300">
        <h2 className="text-lg font-semibold text-slate-50">11. Contact</h2>
        <p>
          If you have questions about this Privacy Policy or how we handle personal information, please contact Qwanum
          Technologies using the contact details provided to you as part of your onboarding, or via the primary contact
          channel listed on this website.
        </p>
      </section>
    </div>
  );
}

