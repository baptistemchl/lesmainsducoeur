import { NextRequest, NextResponse } from 'next/server'
import { google } from 'googleapis'
import nodemailer from 'nodemailer'

// Configuration Google Calendar
const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
)

oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN
})

const calendar = google.calendar({ version: 'v3', auth: oauth2Client })

// Configuration email
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { soin, date, time, nom, prenom, email, telephone, message } = body

    // Validation
    if (!soin || !date || !time || !nom || !prenom || !email || !telephone) {
      return NextResponse.json(
        { error: 'Tous les champs obligatoires doivent être remplis' },
        { status: 400 }
      )
    }

    // Créer l'événement dans Google Calendar
    const startDateTime = new Date(`${date}T${time}:00`)
    
    // Durée selon le type de soin
    const durations: { [key: string]: number } = {
      magnetisme: 60,
      chakras: 75,
      enfant: 45,
      animal: 45,
      distance: 60
    }
    
    const duration = durations[soin] || 60
    const endDateTime = new Date(startDateTime.getTime() + duration * 60000)

    const event = {
      summary: `Soin - ${prenom} ${nom}`,
      description: `Type de soin: ${soin}\nTéléphone: ${telephone}\nEmail: ${email}\nMessage: ${message || 'N/A'}`,
      start: {
        dateTime: startDateTime.toISOString(),
        timeZone: 'Europe/Paris',
      },
      end: {
        dateTime: endDateTime.toISOString(),
        timeZone: 'Europe/Paris',
      },
      attendees: [
        { email: email }
      ],
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'email', minutes: 24 * 60 }, // 1 jour avant
          { method: 'popup', minutes: 60 }, // 1 heure avant
        ],
      },
    }

    const calendarResponse = await calendar.events.insert({
      calendarId: 'primary',
      requestBody: event,
      sendUpdates: 'all',
    })

    // Envoyer email de confirmation au client
    const soinLabels: { [key: string]: string } = {
      magnetisme: 'Magnétisme Général',
      chakras: 'Harmonisation des Chakras',
      enfant: 'Soin pour Enfant',
      animal: 'Soin Animalier',
      distance: 'Soin à Distance'
    }

    const mailOptionsClient = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Confirmation de votre rendez-vous - Les Mains du Cœur',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #5f7d5f;">Votre rendez-vous est confirmé ✨</h2>
          <p>Bonjour ${prenom},</p>
          <p>Votre rendez-vous a bien été enregistré avec les informations suivantes :</p>
          <div style="background-color: #f6f8f6; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <p><strong>Type de soin :</strong> ${soinLabels[soin]}</p>
            <p><strong>Date :</strong> ${new Date(date).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <p><strong>Heure :</strong> ${time}</p>
            <p><strong>Durée :</strong> ${duration} minutes</p>
          </div>
          <p>Je vous attends avec plaisir pour ce moment de bien-être et d'harmonisation énergétique.</p>
          <p><strong>Quelques rappels :</strong></p>
          <ul>
            <li>Venez dans une tenue confortable</li>
            <li>N'hésitez pas à arriver 5 minutes en avance</li>
            <li>En cas d'empêchement, merci de me prévenir au moins 24h à l'avance</li>
          </ul>
          <p>À très bientôt,</p>
          <p style="color: #d4af37;"><em>Les Mains du Cœur</em></p>
          <hr style="border: none; border-top: 1px solid #e3e9e3; margin: 30px 0;">
          <p style="font-size: 12px; color: #7a957a;">
            📍 Rennes, Bretagne<br>
            📧 contact@lesmainsducoeur.fr<br>
            📞 06 00 00 00 00
          </p>
        </div>
      `
    }

    await transporter.sendMail(mailOptionsClient)

    // Envoyer email de notification au praticien
    const mailOptionsPractitioner = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Nouveau RDV - ${prenom} ${nom}`,
      html: `
        <h2>Nouveau rendez-vous</h2>
        <p><strong>Client :</strong> ${prenom} ${nom}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${telephone}</p>
        <p><strong>Soin :</strong> ${soinLabels[soin]}</p>
        <p><strong>Date :</strong> ${new Date(date).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        <p><strong>Heure :</strong> ${time}</p>
        <p><strong>Message :</strong> ${message || 'N/A'}</p>
      `
    }

    await transporter.sendMail(mailOptionsPractitioner)

    return NextResponse.json({
      success: true,
      eventId: calendarResponse.data.id,
      message: 'Rendez-vous confirmé avec succès'
    })

  } catch (error) {
    console.error('Erreur lors de la création du rendez-vous:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la création du rendez-vous' },
      { status: 500 }
    )
  }
}
