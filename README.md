## Convert Markdown to PDF
``` node
npx md-to-pdf ./docs/introduction/overview.md && mv ./docs/introduction/overview.pdf ./docs/public/duocode.pdf -Force
```

## Convert Markdown to DOCX (Word)
``` node
pandoc ./docs/introduction/overview.md -o ./docs/public/duocode.docx
```
