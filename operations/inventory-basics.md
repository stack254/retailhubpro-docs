# Inventory Basics

Use `Inventory` to control what you sell and what stock is available in each store.

## Core areas

- **Product management**: create and edit the products your store sells
- **Category management**: organize products into groups for filtering and reporting
- **Stock adjustments**: record changes in quantity that are not from a sale

## Recommended setup order

1. Create categories
2. Create products and assign them to categories
3. Add opening stock using a stock adjustment
4. Review quantities before sales begin

## Typical tasks

### Add a category

1. Open `Inventory`.
2. Go to `Categories`.
3. Click `Add Category`.
4. Enter the category name.
5. Save.

Use clear, consistent names. Examples: `Drinks`, `Snacks`, `Electronics`, `Household`.

### Add a product

1. Open `Inventory`.
2. Click `Add Product`.
3. Enter the product name.
4. Assign it to a category.
5. Set the selling price.
6. Add a barcode if you use a scanner — enter it in the barcode field.
7. Save the product.

Products start with zero stock. Run a stock adjustment to load opening quantities.

### Adjust stock

Use stock adjustments to:

- load opening stock when setting up a new store
- correct quantity errors
- record deliveries or returns outside the normal sales flow

**Steps:**

1. Open `Inventory`.
2. Go to the product or find it in the list.
3. Open `Stock Adjustments` for that product.
4. Select the store you are adjusting stock for.
5. Enter the quantity change.
   - Use a positive number to add stock.
   - Use a negative number to reduce stock.
6. Add a reason if prompted.
7. Save the adjustment.

### Check stock levels

The inventory list shows current stock per product. Use the store filter to see stock for a specific branch.

Stock alerts show when a product's quantity falls below a set threshold.

## Good practice

- Always verify the correct store is selected before making a stock adjustment
- Use consistent product names so staff can find items quickly during sales
- Load opening stock before training staff on the POS
- Run a stock check regularly and compare physical counts against inventory records

## Common mistakes

- Creating products but not loading opening stock — products will appear but cannot be sold
- Adjusting stock in the wrong store context
- Using inconsistent product names that cause duplicates

## Related guides

- [Add products and opening stock](/onboarding/add-products-and-stock)
- [Barcode scanning](/operations/barcode-scanning)
- [Manage stores](/operations/manage-stores)
