import nodemailer from "nodemailer";

export async function POST(req, res) {
  const mailData = await req.json();
  const {
    from,
    name,
    surname,
    email,
    phone,
    subject,
    message,
    birthdate,
    job,
    city,
    location,
  } = mailData;
  const sendEmail = async () => {
    const smtpOptions = {
      port: 465,
      host: "petrov.com.tr",
      auth: {
        user: "info@petrov.com.tr",
        pass: "petrov8563P",
      },
      secure: true,
    };
    const transporter = nodemailer.createTransport({
      ...smtpOptions,
    });

    const data = {
      to: "info@petrov.com.tr",
      subject: `petrov.com.tr - ${
        from === "iletisim" ? "İletişim" : "Franchising"
      } Formu`,
      html:
        from === "iletisim"
          ? `
      <div>
      <p style="margin-bottom:24px;font-weight:600;">petrov.com.tr'den doldurulmuş yeni bir mailiniz var</p>
      <p><span style="font-weight:600;">İsim:</span> ${name + " " + surname}</p>
      <p><span style="font-weight:600;">Telefon:</span> ${phone}</p>
      <p><span style="font-weight:600;">Mail:</span> ${email}</p>
      <p><span style="font-weight:600;">Konu:</span> ${subject}</p>
      <p><span style="font-weight:600;">Mesaj:</span> ${message}</p>
      </div>
    `
          : `
    <div>
    <p style="margin-bottom:24px;font-weight:600;">petrov.com.tr'den doldurulmuş yeni bir mailiniz var</p>
    <p><span style="font-weight:600;">İsim:</span> ${name}</p>
    <p><span style="font-weight:600;">Telefon:</span> ${phone}</p>
    <p><span style="font-weight:600;">Doğum Tarihi:</span> ${birthdate}</p>
    <p><span style="font-weight:600;">Meslek:</span> ${job}</p>
    <p><span style="font-weight:600;">Şehir:</span> ${city}</p>
    <p><span style="font-weight:600;">Yatırım Yapılacak Lokasyon:</span> ${location}</p>
    </div>
  `,
    };

    return await transporter.sendMail({
      from: "info@petrov.com.tr",
      ...data,
    });
  };

  const result = await sendEmail();

  return Response.json({ data: result });
}
