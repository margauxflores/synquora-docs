---
title: Discord Bot Setup
description: How to register and configure your Discord bot for Synquora.
---

To use Synquora’s Discord event integration, you'll need to create and configure a bot on the Discord Developer Portal.

---

## 1. Create a New Discord App

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Click **"New Application"**
3. Name it `Synquora Bot`
4. Go to **Bot** tab → **Add Bot**

---

## 2. Get Your Bot Token

- Under the **Bot** tab, click **"Reset Token"** and copy it.
- Save it in your `.env` file:

```env
DISCORD_BOT_TOKEN=your-discord-bot-token-here
```

> ⚠️ Never expose your bot token publicly!

---

## 3. Invite the Bot to Your Server

Still in the Developer Portal:

1. Go to **OAuth2 > URL Generator**
2. Scopes: check `bot` and `applications.commands`
3. Bot Permissions:
- `Send Messages`
- `Manage Events`
- `Read Message History`
- `Embed Links`

Copy the generated URL and use it to invite the bot to your server.

---

## 4. Get Required Discord IDs

You’ll need to populate the following in your `.env` file:

```env
DISCORD_GUILD_ID=123456789012345678
DISCORD_ANNOUNCEMENT_CHANNEL_ID=123456789012345678
```

- **Guild ID:** Right-click your Discord server → Copy Server ID
- **Channel ID:** Right-click the announcements channel → Copy Channel ID

Make sure **Developer Mode** is enabled in Discord → Settings → Advanced.

---

## 5. You're Done 🎉

The bot will now be able to:

- Announce events
- Create native Discord events
- Sync participation links

You can test this by creating a new event inside the app and checking the target channel.

---

## 🔍 Related

- [Discord Developer Portal](https://discord.com/developers/applications)
- [Discord.js Docs](https://discord.js.org)
