
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-black mb-6 uppercase tracking-widest">THE NORTH FACE</h2>
            <p className="text-gray-400 max-w-sm mb-8">
              Never Stop Exploring. We provide the highest quality gear for athletes and the modern explorer.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer">
                <span className="font-bold">IG</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer">
                <span className="font-bold">FB</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer">
                <span className="font-bold">TW</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-[0.2em] text-gray-500">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-medium">
              <li className="hover:text-white transition-colors cursor-pointer">support@tnf-store.com</li>
              <li className="hover:text-white transition-colors cursor-pointer">+1 (555) 123-4567</li>
              <li className="hover:text-white transition-colors cursor-pointer">Live Chat 24/7</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-[0.2em] text-gray-500">Policy</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-medium">
              <li className="hover:text-white transition-colors cursor-pointer">Returns & Exchanges</li>
              <li className="hover:text-white transition-colors cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white transition-colors cursor-pointer">Terms of Service</li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-900 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs font-bold text-gray-600 tracking-wider">
            © 2024 THE NORTH FACE CLONE. FOR DEMONSTRATION ONLY.
          </p>
          <div className="flex items-center gap-6 opacity-40 hover:opacity-100 transition-opacity">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-4" alt="PayPal" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-4" alt="Visa" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-4" alt="Mastercard" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
