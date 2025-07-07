# Backend Developer Intern Assignment - E-commerce API

[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-4.x-000000?logo=express)](https://expressjs.com)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.0-47A248?logo=mongodb)](https://www.mongodb.com)
[![JWT](https://img.shields.io/badge/JWT-Authentication-000000?logo=jsonwebtokens)](https://jwt.io)

## About AdaptNXT
AdaptNXT is a tech-forward company building scalable digital products with a growing focus on AI-powered solutions. We leverage modern technology—including artificial intelligence and machine learning—to enhance productivity, personalization, and decision-making.

## Project Overview
This assignment implements a Simple E-commerce API with the following core functionality:
- **User Authentication** with JWT
- **Role-Based Access Control** (Customer/Admin)
- **Product Management**
- **Shopping Cart Operations**
- **Order Processing**
- Optional frontend interface

## Features Implemented
### Core Requirements
✅ User authentication with JWT  
✅ Customer and admin role differentiation  
✅ Product listing endpoint  
✅ Cart management (add/update/remove items)  
✅ Order creation from cart  
✅ Admin product management (CRUD operations)  

### Bonus Features
🔹 Product pagination  
🔹 Product search by name/category  
🔹 Basic HTML frontend for API interaction  

## Technologies Used
- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Authentication**: JSON Web Tokens (JWT)
- **Testing**: Jest + Supertest
- **Version Control**: Git

## API Endpoints
| Endpoint                | Method | Auth Required | Role       | Description                     |
|-------------------------|--------|---------------|------------|---------------------------------|
| `/auth/register`        | POST   | ❌            | -          | Register new user               |
| `/auth/login`           | POST   | ❌            | -          | User login                      |
| `/products`             | GET    | ❌            | -          | Get all products (paginated)    |
| `/products/search`      | GET    | ❌            | -          | Search products                 |
| `/products`             | POST   | ✅            | Admin      | Create new product              |
| `/products/:id`         | PUT    | ✅            | Admin      | Update product                  |
| `/products/:id`         | DELETE | ✅            | Admin      | Delete product                  |
| `/cart`                 | GET    | ✅            | Customer   | Get user's cart                 |
| `/cart`                 | POST   | ✅            | Customer   | Add item to cart                |
| `/cart/:itemId`         | PUT    | ✅            | Customer   | Update cart item                |
| `/cart/:itemId`         | DELETE | ✅            | Customer   | Remove item from cart           |
| `/orders`               | POST   | ✅            | Customer   | Create order from cart          |
| `/orders`               | GET    | ✅            | Both       | Get user orders (all for admin) |

### Prerequisites
- Node.js v18+
- MongoDB Atlas account or local instance
- Postman (for API testing)

