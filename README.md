# BIS TEST

This test demonstrates integrating a **WordPress backend (as a headless CMS)** with a **Next.js frontend**, using **GraphQL**, **REST APIs**, and a **custom WordPress endpoint**.

---

## Project Structure

```
bema-test/
├── wp-headless-test-export.zip     # Exported WordPress site (Local by Flywheel)
├── wp-next-test/                   # Next.js frontend project
│   ├── app/
│   ├── lib/
│   └── ...
├── README.md                       # You're here

````

---

## Setup Instructions

### 1. Restore the WordPress Site

#### Requirements:

- [Local by Flywheel](https://localwp.com) installed

#### Steps:

1. Open **Local** - click `Import Site` - select `wp-headless-test-export.zip`
2. Start the site (name: `wp-headless-test`)
3. Visit: [http://wp-headless-test.local](http://wp-headless-test.local)
4. Admin Login:
   - **Username**: `root`
   - **Password**: `root` (or check your own setup)
5. Confirm the following plugins are **installed and activated**:
   - WPGraphQL
   - Easy Digital Downloads
6. In WordPress:
   - Navigate to `Appearance - Theme Editor - functions.php`
   - Confirm the custom REST API snippet for `submit-name` and `get-name` exists

---

### 2. Install & Run the Next.js App

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

## Environment Variables (`.env.local`)

```env
# Exchange rate API key (if using CurrencyLayer or another secured provider)
EXCHANGE_RATE_API_KEY=your_actual_key
```

> To get the API kindly visit [https://exchangerate.host/dashboard](https://exchangerate.host/dashboard). You must be a registered user to access your api key.

---

## Note on Exchange Rate API Endpoint

Originally, the task required fetching the NGN - USD exchange rate using this endpoint:

```

[https://api.exchangerate.host/latest?base=NGN\&symbols=USD](https://api.exchangerate.host/latest?base=NGN&symbols=USD)

````

However, when tested with an API key, it returned:

```json
{
  "success": false,
  "error": {
    "code": 103,
    "type": "invalid_api_function"
  }
}
````

After checking the official API documentation, I realized that the `/latest` endpoint may no longer be available under the authenticated plan or was replaced for secured access.

### Solution

Based on some information in their documentation, I updated the project to use this with my api:

```
https://api.exchangerate.host/change?currencies=USD,NGN
```

This returned a valid result:

```json
{
  "success": true,
  "change": true,
  "source": "USD",
  "quotes": {
    "USDNGN": {
      "start_rate": 1582.24939,
      "end_rate": 1583.010016,
      "change": 0.7606,
      "change_pct": 0.0481
    }
  }
}
```

---

## Implemented Features

### Part 0: WordPress Setup

* WPGraphQL and EDD activated
* 3 dummy blog posts created
* Custom REST endpoint for name reversal

### Part 1: Next.js + GraphQL

* Blog post titles and site metadata fetched via `graphql-request`
* Static site generation (or Suspense in App Router)
* Typescript with typed GraphQL response

### Part 2: Exchange Rate API (NGN - USD)

* Fetched from `exchangerate.host`
* Reverse-converted from USDNGN - NGNUSD
* Includes error handling and fallback UI
* includes Suspense during fetch.

### Part 3: EDD Plugin REST API

* Retrieved `currency` setting via REST: `/wp-json/edd/v1/settings`
* Displayed as `Store Currency: NGN`

### Part 4 (Bonus): Custom REST Name Handler

* POST `/wp-json/custom/v1/submit-name` stores reversed name
* GET `/wp-json/custom/v1/get-name` retrieves it
* UI with input and dynamic feedback in Next.js

---

## Author

**Korede Faleye**

* Computer Science graduate – Yaba College of Technology
* Software Developer, Passionate about frontend, APIs, and web integration
* GitHub: [korelyf](https://github.com/kore4lyf)

---

## Final Tips for Reviewer

* Start WordPress first (LocalWP)
* Install Next.js dependencies
* To get the Exchangerate API key, kindly visit [https://exchangerate.host/dashboard](https://exchangerate.host/dashboard). You must be a registered user to access your api key.
* Then run Next.js app
* Visit:
  * [http://localhost:3000](http://localhost:3000) – Home (posts)

Thanks for reviewing my submission 🙏



