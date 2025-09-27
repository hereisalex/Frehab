import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = process.env.STRIPE_SECRET_KEY ? new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2025-08-27.basil',
}) : null

export async function POST(req: NextRequest) {
  try {
    if (!stripe) {
      return NextResponse.json({ error: 'Stripe not configured' }, { status: 500 })
    }
    
    const { priceId, customAmount, successUrl, cancelUrl } = await req.json()

    let sessionParams: Stripe.Checkout.SessionCreateParams = {
      mode: 'payment',
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: {
        purpose: 'frehab_donation',
        created_by: 'recovery_platform'
      },
      custom_text: {
        submit: {
          message: 'Thank you for supporting recovery for everyone! 💜'
        }
      }
    }

    if (customAmount) {
      // For custom amounts, create a one-time payment
      sessionParams.line_items = [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Support Frehab Recovery Platform',
              description: 'Help keep Frehab free, anonymous, and accessible to everyone in recovery.',
              images: [`${process.env.NEXT_PUBLIC_SITE_URL || 'https://frehab-9hj103g78-hereisalexs-projects.vercel.app'}/frehab-logo.svg`],
            },
            unit_amount: customAmount * 100, // Stripe expects cents
          },
          quantity: 1,
        },
      ]
    } else if (priceId) {
      // For preset amounts, use the price ID
      sessionParams.line_items = [
        {
          price: priceId,
          quantity: 1,
        },
      ]
    } else {
      return NextResponse.json(
        { error: 'Either priceId or customAmount is required' },
        { status: 400 }
      )
    }

    const session = await stripe.checkout.sessions.create(sessionParams)

    return NextResponse.json({ sessionId: session.id, url: session.url })
  } catch (error) {
    console.error('Error creating checkout session:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}
