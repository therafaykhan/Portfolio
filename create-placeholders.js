// Script to create placeholder images for projects
const fs = require('fs');
const path = require('path');

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Create placeholder SVG images for projects
const projectPlaceholders = [
  { filename: 'project1.jpg', title: 'Portfolio Website' },
  { filename: 'project2.jpg', title: 'E-commerce' },
  { filename: 'project3.jpg', title: 'Task Manager' },
  { filename: 'project4.jpg', title: 'Analytics' },
];

projectPlaceholders.forEach(item => {
  const svgContent = `<svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#e5e7eb"/>
    <text x="50%" y="50%" font-family="Arial" font-size="16" fill="#4b5563" text-anchor="middle" dominant-baseline="middle">
      ${item.title}
    </text>
  </svg>`;

  const filePath = path.join(imagesDir, item.filename);
  fs.writeFileSync(filePath, svgContent);
  console.log(`Created placeholder: ${item.filename}`);
});

console.log('Placeholder images created successfully!');