import { NexFlowHeader } from "@/components/blocks/nexflow-header";
import { NexFlowFooter } from "@/components/blocks/nexflow-footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <NexFlowHeader />
      
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: November 12, 2025</p>
        
        <div className="space-y-8 text-foreground">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="leading-relaxed">
              NexFlow (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and clinical platform. We comply with HIPAA, GDPR, and other applicable data protection regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold mb-3 mt-4">2.1 Health Information</h3>
            <p className="leading-relaxed mb-4">We collect and process the following health-related data:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Biometric data from connected wearable devices (heart rate, HRV, sleep patterns)</li>
              <li>Activity and exercise data</li>
              <li>Nutrition and lifestyle inputs</li>
              <li>Medical history and clinical information (with your consent)</li>
              <li>Laboratory results and diagnostic data</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-4">2.2 Personal Information</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Name, email address, and contact information</li>
              <li>Date of birth and demographic information</li>
              <li>Account credentials</li>
              <li>Payment information (processed securely through third-party providers)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-4">2.3 Technical Information</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Device information and identifiers</li>
              <li>IP address and geolocation data</li>
              <li>Usage data and analytics</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p className="leading-relaxed mb-4">We use your information for the following purposes:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Providing AI-powered health predictions and personalized insights</li>
              <li>Generating your Risk Score and disease risk assessments</li>
              <li>Enabling healthcare providers to monitor patient health trends</li>
              <li>Improving our AI models and algorithms</li>
              <li>Sending notifications and health recommendations</li>
              <li>Processing payments and managing subscriptions</li>
              <li>Complying with legal obligations</li>
              <li>Conducting research (only with de-identified data)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Data Sharing and Disclosure</h2>
            
            <h3 className="text-xl font-semibold mb-3 mt-4">4.1 With Your Healthcare Providers</h3>
            <p className="leading-relaxed mb-4">
              With your explicit consent, we share relevant health data with your designated healthcare providers through our clinical dashboard.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4">4.2 Service Providers</h3>
            <p className="leading-relaxed mb-4">
              We may share data with trusted third-party service providers who assist us in operating our platform, including cloud hosting, payment processing, and analytics services. These providers are bound by strict confidentiality agreements.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4">4.3 Legal Requirements</h3>
            <p className="leading-relaxed mb-4">
              We may disclose information when required by law, court order, or government regulation, or when we believe disclosure is necessary to protect our rights or the safety of users.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4">4.4 Research and Development</h3>
            <p className="leading-relaxed mb-4">
              We may use de-identified, aggregated data for research purposes to improve our AI models and advance preventive healthcare. This data cannot be traced back to individual users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
            <p className="leading-relaxed mb-4">
              We implement industry-standard security measures to protect your information:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>End-to-end encryption for data in transit and at rest</li>
              <li>HIPAA-compliant cloud infrastructure</li>
              <li>Regular security audits and penetration testing</li>
              <li>Multi-factor authentication</li>
              <li>Access controls and employee training</li>
              <li>Automated backup and disaster recovery systems</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Your Rights and Choices</h2>
            <p className="leading-relaxed mb-4">You have the following rights regarding your data:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Access:</strong> Request a copy of your personal and health data</li>
              <li><strong>Correction:</strong> Update or correct inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your data (subject to legal obligations)</li>
              <li><strong>Portability:</strong> Receive your data in a machine-readable format</li>
              <li><strong>Opt-out:</strong> Decline marketing communications or data sharing</li>
              <li><strong>Revoke consent:</strong> Withdraw consent for data processing at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Data Retention</h2>
            <p className="leading-relaxed">
              We retain your personal information for as long as necessary to provide our services and comply with legal obligations. Health data is retained for a minimum period as required by healthcare regulations. Upon account deletion, we will delete or anonymize your data within 90 days, except where retention is required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Children&apos;s Privacy</h2>
            <p className="leading-relaxed">
              NexFlow is not intended for use by individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected data from a child, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. International Data Transfers</h2>
            <p className="leading-relaxed">
              Your information may be transferred to and processed in countries other than your country of residence. We ensure adequate safeguards are in place through standard contractual clauses and compliance with applicable data protection frameworks.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Cookies and Tracking</h2>
            <p className="leading-relaxed mb-4">
              We use cookies and similar technologies to enhance user experience, analyze usage patterns, and provide personalized content. You can control cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Changes to This Privacy Policy</h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of material changes via email or through the service. Your continued use after such changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">12. Contact Us</h2>
            <p className="leading-relaxed">
              If you have questions about this Privacy Policy or wish to exercise your data rights, please contact us at:
            </p>
            <div className="mt-4 space-y-2">
              <p>Email: <a href="mailto:privacy@nexflow.com" className="text-primary hover:underline">privacy@nexflow.com</a></p>
              <p>Data Protection Officer: <a href="mailto:dpo@nexflow.com" className="text-primary hover:underline">dpo@nexflow.com</a></p>
            </div>
          </section>
        </div>
      </div>

      <NexFlowFooter />
    </div>
  );
}
