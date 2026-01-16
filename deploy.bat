@echo off
REM Deployment preparation script for Windows

echo Preparing portfolio website for deployment...

REM Clean previous builds
echo Cleaning previous builds...
if exist .next rmdir /s /q .next
if exist out rmdir /s /q out
if exist build rmdir /s /q build
if exist dist rmdir /s /q dist

REM Install dependencies
echo Installing dependencies...
npm install

REM Run build
echo Building the application...
npm run build

REM Run export for static hosting (optional)
echo Exporting static files (for static hosting)...
npm run export

echo Build completed successfully!
echo Files are ready for deployment.
echo.
echo For Vercel deployment, push your code to a Git repository and import it in the Vercel dashboard.
echo For GitHub Pages, the workflow will automatically deploy when you push to main.
echo For other platforms, upload the contents of the 'out' folder.
pause