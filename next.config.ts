import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "img.clerk.com" }],
  },
};

export default withSentryConfig(nextConfig, {
  org: "my-own-company-c1",
  project: "live-editor",

  silent: !process.env.CI,

  widenClientFileUpload: true,

  reactComponentAnnotation: {
    enabled: true,
  },

  tunnelRoute: "/monitoring",

  hideSourceMaps: true,

  disableLogger: true,

  automaticVercelMonitors: true,
});
