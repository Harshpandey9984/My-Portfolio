const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const PROFILE_SIZE = 400;
const THUMBNAIL_SIZE = { width: 800, height: 600 };
const DETAIL_SIZE = { width: 1200, height: 800 };

async function optimizeImage(inputPath, outputPath, options = {}) {
  try {
    const image = sharp(inputPath);
    
    if (options.width && options.height) {
      image.resize(options.width, options.height, {
        fit: 'cover',
        position: 'center'
      });
    }

    await image
      .jpeg({ quality: 80, progressive: true })
      .toFile(outputPath);

    console.log(`✅ Optimized: ${path.basename(outputPath)}`);
  } catch (error) {
    console.error(`❌ Error processing ${path.basename(inputPath)}:`, error.message);
  }
}

async function processProfilePicture(inputPath) {
  const outputPath = path.join(__dirname, '../public/images/profile.jpg');
  await optimizeImage(inputPath, outputPath, {
    width: PROFILE_SIZE,
    height: PROFILE_SIZE
  });
}

async function processProjectImage(inputPath, outputName, isDetail = false) {
  const size = isDetail ? DETAIL_SIZE : THUMBNAIL_SIZE;
  const outputPath = path.join(
    __dirname,
    '../public/images/projects',
    `${outputName}${isDetail ? '-detail' : ''}.jpg`
  );
  
  await optimizeImage(inputPath, outputPath, size);
}

// Example usage:
// processProfilePicture('./my-profile-pic.jpg');
// processProjectImage('./project-screenshot.png', 'awesome-project');
// processProjectImage('./project-detail.png', 'awesome-project', true);

module.exports = {
  processProfilePicture,
  processProjectImage
}; 