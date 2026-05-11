import fs from "fs";
import path from "path";
import db from "../../db";

async function runMigrations() {
  const migrationsDir = path.resolve(__dirname, "migrations");
  const files = fs
    .readdirSync(migrationsDir)
    .filter((file) => file.endsWith(".sql"))
    .sort();

  for (const file of files) {
    const sql = fs.readFileSync(path.join(migrationsDir, file), "utf8");
    await db.query(sql);
    console.log(`Migration applied: ${file}`);
  }

  await db.close();
}

runMigrations().catch(async (error) => {
  console.error(error);
  await db.close();
  process.exit(1);
});
