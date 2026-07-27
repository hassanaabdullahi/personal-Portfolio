# Power BI Step-by-Step Guide — FMCG Dashboard (FY 2024)

A complete beginner-friendly guide to building the dashboard from scratch.

---

## Part 1: Install Power BI Desktop

1. Go to https://powerbi.microsoft.com/en-us/desktop/
2. Click **Download Free**
3. Run the installer (`.exe` file) — accept all defaults
4. Once installed, open **Power BI Desktop**
5. You'll see a blank canvas with a ribbon at the top

---

## Part 2: Import the CSV Data

1. In the ribbon, click **Home** → **Get Data** → **Text/CSV**
2. Navigate to the downloaded `fmcg_sales.csv` file and click **Open**
3. Power BI will show a preview of the data — it should look like a table with 11 columns and 3600 rows
4. Click **Load** (not Transform Data — we'll do cleaning in Part 3)

> If you see a prompt about "Delimiter detection", make sure **Comma** is selected and click **Load**.

---

## Part 3: Clean Data with Power Query (Optional but Recommended)

1. In the ribbon, go to **Home** → **Transform Data** → **Transform Data**
2. Power Query Editor opens

### 3.1 Check column types
- The **Month** column should be `Date` type (icon: calendar)
- **UnitsSold** should be `Whole Number` (icon: 123)
- **UnitPrice**, **Revenue**, **Cost**, **Profit** should be `Decimal` (icon: 1.2)
- **StockoutFlag** should be `Whole Number` or `Text`

To change a type: right-click the column header → **Change Type** → pick the correct type

### 3.2 Check for nulls
- Click the filter dropdown on each column — if you see "(null)" unchecked, there are null values
- If any column has nulls, you can:
  - Right-click the column → **Replace Values** → replace null with 0 (for numbers) or "Unknown" (for text)

### 3.3 Remove duplicates (if any)
- Select all columns (Ctrl+A or click the blank square between the first column header and the row numbers)
- Go to **Home** → **Remove Rows** → **Remove Duplicates**

### 3.4 Apply changes
- Click **Home** → **Close & Apply** (top-left)
- Power Query will apply all changes and load the clean data

---

## Part 4: Create a Date Table (Highly Recommended)

A date table lets you use time intelligence features (month-over-month, year-over-year).

1. Go to the ribbon: **Home** → **Enter Data**
2. In the popup, type this (copy exactly):

   Column1: `Date` (header)
   Row 1: `01/01/2024`
   Row 2: `01/02/2024`
   (just type two rows for now)

3. Click **Load**

Now create the full date table using DAX:

4. Go to the **Table** view (left sidebar, second icon — looks like a table)
5. In the ribbon, click **New Table**
6. Paste this formula:

```
DateTable = CALENDAR(DATE(2024,1,1), DATE(2024,12,31))
```

7. Press Enter — you'll see a table with all 366 days of 2024

### Add useful columns to your date table

Click **New Column** and paste each formula one at a time:

```
Year = YEAR(DateTable[Date])
Month = FORMAT(DateTable[Date], "YYYY-MM")
MonthName = FORMAT(DateTable[Date], "mmm")
Quarter = "Q" & FORMAT(DateTable[Date], "Q")
MonthNumber = MONTH(DateTable[Date])
```

Now connect the date table to your sales data:

1. Go to **Model** view (left sidebar, third icon — looks like a Venn diagram)
2. Drag from **DateTable[Date]** to **fmcg_sales[Month]**
3. A line should appear connecting the two tables

---

## Part 5: Write DAX Measures

Go to **Table** view, select `fmcg_sales` table, and click **New Measure** for each:

### Measure 1: Total Revenue
```
Total Revenue = SUM(fmcg_sales[Revenue])
```

### Measure 2: Total Cost
```
Total Cost = SUM(fmcg_sales[Cost])
```

### Measure 3: Gross Profit
```
Gross Profit = SUM(fmcg_sales[Profit])
```

### Measure 4: Profit Margin %
```
Profit Margin % = DIVIDE([Gross Profit], [Total Revenue], 0)
```
After creating, select this measure and set format to **Percentage** in the **Measure Tools** ribbon.

### Measure 5: Total Units Sold
```
Total Units Sold = SUM(fmcg_sales[UnitsSold])
```

### Measure 6: Stockout Rate %
```
Stockout Rate % = DIVIDE(COUNTROWS(FILTER(fmcg_sales, fmcg_sales[StockoutFlag] = 1)), COUNTROWS(fmcg_sales), 0)
```
Set format to **Percentage**.

### Measure 7: Average Unit Price
```
Avg Unit Price = AVERAGE(fmcg_sales[UnitPrice])
```
Set format to **Currency (NGN)**.

---

## Part 6: Set Up the Dark Theme

### Apply a built-in dark theme
1. Go to **View** ribbon → **Themes** dropdown
2. Scroll down to **Built-in** → pick **Innovate** (dark) or **Executive** (dark)
3. Or click **Browse for themes** → you can download custom themes later

### Or create your own dark theme colors
We'll set specific colors per visual instead for maximum control (see Part 8-12).

### Set page background
1. Click the **Format** paint roller icon (looks like a roller) on the **Visualizations** pane
2. Select **Page** (at the bottom, under "Page elements")
3. Expand **Wallpaper** → set color to a dark gray like `#1E1E2E` or `#252535`

---

## Part 7: Add KPI Cards (Top Row)

We'll add 4 card visuals across the top.

### Step 7.1 — Total Revenue card
1. In **Visualizations** pane, click the **Card** icon (looks like a small rectangle with a number)
2. Drag **Total Revenue** measure to the **Fields** → **Values** area
3. Format:
   - Click the paint roller → **Visual** → **Card**:
     - **Category label**: Off (uncheck "Category label")
     - **Value**: Font size = 24, Font color = gold/amber (`#F4B942` or `#FFD700`)
     - Enable **Units** and set to "Millions" with 1 decimal
   - **Effects** → **Background** → Color = slightly lighter than page (`#2A2A3E`) → Transparency = 0%

### Step 7.2 — Gross Profit card
Duplicate the Revenue card (Ctrl+C, Ctrl+V) and change:
- Measure to **Gross Profit**
- Color to teal (`#2DD4BF` or `#00B4D8`)

### Step 7.3 — Total Units Sold card
Duplicate and change:
- Measure to **Total Units Sold**
- Color to coral (`#FF6B6B` or `#E85D75`)
- Units: set to "Thousands" with 1 decimal

### Step 7.4 — Stockout Rate card
Duplicate and change:
- Measure to **Stockout Rate %**
- Color to coral/red (`#FF4444`)
- Units: set to "Percent" with 1 decimal

### Arrange the 4 cards
- Drag them to the top of the canvas in a row
- Use the **Format** tab → **General** → **X position / Y position** to align them evenly
- Or just drag and use the green alignment guides

---

## Part 8: Monthly Revenue Trend (Area/Line Chart)

1. Click **Line and clustered column chart** icon (or just **Area chart**)
2. Drag **DateTable[Month]** to **X-axis**
3. Drag **Total Revenue** to **Y-axis**
4. Format:
   - **X-axis**: Title = Off, Color = light gray
   - **Y-axis**: Title = Off, Color = light gray
   - Enable **Data labels** and set color to gold
   - **Lines**: Color = gold (`#F4B942`), Width = 2
   - **Fill**: Gradient, Top color = gold at 30% opacity, Bottom color = gold at 0% opacity
   - **Background** = transparent
   - **Title**: On, Text = "Monthly Revenue Trend", Color = white

---

## Part 9: Revenue by Region (Horizontal Bar Chart)

1. Click **Stacked bar chart** icon (horizontal bars)
2. Drag **Region** to **Y-axis**
3. Drag **Total Revenue** to **X-axis**
4. Format:
   - **Bar color**: Select each bar individually in the **Format** → **Visual** → **Data colors**
     - Lagos: Gold (`#F4B942`)
     - Port Harcourt: Teal (`#2DD4BF`)
     - Abuja: Purple (`#A78BFA`)
     - Kano: Coral (`#FF6B6B`)
     - Ibadan: Gray (`#6B7280`)
   - **Data labels**: On, color = white
   - **Title**: On, Text = "Revenue by Region", Color = white

---

## Part 10: Channel Share (Donut Chart)

1. Click **Donut chart** icon
2. Drag **Channel** to **Legend**
3. Drag **Total Revenue** to **Values**
4. Format:
   - **Legend**: Position = Right, Color = light gray
   - **Data labels**: On, show "Percent of total"
   - **Detail label**: On, show "Category and Value"
   - **Colors**: Pick distinct colors for each channel
     - Open Market/Kiosk: Orange
     - Supermarket: Blue
     - Convenience Store: Green
     - Online: Purple
   - **Title**: On, Text = "Revenue by Channel", Color = white

---

## Part 11: Category Revenue + Profit Margin (Combo Chart)

1. Click **Line and clustered column chart**
2. Drag **Category** to **X-axis**
3. Drag **Total Revenue** to **Column Y-axis**
4. Drag **Profit Margin %** to **Line Y-axis**
5. Right-click on the Profit Margin % line → **Show value as** → (leave as is)
6. Format:
   - **Column color**: Gold at 60% opacity
   - **Line color**: Red (`#FF4444`), Width = 2
   - Enable **Data labels** for both series
   - **Secondary Y-axis** (for margin): On, set range 0 to 0.5 (50%)
   - **Title**: On, Text = "Category Revenue & Margin", Color = white
   - **X-axis**: Color = light gray

---

## Part 12: Region × Channel (Stacked Bar Chart)

1. Click **Stacked bar chart**
2. Drag **Region** to **Y-axis**
3. Drag **Total Revenue** to **X-axis**
4. Drag **Channel** to **Legend**
5. Format:
   - **Legend**: Position = Right, Color = light gray
   - **Data labels**: On
   - **Title**: On, Text = "Revenue by Region & Channel", Color = white
   - **Data colors**: Match the channel colors from Part 10 for consistency

---

## Part 13: Add Slicers (Filters) — Makes It Interactive!

### Month slicer
1. Click **Slicer** icon (looks like a funnel)
2. Drag **DateTable[MonthName]** to **Fields**
3. Turn off the Title
4. In **Format** → **Slicer header** → turn off
5. Set **Selection controls** → **Select all** → On (adds a Select All checkbox)
6. Style: **Dropdown** (compact) or **List** (visible options)

### Region slicer
1. Add another Slicer
2. Drag **Region** to **Fields**
3. Style: **Dropdown** (saves space)
4. Turn off Title and Slicer header

### Channel slicer
1. Add another Slicer
2. Drag **Channel** to **Fields**
3. Style: **Dropdown**

### Arrange slicers
- Place them in a row at the very top, above the KPI cards
- Make them narrow (about 1/4 of the page width each)

> **Test the interactivity** — click a region in the slicer. All charts should filter to show only that region's data. This is what makes a dashboard interactive instead of just a static image.

---

## Part 14: Add a Callout / Insight Box

1. Click **Text box** icon (looks like a capital A) in **Visualizations** pane
2. Type a key insight, for example:

> **Key Insight:** Lagos generates the highest revenue but also has the highest stockout rate (8.2%). Growth in Nigeria's largest market is constrained by supply, not demand.

3. Format:
   - Font: 14pt, White color
   - Background: Dark rectangle (use a Shape from **Insert** → **Shapes** → Rectangle, send to back)
   - Place it at the bottom of the dashboard

---

## Part 15: Layout and Alignment

### Arrange the dashboard
Top row (across full width):
- Month Slicer | Region Slicer | Channel Slicer

Second row (4 cards):
- Revenue | Gross Profit | Units Sold | Stockout Rate

Third row (2 charts, side by side):
- Left: Monthly Revenue Trend (60% width)
- Right: Revenue by Region (40% width)

Fourth row (3 charts, side by side):
- Left: Channel Share Donut (33%)
- Middle: Category Revenue & Margin (33%)
- Right: Region × Channel (33%)

Bottom:
- Insight text box (full width)

### Align visuals
- Select multiple visuals by holding Ctrl and clicking each one
- Go to **Format** → **Align** → pick **Align Left**, **Distribute Horizontally**, etc.
- Use the **Selection** pane (View → Selection Pane) to name and reorder your visuals

---

## Part 16: Save and Publish

### Save locally
1. File → **Save As** → choose a folder → name it `FMCG Dashboard 2024.pbix`

### Publish to Power BI Service (Optional — for sharing)
1. Click **Publish** in the ribbon (looks like a globe with an arrow)
2. Sign in with your Microsoft account (or create a free Power BI Service account)
3. Choose a workspace (e.g., "My workspace")
4. Click **Select**
5. Once published, you can share a link and embed in websites

---

## Troubleshooting

**"Can't find DateTable"**
- Make sure you created it in Part 4
- Check the **Model** view to see if it exists

**"Measure not showing values"**
- Make sure you're using the measure name exactly as typed
- Check that the measure is from `fmcg_sales` table (or wherever you created it)

**"Chart looks empty"**
- Check the slicers — you might have filtered out all data
- Click the eraser icon on each slicer to clear filters

**"Numbers look wrong"**
- Check your column types in Power Query (Part 3.1)
- Currency columns must be Decimal type, not Text

---

## Next Steps

Once you've built it:
1. Experiment with the slicers to see how filters affect each chart
2. Try adding a new measure (e.g., "Revenue per Unit = DIVIDE([Total Revenue], [Total Units Sold])")
3. Customise the theme colors further using the **Themes** dropdown
4. Add a second page with a deeper dive (e.g., product-level analysis)

**Need help with a specific step?** Just tell me which Part number you're stuck on and what you're seeing on screen.
