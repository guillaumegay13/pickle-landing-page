import { StarIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  rating: number;
}

const Reviews = () => {
  const { t } = useTranslation();

  // Use a fallback empty array in case the translation is not an array
  const testimonials = (t('reviews.testimonials', { returnObjects: true }) as Testimonial[]) || [];

  return (
    <section id="reviews" className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('reviews.title')}</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-black fill-black' : 'text-gray-300'}`}
                  />
                ))}
              </div>

              <p className="text-gray-700 mb-6">"{testimonial.quote}"</p>

              <div>
                <p className="font-medium">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
