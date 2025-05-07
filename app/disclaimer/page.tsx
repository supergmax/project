import { LegalPageLayout } from "@/components/legal/LegalPageLayout";

export default function DisclaimerPage() {
  return (
    <LegalPageLayout 
      title="Disclaimer" 
      lastUpdated="May 10, 2025"
    >
      <p>
        This disclaimer applies to all content, services, and products available on or through 
        the TradingChallenge website, platform, and related services.
      </p>

      <h2>1. Information Accuracy</h2>
      <p>
        While we make every effort to ensure that the information on our website is accurate and 
        up-to-date, we make no representations or warranties of any kind, express or implied, about 
        the completeness, accuracy, reliability, suitability, or availability of the website or the 
        information, products, services, or related graphics contained on the website for any purpose.
      </p>

      <h2>2. Educational Purpose</h2>
      <p>
        The content and services provided by TradingChallenge are for educational and informational 
        purposes only. Nothing on our website constitutes financial advice, investment advice, or any 
        other type of advice and should not be relied upon for such purposes.
      </p>

      <h2>3. No Investment Recommendations</h2>
      <p>
        We do not provide specific investment recommendations or advice on specific securities, 
        investment products, or investment strategies. Any discussions related to specific financial 
        instruments or strategies are provided for illustrative purposes only.
      </p>

      <h2>4. Third-Party Content</h2>
      <p>
        Our website may include content provided by third parties, including materials provided by 
        other users, bloggers, and third-party licensors. All statements and/or opinions expressed 
        in these materials are solely the responsibility of the person or entity providing those 
        materials and do not necessarily represent our opinions.
      </p>

      <h2>5. External Links</h2>
      <p>
        Our website may contain links to external websites that are not provided or maintained by or 
        in any way affiliated with TradingChallenge. We do not guarantee the accuracy, relevance, 
        timeliness, or completeness of any information on these external websites.
      </p>

      <h2>6. Forward-Looking Statements</h2>
      <p>
        Any statements regarding future expectations, beliefs, goals, plans, or prospects constitute 
        forward-looking statements. These statements involve many risks and uncertainties that could 
        cause actual results to differ materially from those predicted in any such forward-looking 
        statements.
      </p>

      <h2>7. No Liability</h2>
      <p>
        To the maximum extent permitted by applicable law, we will not be liable for any indirect, 
        incidental, special, consequential, or punitive damages, or any loss of profits or revenues, 
        whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible 
        losses, resulting from your access to or use of or inability to access or use the services or 
        platform; any conduct or content of any third party on the services or platform; or unauthorized 
        access, use, or alteration of your content or information.
      </p>

      <h2>8. Changes to Disclaimer</h2>
      <p>
        We reserve the right to modify this disclaimer at any time. Changes and clarifications will 
        take effect immediately upon their posting on the website. We encourage you to check this 
        page periodically for any changes.
      </p>

      <h2>9. Contact Information</h2>
      <p>
        If you have any questions about this disclaimer, please contact us at 
        legal@tradingchallenge.com.
      </p>

      <div className="alert alert-secondary mt-8" role="alert">
        <p>
          By using the TradingChallenge website, platform, or services, you acknowledge that you have 
          read, understood, and agree to be bound by this disclaimer.
        </p>
      </div>
    </LegalPageLayout>
  );
}