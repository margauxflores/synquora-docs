---
title: Clerk Setup
description: How to configure Clerk authentication for Synquora.
---

This guide will walk you through how to configure [Clerk](https://clerk.com) to enable authentication in your Synquora deployment.

---

## 1. Create a Clerk Project

Head over to [https://clerk.com](https://clerk.com) and create an account (or log in if you already have one).

Then, create a new **project** for Synquora.

---

## 2. Get Your API Keys

Once your project is created:

- Go to the **API Keys** section in the sidebar.
- Copy the following:
- **Publishable Key**
- **Secret Key**

---

## 3. Add to Your `.env` File

Paste the keys into your `.env` file:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_XXXXXXXXXXXXXXXX
CLERK_SECRET_KEY=sk_test_XXXXXXXXXXXXXXXX
```

> ⚠️ Never commit your `.env` file to version control!

---

## 4. Configure Allowed URLs

In your Clerk **Dashboard > Settings > Authorized URLs**, add:

```
http://localhost:3000
https://your-deployment.vercel.app
```

Replace `your-deployment.vercel.app` with your actual Vercel URL.

---

## 5. You're Done 🎉

Once these values are added to `.env`, Clerk will be ready to use in both local and production environments. The `Synquora` app comes pre-configured to use Clerk with:

- User sign-in/sign-up flow
- Session management
- Protected routes

---

## 🔍 Related

- [Clerk Docs](https://clerk.com/docs)
- [Synquora GitHub Repo](https://github.com/margauxflores/synquora)
