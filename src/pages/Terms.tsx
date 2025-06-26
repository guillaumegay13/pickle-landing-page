
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="py-12 px-4 md:px-8 lg:px-16 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg mb-6">
            Last Updated: May 20, 2025
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
          <p className="mb-4">
            These Terms and Conditions ("Terms") govern your use of the Pickle mobile application and website (collectively, the "Service"), operated by Pickle App Inc. ("we," "us," or "our"). By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access the Service.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Use of Service</h2>
          <p className="mb-4">
            Pickle is a mobile application designed to help pregnant women identify safe foods by scanning meals and menus. You may use the Service only as permitted by these Terms and any applicable laws. You are responsible for ensuring that your use of the Service complies with all applicable laws, regulations, and third-party agreements.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Account Registration</h2>
          <p className="mb-4">
            To use certain features of the Service, you may need to create an account. You must provide accurate and complete information when creating an account. You are responsible for safeguarding your account credentials and for all activities that occur under your account.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Subscription and Payment</h2>
          <p className="mb-4">
            Certain features of the Service may require a subscription. Subscription fees are charged in advance and are non-refundable. You may cancel your subscription at any time, but no refunds will be provided for any unused portion of the subscription period.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Intellectual Property</h2>
          <p className="mb-4">
            The Service and its original content, features, and functionality are owned by Pickle App Inc. and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws. You may not duplicate, copy, or reuse any portion of the HTML/CSS, JavaScript, or visual design elements or concepts without express written permission from us.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Limitation of Liability</h2>
          <p className="mb-4">
            In no event shall Pickle App Inc., its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Changes to Terms</h2>
          <p className="mb-4">
            We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about these Terms, please contact us at legal@pickleapp.com.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
