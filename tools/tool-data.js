// Centralized tool metadata for FAQ injection and related-tools linking.
// Used by tool-inject.js on every tool page.

window.TOOL_DATA = {
  categories: {
    text: {
      label: "Text Tools",
      tools: [
        { slug: "word-counter", name: "Word Counter" },
        { slug: "case-converter", name: "Case Converter" },
        { slug: "reverse-text", name: "Reverse Text" },
        { slug: "remove-duplicate-lines", name: "Remove Duplicate Lines" },
        { slug: "text-repeater", name: "Text Repeater" },
        { slug: "lorem-ipsum-generator", name: "Lorem Ipsum Generator" },
        { slug: "add-line-numbers", name: "Add Line Numbers" },
        { slug: "rot13-decoder", name: "ROT13 Encoder/Decoder" },
      ]
    },
    encoding: {
      label: "Encoding & Conversion",
      tools: [
        { slug: "base64-encoder", name: "Base64 Encoder/Decoder" },
        { slug: "url-encoder", name: "URL Encoder/Decoder" },
        { slug: "text-to-binary", name: "Text to Binary" },
        { slug: "hash-generator", name: "Hash Generator" },
        { slug: "number-base-converter", name: "Number Base Converter" },
        { slug: "roman-numeral-converter", name: "Roman Numeral Converter" },
        { slug: "timestamp-converter", name: "Timestamp Converter" },
        { slug: "json-formatter", name: "JSON Formatter" },
        { slug: "json-to-csv", name: "JSON to CSV" },
        { slug: "csv-to-json", name: "CSV to JSON" },
        { slug: "csv-viewer", name: "CSV Viewer" },
        { slug: "html-to-markdown", name: "HTML to Markdown" },
        { slug: "markdown-to-html", name: "Markdown to HTML" },
        { slug: "xml-to-json", name: "XML to JSON" },
        { slug: "yaml-to-json", name: "YAML to JSON" },
      ]
    },
    developer: {
      label: "Developer Tools",
      tools: [
        { slug: "css-minifier", name: "CSS Minifier" },
        { slug: "js-minifier", name: "JS Minifier" },
        { slug: "html-beautifier", name: "HTML Beautifier" },
        { slug: "regex-tester", name: "Regex Tester" },
        { slug: "color-picker", name: "Color Picker" },
        { slug: "image-to-base64", name: "Image to Base64" },
      ]
    },
    generators: {
      label: "Generators",
      tools: [
        { slug: "password-generator", name: "Password Generator" },
        { slug: "uuid-generator", name: "UUID Generator" },
        { slug: "qr-code-generator", name: "QR Code Generator" },
        { slug: "random-number-generator", name: "Random Number Generator" },
        { slug: "slug-generator", name: "Slug Generator" },
        { slug: "utm-link-builder", name: "UTM Link Builder" },
        { slug: "robots-txt-generator", name: "Robots.txt Generator" },
        { slug: "sitemap-generator", name: "Sitemap Generator" },
      ]
    },
    image: {
      label: "Image Tools",
      tools: [
        { slug: "image-resizer", name: "Image Resizer" },
        { slug: "image-compressor", name: "Image Compressor" },
        { slug: "image-format-converter", name: "Image Format Converter" },
        { slug: "svg-to-png", name: "SVG to PNG" },
      ]
    },
    math: {
      label: "Math & Calculators",
      tools: [
        { slug: "percentage-calculator", name: "Percentage Calculator" },
        { slug: "bmi-calculator", name: "BMI Calculator" },
        { slug: "tip-calculator", name: "Tip Calculator" },
        { slug: "loan-calculator", name: "Loan Calculator" },
        { slug: "age-calculator", name: "Age Calculator" },
        { slug: "discount-calculator", name: "Discount Calculator" },
        { slug: "fraction-calculator", name: "Fraction Calculator" },
        { slug: "prime-checker", name: "Prime Checker" },
        { slug: "roman-numeral-converter", name: "Roman Numeral Converter" },
      ]
    },
    css: {
      label: "CSS Tools",
      tools: [
        { slug: "css-gradient-generator", name: "CSS Gradient Generator" },
        { slug: "box-shadow-generator", name: "Box Shadow Generator" },
        { slug: "border-radius-previewer", name: "Border Radius Previewer" },
        { slug: "flexbox-playground", name: "Flexbox Playground" },
        { slug: "css-grid-generator", name: "CSS Grid Generator" },
        { slug: "css-animation-generator", name: "CSS Animation Generator" },
      ]
    },
    seo: {
      label: "SEO & Marketing",
      tools: [
        { slug: "meta-tag-generator", name: "Meta Tag Generator" },
        { slug: "open-graph-preview", name: "Open Graph Preview" },
        { slug: "slug-generator", name: "Slug Generator" },
        { slug: "utm-link-builder", name: "UTM Link Builder" },
        { slug: "robots-txt-generator", name: "Robots.txt Generator" },
        { slug: "sitemap-generator", name: "Sitemap Generator" },
      ]
    },
    datetime: {
      label: "Date & Time",
      tools: [
        { slug: "date-difference", name: "Date Difference" },
        { slug: "timezone-converter", name: "Timezone Converter" },
        { slug: "countdown-timer", name: "Countdown Timer" },
        { slug: "stopwatch", name: "Stopwatch" },
        { slug: "date-formatter", name: "Date Formatter" },
        { slug: "age-calculator", name: "Age Calculator" },
        { slug: "timestamp-converter", name: "Timestamp Converter" },
      ]
    },
  },

  // Generic FAQ questions applicable to all tools
  genericFaq: [
    {
      q: "Is this tool free to use?",
      a: "Yes, completely free. No signup, no subscription, no hidden fees."
    },
    {
      q: "Is my data safe? Does it get sent to a server?",
      a: "All processing happens entirely in your browser. Your data is never sent to any server and is not stored anywhere."
    },
    {
      q: "Do I need to create an account?",
      a: "No account is required. Just open the tool and start using it."
    },
    {
      q: "Does this work on mobile?",
      a: "Yes. All tools are responsive and work on modern mobile browsers."
    },
    {
      q: "Can I use the results commercially?",
      a: "Yes. Output generated by these tools is yours to use without restriction."
    }
  ],

  // Tool-specific FAQ overrides (slug → array of {q, a})
  toolFaq: {
    "password-generator": [
      { q: "Are the generated passwords truly random?", a: "Yes, passwords are generated using the browser's cryptographically secure random number generator (crypto.getRandomValues)." },
      { q: "Does the tool store or transmit my passwords?", a: "Never. Generation is entirely local. No password data leaves your browser." },
    ],
    "word-counter": [
      { q: "Does it count characters with or without spaces?", a: "Both. The tool shows character count with spaces and without spaces separately." },
      { q: "Is there a maximum input size?", a: "No hard limit. Performance depends on your browser, but the tool handles large texts without issue." },
    ],
    "hash-generator": [
      { q: "Which hash algorithms are supported?", a: "MD5, SHA-1, SHA-256, and SHA-512." },
      { q: "Are hashes reversible?", a: "No. Hash functions are one-way. The tool cannot reverse a hash back to its original value." },
    ],
    "regex-tester": [
      { q: "Which regex flavor is used?", a: "JavaScript's native RegExp engine, which follows the ECMAScript standard." },
      { q: "Can I use flags like i, g, m?", a: "Yes. You can enable flags via the toggle options in the tool." },
    ],
    "bmi-calculator": [
      { q: "Is this a medical tool?", a: "No. BMI is an approximate indicator and not a diagnostic tool. Consult a healthcare professional for medical advice." },
      { q: "Does it support both metric and imperial?", a: "Yes. You can switch between kg/cm and lbs/ft." },
    ],
    "json-formatter": [
      { q: "Is this JSON formatter free?", a: "Yes, it is completely free and works in your browser." },
      { q: "Does it validate JSON?", a: "Yes, it detects syntax errors and invalid JSON." },
      { q: "Is my data stored?", a: "No, everything runs locally in your browser." },
    ],
    "base64-encoder": [
      { q: "What is Base64 used for?", a: "It is used for encoding data in APIs, emails, and data URLs." },
      { q: "Is Base64 encryption?", a: "No, it is encoding, not encryption." },
      { q: "Is my data secure?", a: "Yes, everything runs locally in your browser." },
    ],
    "url-encoder": [
      { q: "Why encode URLs?", a: "To safely include special characters in web requests." },
      { q: "What characters are encoded?", a: "Spaces, symbols, and reserved characters." },
      { q: "Is this tool free?", a: "Yes, completely free with no signup required." },
    ],
    "loan-calculator": [
      { q: "What is EMI?", a: "EMI (Equated Monthly Instalment) is a fixed amount paid to a lender each month. It has two components: principal repayment and interest. Early EMIs pay more interest; later ones pay more principal." },
      { q: "How is EMI calculated?", a: "EMI = [P × r × (1+r)ⁿ] ÷ [(1+r)ⁿ − 1], where P = loan amount, r = monthly interest rate (annual rate ÷ 12 ÷ 100), n = tenure in months. The calculator applies this formula automatically." },
      { q: "What factors affect my EMI?", a: "Three factors: Loan Amount (higher loan = higher EMI), Interest Rate (higher rate = higher EMI), and Tenure (longer tenure = lower monthly EMI but more total interest paid)." },
      { q: "How can I reduce my EMI?", a: "Make a larger down payment, choose a longer tenure, negotiate a lower interest rate, or make part-prepayments to reduce the outstanding principal." },
    ],
  },

  // Per-tool related tools overrides (slug → array of {slug, name})
  relatedOverrides: {
    "loan-calculator": [
      { slug: "percentage-calculator", name: "Percentage Calculator" },
      { slug: "discount-calculator", name: "Discount Calculator" },
    ],
  },

  // Tool-specific content: intro, howToSteps, example
  toolContent: {
    "json-formatter": {
      intro: "Format and validate JSON instantly with this free online JSON formatter. Clean up messy JSON, fix syntax errors, and make your data readable in seconds. No login required.",
      howToSteps: [
        "Paste your JSON into the input field",
        "Click 'Format JSON'",
        "View the formatted result instantly",
        "Copy or download the output"
      ],
      example: {
        input: '{"name":"John","age":30}',
        output: '{\n  "name": "John",\n  "age": 30\n}'
      }
    },
    "base64-encoder": {
      intro: "Encode and decode Base64 data instantly with this free online tool. Convert text or files into Base64 format for use in APIs, authentication headers, and data URLs.",
      howToSteps: [
        "Enter text or upload a file",
        "Click 'Encode' or 'Decode'",
        "View the result instantly",
        "Copy the output"
      ],
      example: {
        input: "Hello",
        output: "SGVsbG8="
      }
    },
    "url-encoder": {
      intro: "Encode and decode URLs instantly using this free online URL encoder. Safely convert special characters for use in query strings and web requests.",
      howToSteps: [
        "Enter your URL or text",
        "Click 'Encode' or 'Decode'",
        "Copy the result"
      ],
      example: {
        input: "hello world",
        output: "hello%20world"
      }
    },
  }
};
