# Design System: AI Bill Explainer (Bill-ingual)

## 1. Overview & Creative North Star

The Creative North Star for this design system is **"Bill-ingual."**

Moving beyond the generic "SaaS template" aesthetic, this system draws inspiration from the heritage of the *Wall Street Journal* and high-end boutique annual reports. It is designed to transform complex financial data into a narrative that feels authoritative, clear, and reassuring.

The experience breaks the mold through **aggressive contrast** and **intentional asymmetry**. We bypass standard cards and drop shadows in favor of a rigid, brutalist grid inspired by Swiss design. By utilizing high-contrast typography scales—pairing an oversized, elegant Serif with a utilitarian Sans-Serif—we create a "digital paper" experience that feels curated rather than generated.

---

## 2. Colors

This system employs a strict monochrome palette to eliminate visual noise and focus the user's attention entirely on the information.

- **Primary (`#000000`)**: Reserved for core actions, heavy typography, and structural lines.
- **Surface (`#f9f9f9`)**: Our "Paper." It is the canvas for all interactions.
- **On-Surface (`#1a1c1c`)**: Used for body text to ensure maximum legibility without the harshness of pure black on white.

### The "No-Line" Rule (Internal)
While the reference utilizes structural borders, designers are instructed to prohibit 1px solid borders for *internal* sectioning. Boundaries within a content block must be defined through background color shifts. For instance, a `surface-container-low` section sitting on a `surface` background creates a clear but sophisticated division.

### Surface Hierarchy & Nesting
Treat the UI as stacked sheets of fine paper. 
- Use **`surface-container-lowest` (#ffffff)** for active input areas or high-priority cards to make them "pop" against the **`surface` (#f9f9f9)** background.
- Use **`surface-container-high` (#e8e8e8)** for secondary sidebars or "Recommended Actions" panels to create a recessive depth.

### Signature Textures
To avoid a "flat" digital feel, main CTAs should utilize a subtle vertical gradient transitioning from `primary` (#000000) to `primary-container` (#3b3b3b). This mimics the slight sheen of fresh ink and adds a professional polish that pure flat hex codes lack.

---

## 3. Typography

The typography is the soul of this system. It balances the "Old World" authority of a serif with the "New World" efficiency of a sans-serif.

- **Display & Headlines (Newsreader)**: Used for the "Voice" of the application. The serif should be used for large pull-quotes or high-level insights. It represents the "Analysis."
- **Body & Labels (Inter)**: Used for the "Data." This is the objective reality of the numbers. Inter's high x-height ensures readability in complex financial tables.

**Hierarchy as Identity:**
- **`display-lg` (3.5rem)**: Used for singular, impactful statements (e.g., "The Bottom Line").
- **`title-sm` (1rem)**: All-caps Inter with generous letter-spacing for headers like "RECOMMENDED ACTIONS" to evoke a news-column header.

---

## 4. Elevation & Depth

In an editorial system, "Elevation" is not about height, but about **Tonal Importance.**

- **The Layering Principle:** Depth is achieved by "stacking" the `surface-container` tiers. A `surface-container-lowest` card on a `surface-container-low` section creates a natural, soft lift.
- **Ambient Shadows:** Standard shadows are prohibited. If a floating element (like a modal) is required, use a shadow with a blur of 40px and an opacity of 4% using the `on-surface` color. It should feel like a soft glow, not a drop shadow.
- **The "Ghost Border":** For elements requiring a border (like the "Scan Another Document" button), use the `outline-variant` (#c6c6c6) at 20% opacity. Avoid 100% opaque lines except for primary layout dividers.
- **Glassmorphism:** For top navigation or floating headers, use a semi-transparent `surface` color with a `backdrop-filter: blur(12px)`. This allows the "ink" of the content to scroll beneath the "paper," maintaining a sense of physical layering.

---

## 5. Components

### Buttons
- **Primary**: Solid `primary` (#000000) background, `on-primary` (#e2e2e2) text. Hard 0px corners. Use all-caps `label-md` for the label.
- **Secondary**: Ghost border (20% opacity) with `primary` text.
- **Tertiary**: Underlined `body-md` text; no container.

### Lists & Numbering
- **Large Numbered Lists**: Use `display-sm` (Newsreader) for numbers (01, 02, 03). These act as visual anchors.
- **No-Divider Rule**: Forbid the use of horizontal divider lines within lists. Use `1.5rem` to `2rem` of vertical white space to separate items, or a subtle shift to `surface-container-low` on hover.

### Chips & Tags
- **Pills**: Use `surface-container-highest` (#e2e2e2) with `on-surface-variant` (#474747) text. These should be rectangular (0px radius) to maintain the brutalist editorial aesthetic.

### Input Fields
- **Text Inputs**: No 4-sided boxes. Use a bottom-only border (`outline`, 1px). When focused, the border transitions to `primary` (2px). Label should be `label-sm` in all-caps.

---

## 6. Do's and Don'ts

### Do
- **DO** embrace extreme white space. If you think there is enough space, add 16px more.
- **DO** use the `Newsreader` serif for qualitative statements and the `Inter` sans-serif for quantitative data.
- **DO** maintain a hard 0px corner radius on every single element. Roundness undermines the "authoritative" brand personality.

### Don't
- **DON'T** use color for emphasis. Use weight (Bold), scale (Large/Small), or contrast (Black/White).
- **DON'T** use 1px dividers to separate every item. Let the "Paper" (surface tones) do the work.
- **DON'T** use standard Material or Apple-style "soft" shadows. They conflict with the architectural, grid-based nature of the system.