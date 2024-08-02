const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const convertImages = async (directory) => {
    const files = await fs.readdir(directory);
  
    for (const file of files) {
      const filePath = path.join(directory, file);
      const stat = await fs.stat(filePath);
  
      if (stat.isDirectory()) {
        await convertImages(filePath);
      } else if (/\.(png|jpg|jpeg)$/i.test(file)) {
        const outputFilePath = filePath.replace(/\.[^/.]+$/, '.webp');
        
        // Convert image to WebP format
        await sharp(filePath)
          .webp()
          .toFile(outputFilePath);
        console.log(`Converted ${filePath} to ${outputFilePath}`);
        
        // Delete the original image
        await fs.unlink(filePath);
        console.log(`Deleted original image ${filePath}`);
      }
    }
};

const updateImports = async (directory) => {
    const files = await fs.readdir(directory);
    for (const file of files) {
        const filePath = path.join(directory, file);
        const stat = await fs.stat(filePath);
        const cleanedFile = file.trim();

        if (stat.isDirectory() && !['node_modules', '.next', 'public'].includes(file)) {
            await updateImports(filePath);
        }
        if (/\.(js|jsx|ts|tsx)$/i.test(cleanedFile)) {

            let content = await fs.readFile(filePath, 'utf8');

            const updatedContent = content.replace(/(['"])(\/?[^'"\s]+?)\.(png|jpg|jpeg)(\?[^'"]*)?\1/gi, (match, p1, p2, p3) => {
                console.log(`Match: ${match}`); // Log matches for debugging
                console.log(`Captured groups: ${p1}, ${p2}, ${p3}`); // Log captured groups for debugging
                return `${p1}${p2}.webp${p1}`;
            });
            console.log("Original content:", content);
            console.log("Updated content:", updatedContent);

            if (content !== updatedContent) {
                await fs.writeFile(filePath, updatedContent, 'utf8');
                console.log(`Updated imports in ${filePath}`);
            }
        }
    }
};

const startUpdate = async () => {
    const srcDirectories = [
        path.join(process.cwd(), 'app'),
        path.join(process.cwd(), 'src', 'components'),
        path.join(process.cwd(), 'src', 'utils'),
    ];

    for (const dir of srcDirectories) {
        console.log("dir", dir)
        await updateImports(dir);
    }

    console.log('Import update completed.');
};

const startProcess = async () => {
    const publicFolder = path.join(process.cwd(), 'public');

    await convertImages(publicFolder);
    console.log('Image conversion completed.');

    await startUpdate();
    console.log('Import update completed.');
};

module.exports = {
  convertImages,
  updateImports,
  startProcess
};

