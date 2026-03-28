import { Hono } from "hono";
import rootIndexRoute from "@/routes/pages/(root)";
import companyIndexRoute from "@/routes/pages/company";
import serviceIndexRoute from "@/routes/pages/service";
import supportIndexRoute from "@/routes/pages/support";
import customerCenterIndexRoute from "@/routes/pages/customer-center";
import inquiryIndexRoute from "@/routes/pages/inquiry";
import adminIndexRoute from "@/routes/pages/admin";
import authIndexRoute from "@/routes/pages/auth";

const pagesRoute = new Hono();

pagesRoute
  .route("/", rootIndexRoute)
  .route("/company", companyIndexRoute)
  .route("/service", serviceIndexRoute)
  .route("/support", supportIndexRoute)
  .route("/customer-center", customerCenterIndexRoute)
  .route("/inquiry", inquiryIndexRoute)
  .route("/admin", adminIndexRoute)
  .route("/auth", authIndexRoute);

export default pagesRoute;
