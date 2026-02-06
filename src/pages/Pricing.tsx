import { Check } from "lucide-react";
const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      features: [
        "Unlimited AI Detection",
        "Basic Reports",
        "Ad-supported",
        "Standard Speed",
      ],
      cta: "Current Plan",
      active: false,
    },
    {
      name: "Pro",
      price: "$9.99",
      period: "/mo",
      features: [
        "Everything in Free",
        "AI Humanizer (Unlimited)",
        "No Ads",
        "Priority Support",
        "Deep Analysis Mode",
      ],
      cta: "Upgrade Now",
      active: true, // Highlighted
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "API Access",
        "Team Management",
        "SSO Integration",
        "Dedicated Server",
      ],
      cta: "Contact Sales",
      active: false,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
          Upgrade Your Power
        </h1>
        <p className="text-gray-400 mb-16 text-xl">
          Choose the plan that fits your content strategy.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative p-8 rounded-3xl border ${plan.active ? "border-cyan-500 bg-cyan-900/10 shadow-[0_0_40px_-10px_rgba(34,211,238,0.3)]" : "border-white/10 bg-[#0a0a0a]"} flex flex-col`}
            >
              {plan.active && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-500 text-black font-bold px-4 py-1 rounded-full text-sm">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="text-4xl font-black mb-6">
                {plan.price}
                <span className="text-lg text-gray-500 font-normal">
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-4 mb-8 text-left flex-1">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <Check size={18} className="text-cyan-400" /> {feat}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-bold transition-all ${plan.active ? "bg-cyan-500 hover:bg-cyan-400 text-black" : "bg-white/10 hover:bg-white/20 text-white"}`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
