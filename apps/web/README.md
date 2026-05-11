# Adakan Library Core Web

Adakan Software tarafindan gelistirilen Next.js 14 App Router + TypeScript frontend.

## Aciklama

Kisisel, okul veya kucuk kurumlar icin modern kutuphane yonetim sistemi arayuzu. Backend API: Adakan Library Core API.

## Kurulum

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Env Degiskenleri

```text
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:5000/api
BASE_URL=http://localhost:5000/api
AUTH_SECRET=change-me
```

## Ozellikler

- Next.js App Router
- NextAuth ile frontend oturum katmani
- Backend session ile uyumlu API girisi
- Tek axios API client ve response unwrap interceptor
- Kitap, yazar, kategori, yayinevi ve kullanici ekranlari
- Shadcn/Radix tabanli form ve tablo bilesenleri
- Zod + React Hook Form validasyonlari

## Demo Kullanici

Backend seed sonrasinda:

```text
Kullanici: adakan_admin
Sifre: AdakanDemo2026!
```

## Deployment Notlari

- `NEXT_PUBLIC_API_URL` backend `/api` kokunu gostermelidir.
- `BASE_URL` server-side auth isteklerinde kullanilir.
- Production icin `AUTH_SECRET` guclu bir deger olmalidir.
- Backend `WEBSITE_URL`, frontend domaini ile ayni olmalidir.

## GitHub

https://github.com/adakansoftware/librarysystemorhomebyadakansoftware

## Marka

Adakan Software  
adakansoftware@gmail.com  
5399416521
