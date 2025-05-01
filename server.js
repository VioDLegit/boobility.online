const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); 

app.get('/api/nsfw/waifu', async (req, res) => {
  try {
    const response = await axios.get('https://api.waifu.pics/nsfw/waifu');
    res.json(response.data); 
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch image' });
  }
});

app.listen(PORT, () => {
  console.log(`Boobility API running on http://localhost:${PORT}`);
});

