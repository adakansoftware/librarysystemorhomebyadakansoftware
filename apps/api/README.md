# Adakan Library Core API

Adakan Software tarafindan gelistirilen Express + TypeScript + Sequelize + PostgreSQL API cekirdegi.

## Aciklama

Kisisel, okul veya kucuk kurumlar icin modern kutuphane yonetim sistemi. Kitap, yazar, kategori, yayinevi, kullanici, rol ve odunc/iade sureclerinin temel API altyapisini saglar.

## Kurulum

```bash
npm install
cp .env.example .env
npm run migrate
npm run seed
npm run dev
```

## Env Degiskenleri

`.env.example` dosyasini temel alin. `POSTGRE_CONNECTION_STRING` lokal PostgreSQL veya Neon connection string olabilir. Gercek Neon sifresini README veya git gecmisine yazmayin.

## Database

Migration komutu:

```bash
npm run migrate
```

Demo seed komutu:

```bash
npm run seed
```

Demo admin:

```text
Kullanici: adakan_admin
Sifre: AdakanDemo2026!
E-posta: adakansoftware@gmail.com
```

## Ozellikler

- Session tabanli auth ve rol kontrolu
- Standart API response formati
- Kitap, yazar, kategori, yayinevi ve kullanici yonetimi
- Okuma/kitaplik kaydi altyapisi
- S3 uyumlu gorsel yukleme
- Upload dosya tipi ve boyut kontrolu
- PostgreSQL session store

## Response Formati

Basarili:

```json
{ "success": true, "data": {} }
```

Hatali:

```json
{ "success": false, "message": "Hata mesaji" }
```

## Deployment Notlari

- Production ortaminda `NODE_ENV=production` kullanin.
- `SESSION_SECRET`, JWT secret degerleri ve Neon connection string guclu/ozel olmalidir.
- Cookie ayarlari production icin `secure` ve `sameSite=none` olarak calisir.
- Frontend domainini `WEBSITE_URL` icinde belirtin.
- Verilen connection string paylasildiysa Neon uzerinden rotate edilmesi onerilir.

## Marka

Adakan Software  
adakansoftware@gmail.com  
5399416521
