// Footer Component (View Layer)

import { Link } from 'react-router-dom';
import { CONTACT_INFO, FOOTER_LINKS, SOCIAL_LINKS } from '@/constants';
import { getImageUrl } from '@/data/services/imageService';

export const Footer = () => {
  return (
    <footer className="bg-theme-footer text-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 text-[80px] sm:text-[120px] lg:text-[180px] font-bold text-white/5 text-center leading-none pb-4 sm:pb-8 select-none pointer-events-none whitespace-nowrap">
        ARIZONTAL
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          <div>
            <img
              src={getImageUrl('logo')}
              alt="Arizontal Logistics"
              className="h-12 w-auto object-contain mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Trusted logistics solutions connecting North Carolina to the nation with reliable freight brokerage and carrier services.
            </p>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4 pb-2 border-b-2 border-[#d48634] inline-block">Quick Links</h4>
            <ul className="space-y-2 mt-4">
              {FOOTER_LINKS.quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-gray-400 hover:text-theme-primary transition-colors text-sm cursor-pointer">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4 pb-2 border-b-2 border-[#d48634] inline-block">Contact Info</h4>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start">
                <i className="ri-phone-line text-theme-primary mt-1 mr-3"></i>
                <span className="text-gray-400 text-sm">{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-start">
                <i className="ri-mail-line text-theme-primary mt-1 mr-3"></i>
                <span className="text-gray-400 text-sm">{CONTACT_INFO.email}</span>
              </li>
              <li className="flex items-start">
                <i className="ri-map-pin-line text-theme-primary mt-1 mr-3 flex-shrink-0"></i>
                <span className="text-gray-400 text-sm break-words">{CONTACT_INFO.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4 pb-2 border-b-2 border-[#d48634] inline-block">Newsletter</h4>
            <p className="text-gray-400 text-xs sm:text-sm mb-4 mt-4">Stay updated with our latest news and offers</p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 sm:px-4 py-2 sm:rounded-l-lg rounded-lg sm:rounded-r-none bg-white/10 border border-white/20 text-white text-xs sm:text-sm focus:outline-none focus:border-theme-primary"
              />
              <button className="bg-[#d48634] px-4 py-2 sm:rounded-r-lg rounded-lg sm:rounded-l-none hover:bg-[#E55A28] transition-colors whitespace-nowrap cursor-pointer text-sm border-b-2 border-[#d48634]">
                <i className="ri-send-plane-fill"></i> <span className="sm:hidden">Subscribe</span>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Arizontal Logistics. All rights reserved.
          </p>
          <div className="flex items-center space-x-2">
            <div className="flex space-x-4">
              <a href={SOCIAL_LINKS.instagram} className="text-gray-400 hover:text-theme-primary transition-colors cursor-pointer">
                <i className="ri-instagram-fill text-xl"></i>
              </a>
              <a href={SOCIAL_LINKS.facebook} className="text-gray-400 hover:text-theme-primary transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-xl"></i>
              </a>
              <a href={SOCIAL_LINKS.twitter} className="text-gray-400 hover:text-theme-primary transition-colors cursor-pointer">
                <i className="ri-twitter-x-fill text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
