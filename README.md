## Convert Markdown to PDF
``` cmd
npx md-to-pdf ./docs/introduction/overview.md && mv ./docs/introduction/overview.pdf ./docs/public/duocode.pdf -Force
```

## Convert Markdown to DOCX (Word)
``` cmd
pandoc ./docs/introduction/overview.md -o ./docs/public/duocode.docx
```

## OR double click on __convert.cmd__ to automatically convert md to pdf and docx.
---

## install packages:
- Open cmd
- Navigate to the project folder
- Run `npm install`
---

## Run project to test:
- Open cmd
- Navigate to project folder
- Run `npm run docs:dev`
- Search for [http://localhost:3000](http://localhost:3000) on your browser.