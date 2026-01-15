# Pulse

**Audience broadcast console** — design campaigns, manage contacts, and track performance from one place.

Pulse is a self-hosted web app for teams who send recurring updates to their audience. Built with Next.js 15, it pairs a polished dark UI with reliable transactional email delivery and a PostgreSQL-backed workspace for campaigns and templates.

![Pulse campaigns dashboard](./public/screenshot.png)

---

## Why Pulse

Most email tools feel like legacy marketing suites. Pulse is closer to a **control panel**: a focused dashboard for broadcasts, drafts, and metrics—without clutter.

- **Campaign-centric workflow** — create, send, and review broadcasts with open/click stats at a glance  
- **Audience management** — sync and manage contacts from your email provider  
- **Template studio** — reusable layouts with a visual editor and raw HTML mode  
- **Glass-dark UI** — gradient accents, rounded surfaces, and a layout built for long sessions  

---

## Features

| Area | What you get |
|------|----------------|
| **Dashboard** | Subscriber totals, send volume, and recent broadcast activity |
| **Campaigns** | All / Sent / Drafts views, performance summary, per-campaign metrics |
| **Subscribers** | Contact lists, status, and audience sync |
| **Templates** | Categories, previews, HTML editor, Unlayer integration |
| **Analytics** | Engagement trends and campaign comparisons |
| **Settings** | API keys, sender identity, and delivery preferences |

Additional capabilities:

- Test sends before going live  
- Rich HTML templates with variable placeholders (`{{name}}`, etc.)  
- REST API routes for campaigns, contacts, and templates  
- Responsive layout for desktop workflows  

---

## Tech stack

| Layer | Choice |
|-------|--------|
| Framework | [Next.js 15](https://nextjs.org) (App Router) |
| UI | [Tailwind CSS](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com) |
| Database | [PostgreSQL](https://www.postgresql.org) + [Prisma](https://www.prisma.io) |
| Email | [Resend](https://resend.com) |
| Language | TypeScript |

---

## Quick start

### Prerequisites

- Node.js 18+
- [pnpm](https://pnpm.io) (recommended) or npm
- PostgreSQL database
- [Resend](https://resend.com) account (API key + audience)

### 1. Clone and install

```bash
git clone <your-repo-url>
cd Pulse-app
pnpm install
```

### 2. Environment

Create `.env` (Prisma) and `.env.local` (Next.js):

```env
# .env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/pulse"
```

```env
# .env.local
RESEND_API_KEY=re_xxxxxxxx
RESEND_AUDIENCE_ID=your-audience-id
FROM_EMAIL=onboarding@resend.dev
REPLY_TO_EMAIL=onboarding@resend.dev
NEXT_PUBLIC_APP_NAME=Pulse
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 3. Database

```bash
pnpm exec prisma migrate deploy
pnpm exec prisma generate
```

### 4. Run

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project structure

```
├── app/              # Routes (dashboard, campaigns, subscribers, templates, api)
├── components/       # UI, campaign forms, editors
├── hooks/            # Data hooks (campaigns, subscribers, templates)
├── lib/              # Email client, Prisma, utilities
├── prisma/           # Schema and migrations
└── public/           # Static assets (screenshot, logo)
```

---

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Development server |
| `pnpm build` | Production build |
| `pnpm start` | Run production server |
| `pnpm lint` | ESLint |

---

## API overview

| Method | Path | Purpose |
|--------|------|---------|
| `GET` | `/api/campaigns` | List campaigns |
| `POST` | `/api/campaigns` | Create campaign |
| `POST` | `/api/campaigns/send` | Send to audience |
| `GET` | `/api/subscribers/contacts` | List contacts |
| `GET` | `/api/templates` | List templates |
| `GET` | `/api/status` | Service health |

See route handlers under `app/api/` for request/response shapes.

---

## License

MIT — use freely in personal and commercial projects.

---

<p align="center">
  <sub>Built with Next.js · Prisma · Resend</sub>
</p>
