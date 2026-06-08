const fs = require('fs');
let content = fs.readFileSync('src/components/FoodsWeServe.tsx', 'utf8');
content = content.replace(/price: "\$([^"]+)"/g, 'price: "$$1 AUD"');
fs.writeFileSync('src/components/FoodsWeServe.tsx', content);
