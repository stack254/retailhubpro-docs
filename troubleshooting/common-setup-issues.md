# Common Setup Issues

Use this page when onboarding or daily setup does not go as expected.

## Business registration

### I cannot register the business

Check for:

- a business name that is already taken
- an admin email already in use
- missing required fields
- password mismatch

## Stores

### I cannot add a store

Check for:

- missing store name
- missing parent store when creating a non-main branch
- incomplete form data

## Users and access

### Users cannot access the correct pages

Check for:

- wrong role assignment
- missing store assignment
- inactive user status

## Inventory and products

### Products exist but cannot be sold

Check for:

- zero stock for that product in the selected store
- wrong store context selected in the POS
- product not fully saved or missing required fields

### Sales page is open but items do not appear

Check for:

- products missing from inventory
- no stock loaded for the selected store
- store selection mismatch between the POS and where stock was loaded

## Payments

### M-Pesa option is not available at checkout

Check for:

- M-Pesa credentials not configured — open `Settings` → `M-Pesa` and complete [M-Pesa Setup](/payments/mpesa-setup)
- credentials saved in sandbox mode when you are trying to process live payments

### STK Push prompt not received by customer

Check for:

- incorrect phone number format — use `07XXXXXXXX` or `2547XXXXXXXX`
- customer has no network signal
- wrong shortcode or passkey in M-Pesa settings

Try resending the prompt or switch to [manual entry](/payments/mpesa-at-pos#manual-entry-fallback-method) using the customer's transaction ID.

### M-Pesa credentials fail verification

Check for:

- mismatched environment — sandbox keys will not verify in live mode and vice versa
- Consumer Key or Consumer Secret copied with extra spaces
- Passkey that does not match the shortcode

### Payment completed on customer phone but POS still shows pending

Wait a few seconds for the system to update. If the status does not change:

- check internet connectivity
- refresh the page
- if the payment is confirmed in M-Pesa messages, use manual entry to record the transaction ID

## Subscription

### Subscription features are locked

Check for:

- expired plan
- plan limit reached for stores, users, or products
- payment completed but not yet verified

### Payment completed but plan did not activate

Contact support with your payment reference number. See [Plans and Billing](/billing/plans-and-billing) for what information to have ready.

## When to escalate

Escalate to your admin or the RetailHub Pro support team when:

- payment is completed but the plan does not activate after a few minutes
- user roles look correct but access still fails after reassignment
- sales or inventory values are clearly inconsistent after checking store context
