@echo off
echo if it close without success message, this means there is an error.
pause
npx md-to-pdf ./docs/guide/one-for-all.md && echo pdf successfully && ^
move /Y .\docs\guide\one-for-all.pdf .\docs\public\duocode.pdf && ^
pause