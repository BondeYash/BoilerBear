import type { ModuleManifest } from '@boilerbear/core';

import { angularOpenai } from './ai/angular-openai.js';
import { openaiJs } from './ai/openai-js.js';
import { vercelAiSdk } from './ai/vercel-ai-sdk.js';
import { posthog } from './analytics/posthog.js';
import { alpineAuth } from './auth/alpine-auth.js';
import { angularAuthOidcClient } from './auth/angular-auth-oidc-client.js';
import { astroAuth } from './auth/astro-auth.js';
import { authSveltekit } from './auth/auth-sveltekit.js';
import { clerk } from './auth/clerk.js';
import { emberSimpleAuth } from './auth/ember-simple-auth.js';
import { htmxAuthHeaders } from './auth/htmx-auth-headers.js';
import { luciaAuth } from './auth/lucia-auth.js';
import { markoAuth } from './auth/marko-auth.js';
import { mithrilAuth } from './auth/mithril-auth.js';
import { nextAuth } from './auth/next-auth.js';
import { nuxtAuthUtils } from './auth/nuxt-auth-utils.js';
import { preactClerk } from './auth/preact-clerk.js';
import { qwikAuth } from './auth/qwik-auth.js';
import { remixAuth } from './auth/remix-auth.js';
import { solidAuth } from './auth/solid-auth.js';
import { vueAuth } from './auth/vue-auth.js';
import { angularFirebase } from './ci/angular-firebase.js';
import { astroVercel } from './ci/astro-vercel.js';
import { emberCliDeploy } from './ci/ember-cli-deploy.js';
import { githubActions } from './ci/github-actions.js';
import { markoVercel } from './ci/marko-vercel.js';
import { netlify } from './ci/netlify.js';
import { nuxtVercel } from './ci/nuxt-vercel.js';
import { qwikCloudflare } from './ci/qwik-cloudflare.js';
import { remixVercel } from './ci/remix-vercel.js';
import { solidStartVercel } from './ci/solid-start-vercel.js';
import { sveltekitVercel } from './ci/sveltekit-vercel.js';
import { vercel } from './ci/vercel.js';
import { alpineDevtools } from './components/alpine-devtools.js';
import { alpineTransition } from './components/alpine-transition.js';
import { angularAnimations } from './components/angular-animations.js';
import { astroDevtoolbar } from './components/astro-devtoolbar.js';
import { chakraUi } from './components/chakra-ui.js';
import { emberAnimated } from './components/ember-animated.js';
import { emberInspector } from './components/ember-inspector.js';
import { framerMotion } from './components/framer-motion.js';
import { histoire } from './components/histoire.js';
import { htmxClassTools } from './components/htmx-class-tools.js';
import { htmxDebug } from './components/htmx-debug.js';
import { litMotion } from './components/lit-motion.js';
import { mithrilAnimate } from './components/mithril-animate.js';
import { mithrilInspector } from './components/mithril-inspector.js';
import { motionV } from './components/motion-v.js';
import { motion } from './components/motion.js';
import { motiononeSolid } from './components/motionone-solid.js';
import { motionone } from './components/motionone.js';
import { mui } from './components/mui.js';
import { nuxtDevtools } from './components/nuxt-devtools.js';
import { shadcnUi } from './components/shadcn-ui.js';
import { storybookAngular } from './components/storybook-angular.js';
import { storybookWebComponents } from './components/storybook-web-components.js';
import { storybook } from './components/storybook.js';
import { svelteMotion } from './components/svelte-motion.js';
import { svelteTransition } from './components/svelte-transition.js';
import { swr } from './data/swr.js';
import { tanstackQuerySolid } from './data/tanstack-query-solid.js';
import { tanstackQuerySvelte } from './data/tanstack-query-svelte.js';
import { tanstackQueryVue } from './data/tanstack-query-vue.js';
import { tanstackQuery } from './data/tanstack-query.js';
import { astroDb } from './database/astro-db.js';
import { betterSqlite3 } from './database/better-sqlite3.js';
import { cassandraDriver } from './database/cassandra-driver.js';
import { couchbase } from './database/couchbase.js';
import { elasticsearch } from './database/elasticsearch.js';
import { firebaseAdmin } from './database/firebase-admin.js';
import { influxdbClient } from './database/influxdb-client.js';
import { ioredis } from './database/ioredis.js';
import { mongodb } from './database/mongodb.js';
import { mssql } from './database/mssql.js';
import { mysql2 } from './database/mysql2.js';
import { nano } from './database/nano.js';
import { neo4jDriver } from './database/neo4j-driver.js';
import { neonServerless } from './database/neon-serverless.js';
import { nodeRedis } from './database/node-redis.js';
import { pg } from './database/pg.js';
import { planetscaleDatabase } from './database/planetscale-database.js';
import { pocketbase } from './database/pocketbase.js';
import { pouchdb } from './database/pouchdb.js';
import { sqlite3 } from './database/sqlite3.js';
import { supabaseJs } from './database/supabase-js.js';
import { brevo } from './email/brevo.js';
import { courier } from './email/courier.js';
import { emailjs } from './email/emailjs.js';
import { loops } from './email/loops.js';
import { mailchimpMarketing } from './email/mailchimp-marketing.js';
import { mailersend } from './email/mailersend.js';
import { mailgunJs } from './email/mailgun-js.js';
import { mailparser } from './email/mailparser.js';
import { mailtrap } from './email/mailtrap.js';
import { mandrill } from './email/mandrill.js';
import { mjml } from './email/mjml.js';
import { nodemailer } from './email/nodemailer.js';
import { plunk } from './email/plunk.js';
import { postmark } from './email/postmark.js';
import { reactEmail } from './email/react-email.js';
import { resend } from './email/resend.js';
import { sendgridMail } from './email/sendgrid-mail.js';
import { ses } from './email/ses.js';
import { sparkpost } from './email/sparkpost.js';
import { zeptomail } from './email/zeptomail.js';
import { alpineValidate } from './forms/alpine-validate.js';
import { angularReactiveForms } from './forms/angular-reactive-forms.js';
import { astroForm } from './forms/astro-form.js';
import { emberChangesetValidations } from './forms/ember-changeset-validations.js';
import { felte } from './forms/felte.js';
import { htmxForms } from './forms/htmx-forms.js';
import { litFormController } from './forms/lit-form-controller.js';
import { markoForms } from './forms/marko-forms.js';
import { mithrilForms } from './forms/mithril-forms.js';
import { modularFormsQwik } from './forms/modular-forms-qwik.js';
import { modularFormsSolid } from './forms/modular-forms-solid.js';
import { remixValidatedForm } from './forms/remix-validated-form.js';
import { stencilForms } from './forms/stencil-forms.js';
import { sveltekitSuperforms } from './forms/sveltekit-superforms.js';
import { alpine } from './frameworks/alpine.js';
import { angular } from './frameworks/angular.js';
import { astro } from './frameworks/astro.js';
import { ember } from './frameworks/ember.js';
import { htmx } from './frameworks/htmx.js';
import { lit } from './frameworks/lit.js';
import { marko } from './frameworks/marko.js';
import { mithril } from './frameworks/mithril.js';
import { next } from './frameworks/next.js';
import { nuxt } from './frameworks/nuxt.js';
import { preact } from './frameworks/preact.js';
import { qwik } from './frameworks/qwik.js';
import { react } from './frameworks/react.js';
import { remix } from './frameworks/remix.js';
import { solidStart } from './frameworks/solid-start.js';
import { solid } from './frameworks/solid.js';
import { stencil } from './frameworks/stencil.js';
import { svelte } from './frameworks/svelte.js';
import { sveltekit } from './frameworks/sveltekit.js';
import { vite } from './frameworks/vite.js';
import { vue } from './frameworks/vue.js';
import { alpineFetch } from './http/alpine-fetch.js';
import { angularHttpClient } from './http/angular-http-client.js';
import { apisauce } from './http/apisauce.js';
import { astroEndpoints } from './http/astro-endpoints.js';
import { axios } from './http/axios.js';
import { crossFetch } from './http/cross-fetch.js';
import { emberAjax } from './http/ember-ajax.js';
import { followRedirects } from './http/follow-redirects.js';
import { formData } from './http/form-data.js';
import { got } from './http/got.js';
import { htmxAjax } from './http/htmx-ajax.js';
import { httpProxyAgent } from './http/http-proxy-agent.js';
import { httpsProxyAgent } from './http/https-proxy-agent.js';
import { isomorphicFetch } from './http/isomorphic-fetch.js';
import { ky } from './http/ky.js';
import { litFetch } from './http/lit-fetch.js';
import { markoRunApi } from './http/marko-run-api.js';
import { mithrilRequest } from './http/mithril-request.js';
import { needle } from './http/needle.js';
import { nitroH3 } from './http/nitro-h3.js';
import { nodeFetch } from './http/node-fetch.js';
import { ofetch } from './http/ofetch.js';
import { phin } from './http/phin.js';
import { qwikResource } from './http/qwik-resource.js';
import { remixLoaderAction } from './http/remix-loader-action.js';
import { socksProxyAgent } from './http/socks-proxy-agent.js';
import { solidStartApi } from './http/solid-start-api.js';
import { superagent } from './http/superagent.js';
import { sveltekitEndpoints } from './http/sveltekit-endpoints.js';
import { toughCookie } from './http/tough-cookie.js';
import { trpc } from './http/trpc.js';
import { undici } from './http/undici.js';
import { urllib } from './http/urllib.js';
import { wretch } from './http/wretch.js';
import { biome } from './lint/biome.js';
import { eslintPrettier } from './lint/eslint-prettier.js';
import { huskyLintStaged } from './lint/husky-lint-staged.js';
import { alpineI18n } from './misc/alpine-i18n.js';
import { alpineWs } from './misc/alpine-ws.js';
import { angularMetaService } from './misc/angular-meta-service.js';
import { angularSanitizer } from './misc/angular-sanitizer.js';
import { astroContentCollections } from './misc/astro-content-collections.js';
import { astroCsp } from './misc/astro-csp.js';
import { astroI18n } from './misc/astro-i18n.js';
import { astroSeo } from './misc/astro-seo.js';
import { contentlayer } from './misc/contentlayer.js';
import { dompurify } from './misc/dompurify.js';
import { emberCliPusher } from './misc/ember-cli-pusher.js';
import { emberCliContentSecurityPolicy } from './misc/ember-csp.js';
import { emberIntl } from './misc/ember-intl.js';
import { emberPageTitle } from './misc/ember-page-title.js';
import { emberSentry } from './misc/ember-sentry.js';
import { helmet } from './misc/helmet.js';
import { htmxHeadSupport } from './misc/htmx-head-support.js';
import { htmxWs } from './misc/htmx-ws.js';
import { i18next } from './misc/i18next.js';
import { litLocalize } from './misc/lit-localize.js';
import { litMeta } from './misc/lit-meta.js';
import { markoHead } from './misc/marko-head.js';
import { mdsvex } from './misc/mdsvex.js';
import { mithrilI18n } from './misc/mithril-i18n.js';
import { mithrilMeta } from './misc/mithril-meta.js';
import { nextIntl } from './misc/next-intl.js';
import { nextSafe } from './misc/next-safe.js';
import { nextSeo } from './misc/next-seo.js';
import { ngxSocketIo } from './misc/ngx-socket-io.js';
import { ngxTranslate } from './misc/ngx-translate.js';
import { nuxtContent } from './misc/nuxt-content.js';
import { nuxtI18n } from './misc/nuxt-i18n.js';
import { nuxtPusher } from './misc/nuxt-pusher.js';
import { nuxtSecurity } from './misc/nuxt-security.js';
import { nuxtSentry } from './misc/nuxt-sentry.js';
import { nuxtSeo } from './misc/nuxt-seo.js';
import { paraglideJs } from './misc/paraglide-js.js';
import { partysocket } from './misc/partysocket.js';
import { preactHelmet } from './misc/preact-helmet.js';
import { preactI18n } from './misc/preact-i18n.js';
import { pusherJs } from './misc/pusher-js.js';
import { qwikImage } from './misc/qwik-image.js';
import { qwikSpeak } from './misc/qwik-speak.js';
import { reactHelmetAsync } from './misc/react-helmet-async.js';
import { reactHookForm } from './misc/react-hook-form.js';
import { reactI18next } from './misc/react-i18next.js';
import { remixI18next } from './misc/remix-i18next.js';
import { remixPusher } from './misc/remix-pusher.js';
import { remixSeo } from './misc/remix-seo.js';
import { sanity } from './misc/sanity.js';
import { sentryAngular } from './misc/sentry-angular.js';
import { sentryAstro } from './misc/sentry-astro.js';
import { sentryBrowser } from './misc/sentry-browser.js';
import { sentryMarko } from './misc/sentry-marko.js';
import { sentryNextjs } from './misc/sentry-nextjs.js';
import { sentryPreact } from './misc/sentry-preact.js';
import { sentryQwik } from './misc/sentry-qwik.js';
import { sentryReact } from './misc/sentry-react.js';
import { sentryRemix } from './misc/sentry-remix.js';
import { sentrySolid } from './misc/sentry-solid.js';
import { sentrySvelte } from './misc/sentry-svelte.js';
import { sentrySveltekit } from './misc/sentry-sveltekit.js';
import { sentryVue } from './misc/sentry-vue.js';
import { socketIoClient } from './misc/socket-io-client.js';
import { solidI18n } from './misc/solid-i18n.js';
import { solidMeta } from './misc/solid-meta.js';
import { stencilI18n } from './misc/stencil-i18n.js';
import { stencilMeta } from './misc/stencil-meta.js';
import { svelteCsp } from './misc/svelte-csp.js';
import { svelteI18n } from './misc/svelte-i18n.js';
import { svelteMetaTags } from './misc/svelte-meta-tags.js';
import { unheadVue } from './misc/unhead-vue.js';
import { veeValidate } from './misc/vee-validate.js';
import { vueI18n } from './misc/vue-i18n.js';
import { zod } from './misc/zod.js';
import { bookshelf } from './orm/bookshelf.js';
import { drizzleOrm } from './orm/drizzle-orm.js';
import { dynamoose } from './orm/dynamoose.js';
import { edgedbJs } from './orm/edgedb-js.js';
import { fireorm } from './orm/fireorm.js';
import { knex } from './orm/knex.js';
import { kysely } from './orm/kysely.js';
import { lucid } from './orm/lucid.js';
import { mikroOrm } from './orm/mikro-orm.js';
import { mongoose } from './orm/mongoose.js';
import { nestjsTypeorm } from './orm/nestjs-typeorm.js';
import { objection } from './orm/objection.js';
import { ottoman } from './orm/ottoman.js';
import { prisma } from './orm/prisma.js';
import { sequelize } from './orm/sequelize.js';
import { slonik } from './orm/slonik.js';
import { typegoose } from './orm/typegoose.js';
import { typeorm } from './orm/typeorm.js';
import { waterline } from './orm/waterline.js';
import { zapatos } from './orm/zapatos.js';
import { emberStripeService } from './payments/ember-stripe-service.js';
import { ngxStripe } from './payments/ngx-stripe.js';
import { stripeJs } from './payments/stripe-js.js';
import { stripeNode } from './payments/stripe-node.js';
import { django } from './py/frameworks/django.js';
import { fastapi } from './py/frameworks/fastapi.js';
import { flask } from './py/frameworks/flask.js';
import { litestar } from './py/frameworks/litestar.js';
import { black } from './py/lint/black.js';
import { ruff } from './py/lint/ruff.js';
import { pytest } from './py/testing/pytest.js';
import { angularRouter } from './routing/angular-router.js';
import { htmxBoost } from './routing/htmx-boost.js';
import { litRouter } from './routing/lit-router.js';
import { mithrilRoute } from './routing/mithril-route.js';
import { preactRouter } from './routing/preact-router.js';
import { qwikCity } from './routing/qwik-city.js';
import { reactRouter } from './routing/react-router.js';
import { solidRouter } from './routing/solid-router.js';
import { stencilRouter } from './routing/stencil-router.js';
import { svelteRouting } from './routing/svelte-routing.js';
import { vueRouter } from './routing/vue-router.js';
import { alpineStore } from './state/alpine-store.js';
import { emberData } from './state/ember-data.js';
import { hyperscript } from './state/hyperscript.js';
import { jotai } from './state/jotai.js';
import { litSignals } from './state/lit-signals.js';
import { markoState } from './state/marko-state.js';
import { mithrilStream } from './state/mithril-stream.js';
import { nanostores } from './state/nanostores.js';
import { ngrxStore } from './state/ngrx-store.js';
import { pinia } from './state/pinia.js';
import { preactSignals } from './state/preact-signals.js';
import { qwikSignals } from './state/qwik-signals.js';
import { reduxToolkit } from './state/redux-toolkit.js';
import { solidStore } from './state/solid-store.js';
import { stencilStore } from './state/stencil-store.js';
import { sveltekitStores } from './state/sveltekit-stores.js';
import { zustand } from './state/zustand.js';
import { astroCloudinary } from './storage/astro-cloudinary.js';
import { emberFileUpload } from './storage/ember-file-upload.js';
import { filepondVue } from './storage/filepond-vue.js';
import { filepond } from './storage/filepond.js';
import { htmxUploads } from './storage/htmx-uploads.js';
import { markoUpload } from './storage/marko-upload.js';
import { ngxFileDrop } from './storage/ngx-file-drop.js';
import { nuxtUploadthing } from './storage/nuxt-uploadthing.js';
import { qwikUploadthing } from './storage/qwik-uploadthing.js';
import { remixUploadHandler } from './storage/remix-upload-handler.js';
import { solidStartUpload } from './storage/solid-start-upload.js';
import { sveltekitUploadthing } from './storage/sveltekit-uploadthing.js';
import { uploadthing } from './storage/uploadthing.js';
import { emberQunit } from './testing/ember-qunit.js';
import { karmaJasmine } from './testing/karma-jasmine.js';
import { mocha } from './testing/mocha.js';
import { playwright } from './testing/playwright.js';
import { stencilJest } from './testing/stencil-jest.js';
import { testingLibrary } from './testing/testing-library.js';
import { vitestModule } from './testing/vitest.js';
import { webTestRunner } from './testing/web-test-runner.js';
import { angularMaterial } from './ui/angular-material.js';
import { emberTailwind } from './ui/ember-tailwind.js';
import { nuxtUi } from './ui/nuxt-ui.js';
import { sass } from './ui/sass.js';
import { tailwindLit } from './ui/tailwind-lit.js';
import { tailwindcss } from './ui/tailwindcss.js';

export const allManifests: ReadonlyArray<ModuleManifest> = [
  alpine,
  alpineAuth,
  alpineDevtools,
  alpineFetch,
  alpineI18n,
  alpineStore,
  alpineTransition,
  alpineValidate,
  alpineWs,
  angular,
  angularAnimations,
  angularAuthOidcClient,
  angularFirebase,
  angularHttpClient,
  angularMaterial,
  angularMetaService,
  angularOpenai,
  angularReactiveForms,
  angularRouter,
  angularSanitizer,
  apisauce,
  astro,
  astroAuth,
  astroCloudinary,
  astroContentCollections,
  astroCsp,
  astroDb,
  astroDevtoolbar,
  astroEndpoints,
  astroForm,
  astroI18n,
  astroSeo,
  astroVercel,
  authSveltekit,
  axios,
  betterSqlite3,
  biome,
  black,
  bookshelf,
  brevo,
  cassandraDriver,
  chakraUi,
  clerk,
  contentlayer,
  couchbase,
  courier,
  crossFetch,
  django,
  dompurify,
  drizzleOrm,
  dynamoose,
  edgedbJs,
  elasticsearch,
  emailjs,
  ember,
  emberAjax,
  emberAnimated,
  emberChangesetValidations,
  emberCliContentSecurityPolicy,
  emberCliDeploy,
  emberCliPusher,
  emberData,
  emberFileUpload,
  emberInspector,
  emberIntl,
  emberPageTitle,
  emberQunit,
  emberSentry,
  emberSimpleAuth,
  emberStripeService,
  emberTailwind,
  eslintPrettier,
  fastapi,
  felte,
  filepond,
  filepondVue,
  firebaseAdmin,
  fireorm,
  flask,
  followRedirects,
  formData,
  framerMotion,
  githubActions,
  got,
  helmet,
  histoire,
  htmx,
  htmxAjax,
  htmxAuthHeaders,
  htmxBoost,
  htmxClassTools,
  htmxDebug,
  htmxForms,
  htmxHeadSupport,
  htmxUploads,
  htmxWs,
  httpProxyAgent,
  httpsProxyAgent,
  huskyLintStaged,
  hyperscript,
  i18next,
  influxdbClient,
  ioredis,
  isomorphicFetch,
  jotai,
  karmaJasmine,
  knex,
  ky,
  kysely,
  lit,
  litFetch,
  litFormController,
  litLocalize,
  litMeta,
  litMotion,
  litRouter,
  litSignals,
  litestar,
  loops,
  luciaAuth,
  lucid,
  mailchimpMarketing,
  mailersend,
  mailgunJs,
  mailparser,
  mailtrap,
  mandrill,
  marko,
  markoAuth,
  markoForms,
  markoHead,
  markoRunApi,
  markoState,
  markoUpload,
  markoVercel,
  mdsvex,
  mikroOrm,
  mithril,
  mithrilAnimate,
  mithrilAuth,
  mithrilForms,
  mithrilI18n,
  mithrilInspector,
  mithrilMeta,
  mithrilRequest,
  mithrilRoute,
  mithrilStream,
  mjml,
  mocha,
  modularFormsQwik,
  modularFormsSolid,
  mongodb,
  mongoose,
  motion,
  motionV,
  motionone,
  motiononeSolid,
  mssql,
  mui,
  mysql2,
  nano,
  nanostores,
  needle,
  neo4jDriver,
  neonServerless,
  nestjsTypeorm,
  netlify,
  next,
  nextAuth,
  nextIntl,
  nextSafe,
  nextSeo,
  ngrxStore,
  ngxFileDrop,
  ngxSocketIo,
  ngxStripe,
  ngxTranslate,
  nitroH3,
  nodeFetch,
  nodeRedis,
  nodemailer,
  nuxt,
  nuxtAuthUtils,
  nuxtContent,
  nuxtDevtools,
  nuxtI18n,
  nuxtPusher,
  nuxtSecurity,
  nuxtSentry,
  nuxtSeo,
  nuxtUi,
  nuxtUploadthing,
  nuxtVercel,
  objection,
  ofetch,
  openaiJs,
  ottoman,
  paraglideJs,
  partysocket,
  pg,
  phin,
  pinia,
  planetscaleDatabase,
  playwright,
  plunk,
  pocketbase,
  posthog,
  postmark,
  pouchdb,
  preact,
  preactClerk,
  preactHelmet,
  preactI18n,
  preactRouter,
  preactSignals,
  prisma,
  pusherJs,
  pytest,
  qwik,
  qwikAuth,
  qwikCity,
  qwikCloudflare,
  qwikImage,
  qwikResource,
  qwikSignals,
  qwikSpeak,
  qwikUploadthing,
  react,
  reactEmail,
  reactHelmetAsync,
  reactHookForm,
  reactI18next,
  reactRouter,
  reduxToolkit,
  remix,
  remixAuth,
  remixI18next,
  remixLoaderAction,
  remixPusher,
  remixSeo,
  remixUploadHandler,
  remixValidatedForm,
  remixVercel,
  resend,
  ruff,
  sanity,
  sass,
  sendgridMail,
  sentryAngular,
  sentryAstro,
  sentryBrowser,
  sentryMarko,
  sentryNextjs,
  sentryPreact,
  sentryQwik,
  sentryReact,
  sentryRemix,
  sentrySolid,
  sentrySvelte,
  sentrySveltekit,
  sentryVue,
  sequelize,
  ses,
  shadcnUi,
  slonik,
  socketIoClient,
  socksProxyAgent,
  solid,
  solidAuth,
  solidI18n,
  solidMeta,
  solidRouter,
  solidStart,
  solidStartApi,
  solidStartUpload,
  solidStartVercel,
  solidStore,
  sparkpost,
  sqlite3,
  stencil,
  stencilForms,
  stencilI18n,
  stencilJest,
  stencilMeta,
  stencilRouter,
  stencilStore,
  storybook,
  storybookAngular,
  storybookWebComponents,
  stripeJs,
  stripeNode,
  supabaseJs,
  superagent,
  svelte,
  svelteCsp,
  svelteI18n,
  svelteMetaTags,
  svelteMotion,
  svelteRouting,
  svelteTransition,
  sveltekit,
  sveltekitEndpoints,
  sveltekitStores,
  sveltekitSuperforms,
  sveltekitUploadthing,
  sveltekitVercel,
  swr,
  tailwindLit,
  tailwindcss,
  tanstackQuery,
  tanstackQuerySolid,
  tanstackQuerySvelte,
  tanstackQueryVue,
  testingLibrary,
  toughCookie,
  trpc,
  typegoose,
  typeorm,
  undici,
  unheadVue,
  uploadthing,
  urllib,
  veeValidate,
  vercel,
  vercelAiSdk,
  vite,
  vitestModule,
  vue,
  vueAuth,
  vueI18n,
  vueRouter,
  waterline,
  webTestRunner,
  wretch,
  zapatos,
  zeptomail,
  zod,
  zustand,
];

export {
  alpine,
  alpineAuth,
  alpineDevtools,
  alpineFetch,
  alpineI18n,
  alpineStore,
  alpineTransition,
  alpineValidate,
  alpineWs,
  angular,
  angularAnimations,
  angularAuthOidcClient,
  angularFirebase,
  angularHttpClient,
  angularMaterial,
  angularMetaService,
  angularOpenai,
  angularReactiveForms,
  angularRouter,
  angularSanitizer,
  apisauce,
  astro,
  astroAuth,
  astroCloudinary,
  astroContentCollections,
  astroCsp,
  astroDb,
  astroDevtoolbar,
  astroEndpoints,
  astroForm,
  astroI18n,
  astroSeo,
  astroVercel,
  authSveltekit,
  axios,
  betterSqlite3,
  biome,
  black,
  bookshelf,
  brevo,
  cassandraDriver,
  chakraUi,
  clerk,
  contentlayer,
  couchbase,
  courier,
  crossFetch,
  django,
  dompurify,
  drizzleOrm,
  dynamoose,
  edgedbJs,
  elasticsearch,
  emailjs,
  ember,
  emberAjax,
  emberAnimated,
  emberChangesetValidations,
  emberCliContentSecurityPolicy,
  emberCliDeploy,
  emberCliPusher,
  emberData,
  emberFileUpload,
  emberInspector,
  emberIntl,
  emberPageTitle,
  emberQunit,
  emberSentry,
  emberSimpleAuth,
  emberStripeService,
  emberTailwind,
  eslintPrettier,
  fastapi,
  felte,
  filepond,
  filepondVue,
  firebaseAdmin,
  fireorm,
  flask,
  followRedirects,
  formData,
  framerMotion,
  githubActions,
  got,
  helmet,
  histoire,
  htmx,
  htmxAjax,
  htmxAuthHeaders,
  htmxBoost,
  htmxClassTools,
  htmxDebug,
  htmxForms,
  htmxHeadSupport,
  htmxUploads,
  htmxWs,
  httpProxyAgent,
  httpsProxyAgent,
  huskyLintStaged,
  hyperscript,
  i18next,
  influxdbClient,
  ioredis,
  isomorphicFetch,
  jotai,
  karmaJasmine,
  knex,
  ky,
  kysely,
  lit,
  litFetch,
  litFormController,
  litLocalize,
  litMeta,
  litMotion,
  litRouter,
  litSignals,
  litestar,
  loops,
  luciaAuth,
  lucid,
  mailchimpMarketing,
  mailersend,
  mailgunJs,
  mailparser,
  mailtrap,
  mandrill,
  marko,
  markoAuth,
  markoForms,
  markoHead,
  markoRunApi,
  markoState,
  markoUpload,
  markoVercel,
  mdsvex,
  mikroOrm,
  mithril,
  mithrilAnimate,
  mithrilAuth,
  mithrilForms,
  mithrilI18n,
  mithrilInspector,
  mithrilMeta,
  mithrilRequest,
  mithrilRoute,
  mithrilStream,
  mjml,
  mocha,
  modularFormsQwik,
  modularFormsSolid,
  mongodb,
  mongoose,
  motion,
  motionV,
  motionone,
  motiononeSolid,
  mssql,
  mui,
  mysql2,
  nano,
  nanostores,
  needle,
  neo4jDriver,
  neonServerless,
  nestjsTypeorm,
  netlify,
  next,
  nextAuth,
  nextIntl,
  nextSafe,
  nextSeo,
  ngrxStore,
  ngxFileDrop,
  ngxSocketIo,
  ngxStripe,
  ngxTranslate,
  nitroH3,
  nodeFetch,
  nodeRedis,
  nodemailer,
  nuxt,
  nuxtAuthUtils,
  nuxtContent,
  nuxtDevtools,
  nuxtI18n,
  nuxtPusher,
  nuxtSecurity,
  nuxtSentry,
  nuxtSeo,
  nuxtUi,
  nuxtUploadthing,
  nuxtVercel,
  objection,
  ofetch,
  openaiJs,
  ottoman,
  paraglideJs,
  partysocket,
  pg,
  phin,
  pinia,
  planetscaleDatabase,
  playwright,
  plunk,
  pocketbase,
  posthog,
  postmark,
  pouchdb,
  preact,
  preactClerk,
  preactHelmet,
  preactI18n,
  preactRouter,
  preactSignals,
  prisma,
  pusherJs,
  pytest,
  qwik,
  qwikAuth,
  qwikCity,
  qwikCloudflare,
  qwikImage,
  qwikResource,
  qwikSignals,
  qwikSpeak,
  qwikUploadthing,
  react,
  reactEmail,
  reactHelmetAsync,
  reactHookForm,
  reactI18next,
  reactRouter,
  reduxToolkit,
  remix,
  remixAuth,
  remixI18next,
  remixLoaderAction,
  remixPusher,
  remixSeo,
  remixUploadHandler,
  remixValidatedForm,
  remixVercel,
  resend,
  ruff,
  sanity,
  sass,
  sendgridMail,
  sentryAngular,
  sentryAstro,
  sentryBrowser,
  sentryMarko,
  sentryNextjs,
  sentryPreact,
  sentryQwik,
  sentryReact,
  sentryRemix,
  sentrySolid,
  sentrySvelte,
  sentrySveltekit,
  sentryVue,
  sequelize,
  ses,
  shadcnUi,
  slonik,
  socketIoClient,
  socksProxyAgent,
  solid,
  solidAuth,
  solidI18n,
  solidMeta,
  solidRouter,
  solidStart,
  solidStartApi,
  solidStartUpload,
  solidStartVercel,
  solidStore,
  sparkpost,
  sqlite3,
  stencil,
  stencilForms,
  stencilI18n,
  stencilJest,
  stencilMeta,
  stencilRouter,
  stencilStore,
  storybook,
  storybookAngular,
  storybookWebComponents,
  stripeJs,
  stripeNode,
  supabaseJs,
  superagent,
  svelte,
  svelteCsp,
  svelteI18n,
  svelteMetaTags,
  svelteMotion,
  svelteRouting,
  svelteTransition,
  sveltekit,
  sveltekitEndpoints,
  sveltekitStores,
  sveltekitSuperforms,
  sveltekitUploadthing,
  sveltekitVercel,
  swr,
  tailwindLit,
  tailwindcss,
  tanstackQuery,
  tanstackQuerySolid,
  tanstackQuerySvelte,
  tanstackQueryVue,
  testingLibrary,
  toughCookie,
  trpc,
  typegoose,
  typeorm,
  undici,
  unheadVue,
  uploadthing,
  urllib,
  veeValidate,
  vercel,
  vercelAiSdk,
  vite,
  vitestModule,
  vue,
  vueAuth,
  vueI18n,
  vueRouter,
  waterline,
  webTestRunner,
  wretch,
  zapatos,
  zeptomail,
  zod,
  zustand,
};

export {
  allRecipes,
  alpineStarter,
  angularStarter,
  astroStarter,
  djangoStarter,
  emberStarter,
  fastapiStarter,
  htmxStarter,
  litStarter,
  markoStarter,
  mithrilStarter,
  nextSaasPro,
  nextSaasStarter,
  nuxtStarter,
  preactViteStarter,
  qwikStarter,
  reactViteStarter,
  remixStarter,
  solidStartStarter,
  solidViteStarter,
  stencilStarter,
  svelteViteStarter,
  sveltekitStarter,
  viteClassic,
  vueViteStarter,
} from './recipes/index.js';
export type { Recipe } from './recipes/types.js';
