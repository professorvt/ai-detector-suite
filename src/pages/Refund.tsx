import SEO from "@/components/SEO";

const Refund = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800 dark:text-gray-200">
      <SEO
        title="Refund Policy"
        description="Refund and Cancellation Policy for AI Suite. Understand our refund terms for digital services and premium plans."
      />
      <h1 className="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">
        Refund & Cancellation Policy
      </h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-2">1. Digital Services</h2>
          <p>
            Since our products (AI Detection and Humanization tools) are digital
            services and intangible goods, we generally follow a strict refund
            policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">2. Free Tier</h2>
          <p>
            Our platform offers free access to basic tools. No refunds are
            applicable for free usage.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            3. Refunds for Paid API/Credits
          </h2>
          <p>If you have purchased a premium plan or credits:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              Refunds may be considered if the service was completely
              non-functional due to a technical error on our end.
            </li>
            <li>Requests must be made within 7 days of purchase.</li>
            <li>
              No refunds will be issued for "change of mind" or if the AI
              results did not meet subjective expectations, as AI accuracy
              varies.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">4. Contact for Refunds</h2>
          <p>
            To request a refund or report an issue, please email:{" "}
            <strong>billing@cloudupcodex.click</strong>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Refund;
