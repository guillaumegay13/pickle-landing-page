import { useTranslation } from "react-i18next";

const MenuShowcase = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Scan Any Restaurant Menu
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Point your camera at any menu and instantly see which dishes are safe during pregnancy
          </p>
        </div>
        
        <div className="relative">
          <img 
            src="/images/scan_menu.png" 
            alt="Pickle app menu scanning feature" 
            className="w-full h-auto rounded-2xl shadow-xl mx-auto max-w-4xl"
          />
        </div>
      </div>
    </section>
  );
};

export default MenuShowcase;