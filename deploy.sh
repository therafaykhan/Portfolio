#!/bin/bash
# Deployment preparation script

echo "Preparing portfolio website for deployment..."

# Clean previous builds
echo "Cleaning previous builds..."
npm run clean

# Install dependencies
echo "Installing dependencies..."
npm install

# Run build
echo "Building the application..."
npm run build

# Run export for static hosting (optional)
echo "Exporting static files (for static hosting)..."
npm run export

echo "Build completed successfully!"
echo "Files are ready for deployment."
echo ""
echo "For Vercel deployment, push your code to a Git repository and import it in the Vercel dashboard."
echo "For GitHub Pages, the workflow will automatically deploy when you push to main."
echo "For other platforms, upload the contents of the 'out' folder."