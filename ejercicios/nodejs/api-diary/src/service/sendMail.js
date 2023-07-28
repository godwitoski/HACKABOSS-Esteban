const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
/**
 * to: email del cliente(usuario)
 * subject: mensaje del correo
 * body:cueerpo del mensaje
 */
const sendMail = async (to, subject, body) => {
  try {
    const msg = {
      to,
      from: process.env.SENDGRID_FROM,
      subject,
      text: body,
      html: `
        <di>
            <h1>${subject}</h1>
            <p>${body}</p>
        </div>
        `,
    };
    await sgMail.send(msg);
  } catch (error) {
    console.log(error);
  }
};

module.exports = sendMail;
