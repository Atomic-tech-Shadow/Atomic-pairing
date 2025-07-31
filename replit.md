# Overview

Application web "Atomic Session Generator" configurée pour déploiement sur Render. Génère des sessions WhatsApp Bot via QR code et pairage téléphonique avec stockage MEGA cloud.

# User Preferences

Preferred communication style: Simple, everyday language (French).

# System Architecture

## Déploiement Render
- **render.yaml**: Configuration automatique pour Render
- **Support WebSocket**: Compatible avec l'API WhatsApp Baileys
- **Build automatique**: npm install + node index.js
- **Port dynamique**: Géré automatiquement par Render

## Application
- **Express.js**: Serveur web avec routes WhatsApp
- **Baileys**: API WhatsApp Web avec connexions WebSocket
- **MEGA**: Stockage sécurisé des sessions générées
- **Interface**: Pages HTML avec design moderne

# External Dependencies

Application prête pour Render avec toutes les dépendances Node.js installées et configuration optimisée pour le déploiement cloud.