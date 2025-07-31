# Overview

Application web "Atomic Session Generator" pour créer des sessions WhatsApp Bot. L'application offre deux méthodes d'authentification : QR code et code de pairage téléphonique. Les sessions sont stockées de manière sécurisée via MEGA cloud.

# User Preferences

Preferred communication style: Simple, everyday language (French).

# System Architecture

## Frontend
- **main.html**: Page d'accueil avec interface "ATOMIC SESSION" et boutons stylisés
- **qr.html**: Interface de scan QR code pour authentification WhatsApp
- **pair.html**: Interface de pairage par numéro de téléphone
- **Design**: Fond noir avec boutons animés (gradients RGB) et effets visuels

## Backend
- **Express.js**: Serveur web sur port 5000
- **Routes principales**:
  - `/` → main.html (page d'accueil)
  - `/qr` → Interface QR code
  - `/pair` → Interface pairage téléphone
  - `/server` → Logique QR code
  - `/code` → Logique pairage

## Session Management
- **Baileys**: Intégration WhatsApp Web API v6.7.17
- **Stockage temporaire**: Dossier `./temp/` pour sessions en cours
- **MEGA Cloud**: Stockage sécurisé des credentials finaux
- **Authentification**: QR scan ou code pairage 8 chiffres

# External Dependencies

## Core Dependencies
- **@whiskeysockets/baileys**: API WhatsApp Web
- **express**: Framework web Node.js
- **qrcode**: Génération codes QR
- **megajs**: Client stockage MEGA
- **pino**: Logger JSON
- **pm2**: Gestionnaire processus

## Utilitaires
- **awesome-phonenumber**: Validation numéros téléphone
- **body-parser**: Parsing requêtes HTTP
- **async-mutex**: Synchronisation opérations asynchrones