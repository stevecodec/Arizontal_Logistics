import { lazy, Suspense } from 'react';
import { RouteObject } from 'react-router-dom';
import { LoadingFallback } from '@/components/LoadingFallback';

const HomePage = lazy(() => import('@/views/home/HomePage'));
const ContactPage = lazy(() => import('@/views/contact/ContactPage'));
const CareersPage = lazy(() => import('@/views/carriers/CarriersPage'));
const TransportationPage = lazy(() => import('@/views/cargo/TransportationPage'));
const AboutPage = lazy(() => import('@/views/about/AboutPage'));
const NotFoundPage = lazy(() => import('@/views/not-found/NotFoundPage'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <HomePage />
      </Suspense>
    ),
  },
  {
    path: '/contact',
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <ContactPage />
      </Suspense>
    ),
  },
  {
    path: '/careers',
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <CareersPage />
      </Suspense>
    ),
  },
  {
    path: '/transportation',
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <TransportationPage />
      </Suspense>
    ),
  },
  {
    path: '/about',
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <AboutPage />
      </Suspense>
    ),
  },
  {
    path: '*',
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <NotFoundPage />
      </Suspense>
    ),
  },
];

export default routes;
