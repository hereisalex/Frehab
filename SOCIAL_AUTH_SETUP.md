# Social Authentication Setup Guide

This guide will help you configure Google, GitHub, Facebook, and Discord authentication providers in your Supabase project to enable social login functionality.

## Prerequisites

- A Supabase project (already configured)
- Google Cloud Console access (for Google OAuth)
- GitHub account (for GitHub OAuth)
- Facebook Developer account (for Facebook OAuth)
- Discord Developer account (for Discord OAuth)

## Google OAuth Setup

### 1. Create Google OAuth Credentials

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API
4. Go to "Credentials" → "Create Credentials" → "OAuth 2.0 Client IDs"
5. Choose "Web application"
6. Add authorized redirect URIs:
   - `https://frehab.org/auth/callback`
   - `http://localhost:3000/auth/callback` (for development)
7. Copy the Client ID and Client Secret

### 2. Configure in Supabase

1. Go to your Supabase Dashboard
2. Navigate to Authentication → Providers
3. Find Google and click "Edit"
4. Enable Google provider
5. Enter your Google Client ID and Client Secret
6. Save the configuration

## GitHub OAuth Setup

### 1. Create GitHub OAuth App

1. Go to [GitHub Settings → Developer settings → OAuth Apps](https://github.com/settings/developers)
2. Click "New OAuth App"
3. Fill in the details:
   - **Application name**: Frehab
   - **Homepage URL**: `https://frehab.org`
   - **Authorization callback URL**: `https://frehab.org/auth/callback`
4. Click "Register application"
5. Copy the Client ID and Client Secret

### 2. Configure in Supabase

1. Go to your Supabase Dashboard
2. Navigate to Authentication → Providers
3. Find GitHub and click "Edit"
4. Enable GitHub provider
5. Enter your GitHub Client ID and Client Secret
6. Save the configuration

## Facebook OAuth Setup

### 1. Create Facebook App

1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Click "Create App" → "Consumer" → "Next"
3. Fill in app details and create the app
4. Go to "Facebook Login" → "Settings"
5. Add Valid OAuth Redirect URIs:
   - `https://frehab.org/auth/callback`
   - `http://localhost:3000/auth/callback`
6. Copy the App ID and App Secret

### 2. Configure in Supabase

1. Go to your Supabase Dashboard
2. Navigate to Authentication → Providers
3. Find Facebook and click "Edit"
4. Enable Facebook provider
5. Enter your Facebook App ID and App Secret
6. Save the configuration

## Discord OAuth Setup

### 1. Create Discord Application

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Click "New Application"
3. Fill in application details
4. Go to "OAuth2" → "General"
5. Add redirect URIs:
   - `https://frehab.org/auth/callback`
   - `http://localhost:3000/auth/callback`
6. Copy the Client ID and Client Secret

### 2. Configure in Supabase

1. Go to your Supabase Dashboard
2. Navigate to Authentication → Providers
3. Find Discord and click "Edit"
4. Enable Discord provider
5. Enter your Discord Client ID and Client Secret
6. Save the configuration

## Additional Providers (Optional)

You can also configure other providers like:
- **Twitter**: For social media integration
- **LinkedIn**: For professional networking
- **Apple**: For iOS users

Follow similar steps for each provider in their respective developer consoles.

## Testing

1. Start your development server: `npm run dev`
2. Navigate to `/signup` or `/login`
3. Try the social authentication buttons
4. Verify the redirect flow works correctly

## Environment Variables

Make sure your `.env.local` file has the correct Supabase URL and anon key:

```env
NEXT_PUBLIC_SUPABASE_URL=https://avlfffrocdabopmssohw.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
NEXT_PUBLIC_SITE_URL=https://frehab.org
```

## Security Notes

- Keep your OAuth client secrets secure
- Use environment variables for sensitive data
- Regularly rotate your OAuth credentials
- Monitor authentication logs in Supabase Dashboard
- Ensure proper scopes are requested for each provider

## Troubleshooting

### Common Issues:

1. **Redirect URI mismatch**: Ensure the callback URLs match exactly
2. **CORS errors**: Check that your domain is properly configured
3. **Provider not enabled**: Verify the provider is enabled in Supabase
4. **Invalid credentials**: Double-check Client ID and Secret
5. **Scope issues**: Ensure proper permissions are requested

### Debug Steps:

1. Check browser console for errors
2. Verify Supabase configuration
3. Test with a simple OAuth flow
4. Check Supabase logs for authentication events
5. Verify app settings in provider developer consoles

## Provider-Specific Notes

### Facebook
- Requires app review for production use
- Limited to 100 users in development mode
- Requires privacy policy and terms of service

### Discord
- Requires bot token for advanced features
- Server members can see bot presence
- Supports rich presence and voice channels

## Next Steps

Once social authentication is working:

1. Customize the user experience
2. Add user profile management
3. Implement role-based access control
4. Add email verification flows
5. Set up user onboarding processes
6. Configure user data mapping for each provider 