// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const { Pool } = require("pg");

// const app = express();
// const port = 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // PostgreSQL connection
// const pool = new Pool({
//   user: "your_username",
//   host: "localhost",
//   database: "your_database",
//   password: "your_password",
//   port: 5432,
// });

// // API to fetch all blogs
// app.get("/api/blogs", async (req, res) => {
//   try {
//     const result = await pool.query("SELECT id, title, description, image_url FROM blogs");
//     res.json(result.rows);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // API to fetch a single blog by ID
// app.get("/api/blogs/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const result = await pool.query("SELECT * FROM blogs WHERE id = $1", [id]);
//     res.json(result.rows[0]);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });
