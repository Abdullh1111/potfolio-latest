import nodeMailer from "nodemailer";
import config from "../config/index.js";
export const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    host: config.smpt_host,
    port: config.smpt_port,
    service: config.smpt_service,
    auth: {
      user: config.smpt_mail,
      pass: config.smpt_password,
    },
  });

  const mailOptions = {
    from: config.smpt_mail,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };
  await transporter.sendMail(mailOptions);
};
