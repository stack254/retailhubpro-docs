# Use M-Pesa at the POS

Use this guide to accept M-Pesa payment from a customer during checkout.

## Before you start

M-Pesa must be configured by an admin before cashiers can use it. See [M-Pesa Setup](/payments/mpesa-setup) if it is not yet active.

## Where to go

Open:

- `Sales`

## STK Push (standard method)

This is the default. The customer receives a payment prompt on their phone and enters their PIN to confirm.

### Steps

1. Add products to the cart.
2. Click `Charge` or open the payment modal.
3. Select `M-Pesa` as the payment method.
4. Confirm the amount is correct.
5. Enter the customer's M-Pesa phone number.
   Use the format `07XXXXXXXX` or `2547XXXXXXXX`.
6. Click `Send STK Push`.
7. Ask the customer to check their phone and enter their M-Pesa PIN.
8. Wait for the confirmation — the screen updates when payment is received.
9. Click `Complete Sale`.

### Expected result

- the customer's phone receives a payment prompt
- after the customer enters their PIN, the payment status updates to confirmed
- the sale is recorded with M-Pesa as the payment method

## Manual entry (fallback method)

Use this when the STK Push cannot be sent or the customer has already paid directly to the till.

### Steps

1. Select `M-Pesa` as the payment method.
2. Switch to `Manual` mode using the toggle below the phone number field.
3. Enter the M-Pesa transaction ID from the customer's confirmation message.
   Example format: `RK12ABCDEF`.
4. Click `Complete Sale`.

## Good practice

- Always confirm the STK Push was received before asking the customer to enter their PIN
- If the customer does not receive the prompt within 30 seconds, ask them to check signal and try again or switch to manual entry
- Use manual entry only after confirming the transaction ID matches the sale amount

## Troubleshooting

- **Prompt not received**: check the phone number is correct, confirm the customer has network signal, and retry or use manual entry
- **Payment confirmed on phone but POS still shows pending**: wait a few seconds for the system to update, then refresh
- **Cannot select M-Pesa**: M-Pesa credentials are not configured — contact your admin to complete [M-Pesa Setup](/payments/mpesa-setup)
- **STK Push sent to wrong number**: cancel the prompt if possible, correct the number, and resend

## Related guides

- [M-Pesa Setup](/payments/mpesa-setup)
- [Payment methods overview](/payments/)
- [Common setup issues](/troubleshooting/common-setup-issues)
