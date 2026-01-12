// Image Service
// Handles image URLs and CDN management

import heroImage from '@/assets/images/hero.jpg';
import trustIndicatorsBackgroundImage from '@/assets/images/trustIndicatorsBackground.jpg';
import trustIndicatorsMapImage from '@/assets/images/trustIndicatorsMap.jpg';
import whyChooseUsImage from '@/assets/images/whyChooseUs.jpg';
import careersTeaserImage from '@/assets/images/careersTeaser.jpg';
import logoImage from '@/assets/images/logo.jpeg';

export const IMAGE_URLS = {
  hero: heroImage,
  trustIndicatorsBackground: trustIndicatorsBackgroundImage,
  trustIndicatorsMap: trustIndicatorsMapImage,
  whyChooseUs: whyChooseUsImage,
  careersTeaser: careersTeaserImage,
  logo: logoImage,
} as const;

/**
 * Get image URL by key
 */
export const getImageUrl = (key: keyof typeof IMAGE_URLS): string => {
  return IMAGE_URLS[key];
};
