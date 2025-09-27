import { loadStripe } from '@stripe/stripe-js'

// Make sure to call `loadStripe` outside of a component's render to avoid
// recreating the `Stripe` object on every render.
// Only load Stripe if the publishable key is available
export const stripePromise = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY 
  ? loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY).catch(error => {
      console.warn('Stripe failed to load (likely blocked by ad blocker):', error)
      return null
    })
  : Promise.resolve(null)

// Donation amounts and their descriptions
export const donationOptions = [
  {
    amount: 5,
    description: 'Coffee fund - keeps the developers caffeinated',
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_5 // You'll set this in Stripe dashboard
  },
  {
    amount: 15,
    description: 'Server costs - helps keep Frehab online',
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_15
  },
  {
    amount: 25,
    description: 'Development support - funds new features',
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_25
  },
  {
    amount: 50,
    description: 'Platform growth - supports our mission',
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_50
  }
]

export const createCheckoutSession = async (priceId?: string, customAmount?: number) => {
  try {
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        priceId, 
        customAmount,
        successUrl: `${window.location.origin}/donation/success`,
        cancelUrl: `${window.location.origin}/donation/cancelled`
      }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(errorData.error || 'Failed to create checkout session')
    }

    return response.json()
  } catch (error) {
    console.error('Checkout session creation failed:', error)
    throw error
  }
}
