CREATE TABLE IF NOT EXISTS "USER" (
  "user_id" BIGSERIAL PRIMARY KEY,
  "user_name" VARCHAR(255) NOT NULL UNIQUE,
  "user_password" VARCHAR(255) NOT NULL,
  "user_email" VARCHAR(255) UNIQUE,
  "user_authority_id" BIGINT REFERENCES "AUTHORITY" ("authority_id"),
  "user_email_verified" BOOLEAN,
  "user_google_id" DECIMAL,
  "user_visibility" BOOLEAN,
  "user_library_visibility" BOOLEAN,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "deletedAt" TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS "AUTHOR" (
  "author_id" BIGSERIAL PRIMARY KEY,
  "author_name" VARCHAR(255) NOT NULL,
  "author_surname" VARCHAR(255),
  "createdAt" TIMESTAMPTZ DEFAULT NOW(),
  "updatedAt" TIMESTAMPTZ DEFAULT NOW(),
  "deletedAt" TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS "PUBLISHER" (
  "publisher_id" BIGSERIAL PRIMARY KEY,
  "publisher_name" VARCHAR(255) NOT NULL UNIQUE,
  "createdAt" TIMESTAMPTZ DEFAULT NOW(),
  "updatedAt" TIMESTAMPTZ DEFAULT NOW(),
  "deletedAt" TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS "CATEGORY" (
  "category_id" BIGSERIAL PRIMARY KEY,
  "category_name" VARCHAR(255) NOT NULL UNIQUE,
  "createdAt" TIMESTAMPTZ DEFAULT NOW(),
  "updatedAt" TIMESTAMPTZ DEFAULT NOW(),
  "deletedAt" TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS "BOOK" (
  "book_id" BIGSERIAL PRIMARY KEY,
  "book_title" VARCHAR(255) NOT NULL,
  "author_id" BIGINT NOT NULL REFERENCES "AUTHOR" ("author_id"),
  "publisher_id" BIGINT REFERENCES "PUBLISHER" ("publisher_id"),
  "status_id" BIGINT NOT NULL REFERENCES "STATUS" ("status_id"),
  "book_image" TEXT,
  "book_summary" VARCHAR(255),
  "book_isbn" INTEGER,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "deletedAt" TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS "BOOK_CATEGORY" (
  "book_id" BIGINT NOT NULL REFERENCES "BOOK" ("book_id"),
  "category_id" BIGINT NOT NULL REFERENCES "CATEGORY" ("category_id"),
  "createdAt" TIMESTAMPTZ DEFAULT NOW(),
  "updatedAt" TIMESTAMPTZ DEFAULT NOW(),
  "deletedAt" TIMESTAMPTZ,
  PRIMARY KEY ("book_id", "category_id")
);

CREATE TABLE IF NOT EXISTS "READING" (
  "reading_id" BIGSERIAL PRIMARY KEY,
  "user_id" BIGINT NOT NULL REFERENCES "USER" ("user_id"),
  "book_id" BIGINT NOT NULL REFERENCES "BOOK" ("book_id"),
  "status_id" BIGINT NOT NULL REFERENCES "STATUS" ("status_id"),
  "comment" TEXT,
  "createdAt" TIMESTAMPTZ DEFAULT NOW(),
  "updatedAt" TIMESTAMPTZ DEFAULT NOW(),
  "deletedAt" TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS "LOG" (
  "log_id" BIGSERIAL PRIMARY KEY,
  "user_id" BIGINT REFERENCES "USER" ("user_id"),
  "event_type_id" BIGINT NOT NULL REFERENCES "EVENT_TYPE" ("event_id"),
  "event_date" TIMESTAMPTZ DEFAULT NOW(),
  "book_id" BIGINT REFERENCES "BOOK" ("book_id"),
  "description" TEXT,
  "category_id" BIGINT REFERENCES "CATEGORY" ("category_id"),
  "translator_id" BIGINT,
  "publisher_id" BIGINT REFERENCES "PUBLISHER" ("publisher_id"),
  "author_id" BIGINT REFERENCES "AUTHOR" ("author_id"),
  "reading_id" BIGINT REFERENCES "READING" ("reading_id")
);
