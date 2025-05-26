import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3013;

// --- CORS Configuration ---
const allowedOrigins = [process.env.FRONTEND_ORIGIN];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

// --- Proxy Route ---
app.get('/proxy-ics-feed', async (req, res) => {
  try {
    const ICS_FEED_URL = process.env.ICS_FEED_URL;

    if (!ICS_FEED_URL) {
      throw new Error('ICS_FEED_URL not configured');
    }

    const response = await fetch(ICS_FEED_URL);

    console.log('ICS feed response status:', response.status);

    if (!response.ok) {
      throw new Error(`Error fetching ICS feed: ${response.statusText}`);
    }

    const icsData = await response.text();
    res.send(icsData);
  } catch (error) {
    console.error('Proxy error:', error.message);
    res.status(500).send('Unable to fetch calendar data.');
  }
});

// --- Start Server ---
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
