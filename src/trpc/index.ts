// This is For  Server-Side Usage

import { authRouter } from "./auth-router";
import { router } from "./trpc";

export const appRouter = router({
    auth:authRouter,
})

export type AppRouter = typeof appRouter