import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { inquiryType, name, email, organization, subject, message } = await req.json()

    // Validate required fields
    if (!email || !message) {
      return NextResponse.json(
        { error: 'Email and message are required' },
        { status: 400 }
      )
    }

    // For now, we'll use a simple approach that works without additional services
    // This will store the message in a way that can be retrieved, or send via email service

    // Create the email content
    const emailContent = {
      to: 'here.is.alex@gmail.com',
      subject: subject || `Frehab Contact Form - ${inquiryType}`,
      body: `
New contact form submission from Frehab:

Type: ${inquiryType}
Name: ${name || 'Not provided'}
Email: ${email}
${organization ? `Organization: ${organization}` : ''}

Subject: ${subject || 'No subject'}

Message:
${message}

---
Sent via Frehab Contact Form
Time: ${new Date().toISOString()}
      `.trim()
    }

    // Try to send email via different services based on available environment variables
    let emailSent = false
    
    // Option 1: Use Resend if available (recommended for production)
    if (process.env.RESEND_API_KEY && !emailSent) {
      try {
        const Resend = (await import('resend')).Resend
        const resend = new Resend(process.env.RESEND_API_KEY)
        
        await resend.emails.send({
          from: 'Frehab Contact <contact@frehab.org>',
          to: ['here.is.alex@gmail.com'],
          subject: emailContent.subject,
          text: emailContent.body,
        })
        
        emailSent = true
        console.log('Email sent via Resend')
      } catch (error) {
        console.error('Failed to send email via Resend:', error)
      }
    }
    
    // Option 2: Use Web3Forms (free, no-setup option) if Resend not available
    if (!emailSent && process.env.WEB3FORMS_ACCESS_KEY) {
      try {
        const formData = new FormData()
        formData.append('access_key', process.env.WEB3FORMS_ACCESS_KEY)
        formData.append('subject', emailContent.subject)
        formData.append('message', emailContent.body)
        formData.append('from_name', name || 'Frehab Contact Form')
        formData.append('email', email)
        
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        })
        
        if (response.ok) {
          emailSent = true
          console.log('Email sent via Web3Forms')
        }
      } catch (error) {
        console.error('Failed to send email via Web3Forms:', error)
      }
    }
    
    // Fallback: Log the submission (always works)
    if (!emailSent) {
      console.log('Contact form submission (email service not configured):', emailContent)
    }

    // Store in database if Supabase is configured
    // This allows you to track and respond to messages even without email service
    if (process.env.SUPABASE_URL && process.env.SUPABASE_ANON_KEY) {
      try {
        const { createClient } = await import('@supabase/supabase-js')
        const supabase = createClient(
          process.env.SUPABASE_URL,
          process.env.SUPABASE_ANON_KEY
        )

        await supabase
          .from('contact_submissions')
          .insert({
            inquiry_type: inquiryType,
            name: name || null,
            email,
            organization: organization || null,
            subject: subject || null,
            message,
            created_at: new Date().toISOString()
          })
      } catch (dbError) {
        console.error('Failed to store contact submission in database:', dbError)
        // Don't fail the request if database storage fails
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully'
    })

  } catch (error) {
    console.error('Contact form submission error:', error)
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    )
  }
}
