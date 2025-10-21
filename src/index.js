import express from "express";
import dotenv from "dotenv";
import itemRoutes from "./routes/itemRoutes.js"; // <– wajib path-nya benar

dotenv.config();

const app = express();
app.use(express.json());

// Daftarkan rute utama
app.use("/api/items", itemRoutes); // <– pastikan ini barisnya ada

// Jalankan server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});
