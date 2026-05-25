import type { ModuleManifest } from '@boilerbear/core';

import { posthog } from './analytics/posthog.js';
import { clerk } from './auth/clerk.js';
import { nextAuth } from './auth/next-auth.js';
import { githubActions } from './ci/github-actions.js';
import { chakraUi } from './components/chakra-ui.js';
import { mui } from './components/mui.js';
import { shadcnUi } from './components/shadcn-ui.js';
import { swr } from './data/swr.js';
import { tanstackQuery } from './data/tanstack-query.js';
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
import { next } from './frameworks/next.js';
import { vite } from './frameworks/vite.js';
import { apisauce } from './http/apisauce.js';
import { axios } from './http/axios.js';
import { crossFetch } from './http/cross-fetch.js';
import { followRedirects } from './http/follow-redirects.js';
import { formData } from './http/form-data.js';
import { got } from './http/got.js';
import { httpProxyAgent } from './http/http-proxy-agent.js';
import { httpsProxyAgent } from './http/https-proxy-agent.js';
import { isomorphicFetch } from './http/isomorphic-fetch.js';
import { ky } from './http/ky.js';
import { needle } from './http/needle.js';
import { nodeFetch } from './http/node-fetch.js';
import { ofetch } from './http/ofetch.js';
import { phin } from './http/phin.js';
import { socksProxyAgent } from './http/socks-proxy-agent.js';
import { superagent } from './http/superagent.js';
import { toughCookie } from './http/tough-cookie.js';
import { undici } from './http/undici.js';
import { urllib } from './http/urllib.js';
import { wretch } from './http/wretch.js';
import { biome } from './lint/biome.js';
import { eslintPrettier } from './lint/eslint-prettier.js';
import { huskyLintStaged } from './lint/husky-lint-staged.js';
import { reactHookForm } from './misc/react-hook-form.js';
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
import { django } from './py/frameworks/django.js';
import { fastapi } from './py/frameworks/fastapi.js';
import { flask } from './py/frameworks/flask.js';
import { litestar } from './py/frameworks/litestar.js';
import { black } from './py/lint/black.js';
import { ruff } from './py/lint/ruff.js';
import { pytest } from './py/testing/pytest.js';
import { reactRouter } from './routing/react-router.js';
import { jotai } from './state/jotai.js';
import { reduxToolkit } from './state/redux-toolkit.js';
import { zustand } from './state/zustand.js';
import { playwright } from './testing/playwright.js';
import { testingLibrary } from './testing/testing-library.js';
import { vitestModule } from './testing/vitest.js';
import { sass } from './ui/sass.js';
import { tailwindcss } from './ui/tailwindcss.js';

export const allManifests: ReadonlyArray<ModuleManifest> = [
  vite,
  next,
  tailwindcss,
  sass,
  shadcnUi,
  mui,
  chakraUi,
  zustand,
  reduxToolkit,
  jotai,
  tanstackQuery,
  swr,
  reactRouter,
  vitestModule,
  playwright,
  testingLibrary,
  biome,
  eslintPrettier,
  huskyLintStaged,
  clerk,
  nextAuth,
  githubActions,
  posthog,
  zod,
  reactHookForm,
  // Python
  fastapi,
  django,
  flask,
  litestar,
  ruff,
  black,
  pytest,
  // Database
  pg,
  mysql2,
  mongodb,
  nodeRedis,
  ioredis,
  betterSqlite3,
  sqlite3,
  mssql,
  cassandraDriver,
  neo4jDriver,
  couchbase,
  influxdbClient,
  elasticsearch,
  pouchdb,
  nano,
  supabaseJs,
  firebaseAdmin,
  planetscaleDatabase,
  neonServerless,
  pocketbase,
  // ORM
  prisma,
  drizzleOrm,
  typeorm,
  sequelize,
  mongoose,
  mikroOrm,
  kysely,
  knex,
  objection,
  bookshelf,
  waterline,
  typegoose,
  dynamoose,
  fireorm,
  slonik,
  zapatos,
  edgedbJs,
  ottoman,
  lucid,
  nestjsTypeorm,
  // HTTP
  axios,
  nodeFetch,
  got,
  ky,
  undici,
  superagent,
  wretch,
  ofetch,
  crossFetch,
  isomorphicFetch,
  phin,
  needle,
  urllib,
  apisauce,
  httpProxyAgent,
  httpsProxyAgent,
  socksProxyAgent,
  toughCookie,
  formData,
  followRedirects,
  // Email
  nodemailer,
  resend,
  sendgridMail,
  mailgunJs,
  postmark,
  ses,
  mailparser,
  emailjs,
  mjml,
  reactEmail,
  mailchimpMarketing,
  sparkpost,
  mandrill,
  mailtrap,
  brevo,
  mailersend,
  loops,
  plunk,
  courier,
  zeptomail,
];

export {
  apisauce,
  axios,
  betterSqlite3,
  biome,
  black,
  bookshelf,
  brevo,
  cassandraDriver,
  chakraUi,
  clerk,
  couchbase,
  courier,
  crossFetch,
  django,
  drizzleOrm,
  dynamoose,
  edgedbJs,
  elasticsearch,
  emailjs,
  eslintPrettier,
  fastapi,
  firebaseAdmin,
  fireorm,
  flask,
  followRedirects,
  formData,
  githubActions,
  got,
  httpProxyAgent,
  httpsProxyAgent,
  huskyLintStaged,
  influxdbClient,
  ioredis,
  isomorphicFetch,
  jotai,
  knex,
  ky,
  kysely,
  litestar,
  loops,
  lucid,
  mailchimpMarketing,
  mailersend,
  mailgunJs,
  mailparser,
  mailtrap,
  mandrill,
  mikroOrm,
  mjml,
  mongodb,
  mongoose,
  mssql,
  mui,
  mysql2,
  nano,
  needle,
  neo4jDriver,
  neonServerless,
  nestjsTypeorm,
  next,
  nextAuth,
  nodeFetch,
  nodeRedis,
  nodemailer,
  objection,
  ofetch,
  ottoman,
  pg,
  phin,
  planetscaleDatabase,
  playwright,
  plunk,
  pocketbase,
  posthog,
  postmark,
  pouchdb,
  prisma,
  pytest,
  reactEmail,
  reactHookForm,
  reactRouter,
  reduxToolkit,
  resend,
  ruff,
  sass,
  sendgridMail,
  sequelize,
  ses,
  shadcnUi,
  slonik,
  socksProxyAgent,
  sparkpost,
  sqlite3,
  superagent,
  supabaseJs,
  swr,
  tailwindcss,
  tanstackQuery,
  testingLibrary,
  toughCookie,
  typegoose,
  typeorm,
  undici,
  urllib,
  vite,
  vitestModule,
  waterline,
  wretch,
  zapatos,
  zeptomail,
  zod,
  zustand,
};

export {
  allRecipes,
  djangoStarter,
  fastapiStarter,
  nextSaasStarter,
  viteClassic,
} from './recipes/index.js';
export type { Recipe } from './recipes/types.js';
