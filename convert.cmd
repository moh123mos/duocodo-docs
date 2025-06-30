@echo off
echo if it close without success message, this means there is an error.
pause
npx md-to-pdf ./docs/introduction/overview.md && ^
move /Y .\docs\introduction\overview.pdf .\docs\public\duocode.pdf && ^
pandoc .\docs\introduction\overview.md -o .\docs\public\duocode.docx && ^
echo converted successfully. && ^
pause