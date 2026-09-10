# 🚀 Meta Lead Ads + React Native PoC

A proof-of-concept that receives leads from Meta Lead Ads and displays them in real time in an already-open React Native application without requiring any manual action on the device.

## ✨ Overview

This project demonstrates a real-time lead capture system using Meta Lead Ads, Meta Webhooks, a Node.js backend, Socket.IO, and a React Native application.

### 🔄 Data Flow

Meta Lead Testing Tool → Meta Webhook → Node.js + Express Backend → Meta Graph API → Socket.IO → React Native App

When a test lead is created through the Meta Lead Testing Tool, Meta sends a webhook event to the backend. The backend retrieves the lead details using the Meta Graph API and sends the lead to the connected React Native application through Socket.IO.

The new lead appears automatically without refreshing or manually interacting with the device.

## 🛠️ Tech Stack

- 📱 React Native + Expo — Mobile application
- 🟢 Node.js + Express — Backend
- 🔌 Socket.IO — Real-time communication
- 🔗 Meta Graph API — Fetching lead details
- 🪝 Meta Webhooks — Receiving lead events
- ☁️ Vercel — Backend deployment

## 📂 Project Structure

```text
meta-lead-react-native/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   └── vercel.json
│
├── meta/
│   ├── App.js
│   ├── components/
│   │   ├── Header.js
│   │   ├── Lead.js
│   │   ├── Search.js
│   │   └── State.js
│   │
│   ├── constant/
│   │   └── color.js
│   │
│   ├── service/
│   │   ├── api.js
│   │   └── socket.js
│   │
│   ├── styles/
│   │   ├── AppStyles.js
│   │   ├── Card.js
│   │   ├── HeaderStyles.js
│   │   ├── search.js
│   │   └── States.js
│   │
│   └── utils/
│       └── lead.js
│
└── README.md
```

## ⚙️ Setup & Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Sakshikesarwani/meta-lead-react-native.git
cd meta-lead-react-native
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Configure the required environment variables in a `.env` file:

```env
META_PAGE_ACCESS_TOKEN=your_page_access_token
META_VERIFY_TOKEN=your_verify_token
```

Start the backend:

```bash
npm start
```

### 3. React Native Setup

Open another terminal:

```bash
cd meta
npm install
npx expo start
```

The backend URL is configured in:

```text
meta/service/api.js
```

> 💡 Make sure the backend is running and the React Native app is using the correct backend URL before testing.



## 🔗 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | / | Backend health check |
| GET | /leads | Returns available leads |
| GET | /webhook | Meta webhook verification |
| POST | /webhook | Receives Meta lead events |

## 🧪 Testing

This project uses the Meta Lead Testing Tool, so no real advertisement is required.

### Test Flow

1. Open the React Native application.
2. Keep the Leads screen visible.
3. Open the Meta Lead Testing Tool.
4. Select the configured Facebook Page and Lead Form.
5. Click Create Lead.
6. Meta sends a leadgen webhook event to the backend.
7. The backend receives the lead ID.
8. The backend fetches the lead details using the Meta Graph API.
9. Socket.IO sends the new lead to the React Native app.
10. The new lead appears automatically at the top of the list.

### ✅ Expected Result

The new lead appears in the already-open React Native application without refreshing the app or manually interacting with the device.

> 💡 Meta's Lead Testing Tool may generate dummy values such as <test lead: dummy data for full_name> and test@meta.com when using Create Lead. These are expected test values.

## 📸 Demo

The screenshot below shows the React Native application displaying leads received from the Meta Lead Testing Tool.

<img width="720" height="1544" alt="WhatsApp Image 2026-09-10 at 1 11 31 PM" src="https://github.com/user-attachments/assets/aec6fc6b-07ad-47bf-869b-1315a84298cf" />

The Loom demonstration covers the complete flow:

React Native app already open → Create test lead → Meta webhook → Backend processing → Lead automatically appears in the React Native app.

No manual refresh or device interaction is required.


## 🔐 Environment Variables

Sensitive credentials are not committed to the repository.

| Variable | Purpose |
|---|---|
| META_PAGE_ACCESS_TOKEN | Used to retrieve lead details from Meta |
| META_VERIFY_TOKEN | Used to verify the Meta webhook |

> ⚠️ Never commit access tokens or other sensitive credentials to GitHub.

## 📌 Assumptions & Limitations

- The Meta Page is subscribed to the leadgen webhook.
- The configured Lead Form belongs to the selected Facebook Page.
- Testing is performed using Meta Lead Testing Tool.
- Leads are stored in memory for this proof-of-concept.
- Restarting the backend can clear the stored leads.
- A persistent database can be added for production use.


## 🔮 Future Improvements

- 💾 Persistent database storage
- 🔐 Authentication and authorization
- 🔄 Webhook retry handling
- 📊 Pagination and detailed lead views
- 📈 Better monitoring and error handling
- 🚀 Production-grade real-time infrastructure
