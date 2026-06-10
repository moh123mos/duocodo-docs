const md = require('markdown-it')({ html: true, linkify: true, typographer: true });
const path = require('path');
const fs = require('fs');

const mdFile = path.join(__dirname, 'one-for-all.md');
const htmlFile = path.join(__dirname, 'one-for-all.html');

const content = fs.readFileSync(mdFile, 'utf8');
const body = md.render(content);

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>One For All</title>
</head>
<body>
${body}
</body>
</html>`;

fs.writeFileSync(htmlFile, html);
console.log('Done: one-for-all.html updated');
