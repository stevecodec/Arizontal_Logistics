// SEO Hook for dynamic meta tag management
import { useEffect } from 'react';

interface SEOConfig {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonical?: string;
  noindex?: boolean;
}

/**
 * Hook to dynamically update SEO meta tags for each page
 */
export const useSEO = (config: SEOConfig) => {
  useEffect(() => {
    // Update title
    if (config.title) {
      document.title = config.title;
    }

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.content = content;
    };

    // Update description
    if (config.description) {
      updateMetaTag('description', config.description);
      updateMetaTag('og:description', config.description, true);
      updateMetaTag('twitter:description', config.description);
    }

    // Update keywords
    if (config.keywords) {
      updateMetaTag('keywords', config.keywords);
    }

    // Update Open Graph title
    if (config.ogTitle || config.title) {
      updateMetaTag('og:title', config.ogTitle || config.title || '', true);
      updateMetaTag('twitter:title', config.ogTitle || config.title || '');
    }

    // Update Open Graph description
    if (config.ogDescription) {
      updateMetaTag('og:description', config.ogDescription, true);
      updateMetaTag('twitter:description', config.ogDescription);
    }

    // Update Open Graph image
    if (config.ogImage) {
      updateMetaTag('og:image', config.ogImage, true);
      updateMetaTag('twitter:image', config.ogImage);
    }

    // Update canonical URL
    if (config.canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      
      if (!link) {
        link = document.createElement('link');
        link.rel = 'canonical';
        document.head.appendChild(link);
      }
      
      link.href = config.canonical;
    }

    // Update robots meta
    if (config.noindex) {
      updateMetaTag('robots', 'noindex, nofollow');
    } else {
      updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    }

    // Update og:url
    if (config.canonical) {
      updateMetaTag('og:url', config.canonical, true);
      updateMetaTag('twitter:url', config.canonical);
    }

  }, [config]);
};
