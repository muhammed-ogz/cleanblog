const express = require('express');
const app = express();
const PORT = 5000;

app.get('/blog', (req, res) => {
  const blog = {
    id: 1,
    title: 'Blog title',
    description: 'Blog description',
  };
  res.send(blog);
});

app.listen(PORT, () => {
  console.log(`Server running on : ${PORT} PORT`);
});
