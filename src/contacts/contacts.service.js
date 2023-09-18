const nodemailer = require("nodemailer");

// ... existing code ...

async function create(body) {
  // Call the existing create function
  const contact = body;
  console.log("contact", contact);
  // Send email notification
  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: "hi-nex@outlook.com", // user
      pass: "Geoffrey2030", //  password
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false,
    },
  });

  const emailContent = `
  <div style=" padding-left: 20px; border-radius: 10px;">
    <p style="display: flex; flex-direction: column; gap: 10px;">
      <span style="font-size: 16px;">${contact.FullNames}</span>
    </p>
    <p style="display: flex; flex-direction: column; gap: 10px;">
      <span style="font-size: 16px; ">${contact.Email}</span>
    </p>
    <p style="display: flex; flex-direction: column; gap: 10px;">
      <span style="font-size: 16px; ">${contact.PhoneNumber}</span>
    </p>
    <p style="display: flex; flex-direction: column;">
      <span style="font-size: 16px; ">${contact.EnquiryType}</span>
    </p>
    <p style="display: flex; flex-direction: column;">
    <span style="font-size: 16px; ">${contact.EnquiryMessage}</span>
  </p>
  </div>
`;

  const mailOptions = {
    from: "hi-nex@outlook.com",
    to: "nicholasnjeru917@gmail.com",
    subject: "Hi-nex",
    html: emailContent,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.error(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  return contact;
}

module.exports = {
  create,
};
