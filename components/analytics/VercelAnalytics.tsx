'use client';

/**
 * Vercel Analytics component
 * 
 * This is a placeholder component for Vercel Analytics.
 * 
 * To enable Vercel Analytics:
 * 1. Install the package: npm install @vercel/analytics
 * 2. Uncomment the import and component below
 * 3. Enable Analytics in your Vercel Dashboard
 * 
 * Vercel Analytics is privacy-friendly and requires no configuration.
 * It automatically tracks page views and Core Web Vitals.
 * 
 * @see https://vercel.com/docs/analytics
 */

// Uncomment to enable Vercel Analytics:
// import { Analytics } from '@vercel/analytics/react';

export function VercelAnalytics() {
  // Uncomment to enable Vercel Analytics:
  // return <Analytics />;
  
  return null;
}

/**
 * Usage in app/layout.tsx:
 * 
 * import { VercelAnalytics } from '@/components/analytics/VercelAnalytics';
 * 
 * export default function RootLayout({ children }) {
 *   return (
 *     <html>
 *       <body>
 *         {children}
 *         <VercelAnalytics />
 *       </body>
 *     </html>
 *   );
 * }
 */
