import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service — Xerus',
  description:
    'Xerus terms of service. The rules for using our AI virtual office platform.',
};

export default function TermsOfService() {
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
            Terms of Service
          </h1>
          <p className="font-body text-subheading text-text-secondary mt-3">
            Effective date: March 14, 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-24">
        <div className="max-w-[720px] mx-auto space-y-12">
          {/* Agreement */}
          <section>
            <h2 className={sectionHeading}>1. Agreement</h2>
            <p className={prose}>
              These Terms of Service (&quot;Terms&quot;) govern your access to
              and use of Xerus (&quot;the Service&quot;), an AI virtual office
              platform operated by Xerus (&quot;we,&quot; &quot;us,&quot; or
              &quot;our&quot;). By creating an account or using the Service,
              you agree to be bound by these Terms and our{' '}
              <Link href="/privacy" className={link}>
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          {/* The Service */}
          <section>
            <h2 className={sectionHeading}>2. The Service</h2>
            <p className={prose}>
              Xerus is an AI-powered virtual office where you hire AI agents,
              equip them with tools, connect your business services, and
              assign them tasks. Agents work on your behalf — reading
              documents, writing reports, managing spreadsheets, scheduling
              meetings, and more.
            </p>
            <p className={`${prose} mt-4`}>
              The Service is currently in beta. Features, pricing, and
              availability may change as we continue development. We will
              provide reasonable notice before making material changes.
            </p>
          </section>

          {/* Account */}
          <section>
            <h2 className={sectionHeading}>3. Your Account</h2>
            <ul className={list}>
              <li>You must sign in using a Google account</li>
              <li>You must be 18 years or older to use Xerus</li>
              <li>
                You are responsible for all activity that occurs under your
                account
              </li>
              <li>
                You must provide accurate information and keep your account
                details current
              </li>
              <li>
                You must not share your account credentials or allow others
                to access your workspace
              </li>
            </ul>
          </section>

          {/* Pricing */}
          <section>
            <h2 className={sectionHeading}>4. Pricing &amp; Payment</h2>
            <p className={prose}>
              Xerus is a paid service. Current pricing is available on our
              website. All subscriptions are billed monthly. You can cancel at
              any time — cancellation takes effect at the end of your current
              billing period. We may adjust pricing with at least 30 days
              written notice.
            </p>
            <p className={`${prose} mt-4`}>
              Refunds are handled on a case-by-case basis. If you experience
              a significant service issue, contact us and we will make it
              right.
            </p>
          </section>

          {/* Your Data */}
          <section>
            <h2 className={sectionHeading}>5. Your Data</h2>
            <ul className={list}>
              <li>
                <strong>You own your data.</strong> We do not claim any
                ownership or intellectual property rights over content you
                create, upload, or generate through your agents.
              </li>
              <li>
                You grant us a limited license to process your data solely to
                operate the Service — storing files, executing agent tasks,
                and syncing connected services on your behalf.
              </li>
              <li>
                We will never use your content to train AI models, sell to
                third parties, or repurpose for any reason beyond operating
                your workspace.
              </li>
              <li>
                For full details on how we handle your data, see our{' '}
                <Link href="/privacy" className={link}>
                  Privacy Policy
                </Link>
                .
              </li>
            </ul>
          </section>

          {/* Connected Services */}
          <section>
            <h2 className={sectionHeading}>6. Connected Services</h2>
            <p className={prose}>
              Xerus allows you to connect third-party services such as Google
              Workspace, Slack, and others. When you connect a service, your
              AI agents will interact with that service on your behalf using
              the permissions you grant.
            </p>
            <ul className={list}>
              <li>
                You are responsible for ensuring your use of connected
                services complies with their respective terms of service
              </li>
              <li>
                You can disconnect any service at any time from your account
                settings
              </li>
              <li>
                We store connection credentials in encrypted form and never
                access your connected accounts beyond what is necessary to
                execute your agent tasks
              </li>
            </ul>
          </section>

          {/* AI Agents */}
          <section>
            <h2 className={sectionHeading}>7. AI Agents &amp; Output</h2>
            <p className={prose}>
              AI agents act on your instructions. While we work hard to make
              them reliable, you should understand:
            </p>
            <ul className={list}>
              <li>
                <strong>Agents may make mistakes.</strong> AI is powerful but
                imperfect. Always review agent output before relying on it for
                critical decisions.
              </li>
              <li>
                <strong>You control the level of oversight.</strong> Xerus
                offers different autonomy settings — from fully supervised
                (agents ask before acting) to autonomous (agents work
                independently). Choose the level appropriate for each task.
              </li>
              <li>
                <strong>You are responsible for agent actions.</strong>{' '}
                Actions taken by agents on your behalf — sending emails,
                modifying documents, scheduling meetings — are your
                responsibility.
              </li>
              <li>
                <strong>Output is not professional advice.</strong> Agent
                output should not be treated as legal, financial, medical, or
                other professional advice.
              </li>
            </ul>
          </section>

          {/* Acceptable Use */}
          <section>
            <h2 className={sectionHeading}>8. Acceptable Use</h2>
            <p className={prose}>You agree not to use Xerus to:</p>
            <ul className={list}>
              <li>Violate any applicable laws or regulations</li>
              <li>
                Send spam, unsolicited messages, or bulk automated
                communications
              </li>
              <li>
                Attempt to access other users&apos; workspaces or data
              </li>
              <li>
                Reverse-engineer, decompile, or attempt to extract the source
                code of the platform
              </li>
              <li>
                Use agents to harass, threaten, or impersonate others
              </li>
              <li>
                Circumvent security measures, rate limits, or usage
                restrictions
              </li>
              <li>
                Upload content that infringes on others&apos; intellectual
                property rights
              </li>
            </ul>
            <p className={`${prose} mt-4`}>
              We reserve the right to suspend or terminate accounts that
              violate these rules.
            </p>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className={sectionHeading}>9. Intellectual Property</h2>
            <p className={prose}>
              The Xerus platform — including its design, code, branding,
              documentation, and AI agent framework — is our intellectual
              property. These Terms do not grant you any rights to our
              trademarks, logos, or proprietary technology beyond using the
              Service as intended.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className={sectionHeading}>10. Limitation of Liability</h2>
            <p className={prose}>
              The Service is provided &quot;as is&quot; and &quot;as
              available,&quot; particularly during the beta period. To the
              maximum extent permitted by law:
            </p>
            <ul className={list}>
              <li>
                We are not liable for actions taken by AI agents, including
                errors, omissions, or unintended consequences
              </li>
              <li>
                We are not liable for data loss, service interruptions, or
                issues caused by third-party services you connect
              </li>
              <li>
                Our total liability is limited to the amount you paid for the
                Service in the 12 months preceding the claim
              </li>
            </ul>
            <p className={`${prose} mt-4`}>
              We recommend using supervised oversight for critical or
              sensitive tasks.
            </p>
          </section>

          {/* Termination */}
          <section>
            <h2 className={sectionHeading}>11. Termination</h2>
            <p className={prose}>
              You can cancel your account at any time from your account
              settings. We may also terminate or suspend your account if you
              violate these Terms, with notice when reasonably possible.
            </p>
            <p className={`${prose} mt-4`}>
              Upon cancellation, your data is retained for 30 days to allow
              for export, then permanently deleted. See our{' '}
              <Link href="/privacy" className={link}>
                Privacy Policy
              </Link>{' '}
              for full data retention details.
            </p>
          </section>

          {/* Indemnification */}
          <section>
            <h2 className={sectionHeading}>12. Indemnification</h2>
            <p className={prose}>
              You agree to indemnify and hold Xerus harmless from any claims,
              damages, or expenses arising from your use of the Service, your
              violation of these Terms, or actions taken by your AI agents on
              your behalf.
            </p>
          </section>

          {/* Changes */}
          <section>
            <h2 className={sectionHeading}>13. Changes to Terms</h2>
            <p className={prose}>
              We may update these Terms from time to time. If we make
              material changes, we will notify you by email or through the
              platform at least 30 days before the changes take effect. Your
              continued use of Xerus after the effective date constitutes
              acceptance of the updated Terms.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className={sectionHeading}>14. Governing Law</h2>
            <p className={prose}>
              These Terms are governed by and construed in accordance with the
              laws of the State of Delaware, United States, without regard to
              conflict of law principles. Any disputes will be resolved in the
              courts of Delaware.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className={sectionHeading}>15. Contact</h2>
            <p className={prose}>
              Questions about these Terms? We are here to help.
            </p>
            <p className={`${prose} mt-3`}>
              Email:{' '}
              <a href="mailto:hello@xerus.ai" className={link}>
                hello@xerus.ai
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
