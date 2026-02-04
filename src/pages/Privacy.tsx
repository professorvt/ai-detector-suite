import React from "react";

const Privacy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">
        Privacy Policy
      </h1>
      <p className="mb-4">Last updated: February 2026</p>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-2">
            1. Information We Collect
          </h2>
          <p>
            When you use <strong>AI Detector Suite</strong>{" "}
            (apps.cloudupcodex.click), we may collect the text content you input
            for analysis. However, we prioritize your privacy. The text you
            submit for AI detection or humanization is processed securely and is
            not stored permanently on our servers after the session ends.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            2. Google AdSense & Cookies
          </h2>
          <p>
            We use Google AdSense to display advertisements. Google uses cookies
            to serve ads based on your prior visits to our website or other
            websites.
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              Google's use of advertising cookies enables it and its partners to
              serve ads to you based on your visit to our sites and/or other
              sites on the Internet.
            </li>
            <li>
              You may opt out of personalized advertising by visiting{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 underline"
              >
                Google Ads Settings
              </a>
              .
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">3. Data Security</h2>
          <p>
            We implement standard security measures to protect your data.
            However, please note that no method of transmission over the
            Internet is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">4. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at: <strong>support@cloudupcodex.click</strong>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
