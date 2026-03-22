import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy — Xerus',
  description:
    'How Xerus handles your data. You own your data, we protect it, we never sell it.',
};

export default function PrivacyPolicy() {
  const sectionHeading =
    'font-heading text-heading-card text-text-primary mb-4';
  const prose =
    'font-body text-body text-text-primary leading-relaxed';
  const list =
    'list-disc pl-6 mt-3 space-y-2 font-body text-body text-text-primary leading-relaxed';
  const link =
    'text-accent hover:text-accent-hover underline underline-offset-2 transition-colors';

  return (
    <main className="min-h-screen bg-cream-base">
      {/* Header band */}
      <div className="pt-32 pb-12 px-6">
        <div className="max-w-[720px] mx-auto">
          <p className="font-body text-label uppercase tracking-widest text-text-muted mb-4">
            Legal
          </p>
          <h1 className="font-heading text-heading-section text-text-primary">
            Privacy Policy
          </h1>
          <p className="font-body text-subheading text-text-secondary mt-3">
            Effective date: March 14, 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-24">
        <div className="max-w-[720px] mx-auto space-y-12">
          {/* Philosophy */}
          <section>
            <h2 className={sectionHeading}>Our Commitment</h2>
            <p className={prose}>
              Xerus (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) builds
              an AI virtual office where you hire AI agents, give them tools,
              and assign them tasks. Your data powers your workspace — not
              ours.
            </p>
            <ul className={list}>
              <li>
                <strong>You own your data.</strong> Everything you create,
                upload, or generate through your agents belongs to you.
              </li>
              <li>
                <strong>We never sell your data.</strong> Not to advertisers,
                not to data brokers, not to anyone.
              </li>
              <li>
                <strong>We never train AI models on your data.</strong> Your
                workspace content is used solely to operate your agents — it
                is never fed into model training pipelines.
              </li>
              <li>
                <strong>You can delete everything, anytime.</strong> When you
                say delete, we mean it. Your data is permanently removed.
              </li>
            </ul>
          </section>

          {/* What We Collect */}
          <section>
            <h2 className={sectionHeading}>1. Information We Collect</h2>
            <p className={prose}>
              We collect only what is necessary to provide the service.
            </p>

            <p className={`${prose} mt-6 font-semibold`}>Account Information</p>
            <p className={prose}>
              When you sign up, we collect your name, email address, and
              profile picture from your Google account. We use this to
              identify you and manage your workspace.
            </p>

            <p className={`${prose} mt-6 font-semibold`}>Workspace Data</p>
            <p className={prose}>
              Content you create, upload, or generate through your AI
              agents — documents, spreadsheets, reports, files, and
              conversations. This is your data. We process it only to
              operate your workspace.
            </p>

            <p className={`${prose} mt-6 font-semibold`}>Connected Service Credentials</p>
            <p className={prose}>
              When you connect third-party services (Google Workspace, Slack,
              etc.), we store encrypted authentication tokens so your agents
              can act on your behalf. We never store your passwords.
            </p>

            <p className={`${prose} mt-6 font-semibold`}>Usage Information</p>
            <p className={prose}>
              We collect anonymized, aggregate data about how the platform is
              used — such as feature adoption and page views — to improve the
              product. This data cannot be traced back to individual users or
              workspace content.
            </p>
          </section>

          {/* How We Use */}
          <section>
            <h2 className={sectionHeading}>2. How We Use Your Data</h2>
            <ul className={list}>
              <li>
                <strong>To operate your workspace</strong> — executing agent
                tasks, storing your files, syncing connected services
              </li>
              <li>
                <strong>To process AI tasks</strong> — sending your
                instructions to AI providers to generate agent responses and
                complete assignments
              </li>
              <li>
                <strong>To improve the product</strong> — using aggregate,
                anonymized patterns (never individual content)
              </li>
              <li>
                <strong>To communicate with you</strong> — account updates,
                security alerts, product announcements (you can opt out of
                non-essential emails)
              </li>
            </ul>
          </section>

          {/* Google Workspace */}
          <section>
            <h2 className={sectionHeading}>
              3. Google Workspace Integration
            </h2>
            <p className={prose}>
              When you connect Google Workspace, your AI agents may access the
              following services on your behalf:
            </p>
            <ul className={list}>
              <li>
                <strong>Google Drive</strong> — create, read, and organize
                files
              </li>
              <li>
                <strong>Google Sheets</strong> — create and update
                spreadsheets
              </li>
              <li>
                <strong>Google Docs</strong> — create and edit documents
              </li>
              <li>
                <strong>Google Calendar</strong> — read and create events
              </li>
              <li>
                <strong>Gmail</strong> — read emails to complete agent tasks
                (read-only unless you explicitly grant write access)
              </li>
            </ul>
            <p className={`${prose} mt-4`}>
              Your Google data is used exclusively to perform tasks you assign
              to your AI agents. We do not sell, share, or use your Google
              data for advertising or analytics. You can revoke access at any
              time from your{' '}
              <a
                href="https://myaccount.google.com/permissions"
                className={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Account permissions
              </a>
              .
            </p>
          </section>

          {/* AI Processing */}
          <section>
            <h2 className={sectionHeading}>4. AI Processing</h2>
            <p className={prose}>
              To power your AI agents, we send your instructions and relevant
              workspace context to third-party AI providers. These providers
              are bound by enterprise contracts that prohibit them from using
              your data to train, fine-tune, or improve their models. Your
              data is processed in real-time and is not retained by AI
              providers after the response is generated.
            </p>
          </section>

          {/* Security */}
          <section>
            <h2 className={sectionHeading}>5. Data Security</h2>
            <p className={prose}>
              We take the security of your data seriously.
            </p>
            <ul className={list}>
              <li>
                All data is encrypted in transit and at rest using
                industry-standard encryption
              </li>
              <li>
                Authentication tokens for connected services are encrypted
                before storage and can only be decrypted by the
                service that needs them
              </li>
              <li>
                Each workspace runs in an isolated environment — your
                agents cannot access other users&apos; workspaces
              </li>
              <li>
                We conduct regular security reviews and follow industry best
                practices for access control, logging, and incident response
              </li>
              <li>We never store your Google password or any third-party passwords</li>
            </ul>
          </section>

          {/* Data Sharing */}
          <section>
            <h2 className={sectionHeading}>6. Data Sharing</h2>
            <p className={prose}>
              We do not sell your data. We share information only when
              necessary to operate the service:
            </p>
            <ul className={list}>
              <li>
                <strong>AI providers</strong> — to process agent tasks under
                strict enterprise contracts (no training, no retention)
              </li>
              <li>
                <strong>Infrastructure providers</strong> — to host and
                operate the platform under confidentiality agreements
              </li>
              <li>
                <strong>Legal obligations</strong> — only when required by
                valid court order or applicable law
              </li>
            </ul>
            <p className={`${prose} mt-4`}>
              In all cases, shared data is minimized and protected by
              contractual safeguards. We never share your workspace content
              for advertising, marketing, or analytics purposes.
            </p>
          </section>

          {/* Retention & Deletion */}
          <section>
            <h2 className={sectionHeading}>7. Data Retention &amp; Deletion</h2>
            <p className={prose}>
              We retain your data only as long as your account is active or as
              needed to provide the service. When you delete your account:
            </p>
            <ul className={list}>
              <li>
                All workspace data, agent configurations, and connected
                service tokens are permanently deleted within 30 days
              </li>
              <li>Backups containing your data are purged on the same schedule</li>
              <li>
                Anonymized, aggregate analytics data (which cannot identify
                you) may be retained
              </li>
            </ul>
            <p className={`${prose} mt-4`}>
              You can also delete individual files, agents, or connected
              service integrations at any time without closing your account.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className={sectionHeading}>8. Your Rights</h2>
            <p className={prose}>You have full control over your data:</p>
            <ul className={list}>
              <li>
                <strong>Access</strong> — request a complete copy of your data
                at any time
              </li>
              <li>
                <strong>Portability</strong> — export your workspace data in
                standard formats
              </li>
              <li>
                <strong>Correction</strong> — update or correct any personal
                information
              </li>
              <li>
                <strong>Deletion</strong> — permanently delete your account
                and all associated data
              </li>
              <li>
                <strong>Revocation</strong> — disconnect any third-party
                service integration at any time
              </li>
              <li>
                <strong>Opt-out</strong> — decline non-essential
                communications
              </li>
            </ul>
            <p className={`${prose} mt-4`}>
              To exercise any of these rights, email{' '}
              <a href="mailto:privacy@xerus.ai" className={link}>
                privacy@xerus.ai
              </a>{' '}
              or use your in-app account settings.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className={sectionHeading}>9. Cookies</h2>
            <p className={prose}>
              We use essential cookies to keep you signed in and maintain your
              session. We may use anonymized analytics cookies to understand
              aggregate usage patterns. We do not use advertising or tracking
              cookies. You can manage cookie preferences in your browser
              settings.
            </p>
          </section>

          {/* Children */}
          <section>
            <h2 className={sectionHeading}>10. Children&apos;s Privacy</h2>
            <p className={prose}>
              Xerus is designed for business professionals and is not intended
              for individuals under 18 years of age. We do not knowingly
              collect personal data from minors. If you believe a
              minor&apos;s data was submitted in error, contact us at{' '}
              <a href="mailto:privacy@xerus.ai" className={link}>
                privacy@xerus.ai
              </a>{' '}
              for prompt deletion.
            </p>
          </section>

          {/* International */}
          <section>
            <h2 className={sectionHeading}>11. International Data Transfers</h2>
            <p className={prose}>
              Xerus is headquartered in the United States. If you access our
              services from outside the U.S., your data may be transferred to
              and processed in the U.S. or other jurisdictions where our
              infrastructure providers operate. We ensure appropriate
              safeguards are in place to protect your data regardless of
              where it is processed.
            </p>
          </section>

          {/* Changes */}
          <section>
            <h2 className={sectionHeading}>12. Changes to This Policy</h2>
            <p className={prose}>
              We may update this policy from time to time. If we make
              material changes, we will notify you by email or through the
              platform before the changes take effect. Your continued use of
              Xerus after the effective date constitutes acceptance of the
              updated policy.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className={sectionHeading}>13. Contact</h2>
            <p className={prose}>
              Questions or concerns about this policy? We are here to help.
            </p>
            <p className={`${prose} mt-3`}>
              Email:{' '}
              <a href="mailto:privacy@xerus.ai" className={link}>
                privacy@xerus.ai
              </a>
            </p>
            <p className={`${prose} mt-1`}>
              Website:{' '}
              <a href="https://xerus.ai" className={link}>
                xerus.ai
              </a>
            </p>
          </section>

          {/* Divider + back link */}
          <div className="pt-8 border-t border-cream-active">
            <Link
              href="/"
              className="font-body text-body-small text-text-secondary hover:text-text-primary transition-colors"
            >
              &larr; Back to home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
