
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="py-12 px-4 md:px-8 lg:px-16 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg mb-6">
            Last Updated: May 20, 2025
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
          <p className="mb-4">
            Pickle App Inc. ("we" or "us" or "our") respects the privacy of our users ("user" or "you"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application Pickle and website (collectively, the "Service"). Please read this Privacy Policy carefully. By using the Service, you consent to the practices described in this Privacy Policy.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
          <p className="mb-4">
            We may collect information about you in a variety of ways. The information we collect may include:
          </p>
          <ul className="list-disc pl-5 my-4 space-y-2">
            <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, and phone number, that you voluntarily provide when registering for the Service or conducting in-app purchases.</li>
            <li><strong>Photo Data:</strong> The Service may collect and process photos of meals and menus that you choose to upload or capture using the app for food safety analysis.</li>
            <li><strong>Usage Data:</strong> Information automatically collected when using the Service, such as your mobile device's IP address, device name, operating system version, app configuration, timestamps, and usage statistics.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Use of Your Information</h2>
          <p className="mb-4">
            Having accurate information about you enables us to provide you with a smooth, efficient, and personalized experience. We may use the information we collect about you to:
          </p>
          <ul className="list-disc pl-5 my-4 space-y-2">
            <li>Create and manage your account.</li>
            <li>Process your meal and menu photos to provide food safety analysis and recommendations.</li>
            <li>Respond to your inquiries and customer service requests.</li>
            <li>Send you administrative information, such as updates, security alerts, and support messages.</li>
            <li>Send you marketing and promotional communications (with your consent).</li>
            <li>Compile anonymous statistical data for research and analysis.</li>
            <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Disclosure of Your Information</h2>
          <p className="mb-4">
            We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
          </p>
          <ul className="list-disc pl-5 my-4 space-y-2">
            <li><strong>By Law or to Protect Rights:</strong> If required by law, or if we believe the release of information is necessary to protect our rights.</li>
            <li><strong>Business Partners:</strong> With your consent, to our business partners to offer certain products, services, or promotions.</li>
            <li><strong>Third-Party Service Providers:</strong> To third parties that perform services on our behalf, such as payment processing, data analysis, email delivery, and hosting services.</li>
            <li><strong>Business Transfers:</strong> If we or our subsidiaries are involved in a merger, acquisition, or asset sale, your information may be transferred as part of that transaction.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Security of Your Information</h2>
          <p className="mb-4">
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the information you provide to us, please be aware that no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Privacy Rights</h2>
          <p className="mb-4">
            You have the right to access, correct, delete, restrict, or object to our use of your personal data. To exercise these rights, please contact us at privacy@pickleapp.com.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Us</h2>
          <p className="mb-4">
            If you have questions or concerns about this Privacy Policy, please contact us at:
          </p>
          <p className="mb-4">
            Pickle App Inc.<br />
            privacy@pickleapp.com<br />
            123 App Street, Suite 101<br />
            San Francisco, CA 94105
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
