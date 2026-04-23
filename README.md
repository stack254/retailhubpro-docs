# RetailHub Pro

A production-grade, multi-tenant SaaS Point of Sale platform built end-to-end 
for the African retail market.

🔗 **Live:** [retailhubpro.com](https://retailhubpro.com)

---

## Overview

RetailHub Pro is a fully deployed, multi-platform POS system designed for 
small and medium retailers in Kenya. Built and shipped solo across three 
platforms — a Django REST API, a React PWA, and a React Native mobile app.

---

## Features

- **Multi-tenant architecture** — fully isolated data per business
- **M-Pesa STK Push** — real-time in-person payments via Daraja API
- **Paystack** — SaaS subscription billing
- **Offline-first PWA** — transactions work without internet, sync when back online
- **React Native mobile app** — iOS and Android, full POS functionality
- **Invoicing & quotations** — generate and share professional documents
- **ESC/POS thermal printer support** — print receipts on standard POS printers
- **Installable PWA** — works like a native app on any device

---

## Tech Stack

| Layer | Technology |
|---|---|
| Backend | Python, Django, Django REST Framework |
| Frontend | React, TypeScript, Tailwind CSS, PWA |
| Mobile | React Native, TypeScript (iOS & Android) |
| Database | PostgreSQL |
| Payments | M-Pesa Daraja API, Paystack |
| Auth | JWT, Multi-tenant session management |
| Deployment | Linux VPS, Nginx, Gunicorn |
| Offline | Service Workers, IndexedDB |

---

## Architecture

RetailHub Pro
├── Django REST API        ← single backend for all platforms
├── React PWA              ← installable, offline-first web app
└── React Native App       ← Android mobile app

All three platforms share a single Django backend with multi-tenant 
data isolation at the ORM level.

---

## Screenshots

*Coming soon*

---

## Status

Live and in active development at [retailhubpro.com](https://retailhubpro.com)

---

## Developer

**Cecil Lunyasi** — Full-Stack Developer, Nairobi Kenya  
cecillunyasi@gmail.com · [LinkedIn](https://linkedin.com/in/embuyitsa)

> The source code is private. This repo documents the project publicly.
