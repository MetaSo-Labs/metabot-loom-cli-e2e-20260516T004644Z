const fs = require('node:fs');
const text = fs.readFileSync('README.md', 'utf8');
if (!text.includes('MetaBot Loom CLI E2E')) {
  throw new Error('README marker missing');
}
console.log('fixture check passed');
