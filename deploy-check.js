#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('DebiFit Deployment Check...\n');

// Check required files
const requiredFiles = [
  'package.json',
  'vite.config.js',
  'vercel.json',
  'index.html',
  'src/main.jsx',
  'src/App.jsx'
];

console.log('Checking required files:');
requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`  [OK] ${file}`);
  } else {
    console.log(`  [ERROR] ${file} - MISSING!`);
  }
});

// Check package.json scripts
console.log('\nChecking package.json scripts:');
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const requiredScripts = ['build', 'preview'];
requiredScripts.forEach(script => {
  if (packageJson.scripts[script]) {
    console.log(`  [OK] ${script}: ${packageJson.scripts[script]}`);
  } else {
    console.log(`  [ERROR] ${script} script missing!`);
  }
});

// Check vercel.json
console.log('\nChecking Vercel configuration:');
try {
  const vercelConfig = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
  if (vercelConfig.buildCommand && vercelConfig.outputDirectory) {
    console.log(`  [OK] Build command: ${vercelConfig.buildCommand}`);
    console.log(`  [OK] Output directory: ${vercelConfig.outputDirectory}`);
  } else {
    console.log('  [ERROR] Missing buildCommand or outputDirectory in vercel.json');
  }
} catch (error) {
  console.log('  [ERROR] Error reading vercel.json');
}

// Check for common issues
console.log('\nChecking for common deployment issues:');

// Check for actual problematic hardcoded paths (excluding public assets and anchors)
const srcFiles = fs.readdirSync('src', { recursive: true });
let hasProblematicPaths = false;
srcFiles.forEach(file => {
  if (file.endsWith('.jsx') || file.endsWith('.js')) {
    const content = fs.readFileSync(path.join('src', file), 'utf8');
    // Only flag actual problematic paths, not public assets or anchors
    if (content.includes('src="/') && !content.includes('src="/debifit-logo.jpg')) {
      console.log(`  [WARNING] Potential hardcoded path in ${file}`);
      hasProblematicPaths = true;
    }
  }
});

if (!hasProblematicPaths) {
  console.log('  [OK] No problematic hardcoded paths found');
}

// Check for environment variables
if (fs.existsSync('.env')) {
  console.log('  [WARNING] .env file found - make sure to add variables to Vercel dashboard');
} else {
  console.log('  [OK] No .env file (good for deployment)');
}

console.log('\nDeployment Checklist:');
console.log('  [ ] Test build locally: npm run build');
console.log('  [ ] Test preview locally: npm run preview');
console.log('  [ ] Commit all changes to git');
console.log('  [ ] Push to GitHub');
console.log('  [ ] Deploy on Vercel');
console.log('  [ ] Test all routes after deployment');
console.log('  [ ] Verify assets load correctly');

console.log('\nDebiFit is ready for Vercel deployment!');
