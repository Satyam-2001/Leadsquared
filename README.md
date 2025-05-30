<p align="center">
  <img src="logo.png" alt="" />
</p>

A TypeScript SDK for interacting with the LeadSquared API easily and securely. Designed for both **Node.js** and **browser** environments.

## ✨ Features

- Typed API access for LeadSquared.
- Configurable API host and credentials.
- Modular API handling (e.g., Lead Management).
- Axios-based HTTP client with automatic authentication.

## 📦 Installation

```bash
pnpm add leadsquared-sdk
# or
npm install leadsquared-sdk
# or
yarn add leadsquared-sdk
```

## ⚙️ Example

```js
import Leadsquared, { ApiHost } from "leadsquared-sdk";

const leadsquared = new Leadsquared({
  host: ApiHost.MUMBAI,
  accessKey: "YOUR_ACCESS_KEY",
  secretKey: "YOUR_SECRET_KEY",
});

const result = await leadsquared.lead.capture([
  {
    Attribute: "firstName",
    Value: "John",
  },
  {
    Attribute: "lastName",
    Value: "Dee",
  },
]);
```

## 📚 API Resources

The SDK provides access to all major Leadsquared API resources:

| Resource      | Methods Available                            |
| ------------- | -------------------------------------------- |
| Lead          | `create`, `get`, `update`, `list`, `delete`  |
| Activity      | `create`, `get`, `update`, `list`, `delete`, |
| Opportunity   | `create`, `get`, `update`, `list`, `delete`  |
| ...and more   | Full list in documentation                   |

## 🛠️ API Docs

https://apidocs.leadsquared.com/overview/#api
