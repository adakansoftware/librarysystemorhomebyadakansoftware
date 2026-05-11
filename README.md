# Adakan Library Core

Adakan Software tarafindan gelistirilen modern kutuphane yonetim sistemi.

Bu repo tek ana urun cekirdegidir:

- `apps/api`: Express + TypeScript + Sequelize + PostgreSQL API
- `apps/web`: Next.js 14 App Router + TypeScript arayuz

## Kurulum

```bash
npm run install:all
```

API env:

```bash
copy apps\api\.env.example apps\api\.env
```

Web env:

```bash
copy apps\web\.env.example apps\web\.env.local
```

Neon veya lokal PostgreSQL connection string degerini sadece `apps/api/.env` icindeki `POSTGRE_CONNECTION_STRING` alanina yazin.

## Calistirma

Iki uygulamayi tek komutla baslatmak icin:

```bash
npm run dev
```

Ayri ayri calistirmak icin:

```bash
npm run dev:api
npm run dev:web
```

Varsayilan adresler:

- API: http://localhost:5000
- Web: http://localhost:3000

## Database

```bash
npm run migrate
npm run seed
```

Demo admin:

```text
Kullanici: adakan_admin
Sifre: AdakanDemo2026!
E-posta: adakansoftware@gmail.com
```

## Build

```bash
npm run build
```

Bu komut API TypeScript kontrolunu ve web production build surecini calistirir.

## Deployment Notlari

- Production icin `NODE_ENV=production` kullanin.
- Neon connection string, JWT secret ve session secret degerlerini repoya yazmayin.
- `WEBSITE_URL`, frontend domainini gostermelidir.
- `NEXT_PUBLIC_API_URL`, backend `/api` kokunu gostermelidir.
- Daha once paylasilan Neon connection string canli kullanima alinmadan once rotate edilmelidir.

## Marka

Adakan Software  
adakansoftware@gmail.com  
5399416521
