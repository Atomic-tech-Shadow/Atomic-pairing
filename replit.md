# Overview

This is a WhatsApp session generator web application that creates session IDs for WhatsApp bots using the Baileys library. The application provides both QR code scanning and phone number pairing methods for authentication, with secure session storage via MEGA cloud service. It's designed for easy deployment across multiple platforms (Heroku, Render, Koyeb) and serves as a session generation service for WhatsApp bot developers.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Static HTML Pages**: Three main HTML files serve different authentication flows:
  - `main.html`: Landing page with navigation options
  - `qr.html`: QR code scanning interface for WhatsApp authentication
  - `pair.html`: Phone number pairing interface for WhatsApp authentication
- **Client-Side Styling**: Embedded CSS with animated backgrounds and responsive design
- **Single Page Application**: No complex frontend framework, uses vanilla HTML/CSS/JS

## Backend Architecture
- **Express.js Server**: Lightweight Node.js web server handling HTTP requests
- **Route-Based Architecture**: Separate route handlers for different authentication methods:
  - `/qr` route: Handles QR code generation and scanning
  - `/pair` route: Handles phone number pairing
  - `/code` route: Processes pairing code requests
  - `/server` route: Main server functionality
- **Session Management**: Temporary session files stored in `./temp/` directory with unique IDs
- **File-Based State**: Uses Baileys' `useMultiFileAuthState` for WhatsApp authentication state

## WhatsApp Integration
- **Baileys Library**: Uses `@whiskeysockets/baileys` v6.7.17 for WhatsApp Web API integration
- **Authentication Methods**:
  - QR Code: Generates QR codes for WhatsApp Web scanning
  - Pairing Code: Generates 8-digit codes for phone number pairing
- **Browser Emulation**: Simulates Safari on macOS for WhatsApp Web compatibility
- **Connection Handling**: Manages WebSocket connections with automatic reconnection logic

## Data Storage
- **MEGA Cloud Storage**: Secure cloud storage for session credentials
- **Temporary Local Storage**: Session files temporarily stored locally during generation
- **File Cleanup**: Automatic removal of temporary files after session upload

## Session Generation Process
1. Generate unique session ID using random alphanumeric characters
2. Create temporary directory for session files
3. Initialize WhatsApp socket with Baileys
4. Handle authentication (QR or pairing code)
5. Save credentials to temporary files
6. Upload session to MEGA cloud storage
7. Clean up temporary files
8. Return session information to client

# External Dependencies

## Core Dependencies
- **@whiskeysockets/baileys**: WhatsApp Web API client library for bot integration
- **express**: Web application framework for Node.js
- **qrcode**: QR code generation library for authentication
- **megajs**: MEGA cloud storage client for session file storage
- **pino**: Fast JSON logger for application logging
- **pm2**: Process manager for Node.js applications

## Utility Dependencies
- **awesome-phonenumber**: Phone number validation and formatting
- **phone**: Additional phone number utilities
- **body-parser**: Express middleware for parsing request bodies
- **async-mutex**: Asynchronous mutex for handling concurrent operations
- **@adiwajshing/keyed-db**: Key-value database for Baileys

## Cloud Storage Integration
- **MEGA Account**: Requires MEGA.nz account credentials for session storage
- **File Upload**: Automatic upload of generated session files to MEGA cloud
- **Secure Storage**: Session credentials stored securely in cloud storage

## Deployment Platforms
- **Heroku**: Cloud platform deployment with buildpack configuration
- **Render**: Modern cloud platform for web services
- **Koyeb**: Serverless platform deployment
- **Self-hosting**: Compatible with any Node.js hosting environment

## Environment Configuration
- **PORT**: Configurable port number (default: 8000, fallback: 5000)
- **Node.js Runtime**: Requires Node.js environment with npm package management
- **Process Management**: PM2 integration for production deployment