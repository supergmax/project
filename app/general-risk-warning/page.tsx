import { LegalPageLayout } from "@/components/legal/LegalPageLayout";

export default function GeneralRiskWarningPage() {
  return (
    <LegalPageLayout 
      title="General Risk Warning" 
      lastUpdated="May 10, 2025"
    >
      <div className="alert alert-warning mb-8" role="alert">
        <p className="font-bold">
          Trading financial instruments involves significant risk of loss and is not suitable for all investors.
        </p>
      </div>

      <p>
        This General Risk Warning provides you with information about the risks associated with trading 
        financial instruments, including but not limited to foreign exchange (Forex), contracts for 
        difference (CFDs), futures, options, and other derivatives.
      </p>

      <h2>1. Risk of Loss</h2>
      <p>
        Trading financial instruments carries a high level of risk to your capital and it is possible to 
        lose more than your initial investment. You should not engage in trading unless you fully understand 
        the nature of the transactions you are entering into and the extent of your exposure to loss.
      </p>

      <h2>2. Complex Products</h2>
      <p>
        The financial instruments offered through our trading challenges are complex products and may not 
        be suitable for all investors. You should ensure that you understand the risks involved and seek 
        independent advice if necessary.
      </p>

      <h2>3. Market Volatility</h2>
      <p>
        Financial markets can be volatile and prices can change rapidly. This can result in sudden and 
        significant losses. Market gaps, liquidity issues, and other market conditions may make it 
        impossible to execute orders at specified prices or to close out positions.
      </p>

      <h2>4. Leverage and Margin</h2>
      <p>
        Trading with leverage means that you can make profits or incur losses that exceed the amount of 
        funds in your account. Leveraged trading requires you to maintain adequate levels of margin. 
        Failure to do so may result in the closing of your positions at a loss and you will be liable 
        for any resulting deficit.
      </p>

      <h2>5. Past Performance</h2>
      <p>
        Past performance of any trading system or methodology is not indicative of future results. No 
        representation is being made that any trading strategy will or is likely to achieve profits 
        or losses similar to those shown on our website or promotional materials.
      </p>

      <h2>6. Technical Risks</h2>
      <p>
        There are risks associated with using internet-based trading systems including, but not limited 
        to, the failure of hardware, software, and internet connections. We do not control signal power, 
        its reception or routing via internet, configuration of your equipment or reliability of its 
        connection, therefore, we cannot be responsible for communication failures, distortions or delays 
        when trading via the internet.
      </p>

      <h2>7. No Guaranteed Returns</h2>
      <p>
        There are no guarantees of profit or freedom from loss in any trading challenge or funded account. 
        Strategies, education, and guidance provided by TradingChallenge do not guarantee success in 
        trading financial markets.
      </p>

      <h2>8. Seek Professional Advice</h2>
      <p>
        The information provided by TradingChallenge is for educational purposes only and does not 
        constitute financial advice. We recommend seeking advice from an independent financial advisor 
        before engaging in any trading activity.
      </p>

      <div className="alert alert-info mt-8" role="alert">
        <p>
          By participating in our trading challenges or funded trader program, you acknowledge that you 
          have read and understood this risk warning and accept the risks involved in trading financial 
          instruments.
        </p>
      </div>
    </LegalPageLayout>
  );
}