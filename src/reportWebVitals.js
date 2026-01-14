import { onCLS, onINP, onFCP, onLCP, onTTFB } from "web-vitals";

function sendToAnalytics(metric) {
  // In development, log to console
  if (process.env.NODE_ENV === "development") {
    console.log(metric);
  }

  // In production, you can send to your analytics service
  // Example: Google Analytics, Sentry, etc.
  // if (process.env.NODE_ENV === 'production') {
  //   // Send to your analytics endpoint
  //   // fetch('/api/analytics', {
  //   //   method: 'POST',
  //   //   body: JSON.stringify(metric),
  //   // });
  // }
}

export function reportWebVitals() {
  onCLS(sendToAnalytics); // Cumulative Layout Shift
  onINP(sendToAnalytics); // Interaction to Next Paint (replaces FID)
  onFCP(sendToAnalytics); // First Contentful Paint
  onLCP(sendToAnalytics); // Largest Contentful Paint
  onTTFB(sendToAnalytics); // Time to First Byte
}
