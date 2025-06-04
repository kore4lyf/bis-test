# BIS TEST

I specifically used the name bis-test to conceal the meaning behind the content, since I am not the only one participating test and the repo is also public.

This test demonstrates integrating a **WordPress backend (as a headless CMS)** with a **Next.js frontend**, using **GraphQL**, **REST APIs**, and a **custom WordPress endpoint**.

---

## 🗂️ Project Structure

```

bema-test/
├── wp-headless-test-export.zip     # Exported WordPress site (Local by Flywheel)
├── wp-next-test/                   # Next.js frontend project
│   ├── app/
│   ├── lib/
│   ├── pages/ (if needed)
│   └── ...
├── README.md                       # You're here

````

---

## ⚙️ Setup Instructions

### 🔁 1. Restore the WordPress Site

#### Requirements:

- [Local by Flywheel](https://localwp.com) installed

#### Steps:
1. Open **Local** → click `Import Site` → select `wp-headless-test-export.zip`
2. Start the site (name: `wp-headless-test`)
3. Visit: [http://wp-headless-test.local](http://wp-headless-test.local)
4. Admin Login:
   - **Username**: `admin`
   - **Password**: `admin` (or check your own setup)
5. Confirm the following plugins are **installed and activated**:
   - ✅ WPGraphQL
   - ✅ Easy Digital Downloads
6. In WordPress:
   - Navigate to `Appearance → Theme Editor → functions.php`
   - Confirm the custom REST API snippet for `submit-name` and `get-name` exists

---

### ⚡ 2. Install & Run the Next.js App

#### Requirements:
- Node.js 18+
- npm or yarn

#### Steps:

```bash
cd wp-next-test
cp .env.example .env.local
# Update environment variables below
npm install
npm run dev
````

---

## 🔐 Environment Variables (`.env.local`)

```env
# WordPress site URL (ensure LocalWP is running)
NEXT_PUBLIC_WORDPRESS_API_URL=http://wp-headless-test.local

# Exchange rate API key (if using CurrencyLayer or another secured provider)
EXCHANGE_RATE_API_KEY=your_actual_key
```

---

## ✅ Implemented Features

### Part 0: WordPress Setup

* WPGraphQL and EDD activated
* 3 dummy blog posts created
* Custom REST endpoint for name reversal

### Part 1: Next.js + GraphQL

* Blog post titles and site metadata fetched via `graphql-request`
* Static site generation (or Suspense in App Router)
* Typescript with typed GraphQL response

### Part 2: Exchange Rate API (NGN → USD)

* Fetched from `exchangerate.host`
* Reverse-converted from USDNGN → NGNUSD
* Includes error handling and fallback UI
* Optional Suspense version available

### Part 3: EDD Plugin REST API

* Retrieved `currency` setting via REST: `/wp-json/edd/v1/settings`
* Displayed as `Store Currency: NGN`
* Added PHP hook to set naira symbol: `₦`

### Part 4 (Bonus): Custom REST Name Handler

* POST `/wp-json/custom/v1/submit-name` stores reversed name
* GET `/wp-json/custom/v1/get-name` retrieves it
* UI with input and dynamic feedback in Next.js

---

## 📸 Screenshots (Optional)

*Add screenshots here if required for visual confirmation.*

---

## 📝 Notes & Assumptions

* `wp-headless-test.local` must be accessible (add to `/etc/hosts` if needed)
* API responses are assumed to be public (no auth required)
* GraphQL queries assume WPGraphQL is active and schema is default
* Custom REST route added via theme's `functions.php`

---

## 🙋 Author

**Korede Faleye**

* Computer Science graduate – Yaba College of Technology
* Passionate about frontend, APIs, and web integration
* GitHub: [github.com/your-username](https://github.com/your-username)

---

## ✅ Final Tips for Reviewer

* Start WordPress first (LocalWP)
* Then run Next.js app
* Visit:

  * [http://localhost:3000](http://localhost:3000) – Home (posts)
  * [http://localhost:3000/exchange-rate](http://localhost:3000/exchange-rate) – Exchange rate
  * [http://localhost:3000/store-currency](http://localhost:3000/store-currency) – EDD currency
  * [http://localhost:3000/submit-name](http://localhost:3000/submit-name) – Name reversal form

Thanks for reviewing my submission 🙏

```

---

Would you like me to package your project ZIP structure + `.env.example` file too?
```
