const fs = require('fs');
fs.mkdirSync("dist");
fs.writeFileSync(
  "dist/index.html", 
  `
  <html>
    <body>
      <h1>hello, world</h1>
      <p>I am Yeonwook</p>
    </body>
  </html>
`
);