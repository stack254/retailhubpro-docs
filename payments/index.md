# Payment Methods

RetailHub POS supports four payment methods at checkout: M-Pesa, Cash, Card, and Bank Transfer.

## Available methods

### M-Pesa

Sends an STK Push prompt to the customer's phone. The customer enters their M-Pesa PIN to confirm. No card reader or cash handling required.

Best for: most Kenya transactions.

- [Set up M-Pesa](/payments/mpesa-setup)
- [Use M-Pesa at the POS](/payments/mpesa-at-pos)

### Cash

The cashier enters the amount received. The system calculates and displays the change due.

Best for: walk-in customers paying with notes or coins.

### Card

The cashier records the last four digits of the card used. The physical card terminal handles the transaction — RetailHub POS records the reference.

Best for: customers with Visa, Mastercard, or debit cards.

### Bank Transfer

The cashier records a transfer reference number. Confirm the transfer has arrived before completing the sale.

Best for: larger orders or wholesale transactions paid by bank.

## Where to choose a payment method

Payment methods appear in the checkout modal when you complete a sale from `Sales`.

## Good practice

- Confirm M-Pesa payment on the customer's phone before clicking `Complete Sale`
- Record accurate card last-four digits for reconciliation
- Only mark a bank transfer as complete after verifying the funds have arrived
