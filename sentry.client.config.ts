import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://ff37ea59ee51fe40dcc2d5c8e840ab41@o4508646704349184.ingest.de.sentry.io/4508808460501072",

  integrations: [Sentry.replayIntegration()],

  tracesSampleRate: 1,

  replaysSessionSampleRate: 0.1,

  replaysOnErrorSampleRate: 1.0,

  debug: false,
});
