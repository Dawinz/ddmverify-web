export default function TermsOfServicePage() {
  return (
    <div className="container-shell py-10 sm:py-14 lg:py-16 max-w-3xl space-y-8">
      <header className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
          Terms of Service
        </h1>
        <p className="text-sm text-slate-400">
          These Terms of Service (&quot;Terms&quot;) govern the use of the DDM Verify platform and related websites,
          including ddmverify.com and admin.ddmverify.com (the &quot;Services&quot;), operated by Qwanum Technologies
          (&quot;Qwanum&quot;, &quot;we&quot;, &quot;us&quot; or &quot;our&quot;).
        </p>
        <p className="text-[11px] text-slate-500">
          Last updated: {new Date().getFullYear()}
        </p>
      </header>

      <section className="space-y-2 text-sm text-slate-300">
        <h2 className="text-lg font-semibold text-slate-50">1. Acceptance of terms</h2>
        <p>
          By accessing or using the Services, you agree to be bound by these Terms. If you are using the Services on
          behalf of an organisation, you confirm that you are authorised to accept these Terms on its behalf and that
          the organisation agrees to be bound by them.
        </p>
      </section>

      <section className="space-y-2 text-sm text-slate-300">
        <h2 className="text-lg font-semibold text-slate-50">2. Services</h2>
        <p>
          DDM Verify is a verification platform that enables customers to configure and run document and data
          verification workflows, including the review of government‑issued identification documents and related
          supporting materials. The specific features and service levels available to you are defined in the agreement
          between Qwanum and your organisation.
        </p>
      </section>

      <section className="space-y-2 text-sm text-slate-300">
        <h2 className="text-lg font-semibold text-slate-50">3. Customer responsibilities</h2>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            <span className="font-medium">Account control.</span> You are responsible for maintaining the
            confidentiality of admin credentials and for all activity that occurs under your accounts.
          </li>
          <li>
            <span className="font-medium">Lawful use.</span> You must use the Services only for lawful purposes and in
            accordance with applicable laws, internal policies and contractual commitments.
          </li>
          <li>
            <span className="font-medium">Data accuracy.</span> You are responsible for the accuracy and legality of
            the data and documents you upload or process through DDM Verify.
          </li>
        </ul>
      </section>

      <section className="space-y-2 text-sm text-slate-300">
        <h2 className="text-lg font-semibold text-slate-50">4. Prohibited use</h2>
        <p>You agree not to:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Use the Services to violate any law, regulation or rights of third parties.</li>
          <li>
            Attempt to gain unauthorised access to the Services or related systems, or disrupt or interfere with their
            normal operation.
          </li>
          <li>
            Use the Services to store or process data that you are not lawfully permitted to handle, or which your
            organisation has not approved for use with DDM Verify.
          </li>
        </ul>
      </section>

      <section className="space-y-2 text-sm text-slate-300">
        <h2 className="text-lg font-semibold text-slate-50">5. Intellectual property</h2>
        <p>
          Qwanum and its licensors retain all rights, title and interest in and to the Services, including all related
          intellectual property rights. Subject to these Terms and any applicable commercial agreement, we grant you a
          limited, non‑exclusive, non‑transferable right to access and use the Services for your internal business
          purposes.
        </p>
      </section>

      <section className="space-y-2 text-sm text-slate-300">
        <h2 className="text-lg font-semibold text-slate-50">6. Data protection</h2>
        <p>
          Our handling of personal information in connection with the Services is described in our{" "}
          <a
            href="/privacy-policy"
            className="text-brand-300 hover:text-brand-200 underline-offset-2 hover:underline"
          >
            Privacy Policy
          </a>
          . Where we process personal data on your behalf, the terms of any applicable data processing agreement
          between Qwanum and your organisation will also apply.
        </p>
      </section>

      <section className="space-y-2 text-sm text-slate-300">
        <h2 className="text-lg font-semibold text-slate-50">7. Availability and changes</h2>
        <p>
          We aim to keep the Services available and reliable, but we do not guarantee uninterrupted or error‑free
          operation. We may modify, update or discontinue features from time to time, provided that we continue to
          honour our contractual commitments to customers.
        </p>
      </section>

      <section className="space-y-2 text-sm text-slate-300">
        <h2 className="text-lg font-semibold text-slate-50">8. Disclaimers</h2>
        <p>
          The Services are provided on an &quot;as is&quot; and &quot;as available&quot; basis. To the maximum extent
          permitted by law, we disclaim all warranties, whether express, implied or statutory, including any implied
          warranties of merchantability, fitness for a particular purpose and non‑infringement.
        </p>
      </section>

      <section className="space-y-2 text-sm text-slate-300">
        <h2 className="text-lg font-semibold text-slate-50">9. Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, Qwanum and its affiliates will not be liable for any indirect,
          incidental, special, consequential or punitive damages, or for any loss of profits, revenue, data or business
          opportunities arising out of or related to your use of the Services. Our aggregate liability in connection
          with the Services will be limited to the amounts actually paid for the Services in the relevant period, as
          further specified in the applicable commercial agreement.
        </p>
      </section>

      <section className="space-y-2 text-sm text-slate-300">
        <h2 className="text-lg font-semibold text-slate-50">10. Termination</h2>
        <p>
          We may suspend or terminate access to the Services if you materially breach these Terms or any other
          agreement with us, or if we are required to do so by law or a competent authority. Upon termination, your
          right to use the Services will cease, subject to any provisions of your commercial agreement that survive
          termination.
        </p>
      </section>

      <section className="space-y-2 text-sm text-slate-300">
        <h2 className="text-lg font-semibold text-slate-50">11. Governing law</h2>
        <p>
          These Terms are intended to work alongside the governing law and jurisdiction clauses set out in the
          commercial agreement between Qwanum and your organisation. Where no such agreement exists, the governing law
          will be the law of the jurisdiction in which Qwanum primarily offers the Services.
        </p>
      </section>

      <section className="space-y-2 text-sm text-slate-300">
        <h2 className="text-lg font-semibold text-slate-50">12. Changes to these Terms</h2>
        <p>
          We may update these Terms from time to time. When we do, we will revise the &quot;Last updated&quot; date at
          the top of this page. Material changes may also be communicated through the Services or by other appropriate
          means. Your continued use of the Services after changes take effect constitutes acceptance of the updated
          Terms.
        </p>
      </section>

      <section className="space-y-2 text-sm text-slate-300">
        <h2 className="text-lg font-semibold text-slate-50">13. Contact</h2>
        <p>
          If you have questions about these Terms, please contact Qwanum Technologies using the contact details
          provided as part of your onboarding or via the primary contact channel listed on this website.
        </p>
      </section>
    </div>
  );
}

