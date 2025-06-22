import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://ff37ea59ee51fe40dcc2d5c8e840ab41@o4508646704349184.ingest.de.sentry.io/4508808460501072",

  tracesSampleRate: 1,

  debug: false,
});
