const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const sourceImagePath = process.argv[2];
const outputDir = path.join(__dirname, 'src', 'assets');

if (!sourceImagePath) {
    console.error('Please provide the path to the source image');
    process.exit(1);
}

if (!fs.existsSync(sourceImagePath)) {
    console.error(`Source image not found at ${sourceImagePath}`);
    process.exit(1);
}

async function generateIcons() {
    try {
        console.log('Generating favicon-16x16.png...');
        await sharp(sourceImagePath)
            .resize(16, 16, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
            .toFile(path.join(outputDir, 'favicon-16x16.png'));

        console.log('Generating favicon-32x32.png...');
        await sharp(sourceImagePath)
            .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
            .toFile(path.join(outputDir, 'favicon-32x32.png'));

        console.log('Generating apple-touch-icon.png...');
        await sharp(sourceImagePath)
            .resize(180, 180, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
            .toFile(path.join(outputDir, 'apple-touch-icon.png'));
            
        console.log('Generating OG default image...');
        await sharp(sourceImagePath)
            .resize(1200, 630, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
            .toFile(path.join(outputDir, 'og-default.png'));

        console.log('All icons generated successfully!');
    } catch (err) {
        console.error('Error generating icons:', err);
    }
}

generateIcons();
