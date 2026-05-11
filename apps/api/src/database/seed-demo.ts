import bcrypt from "bcrypt";
import db from "../../db";
import AuthorityModel from "../models/authority";
import EventTypeModel from "../models/event_type";
import StatusModel from "../models/status";
import UserModel from "../models/user";

const authorities = [
  { authority_id: "1", role: "guest" },
  { authority_id: "2", role: "admin" },
  { authority_id: "3", role: "user" },
];

const statuses = [
  { status_id: "1", status_name: "Okunuyor" },
  { status_id: "2", status_name: "Kitaplikta" },
  { status_id: "3", status_name: "Okundu" },
  { status_id: "4", status_name: "Yarim Birakildi" },
  { status_id: "6", status_name: "Satin Alinacak" },
  { status_id: "7", status_name: "Okundu Kitaplikta Degil" },
  { status_id: "11", status_name: "Kitaplikta Degil" },
];

const eventTypes = [
  ["8", "category_create"],
  ["9", "category_delete"],
  ["10", "category_update"],
  ["19", "publisher_create"],
  ["20", "publisher_delete"],
  ["21", "publisher_update"],
  ["22", "author_create"],
  ["23", "author_delete"],
  ["24", "author_update"],
  ["25", "book_create"],
  ["26", "book_delete"],
  ["27", "book_update"],
  ["28", "reading_create"],
  ["29", "reading_delete"],
  ["30", "reading_update"],
  ["31", "user_create"],
  ["32", "user_delete"],
  ["33", "login_error"],
  ["34", "error"],
  ["35", "user_update"],
] as const;

async function seedDemo() {
  await db.authenticate();

  for (const authority of authorities) {
    await AuthorityModel.findOrCreate({
      where: { authority_id: authority.authority_id },
      defaults: authority,
    });
  }

  for (const status of statuses) {
    await StatusModel.findOrCreate({
      where: { status_id: status.status_id },
      defaults: status,
    });
  }

  for (const [event_id, event_name] of eventTypes) {
    await EventTypeModel.findOrCreate({
      where: { event_id },
      defaults: { event_id, event_name },
    });
  }

  const password = await bcrypt.hash("AdakanDemo2026!", 10);
  await UserModel.findOrCreate({
    where: { user_email: "adakansoftware@gmail.com" },
    defaults: {
      user_name: "adakan_admin",
      user_password: password,
      user_email: "adakansoftware@gmail.com",
      user_authority_id: "2",
      user_email_verified: true,
      user_visibility: false,
      user_library_visibility: false,
    },
  });

  console.log("Demo seed completed. Admin: adakan_admin / AdakanDemo2026!");
  await db.close();
}

seedDemo().catch(async (error) => {
  console.error(error);
  await db.close();
  process.exit(1);
});
