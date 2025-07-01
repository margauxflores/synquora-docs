---
title: Deploying to Vercel
description: How to deploy Synquora using Vercel's one-click deployment.
---

Vercel is the easiest way to host your Synquora instance with zero config.

---

## 1. Prepare Your Repository

Make sure your repository contains the following:

- `vercel.json` (optional, for settings)
- A valid `.env.sample` file
- A working build command (`pnpm build`)
- Output folder is `.next` (default for Next.js apps)

---

## 2. Deploy Using the Button

You can deploy instantly using the button below:

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/margauxflores/synquora)

---

## 3. Set Your Environment Variables

Once the Vercel dashboard prompts you, set these values (refer to your `.env.sample`):

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
DATABASE_URL=
DISCORD_GUILD_ID=
DISCORD_BOT_TOKEN=
DISCORD_ANNOUNCEMENT_CHANNEL_ID=
NEXT_PUBLIC_APP_URL=https://your-vercel-app.vercel.app
```

---

## 4. Confirm Deployment

Once deployed:
- Go to your Vercel dashboard
- Click **Visit**
- You should see Synquora's login page

---

## 5. Set GitHub Auto-Deploys (Optional)

Connect your GitHub repo to auto-redeploy on push.

---

## 🔍 Related

- [Vercel Docs](https://vercel.com/docs)
- [Astro Docs (for landing/docs site)](https://docs.astro.build)
