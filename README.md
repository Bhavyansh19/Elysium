# 🍽️ Elysium Restaurant Website

## 📖 Overview
**Elysium** is a modern, premium restaurant website designed to deliver an elegant and seamless user experience.  
It allows customers to explore the restaurant, view menus, and make table reservations, while also providing a **secure, hidden admin panel** for staff to manage bookings.

---

## ✨ Features

### 🌐 User Features
- Online table reservation system 📅  
- Smooth scrolling navigation across sections  
- Fully responsive and visually appealing design 🎨  
- Elegant animations and transitions using Framer Motion ✨  
- Modern landing page with immersive visuals  

### 🔐 Admin Features
- **Hidden Admin Access (Staff Only)**
  - Admin access is triggered by a hidden interaction on the home page.
  - Opens a password-protected modal inside the website (no browser prompts).

- **Protected Admin Route**
  - `/admin` route is guarded using client-side route protection.
  - Direct URL access without authentication redirects users to the home page.

- **Keyboard-Friendly Login**
  - Admin login supports pressing the **Enter key** to submit the password.

- **Session-Based Authentication**
  - Admin login state is stored using `sessionStorage`.
  - Session automatically ends when the browser tab is closed.

---

## 🧠 Admin Access Flow
1. Trigger the hidden admin access from the home page.
2. A secure password modal appears (input is hidden).
3. On correct password:
   - Admin session is created.
   - User is redirected to `/admin`.
4. On incorrect password:
   - Inline error message is displayed.
5. Direct access to `/admin` without authentication is blocked.

---

## 🛠️ Tech Stack

### Frontend
- React.js  
- Tailwind CSS  
- Framer Motion  

### Backend
- Node.js  
- Express.js  
- PostgreSQL  

### Additional Tools
- EmailJS (email notifications)  
- Session Storage (admin authentication)  

---

## ⚙️ Environment Variables

Admin password is managed using environment variables.

### Vite Setup
Create a `.env` file in the root directory:

```env
VITE_ADMIN_PASS=your_admin_password
