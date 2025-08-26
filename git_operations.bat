@echo off
set GIT_PAGER=
git add -A
git commit -m "Recover site: Clean up files and update components"
git push origin recovered-site
git checkout main
git merge recovered-site
git push origin main
echo Git operations completed successfully
