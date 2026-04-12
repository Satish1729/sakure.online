// Injects Related Tools and FAQ sections into tool pages.
// Requires tool-data.js to be loaded first.
// Add before </body> on all tool pages:
//   <script src="/tools/tool-data.js"></script>
//   <script src="/tools/tool-inject.js"></script>

(function () {
  if (!window.TOOL_DATA) return;

  const slug = location.pathname.replace(/\/$/, '').split('/').pop();
  const data = window.TOOL_DATA;

  // Find which category this tool belongs to
  let currentCat = null;
  let currentCatKey = null;
  for (const [key, cat] of Object.entries(data.categories)) {
    if (cat.tools.some(t => t.slug === slug)) {
      currentCat = cat;
      currentCatKey = key;
      break;
    }
  }

  // Build related tools HTML (same category, exclude self, max 5)
  let relatedHtml = '';
  if (currentCat) {
    const related = currentCat.tools.filter(t => t.slug !== slug).slice(0, 5);
    if (related.length > 0) {
      relatedHtml = `
<section class="tool-extras-section" id="related-tools">
  <h2 class="tool-extras-heading">Related Tools</h2>
  <div class="related-tools-grid">
    ${related.map(t => `<a href="/tools/${t.slug}" class="related-tool-card">${t.name}</a>`).join('\n    ')}
  </div>
</section>`;
    }
  }

  // Build FAQ HTML — tool-specific overrides + generic fallback
  const faqs = (data.toolFaq && data.toolFaq[slug])
    ? [...(data.toolFaq[slug]), ...data.genericFaq.slice(0, 3)]
    : data.genericFaq;

  const faqHtml = `
<section class="tool-extras-section" id="faq">
  <h2 class="tool-extras-heading">Frequently Asked Questions</h2>
  <div class="faq-list">
    ${faqs.map(f => `
    <div class="faq-item">
      <h3 class="faq-q">${f.q}</h3>
      <p class="faq-a">${f.a}</p>
    </div>`).join('')}
  </div>
</section>`;

  if (!relatedHtml && !faqHtml) return;

  // Inject styles once
  const style = document.createElement('style');
  style.textContent = `
.tool-extras-section{max-width:960px;margin:40px auto 0;padding:0 20px 40px}
.tool-extras-heading{font-size:1.1rem;font-weight:700;margin-bottom:18px;padding-bottom:12px;border-bottom:1px solid var(--border,#2e3345);color:var(--text,#e4e6ef)}
.related-tools-grid{display:flex;flex-wrap:wrap;gap:10px}
.related-tool-card{background:var(--surface,#1a1d27);border:1px solid var(--border,#2e3345);border-radius:8px;padding:8px 16px;font-size:0.85rem;color:var(--text,#e4e6ef);text-decoration:none;transition:border-color .18s,background .18s}
.related-tool-card:hover{border-color:var(--accent,#6366f1);background:var(--surface2,#1e2535)}
.faq-list{display:flex;flex-direction:column;gap:20px}
.faq-item{background:var(--surface,#1a1d27);border:1px solid var(--border,#2e3345);border-radius:10px;padding:18px 20px}
.faq-q{font-size:0.95rem;font-weight:600;color:var(--text,#e4e6ef);margin-bottom:8px}
.faq-a{font-size:0.88rem;color:var(--muted,#7a8499);line-height:1.6;margin:0}
`;
  document.head.appendChild(style);

  // Insert before footer
  const footer = document.querySelector('footer');
  const container = document.createElement('div');
  container.innerHTML = relatedHtml + faqHtml;
  if (footer) {
    footer.parentNode.insertBefore(container, footer);
  } else {
    document.body.appendChild(container);
  }
})();
