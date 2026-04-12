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

  // Build intro/how-to/example HTML from toolContent if available
  let contentHtml = '';
  const tc = data.toolContent && data.toolContent[slug];
  if (tc) {
    const introHtml = tc.intro
      ? `<p class="tool-intro-text">${tc.intro}</p>`
      : '';
    const stepsHtml = tc.howToSteps && tc.howToSteps.length
      ? `<section class="tool-extras-section" id="how-to-use">
  <h2 class="tool-extras-heading">How to Use</h2>
  <ol class="tool-steps-list">
    ${tc.howToSteps.map(s => `<li>${s}</li>`).join('\n    ')}
  </ol>
</section>`
      : '';
    const exampleHtml = tc.example
      ? `<section class="tool-extras-section" id="example">
  <h2 class="tool-extras-heading">Example</h2>
  <div class="tool-example-block">
    <div class="tool-example-col"><span class="tool-example-label">Input</span><pre class="tool-example-pre">${tc.example.input}</pre></div>
    <div class="tool-example-col"><span class="tool-example-label">Output</span><pre class="tool-example-pre">${tc.example.output}</pre></div>
  </div>
</section>`
      : '';
    const introSection = (introHtml || stepsHtml)
      ? `<section class="tool-extras-section" id="about-tool">${introHtml}</section>`
      : '';
    contentHtml = (introHtml ? introSection : '') + stepsHtml + exampleHtml;
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

  if (!relatedHtml && !faqHtml && !contentHtml) return;

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
.tool-intro-text{font-size:0.95rem;color:var(--muted,#7a8499);line-height:1.7;margin:0}
.tool-steps-list{margin:0;padding-left:22px;display:flex;flex-direction:column;gap:10px;font-size:0.9rem;color:var(--text,#e4e6ef);line-height:1.6}
.tool-example-block{display:flex;gap:16px;flex-wrap:wrap}
.tool-example-col{flex:1;min-width:160px}
.tool-example-label{font-size:0.78rem;font-weight:600;color:var(--accent,#6366f1);text-transform:uppercase;letter-spacing:.05em;display:block;margin-bottom:6px}
.tool-example-pre{background:var(--surface,#1a1d27);border:1px solid var(--border,#2e3345);border-radius:8px;padding:12px 14px;font-size:0.82rem;color:var(--text,#e4e6ef);white-space:pre-wrap;word-break:break-all;margin:0}
`;
  document.head.appendChild(style);

  // Insert before footer
  const footer = document.querySelector('footer');
  const container = document.createElement('div');
  container.innerHTML = contentHtml + relatedHtml + faqHtml;
  if (footer) {
    footer.parentNode.insertBefore(container, footer);
  } else {
    document.body.appendChild(container);
  }
})();
