import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  // Process the headline to add span tags for highlighted text
  const renderHeadline = () => {
    const headline = t('hero.headline');
    return headline.split('<highlight>').map((part, index, array) => {
      if (index === 0) return part;

      const [highlightedText, rest] = part.split('</highlight>');
      return (
        <span key={index}>
          <span className="underline decoration-4 decoration-primary">{highlightedText}</span>
          {rest}
        </span>
      );
    });
  };

  return (
    <section className="min-h-screen flex items-center py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center w-full">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
            {renderHeadline()}
          </h1>

          <p className="text-xl md:text-2xl text-gray-700">
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                {t('hero.download')}
              </Button>
            </a>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-2 border-primary hover:bg-secondary"
              onClick={scrollToPricing}
            >
              {t('hero.learnMore')} <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="relative">
          <img 
            src="/images/scan_meal.png" 
            alt="Pickle app meal scanning feature" 
            className="w-full h-auto rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
