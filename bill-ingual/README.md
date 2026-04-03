# Bill-ingual

**Your AI Financial Document Translator**

Upload any confusing financial document — a mortgage statement, medical bill, insurance EOB, or tax notice — and get a plain-language explanation of what it says, why you should care, and exactly what to do about it.

## The Problem

79 million Americans are confused by their medical bills. 53% of homeowners don't understand why their mortgage payment just went up. 80% of medical bills contain errors. Yet there is no consumer tool that looks at your specific bill and tells you what it means, why it matters, and what to do about it.

## How It Works

1. **Upload** any confusing financial document (PDF or photo)
2. **Understand** — get a plain-language breakdown of every line item
3. **Know why it matters** — see what changed, what's unusual, and what it means for your wallet
4. **Take action** — get specific next steps: dispute letters, call scripts, or reassurance that everything is normal

## Project Structure

```
bill-ingual/
├── README.md
├── docs/
│   ├── one-pager.md              # Product one-pager (market research, competitive landscape, killer stats)
│   └── Bill-ingual-PRD.docx      # Full PRD with build prompt for coding agents
└── src/                          # Application source code (TBD)
```

## Docs

- **[One-Pager](docs/one-pager.md)** — Problem, solution, target customer, market evidence, competitive landscape, and market sizing
- **[PRD](docs/Bill-ingual-PRD.docx)** — Full product requirements document including build prompt for AI coding agents (Section 11)

## Tech Stack

- **Frontend:** React / Next.js + Tailwind CSS
- **Backend:** Next.js API routes
- **AI:** MiniMax (multimodal document parsing) or Claude/GPT-4o vision
- **Hosting:** Replit

## Team

Built at the HACathon: Building AI for Finance (April 3, 2026) by Dan, Jackie, and Kevin.

## Quick Start

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/bill-ingual.git
cd bill-ingual

# Install dependencies (once src/ is set up)
npm install

# Set environment variables
cp .env.example .env
# Add your API keys to .env

# Run the dev server
npm run dev
```

## Hackathon Judging Criteria

| Criteria | Our Angle |
|----------|-----------|
| Problem Relevance & Clarity | 79M with medical bill problems, 53% blindsided by escrow — universal, specific, data-backed |
| Real-World Impact | Catches errors on 80% of medical bills, saves hours per document, prevents overpayment |
| Product Execution & Demo | Confusing document in → clear 3-layer explanation out. High visual contrast. |
| Use of AI / Technical Creativity | Multimodal parsing + financial reasoning + actionable output (dispute letters) |
| Viability & Scalability | Freemium B2C, scales to any doc type, B2B2C with servicers/insurers |
