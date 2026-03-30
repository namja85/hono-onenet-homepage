import { Hono } from "hono";
import { z } from "zod";
import { htmlMiddleware } from "@/middlewares/html.middleware";
import Inquiry from "@/pages/inquiry";
import InquirySubmitFail from "@/pages/inquiry/submit-fail";
import InquirySubmitSuccess from "@/pages/inquiry/submit-success";
import { HTTPException } from "hono/http-exception";
import { sendEmailInquiry } from "@/lib/email";

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
    "/",
    htmlMiddleware({
      title: "원넷 | 고객문의 접수",
      description: "고객 문의 접수 처리 결과 페이지입니다.",
    }),
    async (c) => {
      const payload = await c.req.formData();
      const parsedPayload = await z
        .object({
          name: z.string().min(1),
          phone: z.string().min(1),
          email: z.email(),
          message: z.string().min(1),
        })
        .safeParseAsync({
          name: payload.get("name"),
          phone: payload.get("phone"),
          email: payload.get("email"),
          message: payload.get("message"),
        });

      if (!parsedPayload.success) {
        throw new HTTPException(400, { message: "Invalid payload" });
      }

      try {
        await sendEmailInquiry(parsedPayload.data);
      } catch (error) {
        console.error("Failed to send email inquiry", error);
        throw new HTTPException(500, {
          message: "Failed to send email inquiry",
        });
      }

      return c.render(<InquirySubmitSuccess />);
    }
  );

export default inquiryIndexRoute;
