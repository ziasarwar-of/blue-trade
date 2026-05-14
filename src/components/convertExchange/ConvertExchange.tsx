"use client";

import { useState } from "react";
import { ArrowUpDown } from "lucide-react";

export const currencies = [
  { code: "USD", symbol: "$", name: "US Dollar" },
  { code: "EUR", symbol: "€", name: "Euro" },
  { code: "GBP", symbol: "£", name: "British Pound" },
  { code: "PKR", symbol: "₨", name: "Pakistani Rupee" },
  { code: "INR", symbol: "₹", name: "Indian Rupee" },
  { code: "JPY", symbol: "¥", name: "Japanese Yen" },
  { code: "CNY", symbol: "¥", name: "Chinese Yuan" },
  { code: "AUD", symbol: "A$", name: "Australian Dollar" },
  { code: "CAD", symbol: "C$", name: "Canadian Dollar" },
  { code: "CHF", symbol: "CHF", name: "Swiss Franc" },
  { code: "HKD", symbol: "HK$", name: "Hong Kong Dollar" },
  { code: "SGD", symbol: "S$", name: "Singapore Dollar" },
  { code: "NZD", symbol: "NZ$", name: "New Zealand Dollar" },
  { code: "SEK", symbol: "kr", name: "Swedish Krona" },
  { code: "NOK", symbol: "kr", name: "Norwegian Krone" },
  { code: "DKK", symbol: "kr", name: "Danish Krone" },
  { code: "RUB", symbol: "₽", name: "Russian Ruble" },
  { code: "TRY", symbol: "₺", name: "Turkish Lira" },
  { code: "ZAR", symbol: "R", name: "South African Rand" },
  { code: "BRL", symbol: "R$", name: "Brazilian Real" },
  { code: "MXN", symbol: "$", name: "Mexican Peso" },
  { code: "AED", symbol: "د.إ", name: "UAE Dirham" },
  { code: "SAR", symbol: "﷼", name: "Saudi Riyal" },
  { code: "QAR", symbol: "﷼", name: "Qatari Riyal" },
  { code: "KWD", symbol: "د.ك", name: "Kuwaiti Dinar" },
  { code: "BHD", symbol: ".د.ب", name: "Bahraini Dinar" },
  { code: "OMR", symbol: "﷼", name: "Omani Rial" },
  { code: "EGP", symbol: "£", name: "Egyptian Pound" },
  { code: "IDR", symbol: "Rp", name: "Indonesian Rupiah" },
  { code: "MYR", symbol: "RM", name: "Malaysian Ringgit" },
  { code: "THB", symbol: "฿", name: "Thai Baht" },
  { code: "PHP", symbol: "₱", name: "Philippine Peso" },
  { code: "VND", symbol: "₫", name: "Vietnamese Dong" },
  { code: "KRW", symbol: "₩", name: "South Korean Won" },
  { code: "UAH", symbol: "₴", name: "Ukrainian Hryvnia" },
  { code: "PLN", symbol: "zł", name: "Polish Zloty" },
  { code: "CZK", symbol: "Kč", name: "Czech Koruna" },
  { code: "HUF", symbol: "Ft", name: "Hungarian Forint" },
  { code: "ILS", symbol: "₪", name: "Israeli Shekel" },
  { code: "CLP", symbol: "$", name: "Chilean Peso" },
  { code: "COP", symbol: "$", name: "Colombian Peso" },
  { code: "ARS", symbol: "$", name: "Argentine Peso" },
  { code: "BDT", symbol: "৳", name: "Bangladeshi Taka" },
  { code: "LKR", symbol: "Rs", name: "Sri Lankan Rupee" },
  { code: "NPR", symbol: "₨", name: "Nepalese Rupee" },
  { code: "IRR", symbol: "﷼", name: "Iranian Rial" },
  { code: "IQD", symbol: "ع.د", name: "Iraqi Dinar" },
  { code: "KZT", symbol: "₸", name: "Kazakhstani Tenge" },
  { code: "UZS", symbol: "so'm", name: "Uzbek Som" },
  { code: "GHS", symbol: "₵", name: "Ghanaian Cedi" },
  { code: "NGN", symbol: "₦", name: "Nigerian Naira" },
];

const ConvertExchange = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("PKR");

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Convert Currency
  const convertCurrency = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`,
      );

      if (!response.ok) {
        throw new Error("Failed to fetch exchange rates");
      }

      const data = await response.json();

      const rate = data.rates[toCurrency];

      const convertedAmount = amount * rate;

      setResult(convertedAmount);
    } catch (err) {
      setError("Something went wrong");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  // Swap Currencies
  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  // Get Symbol
  const getSymbol = (currencyCode: any) => {
    return (
      currencies.find((currency) => currency.code === currencyCode)?.symbol ||
      ""
    );
  };

  return (
    <div className="w-full max-w-md bg-[#0f1229] border border-white/10 rounded-2xl p-6 shadow-xl">
      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white">Currency Converter</h2>

        <p className="text-gray-400 text-sm mt-1">
          Convert real-time currencies instantly
        </p>
      </div>

      {/* Amount */}
      <div className="bg-[#1a1f3a] rounded-2xl p-4 mb-5">
        <label className="text-gray-400 text-sm block mb-2">Amount</label>

        <div className="flex items-center gap-2">
          <span className="text-white text-2xl font-bold">
            {getSymbol(fromCurrency)}
          </span>

          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="bg-transparent outline-none w-full text-white text-3xl font-bold"
          />
        </div>
      </div>

      {/* Currency Selectors */}
      <div className="flex items-center gap-3 mb-6">
        {/* From */}
        <div className="flex-1 bg-[#1a1f3a] rounded-2xl p-4">
          <label className="text-gray-400 text-sm block mb-2">From</label>

          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="w-full bg-[#0f1229] text-white p-3 rounded-xl outline-none"
          >
            {currencies.map((currency) => (
              <option key={currency.code} value={currency.code}>
                {currency.code}
              </option>
            ))}
          </select>
        </div>

        {/* Swap Button */}
        <button
          onClick={swapCurrencies}
          className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 p-3 rounded-full mt-6"
        >
          <ArrowUpDown size={18} className="text-white" />
        </button>

        {/* To */}
        <div className="flex-1 bg-[#1a1f3a] rounded-2xl p-4">
          <label className="text-gray-400 text-sm block mb-2">To</label>

          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="w-full bg-[#0f1229] text-white p-3 rounded-xl outline-none"
          >
            {currencies.map((currency) => (
              <option key={currency.code} value={currency.code}>
                {currency.code}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Convert Button */}
      <button
        onClick={convertCurrency}
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 transition-all duration-300 text-white py-4 rounded-2xl font-semibold"
      >
        {loading ? "Converting..." : "Convert Currency"}
      </button>

      {/* Error */}
      {error && <p className="text-red-400 text-sm mt-4">{error}</p>}

      {/* Result */}
      {result && (
        <div className="mt-6 bg-[#1a1f3a] rounded-2xl p-5 border border-white/5">
          <p className="text-gray-400 text-sm mb-2">Converted Amount</p>

          <h3 className="text-3xl font-bold text-white">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: toCurrency,
            }).format(result)}
          </h3>

          <p className="text-gray-500 text-sm mt-2">
            1 {fromCurrency} = {(result / amount).toFixed(4)} {toCurrency}
          </p>
        </div>
      )}
    </div>
  );
};

export default ConvertExchange;
