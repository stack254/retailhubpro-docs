# Make Your First Sale

Use this guide to confirm the POS is ready for live transactions.

## Goal

Complete a sale from the POS using stocked products and a real payment method.

## Where to go

Open:

- `Sales`

## Before you start

Make sure:

- at least one store exists and is selected
- products are created with stock available in that store
- the user has access to the store
- if using M-Pesa, credentials are configured in `Settings` → `M-Pesa`

## Steps

1. Open the `Sales` page.
2. Confirm the correct store is shown in the header.
3. Add one or more products to the cart.
   - Search by name or scan a barcode.
   - Tap or click a product to add it.
4. Adjust quantities if needed.
5. Review the cart total.
6. Click `Charge` to open the payment screen.
7. Select a payment method:

   - **M-Pesa**: enter the customer's phone number and send the STK Push. Wait for the customer to confirm on their phone.
   - **Cash**: enter the amount received. The system calculates change.
   - **Card**: complete the card transaction on your card terminal, then enter the last four digits of the card.
   - **Bank Transfer**: confirm the transfer has arrived, then enter the transfer reference number.

8. Click `Complete Sale`.
9. Review the receipt or sale confirmation.

## Expected result

After the sale:

- the sale is recorded and appears in sales history
- inventory reduces automatically for the items sold
- the transaction is included in reports

## Good practice

- Start with a test sale using a small or zero-amount product before your first live day
- Verify the cart total before opening the payment screen
- For M-Pesa, always wait for the payment confirmation before clicking `Complete Sale`
- Check reports at the end of the day to confirm all sales were captured

## Next guides

- [Payment methods overview](/payments/)
- [Use M-Pesa at the POS](/payments/mpesa-at-pos)
- [Inventory basics](/operations/inventory-basics)
- [Reports and subscription](/operations/reports-and-subscription)
