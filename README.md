# Pandoc Conversion Commands

## Convert Markdown to PDF
pandoc ./docs/introduction/overview.md -o ./docs/public/duocode.pdf

## Convert Markdown to DOCX (Word)
pandoc ./docs/introduction/overview.md -o ./docs/public/duocode.docx

## Additional Options
# Specify a template
pandoc ./docs/introduction/overview.md -o ./docs/public/duocode.pdf --template=mytemplate.tex

# Include a table of contents
pandoc ./docs/introduction/overview.md -o ./docs/public/duocode.pdf --toc

# Use a specific PDF engine (e.g., xelatex)
pandoc ./docs/introduction/overview.md -o ./docs/public/duocode.pdf --pdf-engine=xelatex

# Convert DOCX to PDF
pandoc ./docs/introduction/overview.docx -o ./docs/public/duocode.pdf