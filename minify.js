const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'style.css');
const jsPath = path.join(__dirname, 'script.js');

// Minify CSS
if (fs.existsSync(cssPath)) {
    let css = fs.readFileSync(cssPath, 'utf8');
    // Remove comments
    css = css.replace(/\/\*[\s\S]*?\*\//g, '');
    // Remove newlines and extra spaces
    css = css.replace(/\n/g, '')
        .replace(/\s{2,}/g, ' ')
        .replace(/\s*([;{}:,])\s*/g, '$1')
        .replace(/\s+\!important/gi, '!important');
    fs.writeFileSync(cssPath, css.trim() + '\n', 'utf8');
    console.log('CSS Minified successfully.');
}

// Minify JS
if (fs.existsSync(jsPath)) {
    let js = fs.readFileSync(jsPath, 'utf8');
    // Remove console.log
    js = js.replace(/console\.log\([^)]*\);?/g, '');
    // Remove single line comments (but not URLs like http://)
    js = js.replace(/(^|\s)\/\/(?!\/).*/g, '');
    // Remove multi-line comments
    js = js.replace(/\/\*[\s\S]*?\*\//g, '');
    // Remove newlines and extra spaces
    js = js.replace(/\n/g, '')
        .replace(/\s{2,}/g, ' ');
    fs.writeFileSync(jsPath, js.trim() + '\n', 'utf8');
    console.log('JS Minified successfully.');
}
