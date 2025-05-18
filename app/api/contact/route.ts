import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const validateForm = (data: ContactForm): { isValid: boolean; errors: string[] } => {
  const errors: string[] = []

  if (!data.name?.trim()) {
    errors.push('Name is required')
  }

  if (!data.email?.trim()) {
    errors.push('Email is required')
  } else if (!validateEmail(data.email)) {
    errors.push('Invalid email format')
  }

  if (!data.subject?.trim()) {
    errors.push('Subject is required')
  }

  if (!data.message?.trim()) {
    errors.push('Message is required')
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validation = validateForm(body)

    if (!validation.isValid) {
      return NextResponse.json(
        { message: 'Validation failed', errors: validation.errors },
        { status: 400 }
      )
    }

    const { name, email, subject, message } = body

    // Configure email transport
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email template
    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.CONTACT_EMAIL,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    }

    // Send auto-reply to the sender
    const autoReplyOptions = {
      from: process.env.SMTP_FROM,
      to: email,
      subject: 'Thank you for your message',
      html: `
        <h2>Thank you for contacting us!</h2>
        <p>Dear ${name},</p>
        <p>Thank you for reaching out. I have received your message and will get back to you as soon as possible.</p>
        <p>Best regards,<br>Your Name</p>
      `,
    }

    try {
      // Send both emails
      await Promise.all([
        transporter.sendMail(mailOptions),
        transporter.sendMail(autoReplyOptions)
      ])

      return NextResponse.json(
        { message: 'Message sent successfully' },
        { status: 200 }
      )
    } catch (error) {
      console.error('Error sending email:', error)
      return NextResponse.json(
        { message: 'Error sending email' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json(
      { message: 'Server error' },
      { status: 500 }
    )
  }
} 