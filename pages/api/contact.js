import { transporter, mailOptions } from "~/components/atoms/nodemailer";

const CONTACT_MESSAGE_FIELDS = {
  name: "Name",
  email: "Email",
  subject: "Subject",
  message: "Message",
};

const generateEmailContent = (data) => {
  const stringData = Object.entries(data.inputValues).reduce(
    (str, [key, val]) => (str += `${CONTACT_MESSAGE_FIELDS[key]}: ${val} \n\n`),
    ""
  );

  return {
    text: stringData,
    html: `<!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
            padding: 20px;
          }
          .container {
            background-color: #fff;
            border-radius: 5px;
            padding: 20px;
            box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
          }
          h3 {
            margin-top: 0;
            font-size: 19px;
          }
          .label {
            font-weight: bold;
            margin-right: 5px;
          }
          .content {
            margin-left: 5px;
          }
          .footer {
            font-size: 12px;
            color: #999;
            margin-top: 20px;
            text-align: center;
            line-height: 27px;
          }
          .footer a {
            color: #999;
            text-decoration: underline;
          }
          .company-name {
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h3>Contact Message Details:</h3>
          <p class="label">Name:</p>
          <p class="content">${data.inputValues.name} ${
      data.inputValues.lastName ? data.inputValues.lastName : ""
    }
    </p>
          <p class="label">Email:</p>
          <p class="content">${data.inputValues.email}</p>
          <p class="label">Subject:</p>
          <p class="content">${
            data.radioBtnValue ? data.radioBtnValue : "N/A"
          }</p>
          <p class="label">Message:</p>
          <p class="content">${data.textareaValues}</p>
          <p class="label">Checked States:</p>
          <p class="content">Read Policy: ${
            data.checkedState[0] ? "Yes" : "No"
          }, Mail List: ${data.checkedState[1] ? "Yes" : "No"}</p>
        </div>
        <div class="footer">
          <p>Don’t want to receive your customers emails anymore? <br/> Contact us at <a href="mailto:th.dev.design@gmail.com">th.dev.design@gmail.com</a> to unsubscribe. <br/> ${new Date().getFullYear()} &copy; <span class="company-name">PolyGlo</span> <br/> 6 avenue Mohammed Khemisti, 2éme étage, Mostaganem</p>
        </div>
      </body>
    </html>
    
    `,
  };
};

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    if (!data || !data.inputValues || !data.textareaValues) {
      return res.status(400).send({ message: "Bad request" });
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        ...generateEmailContent(data),
        subject: data.radioBtnValue,
      });

      return res.status(200).json({ success: true });
    } catch (err) {
      console.log(err);
      return res.status(400).json({ message: err.message });
    }
  }
  return res.status(400).json({ message: "Bad request" });
};
export default handler;
