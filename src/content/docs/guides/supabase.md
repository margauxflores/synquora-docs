---
title: Supabase Setup
description: How to configure Supabase for your Synquora instance.
---

This guide walks you through setting up Supabase to use as the database and auth storage layer for Synquora.

---

## 1. Create a Supabase Project

Go to [https://supabase.com](https://supabase.com) and log in.

Click **"New Project"** and fill in:

- **Project Name:** synquora
- **Database Password:** Choose something secure (you'll need this later)

Wait a minute or two while it provisions your project.

---

## 2. Get Your Database URL

In your Supabase project dashboard:

- Go to **Settings > Database**
- Copy the **Connection string (URI)** (format: `postgresql://...`)

Paste this into your `.env`:

```env
DATABASE_URL=postgresql://username:password@db.supabase.co:5432/postgres
```

---

## 3. Enable Row Level Security (optional)

Synquora uses Drizzle ORM directly — no special setup is needed on the Supabase side beyond the database connection.

> ⚠️ Just don’t enable RLS (Row Level Security) unless you know how to configure policies.

---

## 4. You're Done 🎉

After setting your `DATABASE_URL`, you can run the following to push your schema and seed the database:

```bash
pnpm db:push
pnpm db:seed
```

---

## 🔍 Related

- [Supabase Dashboard](https://app.supabase.com)
- [Drizzle ORM Docs](https://orm.drizzle.team/)
