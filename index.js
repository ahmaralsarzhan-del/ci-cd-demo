const express = require('express');
const app = express();
const PORT = 3000;

// 定义一个简单的路由
app.get('/', (req, res) => {
  res.send('Hello from CI/CD Demo! 👋');
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
