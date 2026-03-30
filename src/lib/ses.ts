import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import config from "@/config";

const sesClient = new SESClient({
  region: config.awsSesRegion,
  credentials: {
    accessKeyId: config.awsSesAccessKey,
    secretAccessKey: config.awsSesSecretKey,
  },
});

const createSendEmailCommand = (
  toAddress: string,
  fromAddress: string,
  bodyHtml: string,
  bodyText: string,
  subject: string
) => {
  return new SendEmailCommand({
    Destination: {
      CcAddresses: [],
      ToAddresses: [toAddress],
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: bodyHtml,
        },
        Text: {
          Charset: "UTF-8",
          Data: bodyText,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: subject,
      },
    },
    Source: fromAddress,
    ReplyToAddresses: [],
  });
};

export const sendEmail = async ({
  toAddress,
  fromAddress,
  bodyHtml,
  bodyText,
  subject,
}: {
  toAddress: string;
  fromAddress: string;
  bodyHtml: string;
  bodyText: string;
  subject: string;
}) => {
  const sendEmailCommand = createSendEmailCommand(
    toAddress,
    fromAddress,
    bodyHtml,
    bodyText,
    subject
  );
  await sesClient.send(sendEmailCommand);
};
