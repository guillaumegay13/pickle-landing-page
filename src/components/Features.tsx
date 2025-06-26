import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const Features = () => {
  const { t } = useTranslation();

  const MealMockup = () => (
    <div className="w-[280px] h-[200px] mx-auto">
      {/* Phone frame */}
      <div className="relative w-full h-full bg-black rounded-[20px]">
        {/* Phone screen */}
        <div className="absolute inset-[2px] bg-white rounded-[18px] overflow-hidden">
          {/* Status bar */}
          <div className="h-4 bg-gray-100 flex justify-between items-center px-2">
            <div className="text-[8px] font-bold">9:41</div>
            <div className="flex space-x-1">
              <div className="w-2 h-2 rounded-full bg-gray-400"></div>
              <div className="w-2 h-2 rounded-full bg-gray-400"></div>
            </div>
          </div>
          
          {/* App header */}
          <div className="h-6 flex justify-center items-center border-b border-gray-200">
            <div className="text-xs font-bold text-primary">Pickle</div>
          </div>

          {/* Meal Results Content */}
          <div className="p-3 space-y-2">
            <div className="bg-green-100 border border-green-300 rounded-lg p-2">
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1"></div>
                <div className="text-[10px] font-semibold text-green-800">Safe</div>
              </div>
              <div className="text-[9px] text-green-700 mt-1">Grilled Chicken</div>
            </div>
            <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-2">
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mr-1"></div>
                <div className="text-[10px] font-semibold text-yellow-800">Caution</div>
              </div>
              <div className="text-[9px] text-yellow-700 mt-1">Soft Cheese</div>
            </div>
            <div className="bg-red-100 border border-red-300 rounded-lg p-2">
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mr-1"></div>
                <div className="text-[10px] font-semibold text-red-800">Avoid</div>
              </div>
              <div className="text-[9px] text-red-700 mt-1">Raw Fish</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const MenuMockup = () => (
    <div className="w-[280px] h-[200px] mx-auto">
      {/* Phone frame */}
      <div className="relative w-full h-full bg-black rounded-[20px]">
        {/* Phone screen */}
        <div className="absolute inset-[2px] bg-white rounded-[18px] overflow-hidden">
          {/* Status bar */}
          <div className="h-4 bg-gray-100 flex justify-between items-center px-2">
            <div className="text-[8px] font-bold">9:41</div>
            <div className="flex space-x-1">
              <div className="w-2 h-2 rounded-full bg-gray-400"></div>
              <div className="w-2 h-2 rounded-full bg-gray-400"></div>
            </div>
          </div>
          
          {/* App header */}
          <div className="h-6 flex justify-center items-center border-b border-gray-200">
            <div className="text-xs font-bold text-primary">Pickle</div>
          </div>

          {/* Menu Results Content */}
          <div className="p-3 space-y-2">
            <div className="w-full h-8 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg flex items-center justify-center mb-3">
              <div className="text-[9px] text-gray-600 font-medium">Restaurant Menu</div>
            </div>
            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <div className="text-[9px] text-gray-700">Caesar Salad</div>
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-[9px] text-gray-700">Sushi Roll</div>
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-[9px] text-gray-700">Pasta Carbonara</div>
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="features" className="py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{t('features.title')}</h2>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
          {t('features.subtitle')}
        </p>

        {/* Meal Analysis Feature */}
        <div className="mb-20">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            {/* Meal Image Placeholder */}
            <div className="md:col-span-2">
              <div className="w-full h-64 bg-gradient-to-br from-orange-200 to-orange-400 rounded-2xl flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <div className="w-24 h-20 bg-orange-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <div className="text-white text-2xl">🍽️</div>
                  </div>
                  <p className="text-orange-800 font-semibold">Your Meal Photo</p>
                  <p className="text-orange-700 text-sm">Upload or take a picture</p>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="md:col-span-1 flex justify-center">
              <ArrowRight className="h-8 w-8 text-primary" />
            </div>

            {/* Phone Mockup with Results */}
            <div className="md:col-span-2">
              <MealMockup />
              <div className="text-center mt-4">
                <h3 className="text-xl font-bold mb-2">Instant Analysis</h3>
                <p className="text-gray-600">Get safety ratings for each ingredient in your meal</p>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Analysis Feature */}
        <div>
          <div className="grid md:grid-cols-5 gap-8 items-center">
            {/* Menu Image Placeholder */}
            <div className="md:col-span-2">
              <div className="w-full h-64 bg-gradient-to-br from-blue-200 to-blue-400 rounded-2xl flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <div className="w-24 h-20 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <div className="text-white text-2xl">📋</div>
                  </div>
                  <p className="text-blue-800 font-semibold">Restaurant Menu</p>
                  <p className="text-blue-700 text-sm">Scan the full menu</p>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="md:col-span-1 flex justify-center">
              <ArrowRight className="h-8 w-8 text-primary" />
            </div>

            {/* Phone Mockup with Results */}
            <div className="md:col-span-2">
              <MenuMockup />
              <div className="text-center mt-4">
                <h3 className="text-xl font-bold mb-2">Menu Guidance</h3>
                <p className="text-gray-600">See which dishes are safe with color-coded indicators</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;