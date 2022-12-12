import sgMail from '@sendgrid/mail';
import { MailDataRequired } from '@sendgrid/helpers/classes/mail';
import { EmailData } from '@sendgrid/helpers/classes/email-address';
import type { NextApiRequest, NextApiResponse } from 'next';
import { toMe, toGuest } from '../../components/SendMail/SendMailTemplate';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  require('dotenv').config()
  const apikey: string = process.env.SENDGRID_APIKEY ? process.env.SENDGRID_APIKEY : '';
  sgMail.setApiKey(apikey);

  const msg = [
    {
      to: req.body.mail,
      from: "kit&M's design <kit.and.ms@gmail.com>" as EmailData,
      subject: 'Thank you for your mail！お問い合わせありがとうございます',
      text: `${toGuest(req.body, 'text')}`,
      html: `${toGuest(req.body, 'html')}`,
    },
    {
      to: 'kit.and.ms@gmail.com',
      from: "kit&M's design <kit.and.ms@gmail.com>" as EmailData,
      subject: `${req.body.name}さんからのお問い合わせ`,
      text: `${toMe(req.body, 'text')}`,
      html: `${toMe(req.body, 'html')}`,
    },
  ];

  try {
    await sgMail.send(msg);
    res.status(200).json(msg);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
}