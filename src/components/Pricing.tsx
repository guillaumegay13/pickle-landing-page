
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const Pricing = () => {
  const { t } = useTranslation();
  
  const plans = [
    {
      name: t("pricing.plans.free.name"),
      price: "$0",
      period: t("pricing.plans.free.period"),
      features: [
        { included: true, text: t("pricing.plans.free.features.scans") },
        { included: true, text: t("pricing.plans.free.features.meals") },
        { included: true, text: t("pricing.plans.free.features.menus") },
        { included: true, text: t("pricing.plans.free.features.history") },
        { included: false, text: t("pricing.plans.free.features.export") },
      ],
      buttonText: t("pricing.plans.free.button"),
      featured: false,
    },
    {
      name: t("pricing.plans.pro.name"),
      price: "$9",
      period: t("pricing.plans.pro.period"),
      features: [
        { included: true, text: t("pricing.plans.pro.features.scans") },
        { included: true, text: t("pricing.plans.pro.features.meals") },
        { included: true, text: t("pricing.plans.pro.features.menus") },
        { included: true, text: t("pricing.plans.pro.features.history") },
        { included: true, text: t("pricing.plans.pro.features.export") },
      ],
      buttonText: t("pricing.plans.pro.button"),
      featured: true,
    },
  ];

  return (
    <section id="pricing" className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          {t("pricing.title")}
        </h2>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
          {t("pricing.subtitle")}
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`border ${plan.featured ? 'border-black border-2' : 'border-gray-200'} rounded-2xl p-8 ${plan.featured ? 'bg-gray-50' : 'bg-white'}`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-500 ml-2">{plan.period}</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    {feature.included ? (
                      <Check className="h-5 w-5 text-black shrink-0 mt-0.5 mr-2" />
                    ) : (
                      <X className="h-5 w-5 text-gray-400 shrink-0 mt-0.5 mr-2" />
                    )}
                    <span className={feature.included ? "text-gray-700" : "text-gray-400"}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Button 
                size="lg" 
                className={`w-full rounded-full ${
                  plan.featured 
                    ? "bg-black text-white hover:bg-gray-800" 
                    : "bg-white text-black border-2 border-black hover:bg-gray-100"
                }`}
                variant={plan.featured ? "default" : "outline"}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
