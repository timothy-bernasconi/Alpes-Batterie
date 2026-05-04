import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

export async function POST(req) {
  try {
    const { name, firstName, company, email, phone, type, subject, message } = await req.json();
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'tim.bernasconi1@gmail.com', 
      replyTo: email, 
      subject: `Nouveau message pour Alpes Batteries - Agence : ${subject.toUpperCase()}`,
      html: `
        <div style="font-family: sans-serif; border: 1px solid #ddd; padding: 20px; color: #333;">
          <h2 style="color: #902326;">Nouveau contact site Alpes Batteries</h2>
          <p><strong>Type de demande :</strong> ${type}</p>
          <p><strong>Agence concernée :</strong> ${subject}</p>
          <hr />
          <p><strong>Client :</strong> ${firstName} ${name}</p>
          <p><strong>Société :</strong> ${company || 'Non renseignée'}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Phone :</strong> ${phone}</p>

          <br />
          <p><strong>Message :</strong></p>
          <div style="background: #f4f4f4; padding: 15px; border-radius: 5px;">
            ${message}
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email envoyé !" }, { status: 200 });

  } catch (error) {
    console.error("Erreur Nodemailer:", error);
    return NextResponse.json({ message: "Erreur lors de l'envoi" }, { status: 500 });
  }
}