import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
// const express = require('express');
// const fetch = require('node-fetch');
const app = express();
const port = 3013;
// const cors = require('cors');

// Enable CORS for all requests, or specify allowed origin(s)
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from your frontend
}));


// Define a route to proxy the ICS feed request
app.get('/proxy-ics-feed', async (req, res) => {
  try {
    const ICS_FEED_URL =
    "https://calendar.proton.me/api/calendar/v1/url/3ZAr2klON3qtvajb3K61Zspl_-vS7Cc93IC5Sz-31w5v7nvycMOFSE1di-ykoyCa8gooMstaFOwWDrZFPMdryQ==/calendar.ics?CacheKey=h6UfMcQ09yjHwydLV8LDPQ%3D%3D&PassphraseKey=uHD16Qip7qEYC4cr9csAaK3ImbG4Q8axRV_wMVX8PB4%3D";

    const response = await fetch(ICS_FEED_URL);
    
    // Log the status code of the response
    console.log('ICS feed response status:', response.status);
    
    if (!response.ok) {
      throw new Error(`Error fetching data from ICS feed: ${response.statusText}`);
    }

    const icsData = await response.text();
    res.send(icsData); // Send the ICS data to the frontend
  } catch (error) {
    console.error('Error fetching ICS data:', error);
    res.status(500).send('Error fetching ICS data');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
