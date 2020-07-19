  
import * as Sentry from '@sentry/browser'
import { Integrations as ApmIntegrations } from '@sentry/apm'

if (typeof window !== 'undefined' && window._sentry_init !== true) {
  Sentry.init({
    dsn: 'https://781b219582054b85b38c010e1e87b673@o422247.ingest.sentry.io/5346191',
    integrations: [
      new ApmIntegrations.Tracing(),
    ],
    tracesSampleRate: 0.25,
  })
  window._sentry_init = true
}