const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

app.use(express.json());

const VERIFY_TOKEN = process.env.META_VERIFY_TOKEN || "my_secret_token";

const PAGE_ACCESS_TOKEN = process.env.META_PAGE_ACCESS_TOKEN;

const leads = [];

io.on("connection", (socket) => {
  console.log("RN client connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("RN client disconnected:", socket.id);
  });
});

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.post("/webhook", async (req, res) => {
  console.log("Webhook event received:");

  console.log(JSON.stringify(req.body, null, 2));

  try {
    const entry = req.body.entry?.[0];
    const change = entry?.changes?.[0];

    if (change?.field === "leadgen") {
      const leadgenId = change.value?.leadgen_id;

      console.log("Lead ID:", leadgenId);

      if (!leadgenId) {
        return res.sendStatus(200);
      }

      if (!PAGE_ACCESS_TOKEN) {
        console.error("META_PAGE_ACCESS_TOKEN is not set");

        return res.sendStatus(200);
      }

      const url =
        `https://graph.facebook.com/v26.0/${leadgenId}` +
        `?fields=id,created_time,field_data,form_id` +
        `&access_token=${PAGE_ACCESS_TOKEN}`;

      const response = await fetch(url);

      const data = await response.json();

      console.log("Lead details:");

      console.log(JSON.stringify(data, null, 2));

      if (data.error) {
        console.error("Meta API error:", data.error);
      } else {
        leads.push(data);

        io.emit("new_lead", data);

        console.log("Lead stored successfully");
      }
    }

    return res.sendStatus(200);
  } catch (error) {
    console.error("Webhook processing error:", error);

    return res.sendStatus(200);
  }
});

app.get("/webhook", (req, res) => {
  const mode = req.query["hub.mode"];

  const token = req.query["hub.verify_token"];

  const challenge = req.query["hub.challenge"];

  if (mode === "subscribe" && token === VERIFY_TOKEN) {
    console.log("Webhook verified");

    return res.status(200).send(challenge);
  }

  return res.sendStatus(403);
});

app.get("/leads", (req, res) => {
  res.json(leads);
});

module.exports = server;
