import { Hono } from "hono";
import Home from "@/pages/(root)/index";

const app = new Hono();

app.get("/", (c) => {
  return c.render(<Home />);
});

export default app;
