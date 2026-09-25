# 🎓 University Supervisor Evaluation & Defense Guide
### GramBandhan (গ্রামীণ বন্ধন) — Capstone / Thesis Examination Manual
**Team TORONGO_DHARA**

---

## 📋 Evaluator Quick Reference & Credentials

To ensure a seamless, frictionless evaluation experience for the supervisor, GramBandhan provides built-in **1-Click Evaluation Sign-In** across all roles without requiring manual form entry:

| Persona | Evaluation Access Point | Built-in Test Character | Primary Capabilities to Test |
| :--- | :--- | :--- | :--- |
| **Platform Administrator** | `http://localhost:5173/Admin/admin.html?sso=1` | **Admin / Compliance Officer** | National ID verification queue, on-chain escrow release, **Live AST Graphify Topology**. |
| **Ethical Investor** | `http://localhost:5173/investor_dashboard.html` | **Rahat Khan (Investor)** | Portfolio balance (৳ 4,85,000), 30 projects, **Investment Return Calculator**, 2×2 compact ledger. |
| **Smallholder Farmer** | `http://localhost:5173/Farmer/farmer.html?sso=1` | **Rafiqul Islam (Gazipur Poultry)** | Land plot registration, harvest logging, bKash wallet disbursement. |
| **Woman Artisan** | `http://localhost:5173/Farmer/farmer.html` (Artisan Tab) | **Fatima Begum (Nakshi Kantha)** | Handloom cooperative registry, wholesale price quotation. |
| **Retail Consumer** | `http://localhost:5173/marketplace.html` | **Tanvir Ahmed (Buyer)** | 100 authentic products in ৳, search autocomplete, multi-stage delivery tracking (`orders.html`). |

---

## ⏱️ 10-Minute Demonstration Protocol for the Supervisor

Follow these step-by-step scenarios during defense or evaluation:

### Step 1: Landing Page & Hero Section (2 Minutes)
1. Open **`http://localhost:5173`** (or `homepage.html`).
2. Observe the continuous **2.0s hardware-accelerated crossfade slideshow** showcasing authentic Bangladeshi agricultural scenes (Bogura mustard, Rajshahi mango, tea plantations).
3. Scroll through the **Halal Spotlight** featuring active investment cohorts.
4. Review the **UN SDG Impact Alignment** interactive 3D flip cards (SDG 1 No Poverty, SDG 2 Zero Hunger, SDG 5 Gender Equality, SDG 8 Decent Work, SDG 12 Responsible Consumption, SDG 13 Climate Action).
5. Verify the **Interactive GNSS Satellite Map** showing verified farm coordinates across Bangladesh.

### Step 2: Investor Ecosystem & 2×2 Compact Ledger (2 Minutes)
1. Click **"Investor Projects"** in the top navigation bar (or navigate to `investor_projects.html`).
2. Filter through the **30 verified agricultural cohorts** using category chips (Crops, Poultry, Fisheries, Fruits, Artisans).
3. Click any project card to open the **Investment Return Calculator**. Adjust units and observe real-time Mudarabah profit calculations.
4. Navigate to **"Capital & Return Ledger"** (`investor_financials.html`).
5. **Inspect the Redesigned 2×2 Grid**: Notice how Stages 1 & 2 (Capital Outflow & Field Deployment) sit on Row 1, while Stages 3 & 4 (Mandi Wholesale & BEFTN Inflow) sit on Row 2—eliminating vertical stretching and ensuring clean accounting readability.

### Step 3: Admin Console & Real-Time Graphify AST Topology (2 Minutes)
1. Navigate to **`http://localhost:5173/Admin/admin.html`** (or click "Admin Console" in the navbar/footer).
2. Click **"Admin Single Sign-In"** to bypass login with 1 click.
3. In the sidebar rail, click **"System Architecture"** (`#/graphify`).
4. **Demonstrate the D3 Force-Directed Codebase Topology**:
   - Drag nodes to see force physics in action.
   - Hover over nodes to highlight upstream and downstream dependencies.
   - Point out the 46 modules, 75 edges, and 17 architectural communities.
   - Click the **"IEEE PDF Report"** button to open the 40-page software architecture and blockchain report.
5. Click **"🏠 GramBandhan Home"** in the topbar or sidebar to return seamlessly to the main platform.

### Step 4: Farmer & Producer Portal (2 Minutes)
1. Click **"Farmer Portal"** in the navigation bar (`http://localhost:5173/Farmer/farmer.html`).
2. Review the bilingual Bengali/English dashboard:
   - Land plot verification records with GPS geotags.
   - Project funding milestones.
   - bKash payout verification.
3. Test returning to the main site via the **"🏠 Home"** topbar button or brand mark.

### Step 5: Village Marketplace, Orders & Bondhon AI Chatbot (2 Minutes)
1. Click **"Marketplace"** (`marketplace.html`).
2. Test instant search autocomplete (e.g., type "Honey", "Mango", or "Nakshi").
3. Add products to the cart drawer and simulate checkout with bKash/Nagad.
4. Navigate to `orders.html` to review the **Multi-Stage Delivery Tracking** (🚚 In Transit, Delivered, Cancelled).
5. Click the floating green chat button on the bottom right of the homepage to activate **Bondhon AI Chatbot (বন্ধন এআই)**.
   - Ask: *"What is the Mudarabah profit sharing ratio?"*
   - Ask in Bengali: *"কিভাবে একজন কৃষক হিসেবে প্রকল্পে যুক্ত হব?"*
   - Observe instant bilingual advisory responses.

---

## 🎯 Defense Viva Q&A (Frequently Asked Questions by Supervisors)

### Q1: "Why did you build custom modules instead of using WordPress or Shopify?"
> **Answer**: *"GramBandhan is not an ordinary e-commerce store; it is a financial technology platform integrating Shariah-compliant Mudarabah contracts, non-custodial blockchain escrow on Base Sepolia, double-entry GAAP ledgers, and IoT GNSS satellite mapping. Off-the-shelf CMS tools lack the mathematical invariant enforcement and decentralized cryptographic proofs necessary for high-integrity agricultural financing."*

### Q2: "How do you guarantee that funds are not misappropriated by farmers?"
> **Answer**: *"Through our 4-Stage Milestone-Locked Escrow. Funds committed by investors do not enter the farmer's personal account all at once. Capital is locked into an EVM smart contract on Base Sepolia. Payouts are released in tranches (e.g., 40% seed/fertilizer, 30% mid-cycle crop maintenance, 30% post-harvest) only after our field agronomists submit digital inspection certificates to the compliance oracle."*

### Q3: "What prevents floating-point rounding errors in dividend splits?"
> **Answer**: *"We strictly avoid standard IEEE 754 floating-point math for financial operations. Our backend uses `Decimal.js` with exact 14-digit precision and 2-decimal scale, and our PostgreSQL database enforces `NUMERIC(14,2)` columns. Furthermore, all ledger entries obey double-entry debit-credit equality: $\sum \text{Debit} \equiv \sum \text{Credit}$."*

### Q4: "How does the frontend communicate with the backend during development vs production?"
> **Answer**: *"In development, Vite acts as a reverse proxy, mapping `/api/*` to `http://localhost:3001` to eliminate CORS friction while accurately mirroring production Nginx reverse-proxy topologies."*

---

## 🏆 Grading Rubric Alignment Matrix

| Evaluation Dimension | Standard Required | GramBandhan Implementation Evidence |
| :--- | :--- | :--- |
| **1. Software Architecture & Design Patterns** | High cohesion, loose coupling, documented patterns. | 3-tier architecture, Singleton state managers, Repository pattern for deals, Observer pattern for reactive auth, C4 model in `docs/ARCHITECTURE.md`. |
| **2. Code Quality & Type Safety** | Zero compile errors, strict TypeScript. | 100% strict TypeScript (`tsconfig.json`), `npx tsc --noEmit` exits with code 0, modular CSS variables. |
| **3. Innovation & Research Value** | Novel application addressing socio-economic problems. | Mudarabah zero-interest profit-sharing, Base Sepolia smart contract escrow, D3 AST live topology visualization, GNSS precision agriculture. |
| **4. User Experience & Design Polish** | Modern, responsive, accessible aesthetics. | High-contrast forest green luxury palette (`#061D15`, `#10B981`), continuous 2.0s hero slideshow, 2×2 compact ledger, bilingual EN/বাংলা support. |
| **5. Testing & Verification** | Complete verification of all routes and APIs. | All 17 HTML routes return HTTP 200 OK, full production bundle builds in under 3s, dev-server API health check verified. |
