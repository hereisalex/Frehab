# OAuth Credentials Template

This file contains the OAuth credentials for configuring social authentication providers in Supabase.

## Google OAuth
- **Client ID**: `YOUR_GOOGLE_CLIENT_ID`
- **Client Secret**: `YOUR_GOOGLE_CLIENT_SECRET`

## GitHub OAuth
- **Client ID**: `YOUR_GITHUB_CLIENT_ID`
- **Client Secret**: `YOUR_GITHUB_CLIENT_SECRET`

## Facebook OAuth
- **App ID**: `YOUR_FACEBOOK_APP_ID`
- **App Secret**: `YOUR_FACEBOOK_APP_SECRET`

## Discord OAuth
- **Client ID**: `YOUR_DISCORD_CLIENT_ID`
- **Client Secret**: `YOUR_DISCORD_CLIENT_SECRET`

## Supabase Configuration

### Supabase URL
- **URL**: `YOUR_SUPABASE_URL`

### Database Password
- **Password**: `YOUR_DATABASE_PASSWORD`

## Setup Instructions

1. **Google**: Create OAuth 2.0 credentials at [Google Cloud Console](https://console.cloud.google.com/)
2. **GitHub**: Create OAuth App at [GitHub Developer Settings](https://github.com/settings/developers)
3. **Facebook**: Create app at [Facebook Developers](https://developers.facebook.com/)
4. **Discord**: Create application at [Discord Developer Portal](https://discord.com/developers/applications)

## Redirect URIs

For all providers, use these redirect URIs:
- Production: `https://frehab.org/auth/callback`
- Development: `http://localhost:3000/auth/callback`

## Security Notes

⚠️ **Important**: 
- Keep these credentials secure
- Never commit them to version control
- Use environment variables in production
- Regularly rotate credentials
- Monitor for unauthorized usage

## Testing

After configuring each provider in Supabase:
1. Test the OAuth flow in development
2. Verify user data is properly mapped
3. Check authentication logs in Supabase Dashboard
4. Test error handling and edge cases 