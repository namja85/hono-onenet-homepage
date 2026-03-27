import { Hono } from "hono";
import { htmlMiddleware } from "@/middlewares/html.middleware";
import CustomerCenter from "@/pages/customer-center";
import { getBoards } from "@/queries";

const customerCenterIndexRoute = new Hono();

customerCenterIndexRoute.get(
  "/",
  htmlMiddleware({
    title: "원넷 | 고객센터",
    description:
      "원넷은 고객의 문의를 처리하고 고객의 만족을 최우선으로 하는 고객 센터를 제공합니다.",
  }),
  async (c) => {
    const { data: boards } = await getBoards({ type: "notice" });
    return c.render(<CustomerCenter boards={boards} />);
  }
);

export default customerCenterIndexRoute;
