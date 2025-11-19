// config.js
// Mock configuration file for a sample web application
// Author: Zasim
// Date: 2025-11-18

export const APP_CONFIG = {
    appName: "MyWebApp",
    version: "1.0.0",
    environment: "development",
    debugMode: true,
    port: 8080,
    apiBaseUrl: "https://api.example.com/v1",
};

export const DATABASE = {
    host: "localhost",
    port: 5432,
    username: "admin",
    password: "password123",
    dbName: "mock_database",
    maxConnections: 10,
    ssl: false,
};

export const AUTH = {
    jwtSecret: "mock-secret-key-12345",
    tokenExpiration: "2h",
    refreshTokenExpiration: "7d",
    allowedLoginAttempts: 5,
    lockoutDuration: 30, // minutes
};

export const FEATURES = {
    enableSignup: true,
    enablePayments: false,
    enableChat: true,
    maxUploadSizeMB: 50,
    supportedLanguages: ["en", "fr", "es"],
};

export const LOGGING = {
    level: "debug",
    logToFile: true,
    filePath: "./logs/app.log",
    rotateDaily: true,
};

export const PAYMENT_GATEWAY = {
    provider: "Stripe",
    apiKey: "sk_test_1234567890",
    currency: "USD",
    sandboxMode: true,
};

export const MOCK_DATA = {
    users: [
        { id: 1, name: "John Doe", role: "admin" },
        { id: 2, name: "Jane Smith", role: "user" },
        { id: 3, name: "Michael Brown", role: "moderator" },
    ],

    products: [
        { id: 101, name: "Laptop", price: 1200 },
        { id: 102, name: "Mouse", price: 25 },
        { id: 103, name: "Keyboard", price: 45 },
    ],

    notifications: {
        welcome: "Welcome to MyWebApp!",
        maintenance: "Scheduled maintenance on Sunday.",
    },
};

export default {
    APP_CONFIG,
    DATABASE,
    AUTH,
    FEATURES,
    LOGGING,
    PAYMENT_GATEWAY,
    MOCK_DATA,
};
