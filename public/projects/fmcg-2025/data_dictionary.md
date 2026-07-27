# Data Dictionary: Nigerian FMCG Sales Dataset (2025)

## Dataset Overview
| Attribute | Value |
|-----------|-------|
| **Dataset Name** | Nigerian FMCG Sales and Distribution 2025 |
| **Generated On** | 2026-07-22 |
| **Total Records** | 20,000 |
| **Time Period** | January 1, 2025 – December 31, 2025 |
| **Purpose** | Business Intelligence, Sales Analytics, SQL/Power BI/Excel practice |
| **Company** | ApexFoods Nigeria Plc (Fictional) |

---

## Column Definitions

| Column Name | Data Type | Description | Sample Values | Business Purpose |
|-------------|-----------|-------------|---------------|------------------|
| **Order_ID** | String | Unique identifier for each sales transaction | ORD-000001, ORD-020000 | Transaction tracking, deduplication |
| **Order_Date** | Date (YYYY-MM-DD) | Date when the order was placed | 2025-01-15, 2025-07-22, 2025-12-25 | Trend analysis, seasonality studies |
| **Delivery_Date** | Date (YYYY-MM-DD) | Date when goods were delivered to the customer | 2025-01-17, 2025-08-03 | Logistics performance, SLA monitoring |
| **State** | String | Nigerian state where the retailer is located | Lagos, Kano, Rivers, Abuja | Geographic sales analysis |
| **Region** | String | Nigerian geopolitical zone | North West, South West, North Central, South East, South South | Regional performance comparison |
| **City** | String | City of the retailer | Lagos, Kano, Port Harcourt, Ibadan | City-level demand planning |
| **Distributor_Name** | String | Name of the distribution partner handling the order | PrimeStar Distribution Ltd, NexusMart Trading | Distributor performance, contract management |
| **Retailer_Name** | String | Name of the retail customer | Mainland Supermarket, Fresh Foods, Modern Mart | Customer segmentation, CRM |
| **Sales_Rep** | String | Name of the sales representative | Chidi Okafor, Fatima Bello, Ibrahim Garba | Sales force effectiveness, commission calculations |
| **Customer_Type** | String | Classification of the retail outlet | Supermarket, Provision Store, Open Market, Modern Trade, Kiosk, Wholesaler | Channel strategy, pricing tiers |
| **Product_Category** | String | Top-level product category | Instant Noodles, Cooking Oil, Pasta, Snacks, Seasoning | Category management, portfolio analysis |
| **Product_Name** | String | Specific product name | Chicken Noodles, Premium Cooking Oil 2L, Classic Chin Chin | SKU-level analytics |
| **SKU** | String | Stock Keeping Unit code | CHKN-70G, OIL-5L, CHIN-500G | Inventory, supply chain tracking |
| **Pack_Size** | String | Size/weight of the package | 70g, 1L, 500g, 150g | Price band analysis |
| **Quantity_Sold** | Integer | Number of units sold per transaction | 1, 5, 12, 30, 55 | Volume analysis, demand forecasting |
| **Unit_Price** | Currency (NGN) | Price per unit after regional and channel adjustments | 180, 4200, 680 | Revenue calculation, price elasticity |
| **Discount_Percentage** | Percentage | Discount applied to the order (0–30%) | 0, 5, 10, 15, 20, 25, 30 | Promotion effectiveness, margin impact |
| **Revenue** | Currency (NGN) | Total revenue = Qty × Unit Price × (1 − Discount) | 3420, 75600, 47600 | Top-line sales, financial reporting |
| **Cost** | Currency (NGN) | Total cost = Qty × unit cost | 2850, 63000, 37800 | Gross margin calculation |
| **Profit** | Currency (NGN) | Profit = Revenue − Cost | 570, 12600, 9800 | Profitability analysis by segment |
| **Payment_Method** | String | Method of payment | Cash, Transfer, POS, Cheque, Mobile Money | Collection efficiency, credit risk |
| **Sales_Channel** | String | Channel through which the sale occurred | Direct Sales, Distributor, Retail Outlet, Online, Wholesale | Channel contribution analysis |
| **Warehouse** | String | Warehouse fulfilling the order | WH-Lagos, WH-Abuja, WH-Kano, WH-Port Harcourt | Inventory routing, logistics optimization |
| **Delivery_Status** | String | Outcome of the delivery | Delivered, Delayed, Returned | Logistics KPIs, customer satisfaction |
| **Inventory_Level** | Integer | Remaining stock for the SKU after fulfillment | 45, 120, 800 | Stock replenishment planning |
| **Customer_Rating** | Integer | Customer satisfaction score (1–5) | 1, 2, 3, 4, 5 | CSAT tracking, product quality control |
| **Monthly_Target** | Currency (NGN) | Monthly sales target assigned to the Sales Rep | 300000, 520000, 750000 | Performance management, incentive planning |
| **Target_Achieved** | Integer (0/1) | 1 if cumulative monthly revenue meets target, else 0 | 0, 1 | Commission eligibility, performance flag |

---

## Data Quality Notes

1. **Missing Values**: Small percentage of Retailer_Name, City, Payment_Method, Customer_Rating, and Discount_Percentage fields are intentionally left blank to simulate real-world data capture issues.

2. **Duplicate Customer Names**: Some retailer names appear multiple times across different orders (not duplicate orders). This reflects small chains buying from multiple locations.

3. **Seasonal Trends**: Sales spike during Ramadan/Eid (March), Eid al-Adha (June), Easter (April), Christmas (December), and New Year.

4. **Regional Performance**: South West and South South regions typically outperform North East and North West due to higher consumption density and retail footprint.

5. **Sales Rep Bias**: Certain reps (e.g., Haruna Mohammed, Ibrahim Garba) are modeled as consistently over-performing, while others (e.g., Uchechukwu Obi) underperform.

6. **Delivery Delays**: Approximately 8–12% of orders have delivery dates exceeding 7 days from the order date.

7. **Product Pricing**: Prices vary by region, customer type, festive multiplier, and small random variance to reflect negotiated pricing.

---

## Business Logic Summary

- **Revenue** = Quantity_Sold × Unit_Price × (1 − Discount_Percentage/100)
- **Profit** = Revenue − Cost
- **Delivery_Date > Order_Date**: Always enforced
- **Discount_Percentage**: Usually 0–15%, promotions 20–30% weighted at 15% probability
- **Inventory_Level**: Decreases after each sale; automatic restock triggers below 50 units
- **Ratings**: 1–5 scale with weighted distribution favoring 3–4
