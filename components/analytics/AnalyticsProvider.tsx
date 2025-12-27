'use client';

import { GoogleAnalytics } from './GoogleAnalytics';
import { VercelAnalytics } from './VercelAnalytics';

/**
 * Analytics Provider
 * Combines Google Analytics and Vercel Analytics
 * 
 * This component should be added to your root layout to enable analytics tracking.
 * Both analytics platforms can be used simultaneously.
 * 
 * Features:
 * - Google Analytics 4 (GA4) for comprehensive analytics
 * - Vercel Analytics for privacy-friendly, real-time analytics
 * - Automatic page view tracking
 * - Custom event tracking via lib/analytics.ts
 * 
 * Setup:
 * 1. For Google Analytics: Add NEXT_PUBLIC_GA_MEASUREMENT_ID to environment variables
 * 2. For Vercel Analytics: Enable in Vercel Dashboard and install @vercel/analytics
 * 
 * @see ANALYTICS_SETUP.md for detailed setup instructions
 */
export function AnalyticsProvider() {
  return (
    <>
      <GoogleAnalytics />
      <VercelAnalytics />
    </>
  );
}
