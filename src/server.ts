//This code is a part of an application that integrates the Payload CMS with Next.js and Express.js

import express from "express";
import { getPayloadClient } from "./get-payload";
import { nextApp, nextHandler } from "./next-util";
import * as trpcExpress from "@trpc/server/adapters/express";
import { appRouter } from "./trpc";
import { inferAsyncReturnType } from "@trpc/server";
const app = express()
const PORT = Number(process.env.PORT) || 3000

const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({
  req,
  res,
})

export type ExpressContext= inferAsyncReturnType<typeof createContext>

const start = async () => {
  const payload = await getPayloadClient({
    initOptions: {
      // configure the Payload CMS
      express: app,
      onInit: async (cms) => {
        cms.logger.info(`Admin URL ${cms.getAdminURL()}`);
      },
    },
  });
  app.use(
    "/api/trpc",
    trpcExpress.createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );
  app.use((req, res) => nextHandler(req, res)); //This line adds a middleware to the Express.js app

  nextApp.prepare().then(() => {
    payload.logger.info('Nextjs started');

    app.listen(PORT, async () => {
      payload.logger.info(`Next.js App URL : ${process.env.NEXT_PUBLIC_SERVER_URL}`);
    });
  });
};

start();