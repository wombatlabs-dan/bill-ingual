# Bill-ingual — Session Context for Dan & Jackie

## What Bill-ingual Is
Bill-ingual is an AI-powered financial document translator. Users upload any confusing financial document (mortgage statement, medical bill, insurance EOB, tax notice) and get a three-layer explanation:
1. **What does this say?** — Plain-language breakdown of every line item
2. **Why should I care?** — What changed, what's unusual, what it means for your wallet
3. **What should I do?** — Concrete next steps: dispute letters, call scripts, or reassurance

## Hackathon Details
- **Event:** HACathon: Building AI for Finance at Hanwha AI Center (HAC), San Francisco
- **Date:** April 3, 2026
- **Schedule:** Final submissions at 3:50 PM, presentations at 4:00 PM, winners at 5:00 PM
- **Team:** Dan, Jackie, Kevin
- **Repo:** https://github.com/wombatlabs-dan/bill-ingual.git

## Judging Criteria (5 areas)
1. **Problem Relevance & Clarity** — How clearly does the team identify a real problem in finance?
2. **Real-World Impact** — How much practical value could this solution create in a real finance setting?
3. **Product Execution & Demo Quality** — How polished is the demo?
4. **Use of AI / Technical Creativity** — Smart, non-trivial use of AI?
5. **Viability & Scalability** — Could this become a real product?

## Submission Requirements
- Project name and description
- Demo video (under 3 minutes)
- Submit through AI Valley's website
- Encouraged to post on X (#AIConclaveAIValley) and LinkedIn

## Prizes
- 1st place: HAC membership + press release via Yahoo Finance
- 2nd and 3rd: Additional HAC prizes

## Key Stats for the Pitch
- 79 million Americans confused by medical bills
- 53% of homeowners blindsided by escrow payment increases
- 80% of medical bills contain errors
- Only 27% of Americans pass a basic financial literacy test
- $88 billion in medical debt on credit reports
- 40% of adults find medical bills confusing; 29% don't understand what they're being billed for
- 50% of consumers avoid seeking care due to billing confusion
- One Wells Fargo customer's payment jumped from $1,222/month to $1,950/month overnight due to escrow shortage

## Killer Stat (for the pitch)
"79 million Americans are confused by their medical bills. 53% of homeowners don't understand why their mortgage payment just went up. We built the financial translator they've been Googling for."

## Competitive Landscape Summary
- **Monarch Money / Copilot Money** — Track spending, don't explain documents
- **CoPatient / Resolve** — Human-powered medical bill audits, slow, expensive (35% cut)
- **NerdWallet / Credit Karma** — Generic education, don't look at YOUR document
- **Better.com "Betsy" / Chestnut (YC)** — AI mortgage tools for lending process, not post-close explanation
- **Gap:** No consumer product takes a specific document and gives personalized explanation + action steps

## Demo Flow (2 Minutes)
1. Open the app — judge sees clean upload page with tagline
2. Click "Try a sample — Mortgage Statement" — brief loading (2-3 seconds)
3. Results: three sections appear. "Why should I care?" prominently shows "Your monthly payment increased $187 because your county reassessed your property tax up 18%. You'll pay $2,244 more this year."
4. "What should I do?" shows a pre-written appeal letter to the county assessor's office
5. Click "Try a sample — Medical Bill" — results show discrepancy: "Your bill says $1,400 but your insurance EOB says your responsibility is $340. You may be being overcharged $1,060."
6. Action section generates a dispute letter to the billing department. End of demo.

## What Kevin Is Building (for reference)
- Tech stack: React/Next.js + Tailwind, Next.js API routes, MiniMax or Claude/GPT-4o vision, hosted on Replit
- Stateless app: upload → process → display, no database needed
- Two pre-loaded sample documents for demo (mortgage statement + medical bill)
- The Build Prompt is in Section 11 of the PRD (docs/Bill-ingual-PRD.docx in the repo)

## What Dan & Jackie Need to Do
1. **Create two realistic sample documents:**
   - Mortgage/escrow statement showing a payment spike (first-time homebuyer scenario)
   - Medical bill with a discrepancy against an insurance EOB
2. **Build the pitch presentation:**
   - Should be ~3 minutes for the demo video
   - Cover: the problem, the solution, live demo, market opportunity, team
3. **Write the pitch script** using the killer stat, demo flow, and market data above
4. **Coordinate with Kevin** on sample document format (PDF preferred) and any UI copy/taglines

## Sponsor Tools Available
- **Lovable:** 100 credits for app prototyping
- **n8n:** Cloud pro license (workflow automation)
- **MiniMax:** $30 credits (multimodal AI — document parsing, video/image generation)
- **Crossmint:** $15 credits (on-chain/stablecoin infrastructure)

## Product Name Origin
"Bill-ingual" — a pun on "bilingual" with "Bill" highlighted. The dash forces the reader to see "Bill" first. Pitch framing: "Your mortgage servicer speaks escrow. Your hospital speaks CPT codes. You speak English. Bill-ingual bridges the gap."

## Files in the Repo
```
bill-ingual/
├── README.md
├── .gitignore
├── .env.example
└── docs/
    ├── one-pager.md              # Market research, competitive landscape, killer stats
    ├── Bill-ingual-PRD.docx      # Full PRD with build prompt (Section 11)
    └── session-context.md        # This file
```
