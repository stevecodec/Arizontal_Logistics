// Image Service
// Handles image URLs and CDN management

import trustIndicatorsBackgroundImage from '@/assets/images/trustIndicatorsBackground.jpg';
import trustIndicatorsMapImage from '@/assets/images/trustIndicatorsMap.jpg';
import whyChooseUsImage from '@/assets/images/Arizontal Poster.jpg';
import careersTeaserImage from '@/assets/images/careersTeaser.jpg';
import logoImage from '@/assets/images/logo.jpeg';
import overlay1Image from '@/assets/images/overlay1.jpg';

export const IMAGE_URLS = {
  trustIndicatorsBackground: trustIndicatorsBackgroundImage,
  trustIndicatorsMap: trustIndicatorsMapImage,
  whyChooseUs: whyChooseUsImage,
  careersTeaser: careersTeaserImage,
  logo: logoImage,
  overlay1: overlay1Image,
} as const;

/**
 * Get image URL by key
 */
export const getImageUrl = (key: keyof typeof IMAGE_URLS): string => {
  return IMAGE_URLS[key];
};
