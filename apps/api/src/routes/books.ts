import express from "express";
import * as BooksController from "../controller/books";
import { requiresNotGuest } from "../middleware/auth";
import { uploadImage } from "../middleware/upload";

const router = express.Router();

//get all books
router.get("/", BooksController.getBooks);

//Add new book
router.post(
  "/insert",
  requiresNotGuest,
  uploadImage.single("book_image"),
  BooksController.insertBook
);

//Delete book
router.delete("/:book_id", requiresNotGuest, BooksController.deleteBook);

//data-grid collapse values for users page
router.get(
  "/userBookGridCollapseList/:user_id",
  BooksController.userBookGridCollapseList
);

//get last inserted and reachable book
router.get(
  "/lastInsertedReachableBook",
  BooksController.getLastInsertedReachableBook
);

//get random book recommendation
router.get(
  "/randomBookRecommendation",
  BooksController.getRandomBookRecommendation
);

export default router;
