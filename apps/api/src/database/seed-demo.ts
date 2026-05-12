import bcrypt from "bcrypt";
import db from "../../db";
import AuthorityModel from "../models/authority";
import AuthorModel from "../models/author";
import BookModel from "../models/book";
import BookCategoryModel from "../models/book_category";
import CategoryModel from "../models/category";
import EventTypeModel from "../models/event_type";
import PublisherModel from "../models/publisher";
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

const libraryBooks = [
  {
    title: "Aforizmalar",
    authorName: "Franz",
    authorSurname: "Kafka",
    category: "Dusunce",
    image: "aforizmalar.jpg",
  },
  {
    title: "Atomik Alışkanlıklar",
    authorName: "James",
    authorSurname: "Clear",
    category: "Kisisel Gelisim",
    image: "atomik-aliskanliklar.jpg",
  },
  {
    title: "Atomik Alışkanlıklar Çalışma Kitabı",
    authorName: "James",
    authorSurname: "Clear",
    category: "Kisisel Gelisim",
    image: "atomik-alıiskanliklar-calisma.jpg",
  },
  {
    title: "Beyaz Diş",
    authorName: "Jack",
    authorSurname: "London",
    category: "Roman",
    image: "beyaz-dis.jpg",
  },
  {
    title: "Beyaz Zambaklar Ülkesinde",
    authorName: "Grigory",
    authorSurname: "Petrov",
    category: "Klasik",
    image: "beyaz-zambaklar-ulkesinde.jpg",
  },
  {
    title: "Cimri",
    authorName: "Moliere",
    authorSurname: "",
    category: "Tiyatro",
    image: "cimri.jpg",
  },
  {
    title: "Deccal",
    authorName: "Friedrich",
    authorSurname: "Nietzsche",
    category: "Felsefe",
    image: "deccal.jpg",
  },
  {
    title: "Değirmenimden Mektuplar",
    authorName: "Alphonse",
    authorSurname: "Daudet",
    category: "Hikaye",
    image: "degirmenimden-mektuplar.jpg",
  },
  {
    title: "Doğudaki Hayalet",
    authorName: "Pierre",
    authorSurname: "Loti",
    category: "Roman",
    image: "dogudaki-hayalet.jpg",
  },
  {
    title: "Dönüşüm",
    authorName: "Franz",
    authorSurname: "Kafka",
    category: "Klasik",
    image: "donusum.jpg",
  },
  {
    title: "Efendi ile Uşak",
    authorName: "Lev",
    authorSurname: "Tolstoy",
    category: "Hikaye",
    image: "efendi-ile-usak.jpg",
  },
  {
    title: "Ev Sahibesi",
    authorName: "Fyodor",
    authorSurname: "Dostoyevski",
    category: "Roman",
    image: "ev-sahibesi.jpg",
  },
  {
    title: "Hacı Murat",
    authorName: "Lev",
    authorSurname: "Tolstoy",
    category: "Roman",
    image: "haci-murat.jpg",
  },
  {
    title: "Hastalık Hastası",
    authorName: "Moliere",
    authorSurname: "",
    category: "Tiyatro",
    image: "hastalik-hastasi.jpg",
  },
  {
    title: "İçimizdeki Şeytan",
    authorName: "Sabahattin",
    authorSurname: "Ali",
    category: "Roman",
    image: "icimizdeki-seytan.jpg",
  },
  {
    title: "İki Şehrin Hikayesi",
    authorName: "Charles",
    authorSurname: "Dickens",
    category: "Klasik",
    image: "iki-sehrin-hikayesi.jpg",
  },
  {
    title: "İlk Aşk",
    authorName: "Ivan",
    authorSurname: "Turgenyev",
    category: "Roman",
    image: "ilk-ask.jpg",
  },
  {
    title: "İtiraflarım",
    authorName: "Lev",
    authorSurname: "Tolstoy",
    category: "Otobiyografi",
    image: "itiraflarim.jpg",
  },
  {
    title: "Kısa Hikayeler",
    authorName: "Anton",
    authorSurname: "Cehov",
    category: "Hikaye",
    image: "kisa-hikayeler.jpg",
  },
  {
    title: "Marslı",
    authorName: "Andy",
    authorSurname: "Weir",
    category: "Bilim Kurgu",
    image: "marsli.jpg",
  },
  {
    title: "Marti",
    authorName: "Richard",
    authorSurname: "Bach",
    category: "Roman",
    image: "marti.jpg",
  },
  {
    title: "Milena'ya Mektuplar",
    authorName: "Franz",
    authorSurname: "Kafka",
    category: "Mektup",
    image: "milenaya-mektuplar.jpg",
  },
  {
    title: "Putların Alacakaranlığı",
    authorName: "Friedrich",
    authorSurname: "Nietzsche",
    category: "Felsefe",
    image: "putlarin-alacakaranligi.jpg",
  },
  {
    title: "Savaş Sanatı",
    authorName: "Sun",
    authorSurname: "Tzu",
    category: "Strateji",
    image: "savas-sanati.jpg",
  },
  {
    title: "Sokrates'in Savunması",
    authorName: "Platon",
    authorSurname: "",
    category: "Felsefe",
    image: "sokratesin-savunmasi.jpg",
  },
  {
    title: "Vahşetin Çağrısı",
    authorName: "Jack",
    authorSurname: "London",
    category: "Roman",
    image: "vahsetin-cagrisi.jpg",
  },
  {
    title: "Yeraltından Notlar",
    authorName: "Fyodor",
    authorSurname: "Dostoyevski",
    category: "Klasik",
    image: "yeraltindan-notlar.jpg",
  },
  {
    title: "Yüzbaşının Kızı",
    authorName: "Aleksandr",
    authorSurname: "Puskin",
    category: "Roman",
    image: "yuzbasinin-kizi.jpg",
  },
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

  const [publisher] = await PublisherModel.findOrCreate({
    where: { publisher_name: "Kisisel Kitaplik" },
    defaults: { publisher_name: "Kisisel Kitaplik" },
  });

  for (const libraryBook of libraryBooks) {
    const [author] = await AuthorModel.findOrCreate({
      where: {
        author_name: libraryBook.authorName,
        author_surname: libraryBook.authorSurname,
      },
      defaults: {
        author_name: libraryBook.authorName,
        author_surname: libraryBook.authorSurname,
      },
    });

    const [category] = await CategoryModel.findOrCreate({
      where: { category_name: libraryBook.category },
      defaults: { category_name: libraryBook.category },
    });

    const bookImage = `/images/books/${libraryBook.image}`;
    const bookSummary = `${libraryBook.title} kütüphanedeki kitaplardan biridir.`;
    const existingBook = await BookModel.findOne({
      where: { book_image: bookImage },
    });

    const [book] = existingBook
      ? [existingBook]
      : await BookModel.findOrCreate({
          where: {
            book_title: libraryBook.title,
            author_id: author.author_id,
          },
          defaults: {
            book_title: libraryBook.title,
            author_id: author.author_id,
            publisher_id: publisher.publisher_id,
            status_id: "2",
            book_image: bookImage,
            book_summary: bookSummary,
          },
        });

    book.set({
      book_title: libraryBook.title,
      author_id: author.author_id,
      publisher_id: publisher.publisher_id,
      status_id: "2",
      book_image: bookImage,
      book_summary: bookSummary,
    });
    await book.save();

    await BookCategoryModel.findOrCreate({
      where: {
        book_id: book.book_id,
        category_id: category.category_id,
      },
      defaults: {
        book_id: book.book_id,
        category_id: category.category_id,
      },
    });
  }

  console.log(
    `Demo seed completed. Admin: adakan_admin / AdakanDemo2026! Books: ${libraryBooks.length}`
  );
  await db.close();
}

seedDemo().catch(async (error) => {
  console.error(error);
  await db.close();
  process.exit(1);
});
