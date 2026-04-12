# Site Audit — AdSense & SEO Baseline
**Date**: 2026-04-12  
**Site**: sakure.online  
**Scope**: AdSense readiness + SEO baseline compliance

---

## Site Structure

| Item | Status | Notes |
|------|--------|-------|
| Architecture | Vanilla HTML/CSS/JS | No framework, no build system |
| Tool pages | 64 standalone `index.html` files | Header/footer duplicated per page |
| `robots.txt` | ✓ Present | Allows all, references sitemap |
| `sitemap.xml` | ✓ Present | 52 URLs, valid format |
| `index.html` title | ✓ | Keyword-rich, 64 chars |
| `index.html` meta description | ✓ | Present, 163 chars |
| Canonical tags | ✓ | All sampled pages |
| LD+JSON schema | ✓ | WebSite (index), WebApplication (tools) |
| og:title / og:description | ✓ | Present on index.html |
| og:image | ✗ Missing | All pages |
| Privacy page (`/privacy`) | ✗ Missing | Linked in footer, file doesn't exist |
| Terms page (`/terms`) | ✗ Missing | Not linked, file doesn't exist |
| About page (`/about`) | ✗ Missing | Linked in nav + footer, file doesn't exist |
| Contact page (`/contact`) | ✗ Missing | Linked in footer, file doesn't exist |
| Blog (`/blog`) | ✗ Missing | Linked in nav + footer, file doesn't exist |
| AdSense script tag | ✗ Missing | Only HTML placeholder divs/comments |
| Google Analytics | ✗ Missing | No tracking script on any page |
| twitter:card tags | ✗ Missing | All pages |

---

## Issues

### Critical — Blocking AdSense

**C1. Missing required policy pages**  
Files `/privacy`, `/terms`, `/about`, `/contact` are linked in index.html footer/nav but do not exist.  
AdSense requires a visible, accessible Privacy Policy before approval.  
- Files to create: `privacy/index.html`, `terms/index.html`, `about/index.html`, `contact/index.html`

**C2. No AdSense publisher script**  
All pages have placeholder `<div class="ad-slot">` or `<!-- Adsense slot -->` comments. No actual `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js">` tag is present.  
- Files to update: `index.html` + all 64 tool `index.html` files

**C3. Tool page footer has no policy links**  
Tool pages have a minimal footer (`Built with care. Free forever.`) with no links to Privacy, Terms, or Contact. AdSense reviewers check linked pages across the site.  
- Files to update: All 64 tool `index.html` files

**C4. `og:image` missing everywhere**  
No social share image defined on any page. Required for proper link previews and signals content completeness.  
- Files to update: `index.html` + all 64 tool `index.html` files

---

### High — SEO Issues

**H1. Inconsistent tool count in metadata**  
`index.html` meta description says "57 tools"; og:description says "34 free browser-based tools"; nav badge shows "34 tools". Pick one accurate number.  
- File: `index.html`

**H2. Brand name mismatch in tool page header**  
Tool page headers show logo text `ToolKit / free tools` instead of `sakure.online`.  
- Files: All 64 tool `index.html` files

**H3. No `og:url` on tool pages**  
index.html has `og:url` but tool pages don't. Canonical alone is insufficient for OG.  
- Files: All 64 tool `index.html` files

**H4. No `twitter:card` tags**  
No Twitter/X card metadata on any page.  
- Files: `index.html` + all 64 tool `index.html` files

**H5. No Google Analytics / GA4**  
No tracking script present. GA is not required for AdSense but absence signals low operational maturity to reviewers.  
- Files: `index.html` + all 64 tool `index.html` files

---

### Medium — Content & Quality

**M1. Sitemap includes 6 unbuilt tools**  
`csv-to-json`, `csv-viewer`, `html-to-markdown`, `markdown-to-html`, `xml-to-json`, `yaml-to-json` are untracked in git (directories exist but pages not committed). Sitemap references them causing 404s for crawlers.  
- File: `sitemap.xml`

**M2. No `theme-color` meta tag**  
Minor brand signal missing from all pages.  
- Files: `index.html` + tool pages (or shared via template)

**M3. README.md is empty**  
Contains only `# sakure.online`. Not user-facing but signals low project maturity.  
- File: `README.md`

---

## Files That Need Changes

| File | Changes Needed |
|------|---------------|
| `index.html` | Fix tool count inconsistency (H1); add `og:image` (C4); add GA4 (H5); add AdSense script (C2) |
| All 64 `tools/*/index.html` | Add full footer with policy links (C3); fix logo brand (H2); add `og:url` (H3); add `twitter:card` (H4); add `og:image` (C4); add AdSense script (C2) |
| `sitemap.xml` | Remove 6 unbuilt tool URLs (M1) |
| `privacy/index.html` | Create page (C1) |
| `terms/index.html` | Create page (C1) |
| `about/index.html` | Create page (C1) |
| `contact/index.html` | Create page (C1) |

---

## Implementation Plan

**Step 1 — Create missing policy pages** *(unblocks AdSense review)*  
Create `privacy/index.html`, `terms/index.html`, `about/index.html`, `contact/index.html`.  
Each needs: matching site header/footer, h1, substantive content (not placeholder text).

**Step 2 — Fix tool page footer** *(AdSense + brand consistency)*  
Update all 64 tool `index.html` files to use the same footer as `index.html` (with policy links).  
Since pages are not templated, this requires a batch find-and-replace on the `<footer>` block.

**Step 3 — Fix logo brand in tool pages** *(brand consistency)*  
Replace `ToolKit / free tools` with `sakure.online` in all tool page headers.

**Step 4 — Add `og:image`** *(social + AdSense signals)*  
Create a single OG image (1200×630px) at `/assets/og-image.png`.  
Add `<meta property="og:image" content="https://sakure.online/assets/og-image.png">` to all pages.

**Step 5 — Add `og:url` + `twitter:card`** *(SEO)*  
Add to all tool pages. `og:url` should match the canonical. `twitter:card` = `summary_large_image`.

**Step 6 — Fix tool count inconsistency** *(credibility)*  
Align "57 tools" (or current accurate count) across meta description, og:description, and nav badge in `index.html`.

**Step 7 — Add AdSense publisher script** *(monetization)*  
Add the AdSense `<script>` tag to `<head>` of `index.html` and all tool pages after AdSense account approval.  
Replace `<div class="ad-slot">Ad Space</div>` placeholders with actual ad units.

**Step 8 — Add GA4** *(analytics)*  
Add GA4 `<script>` tag to `<head>` of all pages.

**Step 9 — Fix sitemap** *(crawl health)*  
Remove entries for 6 unbuilt tools from `sitemap.xml`, or complete and publish those tool pages first.

---

*Priority order: Steps 1–2 are the minimum to unblock AdSense application. Steps 3–6 should follow before submitting. Steps 7–9 complete the baseline.*
