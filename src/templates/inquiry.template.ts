const esc = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export const inquiryTemplateHtml = (data: {
  name: string;
  phone: string;
  email: string;
  message: string;
}) => {
  const name = esc(data.name);
  const phone = esc(data.phone);
  const email = esc(data.email);
  const message = esc(data.message);

  return `<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:560px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;border-collapse:collapse;background-color:#ffffff;border:1px solid #e5e5e5;border-radius:12px;overflow:hidden;">
  <tr>
    <td style="background-color:#1e3a8a;padding:20px 24px;">
      <p style="margin:0;font-size:20px;font-weight:700;color:#ffffff;letter-spacing:-0.02em;">고객 문의</p>
      <p style="margin:8px 0 0;font-size:13px;color:rgba(255,255,255,0.85);line-height:1.5;">원넷 홈페이지를 통해 접수된 문의입니다.</p>
    </td>
  </tr>
  <tr>
    <td style="padding:0;">
      <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;">
        <tr>
          <td style="width:132px;vertical-align:top;background-color:#e5e5e5;padding:14px 16px;font-size:14px;font-weight:700;color:#525252;">이름 (법인명)</td>
          <td style="vertical-align:top;padding:14px 16px;font-size:14px;color:#171717;line-height:1.5;border-bottom:1px solid #e5e5e5;">${name}</td>
        </tr>
        <tr>
          <td style="vertical-align:top;background-color:#e5e5e5;padding:14px 16px;font-size:14px;font-weight:700;color:#525252;">연락처</td>
          <td style="vertical-align:top;padding:14px 16px;font-size:14px;color:#171717;line-height:1.5;border-bottom:1px solid #e5e5e5;">${phone}</td>
        </tr>
        <tr>
          <td style="vertical-align:top;background-color:#e5e5e5;padding:14px 16px;font-size:14px;font-weight:700;color:#525252;">이메일</td>
          <td style="vertical-align:top;padding:14px 16px;font-size:14px;color:#171717;line-height:1.5;border-bottom:1px solid #e5e5e5;"><a href="mailto:${email}" style="color:#1e3a8a;text-decoration:none;">${email}</a></td>
        </tr>
        <tr>
          <td style="vertical-align:top;background-color:#e5e5e5;padding:14px 16px;font-size:14px;font-weight:700;color:#525252;">문의내용</td>
          <td style="vertical-align:top;padding:14px 16px;font-size:14px;color:#171717;border-bottom:1px solid #e5e5e5;">
            <pre style="margin:0;font-family:inherit;font-size:14px;line-height:1.6;color:#171717;white-space:pre-wrap;word-break:break-word;">${message}</pre>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td style="padding:16px 24px 20px;background-color:#fafafa;border-top:1px solid #e5e5e5;">
      <p style="margin:0;font-size:12px;color:#737373;line-height:1.5;">본 메일은 시스템에서 자동 발송되었습니다.</p>
    </td>
  </tr>
</table>`;
};

export const inquiryTemplateText = (data: {
  name: string;
  phone: string;
  email: string;
  message: string;
}) => {
  return `
이름 (법인명): ${data.name}
연락처: ${data.phone}
이메일: ${data.email}
문의내용:
${data.message}
  `.trim();
};
