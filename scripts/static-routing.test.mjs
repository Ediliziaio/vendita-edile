import test from "node:test";
import assert from "node:assert/strict";
import { replaceRootContent } from "./static-routing.mjs";

test("replaces the complete nested noscript fallback without altering the surrounding page", () => {
  const source = '<head>meta</head><body><div id="root"><noscript><div><h1>Home</h1></div></noscript></div><script src="app.js"></script></body>';
  assert.equal(replaceRootContent(source, '<article><h1>Guide</h1></article>'), '<head>meta</head><body><div id="root"><article><h1>Guide</h1></article></div><script src="app.js"></script></body>');
});

test("a repeated prerender replaces the previous page rather than leaving its content behind", () => {
  const first = replaceRootContent('<div id="root"></div><footer>Keep</footer>', '<div><div><h1>First</h1></div></div>');
  const second = replaceRootContent(first, '<section><h1>Second</h1></section>');
  assert.equal(second, '<div id="root"><section><h1>Second</h1></section></div><footer>Keep</footer>');
  assert.equal(replaceRootContent(second, '<section><h1>Second</h1></section>'), second);
});

test("missing or malformed roots fail the build instead of silently publishing the home", () => {
  assert.throws(() => replaceRootContent('<main>Missing</main>', 'New'), /root missing/);
  assert.throws(() => replaceRootContent('<div id="root"><div></div>', 'New'), /Unbalanced/);
});
