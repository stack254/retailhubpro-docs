# Paystack Web Subscription Test

Use this checklist to validate end-to-end web subscription payment activation with Paystack test keys.

## 1) Backend environment

Set these in `Backend/ipos_backend/.env`:

```env
PAYSTACK_SECRET_KEY=sk_test_xxx
PAYSTACK_PUBLIC_KEY=pk_test_xxx
PAYSTACK_WEBHOOK_SECRET=sk_test_xxx
PAYSTACK_BASE_URL=https://api.paystack.co
PAYSTACK_SUBSCRIPTION_CALLBACK_URL=https://<your-frontend-host>/subscription/renew
```

Notes:

- `PAYSTACK_WEBHOOK_SECRET` can be the same as `PAYSTACK_SECRET_KEY` for this integration.
- Callback URL should point to your web app route that now auto-verifies `reference`.

## 2) Start backend and frontend

Backend:

```powershell
cd Backend/ipos_backend
python manage.py runserver 0.0.0.0:8000
```

Frontend:

```powershell
cd Frontend/pos-frontend
npm run dev
```

## 3) Start ngrok for webhook delivery

```powershell
ngrok http 8000
```

Copy the HTTPS forwarding URL, for example:

- `https://abcd-1234.ngrok-free.app`

Your webhook URL becomes:

- `https://abcd-1234.ngrok-free.app/api/paystack/webhook/`

## 4) Configure Paystack test dashboard

In Paystack Dashboard test mode:

- Set webhook URL to your ngrok webhook URL.
- Keep your test secret and public keys in your backend and frontend env.

## 5) Run payment flow from web app

1. Login as business admin.
2. Open subscription page.
3. Choose plan and duration.
4. Click `Continue to Paystack`.
5. Complete payment in Paystack test checkout.
6. Confirm redirect back to `/subscription/renew?reference=...`.

Expected result:

- Frontend auto-calls verify endpoint.
- Business subscription activates automatically.

## 6) Verify backend records

Check admin:

- `PaystackSubscriptionPayment` status should become `success`.
- `subscription_applied_at` should be set.
- Business `subscription_plan` and `subscription_end` should be updated.

## 7) Quick API checks

Initialize:

```http
POST /api/paystack/subscriptions/initialize/
```

Verify:

```http
GET /api/paystack/subscriptions/verify/{reference}/
```

Webhook:

```http
POST /api/paystack/webhook/
```

## Troubleshooting

- `Invalid Paystack signature`: verify webhook URL and secret key.
- `Amount or currency mismatch`: ensure plan pricing currency and amount matches checkout.
- `Failed to initialize Paystack checkout`: verify `PAYSTACK_SECRET_KEY` test key and network access.
