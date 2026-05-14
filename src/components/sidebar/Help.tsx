import { Search, MessageCircle, Mail, Phone, Book } from "lucide-react";

const Help = () => {
  return (
    <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-auto">
      <div className="max-w-[1440px] mx-auto">
        <div className="space-y-4 md:space-y-6">
          {/* Heading */}
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Help Center
          </h1>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

            <input
              type="text"
              placeholder="Search for help..."
              className="w-full bg-[#0f1229] border border-[rgba(59,130,246,0.1)] rounded-lg pl-12 pr-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Support Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* Live Chat */}
            <button className="bg-[#0f1229] rounded-2xl p-6 border border-[rgba(59,130,246,0.1)] shadow-lg hover:border-blue-500/30 transition-all text-left">
              <MessageCircle className="w-12 h-12 text-blue-400 mb-3" />

              <h3 className="text-lg font-semibold text-white mb-2">
                Live Chat
              </h3>

              <p className="text-gray-400 text-sm">
                Chat with our support team
              </p>
            </button>

            {/* Email */}
            <button className="bg-[#0f1229] rounded-2xl p-6 border border-[rgba(59,130,246,0.1)] shadow-lg hover:border-blue-500/30 transition-all text-left">
              <Mail className="w-12 h-12 text-blue-400 mb-3" />

              <h3 className="text-lg font-semibold text-white mb-2">
                Email Support
              </h3>

              <p className="text-gray-400 text-sm">support@bluetrade.io</p>
            </button>

            {/* Phone */}
            <button className="bg-[#0f1229] rounded-2xl p-6 border border-[rgba(59,130,246,0.1)] shadow-lg hover:border-blue-500/30 transition-all text-left">
              <Phone className="w-12 h-12 text-blue-400 mb-3" />

              <h3 className="text-lg font-semibold text-white mb-2">
                Phone Support
              </h3>

              <p className="text-gray-400 text-sm">+1 (800) 555-0123</p>
            </button>
          </div>

          {/* FAQ */}
          <div className="bg-[#0f1229] rounded-2xl p-6 border border-[rgba(59,130,246,0.1)] shadow-lg">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Book className="w-5 h-5 text-blue-400" />
              Frequently Asked Questions
            </h3>

            <div className="space-y-3">
              <details className="bg-[#1e293b] rounded-lg overflow-hidden">
                <summary className="p-4 cursor-pointer text-white hover:bg-[#2d3b52] transition-colors">
                  How do I deposit funds?
                </summary>

                <div className="px-4 pb-4 text-gray-400 text-sm">
                  Navigate to the Wallet page and click the Deposit button.
                  Select your preferred cryptocurrency and follow the
                  instructions.
                </div>
              </details>

              <details className="bg-[#1e293b] rounded-lg overflow-hidden">
                <summary className="p-4 cursor-pointer text-white hover:bg-[#2d3b52] transition-colors">
                  What are the trading fees?
                </summary>

                <div className="px-4 pb-4 text-gray-400 text-sm">
                  Trading fees vary by volume. Standard fees are 0.1% per
                  transaction.
                </div>
              </details>

              <details className="bg-[#1e293b] rounded-lg overflow-hidden">
                <summary className="p-4 cursor-pointer text-white hover:bg-[#2d3b52] transition-colors">
                  How long do withdrawals take?
                </summary>

                <div className="px-4 pb-4 text-gray-400 text-sm">
                  Withdrawals are typically processed within 10-30 minutes.
                </div>
              </details>

              <details className="bg-[#1e293b] rounded-lg overflow-hidden">
                <summary className="p-4 cursor-pointer text-white hover:bg-[#2d3b52] transition-colors">
                  Is two-factor authentication required?
                </summary>

                <div className="px-4 pb-4 text-gray-400 text-sm">
                  We strongly recommend enabling 2FA for better security.
                </div>
              </details>

              <details className="bg-[#1e293b] rounded-lg overflow-hidden">
                <summary className="p-4 cursor-pointer text-white hover:bg-[#2d3b52] transition-colors">
                  How do I verify my account?
                </summary>

                <div className="px-4 pb-4 text-gray-400 text-sm">
                  Go to Profile &gt; Verification and upload your documents.
                </div>
              </details>

              <details className="bg-[#1e293b] rounded-lg overflow-hidden">
                <summary className="p-4 cursor-pointer text-white hover:bg-[#2d3b52] transition-colors">
                  What cryptocurrencies are supported?
                </summary>

                <div className="px-4 pb-4 text-gray-400 text-sm">
                  We support BTC, ETH, SOL, BNB, ADA, XRP and more.
                </div>
              </details>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-6 border border-blue-500/20">
            <h3 className="text-xl font-semibold text-white mb-2">
              Need More Help?
            </h3>

            <p className="text-gray-400 mb-4">
              Our support team is available 24/7 to assist you with any
              questions or concerns.
            </p>

            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Help;
