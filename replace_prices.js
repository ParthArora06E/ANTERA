const fs = require('fs');
let content = fs.readFileSync('src/components/FoodsWeServe.tsx', 'utf8');
content = content.replace(/price: "\$([0-9]+)"/g, 'price: "$$$1 AUD"');
fs.writeFileSync('src/components/FoodsWeServe.tsx', content);
