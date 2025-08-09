const express = require('express');
const app = express();
app.use(express.json());

app.post('/countChars', (req, res) => {
  const serviceName = req.body.serviceName;
  if (typeof serviceName !== 'string') {
    return res.status(400).json({ error: 'serviceName must be a string' });
  }
  const charCount = serviceName.length;
  res.json({ count: charCount });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
