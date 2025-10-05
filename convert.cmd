@echo off
echo if it close without success message, this means there is an error.
pause
npx md-to-pdf ./docs/introduction/overview.md && echo pdf successfully && ^
move /Y .\docs\introduction\overview.pdf .\docs\public\duocode.pdf && ^
pandoc --dpi=600 .\docs\introduction\overview.md -o .\docs\public\duocode.docx --columns=120 --wrap=auto --resource-path=".;./docs/public;./docs/public/assets" --reference-doc=reference.docx --lua-filter=./table-style.lua && echo docx successfully && ^
echo converted successfully. && ^
pause