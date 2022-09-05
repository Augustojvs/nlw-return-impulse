import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "323ceec115eccc",
    pass: "b95e11538a98da",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <noreply@feedget.com>",
      to: "Augusto Silva <augusto_jvs@hotmail.com>",
      subject,
      html: body,
    });
  }
}
