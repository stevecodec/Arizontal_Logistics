// TopBar Component - Contact info and social links banner
import { CONTACT_INFO, SOCIAL_LINKS } from '@/constants';

export const TopBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[51] bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between py-0.5 sm:py-1 text-xs">
          {/* Contact Info */}
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <a 
              href={`tel:${CONTACT_INFO.phone}`}
              className="flex items-center gap-1.5 hover:text-theme-secondary transition-colors"
            >
              <i className="ri-phone-line text-sm"></i>
              <span className="hidden sm:inline">{CONTACT_INFO.phone}</span>
            </a>
            <a 
              href={`mailto:${CONTACT_INFO.email}`}
              className="flex items-center gap-1.5 hover:text-theme-secondary transition-colors"
            >
              <i className="ri-mail-line text-sm"></i>
              <span className="hidden sm:inline">{CONTACT_INFO.email}</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.facebook && (
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-theme-secondary transition-colors"
                aria-label="Facebook"
              >
                <i className="ri-facebook-fill text-base"></i>
              </a>
            )}
            {SOCIAL_LINKS.twitter && (
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-theme-secondary transition-colors"
                aria-label="Twitter"
              >
                <i className="ri-twitter-x-line text-base"></i>
              </a>
            )}
            {SOCIAL_LINKS.instagram && (
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-theme-secondary transition-colors"
                aria-label="Instagram"
              >
                <i className="ri-instagram-fill text-base"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
