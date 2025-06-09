// This script will update the navigation bar in all HTML files to include the logo
const fs = require('fs');
const path = require('path');

// Define the new logo HTML
const logoHtml = `
            <a href="index.html" class="flex items-center space-x-2">
                <img src="images/WhatsApp%20Image%202025-06-09%20at%2016.15.21.jpeg" 
                     alt="Nomad Tours Kenya Logo" 
                     class="h-16 w-auto object-contain">
                <span class="sr-only">Nomad Tours Kenya</span>
            </a>`;

// Find all HTML files in the current directory
const files = fs.readdirSync('.').filter(file => file.endsWith('.html'));

files.forEach(file => {
    console.log(`Updating ${file}...`);
    
    try {
        // Read the file
        let content = fs.readFileSync(file, 'utf8');
        
        // Replace the old logo with the new one
        const updatedContent = content.replace(
            /<a href="index\.html" class="[^"]*">[\s\S]*?<\/a>/,
            logoHtml
        );
        
        // Update the navigation bar padding
        const finalContent = updatedContent.replace(
            /<nav class="bg-white shadow-md fixed w-full z-50">\s*<div class="container mx-auto px-4 py-3 flex justify-between items-center">/,
            '<nav class="bg-white shadow-md fixed w-full z-50">\n        <div class="container mx-auto px-4 py-2 flex justify-between items-center">'
        );
        
        // Write the updated content back to the file
        fs.writeFileSync(file, finalContent, 'utf8');
        console.log(`✅ Updated ${file} successfully`);
    } catch (error) {
        console.error(`❌ Error updating ${file}:`, error.message);
    }
});

console.log('\nNavigation update complete!');
