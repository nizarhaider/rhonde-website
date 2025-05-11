import type { NextApiRequest, NextApiResponse } from "next"
import nodemailer from "nodemailer"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end()

  const {
    name,
    nationality,
    email,
    phone,
    guests,
    ["tour-type"]: tourType,
    ["start-date"]: startDate,
    ["end-date"]: endDate,
    remarks,
  } = req.body

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: "tharupamaa@gmail.com", // your destination email
    subject: "New Inquiry from Rondè Ceylon",
    text: `
New Inquiry Received:

Name: ${name}
Nationality: ${nationality}
Email: ${email}
Phone: ${phone}
Guests: ${guests}
Tour Type: ${tourType}
Start Date: ${startDate}
End Date: ${endDate}
Remarks: ${remarks}
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    res.status(200).json({ success: true })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Failed to send email" })
  }
}
