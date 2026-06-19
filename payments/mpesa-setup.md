# M-Pesa Setup

Configure M-Pesa credentials so the POS can send STK Push payment prompts.

## Who should do this

- Admin

## What you need before starting

Obtain the following from the [Safaricom Developer Portal](https://developer.safaricom.co.ke):

- Consumer Key
- Consumer Secret
- Passkey
- Business Shortcode (till number or paybill number)

## Where to go

Open:

- `Settings` → `M-Pesa`

## Steps

1. Open `Settings` and select the `M-Pesa` tab.
2. Choose the environment:
   - `Sandbox` for testing with Safaricom test credentials
   - `Live` for real transactions
3. Enter your `Consumer Key`.
4. Enter your `Consumer Secret`.
5. Enter your `Passkey`.
6. Enter your `Shortcode` (till or paybill number).
7. Click `Save Credentials`.
8. Click `Verify` to confirm the credentials are accepted.

## Expected result

After successful verification:

- the M-Pesa status shows as configured
- cashiers can select M-Pesa as a payment method at checkout
- STK Push prompts will be sent to customers during sales

## Switching to live mode

When you are ready to accept real payments:

1. Return to `Settings` → `M-Pesa`.
2. Change the environment from `Sandbox` to `Live`.
3. Replace test credentials with your live Consumer Key, Consumer Secret, Passkey, and Shortcode.
4. Save and verify again.

## Troubleshooting

- **Verification fails**: double-check that the Consumer Key and Consumer Secret match the environment you selected (sandbox keys do not work in live mode).
- **STK Push not received**: confirm the shortcode is correct and that the Passkey matches that shortcode.
- **Wrong environment saved**: return to Settings, switch the environment, re-enter the matching credentials, and save again.

## Related guides

- [Use M-Pesa at the POS](/payments/mpesa-at-pos)
- [Common setup issues](/troubleshooting/common-setup-issues)
