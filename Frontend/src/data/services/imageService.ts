// Image Service
// Handles image URLs and CDN management

import trustIndicatorsBackgroundImage from '@/assets/images/trustIndicatorsBackground.jpg';
import trustIndicatorsMapImage from '@/assets/images/trustIndicatorsMap.jpg';
import whyChooseUsImage from '@/assets/images/Arizontal-Poster.jpg';
import careersTeaserImage from '@/assets/images/careersTeaser.jpg';
import logoImage from '@/assets/images/logo.jpeg';
import overlay1Image from '@/assets/images/overlay1.jpg';
import truck1Image from '@/assets/images/truck1.jpg';
import truck2Image from '@/assets/images/truck2.jpg';
import truck3Image from '@/assets/images/truck3.jpg';
import truck4Image from '@/assets/images/Arizontal-poster2.jpg';

export const IMAGE_URLS = {
  trustIndicatorsBackground: trustIndicatorsBackgroundImage,
  trustIndicatorsMap: trustIndicatorsMapImage,
  whyChooseUs: whyChooseUsImage,
  careersTeaser: careersTeaserImage,
  logo: logoImage,
  overlay1: overlay1Image,
  truck1: truck1Image,
  truck2: truck2Image,
  truck3: truck3Image,
  truck4: truck4Image,
} as const;

/**
 * Get image URL by key
 */
export const getImageUrl = (key: keyof typeof IMAGE_URLS): string => {
  return IMAGE_URLS[key];
};
