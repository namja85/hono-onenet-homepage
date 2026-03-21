import { Hono } from "hono";
import Home from "@/pages/(root)/index";
import Company from "@/pages/company";
import Service from "@/pages/service";
import Support from "@/pages/support";
import CustomerCenter from "@/pages/customer-center";
import Inquiry from "@/pages/inquiry";

const pagesRoute = new Hono();

pagesRoute
  .get("/", (c) => {
    return c.render(<Home />);
  })
  .get("/company", (c) => {
    return c.render(<Company />);
  })
  .get("/service", (c) => {
    return c.render(<Service />);
  })
  .get("/support", (c) => {
    return c.render(<Support />);
  })
  .get("/customer-center", (c) => {
    return c.render(<CustomerCenter />);
  })
  .get("/inquiry", (c) => {
    return c.render(<Inquiry />);
  });

export default pagesRoute;
