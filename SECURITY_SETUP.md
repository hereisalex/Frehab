# Security Setup Guide

## Overview
This guide explains how to properly manage sensitive credentials for the Frehab application.

## What Was Fixed
- Removed sensitive OAuth credentials from the git repository
- Added proper `.gitignore` rules to prevent future credential commits
- Created template files for credential management
- Rewrote git history to remove sensitive data

## Setting Up Your Local Environment

### 1. Create Local Environment File
Create a `.env.local` file in the root directory with your actual credentials:

```bash
# Copy the template
cp env.template .env.local
```

### 2. Fill in Your Credentials
Edit `.env.local` with your actual values:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key_here

# OAuth Credentials
GOOGLE_CLIENT_ID=your_google_client_id_here
GOOGLE_CLIENT_SECRET=your_google_client_secret_here

GITHUB_CLIENT_ID=your_github_client_id_here
GITHUB_CLIENT_SECRET=your_github_client_secret_here

FACEBOOK_APP_ID=your_facebook_app_id_here
FACEBOOK_APP_SECRET=your_facebook_app_secret_here

DISCORD_CLIENT_ID=your_discord_client_id_here
DISCORD_CLIENT_SECRET=your_discord_client_secret_here

DATABASE_PASSWORD=your_database_password_here

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret_here
```

## Security Best Practices

### ✅ Do's
- Use `.env.local` for local development
- Use environment variables in production
- Keep credentials secure and private
- Rotate credentials regularly
- Monitor for unauthorized usage

### ❌ Don'ts
- Never commit `.env.local` to git
- Never commit actual credentials to any file
- Don't share credentials in public repositories
- Don't use hardcoded credentials in code

## Production Deployment

For production deployment:

1. **Vercel**: Add environment variables in the Vercel dashboard
2. **Other platforms**: Use their respective environment variable management systems
3. **Database**: Use connection pooling and secure database credentials

## Monitoring

- Regularly check GitHub's secret scanning alerts
- Monitor OAuth application usage
- Review authentication logs in Supabase dashboard
- Set up alerts for unusual authentication patterns

## Emergency Response

If credentials are compromised:

1. Immediately revoke the compromised credentials
2. Generate new credentials
3. Update all environment variables
4. Notify users if necessary
5. Review logs for unauthorized access

## File Structure

```
Frehab/
├── .env.local          # Local credentials (not in git)
├── env.template        # Template for environment variables
├── .gitignore          # Prevents credential files from being committed
└── SECURITY_SETUP.md   # This file
```

## Next Steps

1. Create your `.env.local` file with your actual credentials
2. Test the OAuth flows in development
3. Set up production environment variables
4. Configure monitoring and alerts
5. Regularly review and rotate credentials 