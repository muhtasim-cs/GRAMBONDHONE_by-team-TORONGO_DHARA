# 🌾 GramBandhan (গ্রামীণ বন্ধন)
### Official Repository for Team TORONGO_DHARA

A Shariah-compliant digital agricultural financing, milestone-locked escrow, and rural village commerce platform connecting ethical global investors with local Bangladeshi farmers and rural women artisans under fair Mudarabah profit sharing.

---

## 👥 Team TORONGO_DHARA Contributors

| Contributor | GitHub Profile | Module / Domain Responsibility |
| :--- | :--- | :--- |
| **Muhutasim** | [@muhtasim-cs](https://github.com/muhtasim-cs) | Enterprise Backend Architecture, Base Sepolia Blockchain, API Gateway & Indexer |
| **MD. Jahidul Islam Jony** | [@theTerminatorrr](https://github.com/theTerminatorrr) | Farmer Portal & Admin / Staff Management System |
| **Shamia Akhter Tasfi** | [@Tasfi21](https://github.com/Tasfi21) | Landing Page & Hero Section, Full Investor Ecosystem, Bondhon AI Chatbot |
| **Partha** | [@pCubeReBorn](https://github.com/pCubeReBorn) | Enterprise Database Architecture, Unified PostgreSQL Schemas & Seeders |

---

## 🏛️ Codebase Organization & Architecture

```
GRAMBONDHONE_by-team-TORONGO_DHARA/
├── Admin/                          # Admin compliance console, AST Graphify, KYC & Escrow
│   ├── admin.html                  # Admin portal entrypoint
│   ├── admin.css                   # Admin design tokens & Graphify styles
│   └── admin.ts                    # Admin state, D3 Graphify, audit trail
├── Farmer/                         # Farmer & producer module (bilingual EN/বাংলা)
│   ├── farmer.html                 # Farmer portal entrypoint
│   ├── farmer.css                  # Farmer module styling
│   └── farmer.ts                   # Land registration, crop listing, payout wallet
├── backend/                        # Enterprise NestJS & Dev Server subsystem
│   ├── dev-server.mjs              # Fast local mock API, email & Zapier dispatcher
│   ├── src/                        # NestJS controllers, services, blockchain modules
│   ├── contracts/                  # Base Sepolia Foundry smart contracts
│   ├── indexer/                    # Rust blockchain event indexer
│   └── prisma/                     # Enterprise Prisma schema & seeders
├── database/                       # PostgreSQL relational schemas & handoff docs
│   ├── grambandhan_schema.sql      # Core PostgreSQL schema
│   ├── grambandhan_unified_schema.sql # Unified multi-role schema
│   └── seed.js                     # Seed data scripts
├── public/                         # Static assets served by Vite
│   ├── images/                     # 100+ authentic Bangladeshi crop & product photos
│   └── Backend_Architecture_Report_with_Rust_and_Blockchain_Analysis.pdf # IEEE Report
├── src/                            # Modular frontend TypeScript orchestrator
│   ├── main.ts                     # Application orchestrator & router
│   ├── homepage.ts                 # Homepage coordinator & carousel
│   ├── investor.ts                 # Investor ecosystem coordinator
│   ├── investor-profile.ts         # Portfolio, ledger, KYC, & return calculator
│   ├── active-projects.ts          # 30 verified Bangladeshi agricultural projects
│   ├── marketplace.ts              # Village marketplace, category chips, cart drawer
│   ├── chatbot.ts                  # Bilingual Bondhon AI Chatbot
│   ├── sdg-impact.ts               # UN SDG alignment counter & flip cards
│   └── styles/                     # Modular scoped stylesheets
├── index.html                      # Primary landing page & platform entrypoint
├── homepage.html                   # Synchronized homepage entrypoint
├── investor.html                   # Dedicated Investor landing page
├── investor_dashboard.html         # Direct Investor Telemetry Dashboard
├── investor_projects.html          # Direct Investor Projects (30 verified cohorts)
├── investor_financials.html        # Direct Capital Outflow & Return Inflow Ledger (2×2 grid)
├── investor_airisk.html            # Direct AI Risk Analysis & Weather Radar
├── investor_profile.html           # Direct Investor Profile & KYC
├── marketplace.html                # Direct Village Marketplace Storefront
├── orders.html                     # Direct Marketplace Order & Delivery Tracking
├── login.html & register.html      # Authentication entrypoints with 1-Click Demo Login
├── vite.config.ts                  # Multi-page Rollup bundler & /api proxy to 3001
└── package.json                    # Scripts for frontend, backend, and build
```

---

## 🌐 Complete Platform Pages & Portals

| Page / Route | Subsystem | Description |
| :--- | :--- | :--- |
| **`index.html`** / **`homepage.html`** | Platform Landing Page | Full ecosystem overview: Hero slideshow (2.0s), Halal Spotlight, Active Projects, Marketplace preview, SDG cards (Goals 1, 2, 5, 8, 12, 13), FAQ, and Footer. |
| **`investor_projects.html`** | Investor Projects | 30 verified agricultural projects across 18 districts with the interactive **Investment Return Calculator**. |
| **`marketplace.html`** | Village Marketplace | Storefront with 100 authentic rural Bangladeshi products priced in ৳, search autocomplete, category chips, and cart. |
| **`investor.html`** | Investor Portal | Investor landing page with category search, verified investor badge, and curated cohorts. |
| **`investor_dashboard.html`** | Investor Dashboard | Telemetry overview with deep forest green theme (`#02221A`), 4 stat boxes, and live field logs. |
| **`investor_financials.html`** | Financials & Ledger | Redesigned **2×2 Compact Capital Outflow & Return Inflow Ledger** ensuring GAAP transparency. |
| **`investor_airisk.html`** | AI Risk Analysis | Satellite precipitation monitoring and predictive crop yield radar. |
| **`investor_profile.html`** | Investor Profile | NID validation, IBBL Mudarabah bank account, and bKash payout wallets. |
| **`orders.html`** | Order Tracking | Real-time multi-stage order tracking (🚚 In Transit, Delivered, Cancelled). |
| **`Farmer/farmer.html`** | Farmer Portal | Land registration, crop listing, harvest logging, and milestone payout disbursements. |
| **`Admin/admin.html`** | Admin Console | National ID KYC queue, on-chain escrow release, and live **D3 AST Codebase Topology (Graphify)**. |

---

## 🚀 How to Run Locally

### 1. Install Frontend Dependencies
```bash
npm install
```

### 2. Start the Backend API Server
```bash
npm run backend:dev
```
- Core API active on: **`http://localhost:3001/api/v1`**
- Health check: **`http://localhost:3001/api/v1/health`**
- Real-Time AST Topology: **`http://localhost:3001/api/graphify`**

### 3. Start the Frontend Development Server
```bash
npm run dev
```
The application will launch on **`http://localhost:5173`**.
All `/api/*` calls from port 5173 automatically proxy to the backend on port 3001.

### 4. Production Build Validation
```bash
npm run build
```
Builds all 17 HTML entrypoints cleanly into the `dist/` directory.

### 5. Typecheck
```bash
npm run typecheck
```
Validates all TypeScript types across modules without errors.

---

## 📄 Documentation & Reports
- **IEEE Software Architecture & Blockchain Report**: [`public/Backend_Architecture_Report_with_Rust_and_Blockchain_Analysis.pdf`](file:///public/Backend_Architecture_Report_with_Rust_and_Blockchain_Analysis.pdf)
- **Teacher & Supervisor Guide**: [`TEACHER_EXPLANATION_GUIDE.md`](file:///TEACHER_EXPLANATION_GUIDE.md)
- **Database Handoff & SQL**: [`database/DATABASE_HANDOFF.md`](file:///database/DATABASE_HANDOFF.md)
