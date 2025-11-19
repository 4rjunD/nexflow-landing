import { NexFlowHeader } from "@/components/blocks/nexflow-header";
import { NexFlowFooter } from "@/components/blocks/nexflow-footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen">
      <NexFlowHeader />
      
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: November 12, 2025</p>
        
        <div className="space-y-8 text-foreground">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By accessing or using NexFlow&apos;s services, including our mobile application and clinical platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
            <p className="leading-relaxed mb-4">
              NexFlow provides AI-powered health monitoring and predictive analytics services designed to detect early signs of chronic disease. Our services include:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Consumer mobile application for personal health tracking</li>
              <li>Clinical dashboard for healthcare providers</li>
              <li>AI-powered disease prediction models</li>
              <li>Health data analytics and insights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Medical Disclaimer</h2>
            <p className="leading-relaxed">
              NexFlow is not a substitute for professional medical advice, diagnosis, or treatment. Our predictive models and health insights are designed to complement, not replace, the relationship between patients and their healthcare providers. Always seek the advice of your physician or qualified health provider with any questions regarding a medical condition.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. User Accounts</h2>
            <p className="leading-relaxed mb-4">
              To use certain features of our service, you must create an account. You agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized access</li>
              <li>Be responsible for all activities under your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Data Usage and Privacy</h2>
            <p className="leading-relaxed">
              Your use of NexFlow is also governed by our Privacy Policy. We collect and process health data in accordance with HIPAA regulations and applicable data protection laws. By using our services, you consent to such processing and warrant that all data provided is accurate.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Subscription and Payment</h2>
            <p className="leading-relaxed mb-4">
              Some aspects of our service are provided on a subscription basis. By subscribing, you agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Pay all applicable fees for your chosen subscription tier</li>
              <li>Automatic renewal unless cancelled prior to renewal date</li>
              <li>That fees are non-refundable except as required by law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Intellectual Property</h2>
            <p className="leading-relaxed">
              All content, features, and functionality of NexFlow, including but not limited to AI models, algorithms, software, text, graphics, and logos, are owned by NexFlow and protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Prohibited Uses</h2>
            <p className="leading-relaxed mb-4">
              You agree not to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Use the service for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the proper functioning of the service</li>
              <li>Upload malicious code or harmful content</li>
              <li>Reverse engineer or attempt to extract our proprietary algorithms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Limitation of Liability</h2>
            <p className="leading-relaxed">
              To the maximum extent permitted by law, NexFlow shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the service. Our total liability shall not exceed the amount paid by you in the twelve months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Termination</h2>
            <p className="leading-relaxed">
              We reserve the right to terminate or suspend your account and access to our services immediately, without prior notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Changes to Terms</h2>
            <p className="leading-relaxed">
              We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through the service. Your continued use of NexFlow after such modifications constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">12. Governing Law</h2>
            <p className="leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">13. Contact Information</h2>
            <p className="leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at{" "}
              <a href="mailto:legal@nexflow.com" className="text-primary hover:underline">
                legal@nexflow.com
              </a>
            </p>
          </section>
        </div>
      </div>

      <NexFlowFooter />
    </div>
  );
}
