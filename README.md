# 🔧 Repairer & Store Management System

A full-stack web application built with **Next.js** and **Firebase** that allows a **Repairer (Super Admin)** to manage repair services and store items, while **Clients** can browse, inquire, and request services or products.

---
## ✨ Features

### 👨‍🔧 For the Repairer (Super Admin)
- Add, edit, and delete **repair services** with images and descriptions.
- Manage **store inventory** – add, update, and remove items.
- View and respond to **messages** from clients about services or items.
- Receive **notifications** when a client proceeds with a store request.
- Access a clean **dashboard layout** on desktop for complete control.
- Responsive **mobile layout** with bottom navigation.

### 👤 For Clients
- Browse available **repair services** in a card layout.
  - Each card has:
    - A **message icon** to chat with the repairer directly in-app.
    - A **WhatsApp icon** to start a chat with the repairer via WhatsApp.
- Browse the **store section**, add multiple items to cart.
- **Proceed** with a cart request (no payment on platform).
- Repairer is notified and will contact the client to complete the transaction.
- Client fills out **personal details** during first-time registration.
  - These details are stored for future purchases.

---

## 🔐 Authentication & Roles

- Single login page for all users.
- Firebase Authentication used for secure login.
- Upon login, user role (`super_admin` or `client`) is fetched from Firestore.
- Users are routed to their respective dashboards based on role.

 

## 📱 Responsive Layout

- **Mobile View:**
  - Bottom navigation bar with icons:
    - Home (Repairs)
    - Store
    - Messages
    - Cart
    - Profile

- **Desktop View:**
  - Dashboard layout with sidebar navigation and main content area.

---

## 🧪 Future Improvements

- Push notifications for incoming messages or cart requests.
- Admin analytics dashboard.
- Pagination and search for repairs and store listings.
- Multi-language support.

---

## 🚀 Getting Started (coming soon)
> Instructions for setting up the project locally, installing dependencies, and connecting Firebase will be added after frontend setup.

---
 

---

 
