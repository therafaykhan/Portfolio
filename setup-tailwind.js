// Script to setup Tailwind CSS in a project
const fs = require('fs');
const path = require('path');

function setupTailwind() {
    console.log('Setting up Tailwind CSS...');

    // Create tailwind.config.js
    const tailwindConfig = `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`;

    fs.writeFileSync('tailwind.config.js', tailwindConfig);

    // Create postcss.config.js
    const postcssConfig = `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`;

    fs.writeFileSync('postcss.config.js', postcssConfig);

    // Add Tailwind directives to CSS file
    let cssContent = `@tailwind base;
@tailwind components;
@tailwind utilities;`;

    // Try to update existing CSS file or create new one
    if (fs.existsSync('./src/index.css')) {
        const existingCSS = fs.readFileSync('./src/index.css', 'utf8');
        if (!existingCSS.includes('@tailwind')) {
            fs.writeFileSync('./src/index.css', cssContent + '\n' + existingCSS);
        }
    } else if (fs.existsSync('./src/App.css')) {
        const existingCSS = fs.readFileSync('./src/App.css', 'utf8');
        if (!existingCSS.includes('@tailwind')) {
            fs.writeFileSync('./src/App.css', cssContent + '\n' + existingCSS);
        }
    } else {
        fs.writeFileSync('./src/input.css', cssContent);
    }

    console.log('Tailwind CSS setup complete!');
    console.log('Remember to install dependencies: npm install -D tailwindcss postcss autoprefixer');
}

setupTailwind();