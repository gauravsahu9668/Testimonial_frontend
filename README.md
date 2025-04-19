# ✨ ReviewCraft – Testimonial Platform

ReviewCraft is a full-stack web application that allows businesses to collect, manage, and showcase customer testimonials with ease. It supports video and text testimonials, real-time previews, analytics, and customizable thank-you pages.

> ✅ Designed for a seamless testimonial collection process with a beautiful multi-step UI flow.  
> 🔒 Built with secure Firebase OTP authentication, PostgreSQL, and Cloudflare Workers.


## 🚀 Live Demo

🔗 [https://reviewcraft.vercel.app](http://reviewcraft.netlify.app)


## 🧠 Features

### ✨ User Features

- Create testimonial spaces with titles, logos, and branding
- Multi-step onboarding (Space Details → Thank You Page → Notification Setup → Extra Details)
- Share unique space links with customers
- Real-time preview of space as you create it
- OTP-based Firebase authentication (email only, no passwords)
- View and download text/image/video testimonials
- Embed testimonials directly into your site via iframe

### 🎥 Customer Experience

- Simple interface for customers to:
  - Submit text feedback
  - Record or upload a video testimonial
- 2-minute process from start to finish

## 🏗️ Tech Stack

| Layer | Tech |
|------|------|
| **Frontend** | React.js, Tailwind CSS |
| **Backend** | Express.js, Cloudflare Hono |
| **Auth** | Firebase Authentication with OTP |
| **Database** | PostgreSQL with Prisma ORM |
| **Video Storage** | (Optional: Cloudinary, Firebase Storage, etc.) |
| **Analytics** | Chart.js |
| **CI/CD** | Vercel, Netlify |


## 🧑‍💻 Getting Started Locally

### Prerequisites

- Node.js >= 18
- PostgreSQL (local or cloud)
- Firebase project
- Prisma CLI installed (`npm i -g prisma`)

