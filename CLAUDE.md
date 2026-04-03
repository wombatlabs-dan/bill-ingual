# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Bill-ingual** — an AI-powered financial document translator. Users upload confusing financial documents (medical bills, mortgage statements, insurance EOBs, tax notices) and receive a three-layer explanation: what the document says, why it matters, and what to do next (dispute letters, call scripts, or reassurance).

The source code lives in `bill-ingual/`. Documentation and PRD are in `bill-ingual/docs/`.

## Development Commands

```bash
cd bill-ingual
npm install
npm run dev        # Start Next.js dev server on port 3000
npm run build      # Production build
npm run lint       # ESLint
```

## Architecture

**Stack:** Next.js (React frontend + API routes), Tailwind CSS, MiniMax multimodal API (primary), Claude/GPT-4o vision (fallbacks).

**Core data flow:**
1. User uploads a PDF or photo via the frontend
2. An API route sends the document to MiniMax (or fallback) for multimodal parsing — extracting text, numbers, and structure
3. A second LLM call generates the three-layer explanation: *What it says / Why it matters / What to do*
4. The frontend displays results and optionally renders a downloadable dispute letter or call script

**Environment variables** (see `.env.example`):
- `MINIMAX_API_KEY` — primary multimodal parsing (hackathon credits: $30)
- `ANTHROPIC_API_KEY` — Claude fallback
- `OPENAI_API_KEY` — GPT-4o fallback
- `PORT`, `NODE_ENV`

Copy `.env.example` to `.env` and fill in keys before running locally.

## Key Product Constraints

- Output must be document-specific (personalized to the uploaded file), not generic financial education
- Three layers must always be present: what/why/what-to-do
- Supported document types: medical bills, mortgage statements, insurance EOBs, tax notices
- Freemium model: 3 free documents, then $4.99–$9.99/month — keep that in mind for gating logic

## Docs

- `bill-ingual/docs/one-pager.md` — market problem, competitive landscape, target customer, key stats
- `bill-ingual/docs/Bill-ingual-PRD.docx` — full PRD including Section 11 (build prompt for AI coding agents)
