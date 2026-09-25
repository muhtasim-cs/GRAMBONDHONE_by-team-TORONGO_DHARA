# 📡 REST API Specification & Webhook Reference
### GramBandhan Enterprise Backend — Version 1.0.0
**Prefix**: `/api/v1` | **Port**: `3001` (Direct) / `5173` (Via Vite Reverse Proxy)

---

## 1. System Health & Diagnostics

### `GET /api/v1/health`
Returns the operational health, uptime, and active blockchain network.

**Response (`200 OK`)**:
```json
{
  "status": "ok",
  "service": "@gm/api",
  "version": "1.0.0",
  "uptime": 128.45,
  "timestamp": "2026-09-25T19:03:43.856Z",
  "blockchain": "Base Sepolia Testnet (Chain ID 84532)"
}
```

---

## 2. AST Codebase Topology (Graphify)

### `GET /api/graphify`
Returns the live AST dependency graph of all backend modules, smart contracts, and data models for rendering in D3.js.

**Response (`200 OK`)**:
```json
{
  "nodes": [
    { "id": "app.module", "label": "AppModule", "group": "core", "size": 18, "desc": "Root application module" },
    { "id": "auth.module", "label": "AuthModule", "group": "auth", "size": 14, "desc": "JWT authentication & guards" },
    { "id": "escrow.module", "label": "EscrowModule", "group": "escrow", "size": 14, "desc": "Non-custodial capital lock" },
    { "id": "blockchain.module", "label": "BlockchainModule", "group": "blockchain", "size": 16, "desc": "Base Sepolia EVM integration" }
  ],
  "edges": [
    { "source": "app.module", "target": "auth.module" },
    { "source": "escrow.module", "target": "blockchain.module" }
  ],
  "groups": {
    "core": { "color": "#10B981", "label": "Core" },
    "blockchain": { "color": "#6366F1", "label": "Web3 EVM" },
    "auth": { "color": "#F59E0B", "label": "Authentication" }
  },
  "stats": {
    "totalNodes": 46,
    "totalEdges": 75,
    "totalCommunities": 17
  }
}
```

---

## 3. Authentication & RBAC

### `POST /api/v1/auth/login`
Authenticates a user and returns a signed JWT bearer token.

**Request Payload**:
```json
{
  "email": "investor@grambandhan.bd",
  "password": "Password123!"
}
```

**Response (`200 OK`)**:
```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "usr-investor-01",
    "name": "Rahat Khan",
    "email": "investor@grambandhan.bd",
    "roles": ["investor"],
    "kycVerified": true
  }
}
```

---

## 4. Agricultural Deals & Escrow

### `GET /api/v1/deals`
Returns all verified agricultural cohorts with funding status and Mudarabah profit projections.

### `POST /api/v1/escrow/commit`
Locks capital commitment into the Base Sepolia smart contract escrow.

**Request Payload**:
```json
{
  "dealId": "deal-chilli-01",
  "units": 2,
  "amountBDT": 20000,
  "paymentMethod": "bKash",
  "trxId": "1htdfrs"
}
```

**Response (`201 Created`)**:
```json
{
  "status": "CONFIRMED_ON_CHAIN",
  "certificateId": "GB-CERT-452914",
  "txHash": "0x3f9a71b82d4e68c8b1a329ef88421092a3",
  "baseScanUrl": "https://sepolia.basescan.org/tx/0x3f9a71b82d4e68c8b1a329ef88421092a3",
  "escrowVault": "0x882AbC01234567890123456789012345678901A0",
  "amount": 20000,
  "shares": 2
}
```

---

## 5. Double-Entry GAAP Ledger

### `GET /api/v1/ledger/records`
Returns immutable debit and credit ledger records for audit verification.

**Response (`200 OK`)**:
```json
{
  "records": [
    {
      "txId": "LEDGER-88412",
      "timestamp": "2026-09-25T14:20:00Z",
      "stage": "CAPITAL_DEPLOYED",
      "debitAccount": "Farm Escrow Asset",
      "creditAccount": "Investor Capital Pool",
      "amount": 20000.00,
      "currency": "BDT",
      "balanced": true
    }
  ],
  "invariants": {
    "totalDebits": 485000.00,
    "totalCredits": 485000.00,
    "discrepancy": 0.00
  }
}
```

---

## 6. Zapier Telco & Webhook Relay

### `POST /api/v1/webhooks/zapier/relay`
Dispatches automated transaction events to external Zapier automations (SMS notification to farmers, automated receipt generation).

**Payload**:
```json
{
  "event": "ESCROW_LOCKED",
  "timestamp": "2026-09-25T18:45:00Z",
  "source": "GramBondhon-AgriPlatform",
  "network": "Base Sepolia (84532)",
  "data": {
    "dealId": "deal-chilli-01",
    "amountBDT": 20000,
    "farmerPhone": "+8801838213020",
    "investorEmail": "binsadikmuhutasim@gmail.com"
  }
}
```
