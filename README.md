# Forum API

> A RESTful API for managing a hierarchical forum system with nested topics and posts

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com/)
[![Postman](https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=postman&logoColor=white)](https://www.postman.com/)

## 📖 Description

Forum API is a backend service that provides a complete forum management system with a hierarchical structure: **Forums → Topics → Posts**. Each forum contains multiple topics, and each topic contains multiple posts, creating a nested relationship perfect for discussion platforms.

The API follows RESTful principles with versioned endpoints and uses in-memory storage for simplicity, making it ideal for development, testing, or as a foundation for larger applications.

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Storage**: In-memory arrays (no database)
- **Architecture**: RESTful API with nested routes

## ✅ Features

- **Hierarchical Structure**: Forums contain topics, topics contain posts
- **Full CRUD Operations**: Create, read, update, and delete for all entities
- **Nested Routing**: Intuitive API endpoints following resource relationships
- **Type Safety**: Full TypeScript implementation with defined interfaces
- **Versioned API**: `/api/v1/` endpoint versioning for future compatibility
- **Error Handling**: Centralized error handling middleware
- **Modular Architecture**: Clean separation of concerns with controllers, routes, and types

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/dvlprkaushik/forum-api-ts.git

# Navigate to project directory
cd forum-api-ts

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🚀 Usage

### Starting the Server

```bash
# Development mode with hot reload
npm run dev

# Production mode
npm run build && npm start
```

The API will be available at `http://localhost:3000` (or your configured port).

### Basic Example

```bash
# Create a forum
curl -X POST http://localhost:3000/api/v1/forums \
  -H "Content-Type: application/json" \
  -d '{"title": "General Discussion", "description": "General topics and discussions"}'

# Create a topic in the forum
curl -X POST http://localhost:3000/api/v1/forums/forum-id/topics \
  -H "Content-Type: application/json" \
  -d '{"title": "Welcome to the Forum"}'

# Create a post in the topic
curl -X POST http://localhost:3000/api/v1/forums/forum-id/topics/topic-id/posts \
  -H "Content-Type: application/json" \
  -d '{"content": "Hello everyone! Welcome to our forum."}'
```

## 🔌 API Endpoints

### Forums

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/v1/forums` | Get all forums |
| `POST` | `/api/v1/forums` | Create a new forum |
| `GET` | `/api/v1/forums/:fid` | Get a specific forum |
| `PUT` | `/api/v1/forums/:fid` | Update a forum |
| `DELETE` | `/api/v1/forums/:fid` | Delete a forum |

### Topics

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/v1/forums/:fid/topics` | Get all topics in a forum |
| `POST` | `/api/v1/forums/:fid/topics` | Create a new topic |
| `GET` | `/api/v1/forums/:fid/topics/:tid` | Get a specific topic |
| `PUT` | `/api/v1/forums/:fid/topics/:tid` | Update a topic |
| `DELETE` | `/api/v1/forums/:fid/topics/:tid` | Delete a topic |

### Posts

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/v1/forums/:fid/topics/:tid/posts` | Get all posts in a topic |
| `POST` | `/api/v1/forums/:fid/topics/:tid/posts` | Create a new post |
| `GET` | `/api/v1/forums/:fid/topics/:tid/posts/:pid` | Get a specific post |
| `PUT` | `/api/v1/forums/:fid/topics/:tid/posts/:pid` | Update a post |
| `DELETE` | `/api/v1/forums/:fid/topics/:tid/posts/:pid` | Delete a post |

## 📁 Project Structure

```
src/
├── controllers/
│   ├── forum.controller.ts
│   ├── post.controller.ts
│   └── topic.controller.ts
│
├── routes/
│   ├── forum.routes.ts
│   ├── post.routes.ts
│   └── topic.routes.ts
│
├── middlewares/
│   ├── endpointLogger.middleware.ts
│   ├── errorHandler.middleware.ts
│   └── express.middlewares.ts
│
├── types/
│   ├── Data.types.ts
│   ├── Env.types.ts
│   └── HttpUtils.types.ts
│
├── utils/
│   ├── AppErrors.ts
│   ├── AsyncHandlers.ts
│   ├── GeneratorUtils.ts
│   ├── HealthCheck.ts
│   └── Response.ts
│
├── data/
│   ├── forumData.ts
│   ├── postData.ts
│   └── topicData.ts
│
├── env.d.ts
├── index.ts
└── listner.ts
```

## 🧪 Data Models

### Forum
```typescript
interface Forum {
  id: string;
  title: string;
  description?: string;
}
```

### Topic
```typescript
interface Topic {
  id: string;
  title: string;
  forumId: string; // Foreign key reference
}
```

### Post
```typescript
interface Post {
  id: string;
  content: string;
  topicId: string; // Foreign key reference
}
```

## 🔧 Development

### Scripts

```bash
# Install dependencies
npm install

# Start development server with hot reload
npm run dev

# Build TypeScript to JavaScript
npm run build

# Start production server
npm start
```

### Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
BASE_URL=http://localhost
```

## 🎯 Project Status

**Current Version**: v1.0.0  
**Status**: ✅ Active Development  
**Last Updated**: July 2025

### 🚀 Quick Start Guide

1. **Clone & Install**
   ```bash
   git clone https://github.com/dvlprkaushik/forum-api-ts.git && cd forum-api-ts && npm install
   ```

2. **Start Development**
   ```bash
   npm run dev
   ```

3. **Test API**
   ```bash
   # Test with curl or import our Postman collection
   curl http://localhost:3000/api/v1/forums
   ```

### 📊 API Response Format

All API responses follow this consistent structure:

```json
{
  "success": true,
  "data": {
    // Response data here
  },
  "message": "Operation completed successfully"
}
```



## 🙏 Acknowledgments

- Built with Express.js and TypeScript
- Inspired by modern forum architectures
- Following RESTful API best practices
