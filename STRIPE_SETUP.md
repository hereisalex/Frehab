# Stripe Integration Setup for Frehab

## Overview
Frehab now includes a complete Stripe integration for accepting donations. The system supports both preset amounts and custom donations, with email fallback if payment processing fails.

## What's Been Implemented

### 1. Stripe Payment Flow
- **API Route**: `/api/create-checkout-session` - Creates Stripe checkout sessions
- **Success Page**: `/donation/success` - Shows thank you message after successful donation
- **Cancelled Page**: `/donation/cancelled` - Handles cancelled payments gracefully
- **Stripe Library**: `lib/stripe.ts` - Handles Stripe configuration and checkout creation

### 2. Updated Donation Components
- **DonationSupport Component**: Now uses Stripe for payment processing
- **Preset Amounts**: $5, $15, $25, $50 with immediate checkout
- **Custom Amounts**: Prompts user for amount, then processes via Stripe
- **Fallback System**: If Stripe fails, automatically falls back to email contact
- **Loading States**: Shows "Processing..." during payment setup

## Stripe Setup Instructions

### Step 1: Create Stripe Account
1. Go to https://stripe.com and create an account
2. Complete the verification process
3. Go to your Stripe Dashboard

### Step 2: Get API Keys
1. In Stripe Dashboard, go to "Developers" → "API keys"
2. Copy your **Publishable key** (starts with `pk_test_` for test mode)
3. Copy your **Secret key** (starts with `sk_test_` for test mode)

### Step 3: Set Environment Variables
Add these to your `.env.local` file:

```env
# Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_actual_publishable_key_here
STRIPE_SECRET_KEY=sk_test_your_actual_secret_key_here
```

### Step 4: Optional - Create Preset Price Products
If you want to use Stripe's preset prices instead of dynamic pricing:

1. In Stripe Dashboard, go to "Products" → "Add product"
2. Create products for each donation amount ($5, $15, $25, $50)
3. Copy the Price IDs (start with `price_`)
4. Add to your `.env.local`:

```env
NEXT_PUBLIC_STRIPE_PRICE_5=price_your_5_dollar_price_id
NEXT_PUBLIC_STRIPE_PRICE_15=price_your_15_dollar_price_id
NEXT_PUBLIC_STRIPE_PRICE_25=price_your_25_dollar_price_id
NEXT_PUBLIC_STRIPE_PRICE_50=price_your_50_dollar_price_id
```

### Step 5: Test the Integration
1. Restart your development server: `npm run dev`
2. Go to any page with donation buttons
3. Click a donation amount - it should redirect to Stripe Checkout
4. Use test card number `4242 4242 4242 4242` with any future date and CVC
5. Complete the test payment
6. You should be redirected to the success page

## Current Behavior

### Successful Payment Flow
1. User clicks donation button
2. Shows "Processing..." state
3. Creates Stripe checkout session
4. Redirects to Stripe's secure checkout page
5. User completes payment
6. Redirects to `/donation/success` with thank you message
7. Analytics tracks successful donation

### Failed/Cancelled Payment Flow
1. If user cancels payment → redirects to `/donation/cancelled`
2. If Stripe API fails → automatically falls back to email contact
3. Analytics tracks cancellation or failure

### Email Fallback
If Stripe is not configured or fails:
- Automatically opens email client with pre-filled donation request
- Includes amount, personal message to Alex
- Ensures no donation opportunity is lost

## Production Setup

### Step 1: Activate Live Mode
1. Complete Stripe account verification
2. Switch to "Live" mode in Stripe dashboard
3. Get live API keys (start with `pk_live_` and `sk_live_`)

### Step 2: Update Environment Variables
Replace test keys with live keys in production environment:

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_your_live_publishable_key
STRIPE_SECRET_KEY=sk_live_your_live_secret_key
```

### Step 3: Configure Webhooks (Optional)
For advanced features like tracking successful payments:
1. In Stripe Dashboard, go to "Developers" → "Webhooks"
2. Add endpoint: `https://yoursite.com/api/stripe/webhook`
3. Listen for `checkout.session.completed` events

## Security Notes

- Secret keys are only used server-side
- Publishable keys are safe to expose in client-side code
- All payments are processed securely by Stripe
- No payment data is stored on your servers
- Users never enter card details on your site

## Testing

Use these test card numbers in test mode:
- **Success**: 4242 4242 4242 4242
- **Declined**: 4000 0000 0000 0002
- **Requires Authentication**: 4000 0025 0000 3155

## Support

If you need help with Stripe setup:
1. Check Stripe's documentation: https://stripe.com/docs
2. Contact Stripe support through their dashboard
3. Email here.is.alex@gmail.com for integration questions

The donation system is now fully functional and ready for production use!
