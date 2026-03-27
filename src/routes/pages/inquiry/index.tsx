import { Hono } from "hono";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { htmlMiddleware } from "@/middlewares/html.middleware";
import Inquiry from "@/pages/inquiry";
import InquirySubmitFail from "@/pages/inquiry/submit-fail";
import InquirySubmitSuccess from "@/pages/inquiry/submit-success";

const inquiryIndexRoute = new Hono();

inquiryIndexRoute
  .get(
    "/",
    htmlMiddleware({
      title: "원넷 | 고객문의",
      description:
        "원넷은 고객의 문의를 처리하고 고객의 만족을 최우선으로 하는 고객 센터를 제공합니다.",
    }),
    (c) => {
      return c.render(<Inquiry />);
    }
  )
  .post(
    "/inquiry",
    htmlMiddleware({
      title: "원넷 | 고객문의 접수",
      description: "고객 문의 접수 처리 결과 페이지입니다.",
    }),
    zValidator(
      "form",
      z.object({
        name: z.string().min(1),
        phone: z.string().min(1),
        email: z.email(),
        message: z.string().min(1),
      })
    ),
    async (c) => {
      const { name, phone, email, message } = c.req.valid("form");
      const isSuccess = name && phone && email && message;

      if (!isSuccess) {
        c.status(400);
        return c.render(<InquirySubmitFail />);
      }

      return c.render(<InquirySubmitSuccess />);
    }
  );

export default inquiryIndexRoute;
