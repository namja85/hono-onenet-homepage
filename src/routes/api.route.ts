import { Hono } from "hono";

const apiRoute = new Hono();

apiRoute.get("/health", (c) => {
  return c.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development",
  });
});

export default apiRoute;
