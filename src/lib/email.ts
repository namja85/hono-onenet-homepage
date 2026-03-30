import {
  inquiryTemplateHtml,
  inquiryTemplateText,
} from "@/templates/inquiry.template";
import { sendEmail } from "@/lib/ses";
import config from "@/config";

export const sendEmailInquiry = async (data: {
  name: string;
  phone: string;
  email: string;
  message: string;
}) => {
  const bodyHtml = inquiryTemplateHtml(data);
  const bodyText = inquiryTemplateText(data);

  try {
    await sendEmail({
      toAddress: config.awsSesFromAddress,
      fromAddress: config.awsSesFromAddress,
      bodyHtml,
      bodyText,
      subject: `[원넷] 고객 문의`,
    });
  } catch (error) {
    console.error("Failed to send email inquiry", error);
  }
};
