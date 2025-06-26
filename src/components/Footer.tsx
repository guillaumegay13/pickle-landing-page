
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-4 md:px-8 lg:px-16 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Ready to try Bullets?</h2>
            <p className="text-gray-300 mb-6 max-w-md">
              Join thousands of professionals who are saving time and capturing every important detail with Bullets.
            </p>
            <Button 
              size="lg" 
              className="rounded-full bg-white text-black hover:bg-gray-200"
            >
              Download Now
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-medium text-lg mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Download</a></li>
                <li><Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy</Link></li>
                <li><Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Terms</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold">Bullets</span>
          </div>
          <div className="text-gray-400 text-sm">
            &copy; {currentYear} Bullets App. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
