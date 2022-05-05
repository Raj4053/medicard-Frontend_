// For simplicity, I changed the implementation of this module
// and removed Raven. We can always add that in the future
// and this module is the only module we need to modify.
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

function init() {
  Sentry.init({
    dsn: "https://abb6a5e031f24599be3c0c82e07c5606@o1228252.ingest.sentry.io/6373945",
    integrations: [new BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });
}

function log(error) {
  console.error(error);
}

export default {
  init,
  log,
};
