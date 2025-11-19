// server.js
// Author: Zasim
// Date: 2025-11-18

import express from "express";
const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// ---------------------------------------------
// API ROUTES (Mock)
// ---------------------------------------------

/**
 * GET /api/users
 * Returns a mock list of users
 */
app.get("/api/users", (req, res) => {
    // Mock response structure
    res.json([
        { id: 1, name: "John Doe", role: "admin" },
        { id: 2, name: "Jane Smith", role: "user" }
    ]);
});

/**
 * POST /api/users
 * Creates a new user (mock only)
 */
app.post("/api/users", (req, res) => {
    // Mock create logic
    const mockUser = { id: Date.now(), ...req.body };
    res.status(201).json({
        message: "User created successfully (mock).",
        user: mockUser,
    });
});

/**
 * PUT /api/users/:id
 * Updates a user (mock only)
 */
app.put("/api/users/:id", (req, res) => {
    // Mock update logic
    res.json({
        message: `User with ID ${req.params.id} updated (mock).`,
        newData: req.body,
    });
});

/**
 * DELETE /api/users/:id
 * Deletes a user (mock only)
 */
app.delete("/api/users/:id", (req, res) => {
    // Mock delete logic
    res.json({
        message: `User with ID ${req.params.id} deleted (mock).`,
    });
});

// ---------------------------------------------
// Root Endpoint
// ---------------------------------------------
app.get("/", (req, res) => {
    res.send("Mock API Server is running.");
});

// ---------------------------------------------
// Server Listener
// ---------------------------------------------
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Mock server running on http://localhost:${PORT}`);
});

/**
 * Notes:
 * - This server does NOT connect to a database.
 * - All endpoints return mock data for testing.
 * - production-level validation/error-handling omitted.
 */
