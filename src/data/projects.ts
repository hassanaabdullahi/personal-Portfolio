export interface Project {
  slug: string
  title: string
  subtitle: string
  description: string
  problem: string
  objective: string
  tools: string[]
  image: string
  category: string
  year: string
  role: string
  duration: string
  datasetOverview: {
    records: string
    columns: string
    source: string
    timePeriod: string
  }
  dataDictionary: { column: string; type: string; description: string }[]
  preparation: string[]
  dataCleaning: string[]
  eda: { question: string; finding: string }[]
  insights: string[]
  recommendations: string[]
  lessons: string[]
  links: { live?: string; github?: string; dataset?: string; pbix?: string; guide?: string }
  screenshots: string[]
}

export const projects: Project[] = [
  {
    slug: "fmcg-sales-analysis",
    title: "Nigerian FMCG Sales Analysis",
    subtitle: "ApexFoods Nigeria Plc — 20,000 Transactions Analyzed",
    description:
      "A comprehensive sales performance analysis of a Nigerian FMCG company using 20,000 transaction records. Cleaned data in Excel, queried with Power Query, and built an interactive Power BI dashboard to uncover revenue trends, regional performance, and distributor efficiency.",
    problem:
      "ApexFoods Nigeria Plc, a major FMCG distributor, operates across all 6 geopolitical zones of Nigeria. Despite having 20,000 monthly transactions, the company had no centralized reporting system. Sales data was fragmented across regional offices, making it impossible for leadership to answer basic questions like: Which region generates the most revenue? Which products are underperforming? Are sales reps hitting their targets?",
    objective:
      "To build a single source of truth for ApexFoods sales data by cleaning and consolidating transaction records, performing exploratory analysis, and delivering an interactive dashboard that enables leadership to make data-driven decisions.",
    tools: ["Excel", "Power Query", "Pivot Tables", "Power BI", "DAX", "Data Cleaning"],
    image: "/projects/fmcg-2025/preview_1.png",
    category: "Data Analysis",
    year: "2026",
    role: "Data Analyst",
    duration: "3 weeks",
    datasetOverview: {
      records: "20,000",
      columns: "28",
      source: "Generated via Python script simulating realistic Nigerian FMCG operations",
      timePeriod: "January 2025 – December 2025",
    },
    dataDictionary: [
      { column: "Order_ID", type: "String", description: "Unique transaction identifier" },
      { column: "Order_Date", type: "Date", description: "Date order was placed" },
      { column: "Delivery_Date", type: "Date", description: "Date goods were delivered" },
      { column: "State", type: "String", description: "Nigerian state of the retailer" },
      { column: "Region", type: "String", description: "Geopolitical zone (North West, South West, etc.)" },
      { column: "City", type: "String", description: "City of the retailer" },
      { column: "Distributor_Name", type: "String", description: "Distribution partner" },
      { column: "Retailer_Name", type: "String", description: "Retail customer" },
      { column: "Sales_Rep", type: "String", description: "Sales representative" },
      { column: "Customer_Type", type: "String", description: "Outlet classification" },
      { column: "Product_Category", type: "String", description: "Product category" },
      { column: "Product_Name", type: "String", description: "Specific product" },
      { column: "SKU", type: "String", description: "Stock Keeping Unit code" },
      { column: "Pack_Size", type: "String", description: "Package size/weight" },
      { column: "Quantity_Sold", type: "Integer", description: "Units sold per transaction" },
      { column: "Unit_Price", type: "Currency (NGN)", description: "Price per unit" },
      { column: "Discount_Percentage", type: "Percentage", description: "Discount applied (0–30%)" },
      { column: "Revenue", type: "Currency (NGN)", description: "Total revenue" },
      { column: "Cost", type: "Currency (NGN)", description: "Total cost" },
      { column: "Profit", type: "Currency (NGN)", description: "Revenue − Cost" },
      { column: "Payment_Method", type: "String", description: "Payment type" },
      { column: "Sales_Channel", type: "String", description: "Channel classification" },
      { column: "Warehouse", type: "String", description: "Fulfillment warehouse" },
      { column: "Delivery_Status", type: "String", description: "Delivery outcome" },
      { column: "Inventory_Level", type: "Integer", description: "Remaining stock after fulfillment" },
      { column: "Customer_Rating", type: "Integer", description: "Satisfaction score (1–5)" },
      { column: "Monthly_Target", type: "Currency (NGN)", description: "Monthly sales target" },
      { column: "Target_Achieved", type: "Integer (0/1)", description: "Target met flag" },
    ],
    preparation: [
      "Reviewed the dataset structure and understood the Nigerian FMCG business context — distribution networks, regional pricing, seasonal demand patterns.",
      "Identified key business questions with guidance from the business problem: revenue trends, regional performance, channel effectiveness, and sales rep productivity.",
      "Mapped out the analysis plan: data cleaning in Excel → exploratory analysis with Pivot Tables → visualization in Power BI.",
    ],
    dataCleaning: [
      "Imported the CSV into Excel and used Power Query for initial profiling. Identified columns with missing values: Retailer_Name, City, Payment_Method, Customer_Rating, and Discount_Percentage.",
      "Handled missing Customer_Ratings by replacing with the median rating of 3 (neutral). For missing Discount_Percentage values, assumed 0% discount was applied.",
      "Checked for duplicate entries using Order_ID as the unique key. No duplicate orders were found, but some retailer names appeared multiple times — these were legitimate repeat purchases.",
      "Validated all dates: Order_Date ranged from 2025-01-01 to 2025-12-31. Ensured Delivery_Date was always after Order_Date. Flagged 12% of orders where delivery exceeded 7 days as 'delayed'.",
      "Verified data types: converted Order_Date and Delivery_Date to Date type, ensured Revenue/Cost/Profit were formatted as currency, and confirmed Quantity_Sold was integer.",
      "Applied consistent formatting: standardized state names to title case, removed extra whitespace from text fields, and formatted currency columns to 2 decimal places.",
      "Documented business assumptions: seasonal spikes during Ramadan, Easter, and Christmas were treated as normal operations. Discounts above 15% were flagged as promotional events.",
    ],
    eda: [
      {
        question: "Which regions generate the highest revenue?",
        finding: "South West leads with 32% of total revenue, followed by South South (22%). North East contributes only 8%, revealing a significant regional disparity.",
      },
      {
        question: "What is the month-by-month revenue trend?",
        finding: "Revenue peaks in December (Christmas season) and March (Ramadan/Eid). The lowest months are January (post-holiday slump) and June (pre-Eid al-Adha buildup).",
      },
      {
        question: "Which product categories perform best?",
        finding: "Cooking Oil generates the highest revenue (28%), followed by Instant Noodles (24%). Seasoning has the lowest revenue share at 11%.",
      },
      {
        question: "How do different sales channels compare?",
        finding: "Distributor channel accounts for 45% of all transactions, followed by Direct Sales (28%). Online sales contribute only 5%, indicating a digital growth opportunity.",
      },
      {
        question: "Are sales reps meeting their targets?",
        finding: "42% of sales reps consistently hit monthly targets. Yusuf Ibrahim is the top performer. Uchechukwu Obi consistently underperforms.",
      },
      {
        question: "What is the delivery performance across regions?",
        finding: "South West has the fastest average delivery time (3.2 days). North East has the slowest (6.8 days), with 18% of orders delayed beyond 7 days.",
      },
    ],
    insights: [
      "South West and South South regions contribute 54% of total revenue but only 35% of total orders — meaning they have higher average order values.",
      "Cooking Oil and Instant Noodles account for 52% of total revenue. These are essential household items with consistent demand regardless of economic conditions.",
      "12% of orders are delayed beyond 7 days, primarily in North East and North West regions. This suggests logistics infrastructure gaps in northern Nigeria.",
      "Online sales channel represents only 5% of revenue despite growing internet penetration in Nigeria — a missed opportunity.",
      "Top 3 sales reps outperform bottom 3 by 340%, indicating major skill/territory gaps that coaching could address.",
      "Provision Stores and Open Markets account for 41% of sales volume but only 28% of revenue, suggesting they operate on thinner margins with smaller basket sizes.",
    ],
    recommendations: [
      "Expand logistics infrastructure in North East and North West zones to reduce delivery delays. Consider regional micro-warehouses to cut delivery times.",
      "Launch a digital sales initiative targeting online channel growth. A 5% to 15% shift could add significant revenue with lower operational costs.",
      "Implement a sales coaching program pairing the top performer (Yusuf Ibrahim) with underperformers, focusing on territory management and relationship selling.",
      "Increase promotional frequency for Cooking Oil and Instant Noodles during Ramadan and Christmas, when demand spikes naturally.",
      "Review pricing strategy for Provision Stores and Open Markets — consider tiered pricing or bundle offers to increase basket size in these channels.",
    ],
    lessons: [
      "Real-world data is never clean. Learning to handle missing values thoughtfully — rather than just deleting rows — builds trust in the analysis.",
      "Business context matters enormously. Understanding that Ramadan affects Nigerian sales patterns helped me interpret trends correctly instead of flagging them as anomalies.",
      "Pivot Tables are an incredibly fast way to explore data before moving to visualization tools. I spent 60% of my time in Excel before opening Power BI.",
      "A simple, well-structured dashboard is more useful than a visually complex one. Stakeholders need clarity, not clutter.",
      "Documenting assumptions (like treating >15% discounts as promotions) ensures reproducibility and helps others understand your reasoning.",
    ],
    links: {
      dataset: "/projects/fmcg-2025/fmcg_sales_clean.xlsx",
      pbix: "/projects/fmcg-2025/powerbi_file.pbix",
    },
    screenshots: [
      "/projects/fmcg-2025/preview_1.png",
    ],
  },
  {
    slug: "urban-population-dynamics",
    title: "Urban Population Dynamics & SDG 11",
    subtitle: "235 Countries · 16 Indicators · Women Techsters 5.0",
    description:
      "A data-driven analysis of 235 countries examining urbanisation trends, population density, migration flows, and risk levels — generating actionable insights aligned with SDG 11 (Sustainable Cities & Communities). Built collaboratively with Synergy Team for Women Techsters Bootcamp 5.0.",
    problem:
      "Sustainable urban development is one of the most pressing global challenges. With 59.23% of the world's population living in urban areas and 86.8% of countries still classified as low-risk, decision-makers lack a consolidated view of urban pressure, migration patterns, and population density across nations. How can we help policymakers identify which countries need urgent SDG 11 interventions?",
    objective:
      "To analyze urban population data across 235 countries using 16 key indicators, identify high-risk nations, understand migration patterns, and deliver insights that support SDG 11 — Sustainable Cities & Communities planning.",
    tools: ["Excel", "Power Query", "DAX", "Power BI", "Data Visualization", "Data Cleaning"],
    image: "/screenshots/urban-dashboard-1.png",
    category: "Data Analysis",
    year: "2026",
    role: "Data Analyst — Synergy Team",
    duration: "4 weeks",
    datasetOverview: {
      records: "235",
      columns: "16",
      source: "World Bank Open Data, UN Population Division",
      timePeriod: "2024-2026",
    },
    dataDictionary: [
      { column: "Country", type: "String", description: "Country name" },
      { column: "Urban_Population_%", type: "Decimal", description: "Percentage of population living in urban areas" },
      { column: "Population_Density", type: "Decimal", description: "People per square kilometer" },
      { column: "Fertility_Rate", type: "Decimal", description: "Average births per woman" },
      { column: "Net_Migration", type: "Integer", description: "Net migration balance" },
      { column: "Risk_Level", type: "String", description: "Urban pressure risk classification" },
      { column: "Urbanisation_Level", type: "String", description: "Urbanisation band classification" },
      { column: "Population_Category", type: "String", description: "Population size group" },
      { column: "Avg_Pressure_Index", type: "Decimal", description: "Urban stress index score" },
      { column: "Growth_Rate", type: "Decimal", description: "Annual population growth rate" },
    ],
    preparation: [
      "Familiarized with SDG 11 targets and indicators to ensure analysis aligned with global sustainability goals.",
      "Cleaned and standardized country names across multiple source datasets for accurate merging.",
      "Defined risk classification thresholds: Low (pressure index < 100), Medium (100-200), High (> 200).",
    ],
    dataCleaning: [
      "Standardized country names across UN and World Bank datasets using ISO alpha-3 codes as the join key.",
      "Handled missing fertility rate and migration data by applying regional averages where appropriate.",
      "Removed duplicate country entries caused by different source years.",
      "Created calculated columns for urbanisation level: Low (<35%), Moderately (35-65%), Highly (>65%).",
      "Binned population into Low (<10M), Medium (10-100M), High (>100M) categories for stratification.",
    ],
    eda: [
      {
        question: "How are countries distributed across risk levels?",
        finding: "86.8% of countries are Low Risk, 10.6% Medium Risk, and only 2.6% (6 countries) High Risk. The high-risk nations are primarily dense city-states.",
      },
      {
        question: "What is the urbanisation profile globally?",
        finding: "36.6% of countries are Moderately Urban, 34.9% Highly Urban, and 23.0% have Low Urbanisation. The largest group is mid-transition nations.",
      },
      {
        question: "How does population correlate with fertility rate?",
        finding: "High-fertility African countries (Nigeria 5.4, DR Congo 6.0) have smaller populations than highly urbanised Asian nations. China and India dominate with very different fertility profiles.",
      },
      {
        question: "Which countries experience the most migration pressure?",
        finding: "USA (+955K) and Germany (+544K) absorb the most net migration, adding significant urban population pressure.",
      },
    ],
    insights: [
      "A small number of countries account for a disproportionate share of global population, concentrating urban pressure in specific geographies.",
      "Growing urban populations increase demand for housing, transport, energy, and social services — especially in mid-transition nations.",
      "Not all highly populated countries are equally urbanised, revealing significant development gaps within similar population cohorts.",
      "Migration significantly compounds urban growth — the USA and Germany alone absorb over 1.5M net migrants annually, requiring proportional infrastructure investment.",
      "High fertility rates in Sub-Saharan Africa (Niger 7.0, DR Congo 6.0) signal future population expansion that will intensify urban pressure.",
    ],
    recommendations: [
      "Prioritize SDG 11 funding for the 6 High-Risk nations: Macao, Monaco, Bahrain, and other dense city-states with zero expansion capacity.",
      "Focus urban planning investments on the 86 Moderately Urban countries — they are at the critical inflection point where good planning prevents future crises.",
      "Develop migration-responsive urban policies in high-immigration countries (USA, Germany) to manage population-driven infrastructure demand.",
      "Invest in family planning and education in high-fertility countries to moderate future urban population growth.",
      "Create early-warning systems using the Pressure Index to identify countries transitioning from Low to Medium risk before they reach critical levels.",
    ],
    lessons: [
      "Working with global datasets taught me how much effort goes into standardizing data across sources. ISO codes are a lifesaver.",
      "The synergy of a team made this project stronger — collaborating on insights and validation improved the quality of our recommendations.",
      "SDG alignment adds meaning to data analysis. Knowing our work could inform real policy decisions was deeply motivating.",
      "Visualizing 235 countries requires careful design choices. Heatmaps and treemaps worked better than bar charts for the global overview.",
    ],
    links: {
      live: "https://synergy-team-dashboard.vercel.app/",
    },
    screenshots: [
      "/screenshots/urban-dashboard-1.png",
      "/screenshots/urban-dashboard-2.png",
      "/screenshots/urban-dashboard-3.png",
    ],
  },
  {
    slug: "fmcg-sales-2024",
    title: "FMCG Sales Performance Dashboard — Nigeria Market, FY 2024",
    subtitle: "3,600 Transactions · 5 Regions · 4 Channels · 15 Products",
    description:
      "A polished Power BI dashboard analysing 3,600 FMCG transactions across Nigeria. Built in a dark analytics theme with gold/teal/coral accents, the dashboard tells a complete sales story at a glance — from revenue KPIs and monthly trends to regional breakdowns, channel performance, category profitability, and stockout risk.",
    problem:
      "Sales directors at Nigerian FMCG companies often lack a single, consolidated view of their business. Data is scattered across regions and channels, making it hard to answer: Which regions drive revenue? Which channels underperform? Where is stockout risk highest? What is the true profit margin per category? Without a clear picture, strategic decisions are based on intuition rather than data.",
    objective:
      "To build a single-page Power BI dashboard that surfaces the most critical sales metrics — revenue, profit, units sold, and stockout rate — at a glance, while enabling drill-down by region, channel, category, and month for deeper analysis.",
    tools: ["Excel", "Power Query", "Power BI", "DAX", "Data Visualization", "Data Cleaning"],
    image: "/projects/fmcg-2024/00_dashboard_cover.png",
    category: "Data Analysis",
    year: "2026",
    role: "Data Analyst",
    duration: "2 weeks",
    datasetOverview: {
      records: "3,600",
      columns: "11",
      source: "Generated sales data simulating Nigerian FMCG operations across 5 regions",
      timePeriod: "January 2024 – December 2024",
    },
    dataDictionary: [
      { column: "Month", type: "Date", description: "Transaction month (YYYY-MM)" },
      { column: "Region", type: "String", description: "Nigerian city/region (Lagos, Abuja, Port Harcourt, Kano, Ibadan)" },
      { column: "Channel", type: "String", description: "Sales channel (Supermarket, Open Market/Kiosk, Convenience Store, Online)" },
      { column: "Category", type: "String", description: "Product category (Beverages, Snacks, Personal Care, Household, Dairy)" },
      { column: "Product", type: "String", description: "Specific product name" },
      { column: "UnitsSold", type: "Integer", description: "Number of units sold" },
      { column: "UnitPrice", type: "Currency (NGN)", description: "Price per unit" },
      { column: "Revenue", type: "Currency (NGN)", description: "Total revenue generated" },
      { column: "Cost", type: "Currency (NGN)", description: "Total cost of goods sold" },
      { column: "Profit", type: "Currency (NGN)", description: "Revenue minus cost" },
      { column: "StockoutFlag", type: "Integer (0/1)", description: "1 if stockout occurred, 0 otherwise" },
    ],
    preparation: [
      "Reviewed the dataset to understand the Nigerian FMCG landscape — 5 regions, 4 channels, 5 product categories, and 15 products.",
      "Identified key business questions: revenue trends, regional performance, channel effectiveness, category profitability, stockout risk.",
      "Planned the dashboard layout: KPI cards at top, monthly trend chart, regional bar chart, channel donut, category combo chart, and region-channel heatmap.",
    ],
    dataCleaning: [
      "Checked for missing values across all 11 columns — no null values found in the dataset.",
      "Validated that all UnitPrice, Revenue, Cost, and Profit values were positive numbers.",
      "Ensured StockoutFlag contained only 0 or 1 values.",
      "Verified that Month values covered the full 2024 calendar year (January–December).",
      "Standardised region names to title case for consistent display.",
      "Confirmed no duplicate transaction rows existed.",
    ],
    eda: [
      {
        question: "What is the total revenue and profit margin?",
        finding: "Total revenue is ₦69.1M with a gross profit of ₦22.4M (~32% margin). 126K units sold across the year.",
      },
      {
        question: "Which regions drive the most revenue?",
        finding: "Lagos is the clear leader in revenue, followed by Port Harcourt. Kano and Ibadan trail significantly.",
      },
      {
        question: "How do sales channels compare?",
        finding: "Open Market/Kiosk and Supermarket are the dominant channels. Online trails at only ~5% of revenue.",
      },
      {
        question: "Which categories are most profitable?",
        finding: "Beverages lead in revenue volume, but Dairy has the highest profit margin. Personal Care has the lowest margin despite moderate sales.",
      },
      {
        question: "Where is stockout risk highest?",
        finding: "Lagos has the highest revenue but also the highest stockout rate (8.2%), suggesting demand outpaces supply in the biggest market.",
      },
      {
        question: "Are there seasonal revenue patterns?",
        finding: "November and December show the highest revenue spikes (seasonal demand), while January and June are slower months.",
      },
    ],
    insights: [
      "Lagos generates the highest revenue but also faces the highest stockout risk — growth is constrained by supply, not demand.",
      "Open Market/Kiosk and Supermarket channels account for the vast majority of sales; online is a nascent but underinvested channel.",
      "Beverages drive volume, but Dairy delivers the best margins — a product mix strategy should balance both.",
      "The Nov–Dec seasonal spike suggests promotional investment should be concentrated in Q4 for maximum ROI.",
      "Stockout risk varies significantly by region, indicating uneven supply chain performance across Nigeria.",
    ],
    recommendations: [
      "Invest in Lagos supply chain capacity to reduce the 8.2% stockout rate — additional warehouse space or last-mile logistics partners.",
      "Launch an online channel growth initiative targeting 10–15% of revenue within 12 months through digital marketing and delivery partnerships.",
      "Optimise product mix by increasing Dairy assortment and promotion frequency, given its superior profit margins.",
      "Front-load promotional spend in Q3 to capture the Nov–December seasonal spike with adequate inventory.",
      "Implement regional stockout monitoring dashboards for supply chain managers to identify and address bottlenecks proactively.",
    ],
    lessons: [
      "A well-designed single-page dashboard can tell a complete business story when the layout follows a logical narrative flow.",
      "Colour choice matters enormously — a dark theme with strategic accent colours (gold, teal, coral) guides the viewer's eye to the most important metrics.",
      "KPI cards at the top answer the executive question first; charts below enable deeper exploration without overwhelming.",
      "A callout line containing the single most actionable insight transforms a chart collection into an analyst-built dashboard.",
      "Stockout rate is an underrated metric — it directly connects sales performance to operational health.",
    ],
    links: {
      dataset: "/projects/fmcg-2024/fmcg_sales.csv",
      pbix: "/projects/fmcg-2024/Fcmg Sales dashboard 2024.pbit",
    },
    screenshots: [
      "/projects/fmcg-2024/powerbi1.png",
      "/projects/fmcg-2024/powerbi2.png",
      "/projects/fmcg-2024/powerbi3.png",
    ],
  },
]

export const blogPosts = [
  {
    slug: "cleaning-20000-rows",
    title: "Cleaning 20,000 Rows of Sales Data",
    excerpt: "What I learned cleaning a real-world FMCG dataset — missing values, duplicates, date validation, and why dirty data is actually a gift for beginners.",
    date: "2025-12-15",
    readTime: "8 min read",
    tags: ["Data Cleaning", "Excel", "Power Query"],
    content: `
I recently analyzed 20,000 sales transaction records for a Nigerian FMCG company. But before I could build a single chart or write a single DAX formula, I had to clean the data.

And honestly? That was the most educational part of the entire project.

**The Reality of Real-World Data**

The dataset had intentional imperfections — missing customer ratings, inconsistent date formats, empty payment method fields. It perfectly simulated what every data analyst encounters on the job.

Here's what I learned:

**1. Never delete data unless you absolutely have to**

When I found missing Customer_Rating values, my first instinct was to delete those rows. But that would have meant losing thousands of valid transactions. Instead, I replaced missing ratings with the median value (3). This preserved the data while keeping the analysis honest.

**2. Validation is a superpower**

Checking that every Delivery_Date came after its corresponding Order_Date caught several data entry errors. Building validation rules into your cleaning process saves hours of debugging later.

**3. Business context changes everything**

I initially flagged March's sales spike as an anomaly. Then I remembered Ramadan falls in March. Context matters. Without understanding the Nigerian business calendar, I would have made a costly misinterpretation.

**4. Document everything**

Every assumption I made (treating >15% discounts as promotions, using median for missing ratings) went into a cleaning log. This makes your analysis reproducible and builds trust with stakeholders.

Cleaning 20,000 rows took me 3 days. It was tedious. But it taught me more about data analysis than any tutorial ever could.
    `,
  },
  {
    slug: "first-dashboard-lessons",
    title: "What I Learned Building My First Dashboard",
    excerpt: "From scattered Excel files to an interactive Power BI dashboard — the mistakes I made, the design principles I discovered, and what I'd do differently.",
    date: "2025-11-20",
    readTime: "6 min read",
    tags: ["Power BI", "Dashboard Design", "Data Visualization"],
    content: `
Building my first Power BI dashboard was humbling. I thought it would be drag-and-drop simplicity. Instead, I learned that dashboard design is a craft.

**Mistake #1: Too many visuals**

My first draft had 15 charts on one page. It was overwhelming. I learned to ask: "What decision does this chart enable?" If I couldn't answer clearly, the visual got cut.

**Mistake #2: Ignoring the narrative**

Data needs a story. I rearranged my dashboard to guide the viewer: overview → regional breakdown → product analysis → recommendations. KPIs at the top, drill-downs below.

**Mistake #3: Forgetting the audience**

I was building for myself, not for business stakeholders. A sales director doesn't need to see every DAX formula — they need clear answers to their questions.

**Key Design Principles I Now Follow:**

- One page, one question answered
- Most important metric gets the largest visual
- Use color sparingly and with purpose
- Add context (targets, benchmarks) to every number
- Test with someone who isn't a data person

My dashboard isn't perfect, but my second attempt was significantly better than the first. That's the whole point of learning — getting better one iteration at a time.
    `,
  },
  {
    slug: "why-data-cleaning-matters",
    title: "Why Data Cleaning Matters More Than Analysis",
    excerpt: "Garbage in, garbage out is not a cliché — it's the most important lesson in data analytics. Here's why cleaning deserves more respect.",
    date: "2025-10-10",
    readTime: "5 min read",
    tags: ["Data Cleaning", "Best Practices"],
    content: `
In every data analysis project, there's a moment where you wish the data was cleaner. But wishing doesn't make it so.

**The 80/20 Rule of Data Analysis**

Experienced analysts know that 80% of project time goes into cleaning and preparation. Only 20% is actual analysis and visualization. When I started, I thought this ratio was inefficient. Now I understand it's essential.

**Why Cleaning Matters More:**

**1. Bad data produces bad decisions**
A dashboard built on uncleaned data might show the wrong trends. One misplaced decimal, one unfiltered duplicate, and your recommendation could cost real money.

**2. Cleaning builds domain knowledge**
While cleaning the FMCG dataset, I learned about Nigerian regions, distribution channels, and seasonal patterns. By the time I started analysis, I already understood the business.

**3. It teaches you the tools**
Cleaning is where you truly learn Excel, Power Query, and SQL. You can't avoid the hard parts when you're knee-deep in messy data.

**4. It builds trust**
Stakeholders trust analysts who can explain their data quality decisions. "I replaced missing values with the median because..." is a powerful statement.

Data cleaning isn't glamorous, but it's the foundation that every good analysis stands on. Embrace it.
    `,
  },
  {
    slug: "journey-frontend-to-data",
    title: "My Journey from Frontend Engineering to Data Analytics",
    excerpt: "Why a frontend engineer started asking questions about data — and how building products led me to analyze them.",
    date: "2025-09-05",
    readTime: "7 min read",
    tags: ["Career", "Personal", "Data Analytics"],
    content: `
I didn't wake up one day and decide to become a data analyst. The transition was gradual, driven by curiosity that I couldn't ignore.

**The Frontend Years**

I started my career building user interfaces. I loved the craft — translating designs into responsive, accessible, performant applications. Every pixel mattered. Every animation had purpose.

But as I built more products, I started noticing questions that UI code couldn't answer.

**The Questions That Changed Everything**

- "We shipped this feature. Are users actually using it?"
- "Why do users drop off at this exact step?"
- "Which of these two designs drives more conversions?"
- "What does the revenue data tell us about our product decisions?"

I realized I cared as much about what happens after software ships as about building it in the first place.

**The Pivot**

I started learning Excel. Then SQL. Then Power BI. Each tool opened a new way of thinking. Data analysis felt like a natural extension of engineering — instead of building interfaces, I was building understanding.

**Where I Am Now**

I still love frontend development. I still build interfaces. But now I also ask the data questions. I see product analytics dashboards in my sleep. I get excited about clean datasets.

This isn't a career change. It's an expansion. I'm not abandoning engineering — I'm adding analytics to my toolkit.

**What's Next**

I'm actively building portfolio projects, learning DAX, and exploring real-world datasets. I'm open to roles in both frontend engineering and data analytics. Wherever I end up, I want to be someone who bridges the gap between building products and understanding their impact.

If you're an engineer curious about data — start with one question about a product you've built, and try to answer it with data. That one question might change everything.
    `,
  },
]