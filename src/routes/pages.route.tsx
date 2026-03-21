import { Hono } from "hono";
import { htmlMiddleware } from "@/middlewares/html.middleware";
import Home from "@/pages/(root)/index";
import Company from "@/pages/company";
import Service from "@/pages/service";
import Support from "@/pages/support";
import CustomerCenter from "@/pages/customer-center";
import Inquiry from "@/pages/inquiry";

const pagesRoute = new Hono();

pagesRoute
  .get(
    "/",
    htmlMiddleware({
      title: "원넷",
      description:
        "원넷은 온/오프라인 환경에서 상품과 서비스를 구매할 때 안전하고 편리한 결제 수단을 제공하는 전자결제 전문 기업입니다.",
    }),
    (c) => {
      return c.render(<Home />);
    }
  )
  .get(
    "/company",
    htmlMiddleware({
      title: "원넷 | 회사소개",
      description:
        "원넷은 사업형태, 결제환경, 결제방식 등 고객의 입장에서 최고의 맞춤형 결제 서비스를 개발하고 제공합니다.",
    }),
    (c) => {
      return c.render(<Company />);
    }
  )
  .get(
    "/service",
    htmlMiddleware({
      title: "원넷 | 서비스소개",
      description:
        "PG시스템, 가상계좌서비스, 펌뱅킹서비스 등 다양한 전자결제 시스템과 연동하여, 원넷은 고객의 사업 형태와 요구에 최적화된 안전하고 효율적인 결제 솔루션을 제공합니다.",
    }),
    (c) => {
      return c.render(<Service />);
    }
  )
  .get(
    "/support",
    htmlMiddleware({
      title: "원넷 | 기술지원",
      description:
        "원넷은 최신 보안 기술과 신속한 기술 지원으로 안정적이고 안전한 결제 환경을 제공합니다.",
    }),
    (c) => {
      return c.render(<Support />);
    }
  )
  .get(
    "/customer-center",
    htmlMiddleware({
      title: "원넷 | 고객센터",
      description:
        "원넷은 고객의 문의를 처리하고 고객의 만족을 최우선으로 하는 고객 센터를 제공합니다.",
    }),
    (c) => {
      return c.render(<CustomerCenter />);
    }
  )
  .get(
    "/inquiry",
    htmlMiddleware({
      title: "원넷 | 고객문의",
      description:
        "원넷은 고객의 문의를 처리하고 고객의 만족을 최우선으로 하는 고객 센터를 제공합니다.",
    }),
    (c) => {
      return c.render(<Inquiry />);
    }
  );

export default pagesRoute;
