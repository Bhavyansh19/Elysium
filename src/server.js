import pg from "pg";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cron from "node-cron";

dotenv.config({ path: ".././.env" });
const app = express();
const port = 4000;

// Middleware should be applied before starting the server
app.use(cors());
app.use(bodyParser.json());

const client = new pg.Client({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT), // Ensure port is a number
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Connect to database before starting the server
async function startServer() {
  try {
    await client.connect();
    console.log("Database connected!");

    app.listen(port, () => console.log("Server is running on port", port));
  } catch (err) {
    console.error("Database connection error:", err.message);
    process.exit(1); // Exit if DB connection fails
  }
}

startServer();

// Endpoint to handle booking submissions
app.post("/bookings", async (req, res) => {
  const { name, email, phoneNo, resDate, resTime, noOfPeople, specialNotes } =
    req.body;

  if (!name || !email || !phoneNo || !resDate || !resTime || !noOfPeople) {
    return res.status(400).json({ error: "Missing required booking details." });
  }

  try {
    await client.query(
      `INSERT INTO bookings (name, email, phoneno, resdate, restime, noofpeople, specialnotes) 
             VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [name, email, phoneNo, resDate, resTime, noOfPeople, specialNotes || ""]
    );
    res.status(201).json({ message: "Booking successful" });
  } catch (err) {
    console.error("Error saving booking:", err.message);
    res.status(500).json({ error: "Failed to save booking" });
  }
});

// Endpoint to retrieve all bookings
app.get("/getbookings", async (req, res) => {
  try {
    const result = await client.query(
      "SELECT * FROM bookings ORDER BY resdate DESC"
    );
    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Error retrieving bookings:", err.message);
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
});

// Scheduled task to delete past bookings every midnight
cron.schedule("0 0 * * *", async () => {
  try {
    await client.query("DELETE FROM bookings WHERE resdate < CURRENT_DATE");
    console.log("Deleted past bookings successfully.");
  } catch (err) {
    console.error("Error deleting past bookings:", err.message);
  }
});
