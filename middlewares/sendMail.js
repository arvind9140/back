import { createTransport } from "nodemailer";

export const sendMail = async (text) => {
  const transporter = createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "14c233ed41ce5f",
      pass: "57d477199bd5a5"
    },
  });

  await transporter.sendMail({
    subject: "CONTACT REQUEST FROM PORTFOLIO",
    to: process.env.MYMAIL,
    from: process.env.MYMAIL,
    text,
  });
};