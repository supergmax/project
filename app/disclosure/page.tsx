import { LegalPageLayout } from "@/components/legal/LegalPageLayout";

export default function DisclosurePage() {
  return (
    <LegalPageLayout 
      title="Disclosure" 
      lastUpdated="May 10, 2025"
    >
      <p>
        This Disclosure document outlines important information regarding our trading challenge platform 
        and funded trader program. Please read this document carefully to understand the nature of our 
        services and the risks involved.
      </p>

      <h2>1. Nature of Services</h2>
      <p>
        TradingChallenge offers a trading evaluation program designed to identify skilled traders. 
        Successful traders receive access to funded trading accounts. The funded accounts utilize 
        the capital of our company, and not your own capital.
      </p>

      <h2>2. Performance Statistics</h2>
      <p>
        Any performance statistics or success rates shown on our website represent historical data 
        and are not indicative of future results. Trading performance varies based on market conditions, 
        trading strategy, and individual skill level.
      </p>

      <h2>3. Challenge Fees</h2>
      <p>
        Participation in our trading challenges requires payment of a one-time evaluation fee. 
        This fee covers the administrative costs of monitoring and evaluating your trading performance. 
        The fee is non-refundable once the challenge has begun, regardless of the outcome.
      </p>

      <h2>4. Profit Sharing</h2>
      <p>
        Traders who successfully complete our challenge and meet all requirements become eligible 
        for our profit-sharing program. The specific profit-sharing terms are outlined in the 
        agreement you receive upon successful completion of the challenge.
      </p>

      <h2>5. Independent Contractor Status</h2>
      <p>
        Funded traders are considered independent contractors and not employees of TradingChallenge. 
        Traders are responsible for their own taxes and compliance with local regulations.
      </p>

      <h2>6. Account Restrictions</h2>
      <p>
        Funded trading accounts are subject to specific trading rules, including maximum drawdown 
        limits, position size restrictions, and prohibited trading strategies. Violation of these 
        rules may result in termination of your funded account.
      </p>

      <h2>7. Program Changes</h2>
      <p>
        TradingChallenge reserves the right to modify the terms of our challenges, funded accounts, 
        and profit-sharing arrangements at any time. Existing traders will be notified of significant 
        changes that affect their accounts.
      </p>

      <h2>8. Contact Information</h2>
      <p>
        If you have any questions regarding this disclosure or our services, please contact us at 
        support@tradingchallenge.com.
      </p>
    </LegalPageLayout>
  );
}