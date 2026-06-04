# PRD — Eric Rai Portfolio (macOS-themed)

## Original Problem Statement
The portfolio was originally branded for "Adrian". Update it to belong to Eric Rai, a freelancer based in Nepal, with his real social links and the services he offers.

About Me: Eric Rai is a freelancer based in Nepal.
Social links: YouTube (@ericperspectives), LinkedIn (voidman-eric-1ab90313b), Upwork (~01d77cf8ad1a56027c), Facebook (sangpang.eric), TikTok (@jungey_sircar), Instagram (@jungey_sircar).

## User Choices
- Services: Full Stack Web Developer, Mobile App Developer, Data Science, AI/ML Dashboard, Business Intelligence
- Keep current structure & design, only update content
- Profile photo provided (Google Drive link → saved to /app/public/images/eric.jpg)
- Tagline: "Creative Freelancer & Content Creator from Nepal"
- Contact email: voidmaneric@gmail.com

## Tech Stack
- Vite + React 19, Tailwind v4, GSAP, Zustand
- macOS-style desktop UI (folders, dock, draggable windows)

## Implemented (Jun 2026)
- Renamed all "Adrian" branding → "Eric" (Navbar, Welcome, Contact, Terminal, Safari, page <title>)
- Updated `/app/src/constants/index.js`:
  - `socials`: YouTube, LinkedIn, Upwork, Facebook, TikTok, Instagram, Email
  - `techStack`: Full Stack Web, Mobile, Data Science, AI/ML, BI & Dashboards, Databases & DevOps
  - `dockApps`: "Channel" instead of "Articles"; "Skills" Terminal
  - `blogPosts` (Safari) → Eric's channels (YouTube / TikTok / Instagram)
  - `WORK_LOCATION.children`: 4 service folders (Full Stack Web Platform, Mobile App Development, AI/ML Dashboard, Business Intelligence Suite) with descriptions and links to Eric's Upwork
  - `ABOUT_LOCATION`: bio text rewritten for Eric, photo = `/images/eric.jpg`
- New SVG icons added: youtube, upwork, facebook, tiktok, instagram, mail
- Saved Eric's profile photo at `/app/public/images/eric.jpg`
- Vite config: added `allowedHosts: true` so preview domain works
- Supervisor frontend wrapper (`/app/frontend/package.json`) restored — `yarn start` invokes vite from `/app`

## What's Working
- Welcome animation greets "Hey, I'm Eric!"
- Navbar shows "Eric's Portfolio"
- Contact window displays Eric's avatar, tagline, and 7 social buttons (YouTube, LinkedIn, Upwork, Facebook, TikTok, Instagram, Email)
- Project folders open with new service descriptions
- Tech stack terminal lists 6 skill categories
- Safari window lists Eric's channels (YouTube, TikTok, Instagram)
- Mobile views mirror desktop content

## Next Action Items / Backlog (P1/P2)
- P1: Replace placeholder project preview images (project-1/2/3.png still original) and blog thumbnails (blog1/2/3.png) with Eric's actual work / channel art
- P1: Upload Eric's actual Resume.pdf to `/app/public/files/resume.pdf` (currently still the original)
- P2: Replace gallery (gal1-4.png) and trash images with Eric-specific imagery
- P2: Add real case studies / client testimonials in Finder folders
- P2: Add favicon (`/app/public/macbook.png` currently used) with Eric's branding
