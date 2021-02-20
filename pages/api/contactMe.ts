import { IncomingMessage } from "http"
import nodemailer from 'nodemailer'

type ActualIncoming = IncomingMessage & {
  body: any,
  query: { [index: string]: any }
}

const FROM_EMAIL = "from@email.com"
const TO_EMAIL = "to@email.com"
const MAILTRAP_USER = process.env.MAILTRAP_USER
const MAILTRAP_PASS = process.env.MAILTRAP_PASS

export default async function handler(req: ActualIncoming, res) {
  let { body } = req
  var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: MAILTRAP_USER,
      pass: MAILTRAP_PASS
    }
  })

  try {
    await transport.sendMail({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: "Message from the site",
      text: Object.keys(body).reduce((acc, cur) => `${acc}${cur}: ${body[cur]}\n`, "")
    })

    res.status(200).json({ error: false })
  } catch (err) {
    res.status(500).json({ error: true, errorMessage: err })
  }

}