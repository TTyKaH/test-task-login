import { createUsersTable } from "@/database/init/index.js";
import DBPool from "@/config/db.js";
import bcrypt from "bcryptjs";

export const initDB = async () => {
  try {
    await createUsersTable();
    await createTestUser();
    console.log("-- DB successfully initiated");
  } catch (e) {
    console.error("Error at DB initiation", e);
  }
};

const createTestUser = async () => {
  const testEmail = "test@example.com";
  const testPassword = "password123";

  try {
    const [rows] = await DBPool.query("SELECT * FROM users WHERE email = ?", [
      testEmail,
    ]);

    if ((rows as any[]).length > 0) {
      return;
    }

    const hashedPassword = await bcrypt.hash(testPassword, 10);

    await DBPool.query(
      "INSERT INTO users (email, password_hash) VALUES (?, ?)",
      [testEmail, hashedPassword],
    );
  } catch (error) {
    console.error("Test user creating error", (error as Error).message);
    throw error;
  }
};
