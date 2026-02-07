import SEO from "@/components/SEO";

const Terms = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800 dark:text-gray-200">
      <SEO
        title="Terms and Conditions"
        description="Terms of Service for AI Suite. Read our user agreement and acceptable use policy for AI detection and humanization tools."
      />
      <h1 className="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">
        Terms and Conditions
      </h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
          <p>
            By accessing and using <strong>AI Detector Suite</strong>, you
            accept and agree to be bound by the terms and provision of this
            agreement.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">2. Use of Service</h2>
          <p>
            Our tools (AI Detector and Humanizer) are provided for educational
            and professional assistance. You agree not to use this service for
            any illegal purposes or to bypass academic integrity policies
            dishonestly.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            3. Disclaimer of Accuracy
          </h2>
          <p>
            <strong>AI is probabilistic.</strong> While we strive for high
            accuracy, our AI detection and humanization tools may not be 100%
            accurate all the time. We are not liable for any decisions made
            based on these results.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">4. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Your
            continued use of the site signifies your acceptance of updated
            terms.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms;
