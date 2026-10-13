# AGENTS

## Update
- Updated the wide Experience card with the new entrepreneurial projects content.
- The card now includes the new LoWeb and MySaaS content, with a "Ver LoWeb" link pointing to the projects section and a small "En construcción" tag on the MySaaS block.
- The new card keeps the same visual treatment as the other Experience cards and occupies two columns on desktop while collapsing to one on small screens.
- Existing cards were left unchanged.

## Verification
- Build validation was attempted with `pnpm run build`.
- Result: the project does not currently contain a `build` script in `package.json`, so the command reports `ERR_PNPM_NO_SCRIPT`.

## Deploy / Privacy (instrucciones.md)
- noindex: added `<meta name="robots" content="noindex, nofollow">` to `index.html` (only .html page in the project).
- robots.txt: created at the repo root with `User-agent: *` / `Disallow: /`.
- CV download: created `cv/` folder; button replaced by relative link `<a class="btn btn-color-2" href="cv/HV_Anyelo_Gutierrez_Correa_Publica.pdf" download>Descargar hoja de vida</a>`. The public PDF `cv/HV_Anyelo_Gutierrez_Correa_Publica.pdf` is provided by the user (not generated). Existing `assets/resume-example.pdf` was left untouched.
- CV content (updated by the user, not by the agent): new work email `anyeloingenierosistema@gmail.com`, phone `316 831 4440` kept, REFERENCIAS section removed.
- Style: added minimal `a.btn` rules in `style.css` so the new anchor keeps the same look as the previous button.
- Privacy decision: no real phone numbers found in the code. The only match is a placeholder `https://wa.me/573000000000` in the Casa Viena experience card (`index.html`), which is not a real number and was left as is. The portfolio contact section was updated to the work email `anyeloingenierosistema@gmail.com` (`mailto:`) and a fixed LinkedIn URL; no phone number is shown on the web page.
- Verification: all internal links, images and script/style paths are relative; no absolute `C:\` paths; no `fetch()` and no `type="module"`.
- Fixed the two pre-existing broken links in the contact section (email `href` was not a valid `mailto:`; LinkedIn had a duplicated `https://` scheme). LinkedIn URL updated to `https://www.linkedin.com/in/angelo-guti%C3%A9rrez-correa-406070338/` in both the profile icon and the contact section.

## Scroll / secciones
- Fixed the scroll "desfase": removed `.site-section { scroll-margin-top: 12vh }` from `style.css`. Sections already clear the fixed menu with their own `padding-top`, so the extra margin pushed them down and cut the bottom (needed "one extra wheel click"). Set `#experience` `padding-top` from `15vh` to `20vh` to match the other sections and clear the nav.
- Smooth scroll between sections (menu links and the down-arrow `a.arrow-link`, both `href="#..."`): replaced native `scrollIntoView` with a guaranteed rAF animation `animateScrollTo()` in `FX.js` (easeInOutCubic, duration `450–1100ms` based on distance). It temporarily forces `scroll-behavior: auto` on the root during the animation and restores it after.
- Script cache-busted to `FX.js?v=20261013-3` in `index.html`.

## Contenido (instrucciones.md)
- Updated the **Met Group SAS** experience card (`index.html`) per `instrucciones.md`: kept header `Met Group SAS` / `2019 — 2023` / `Líder de Sistema de Información`; added a lead paragraph `p.experience-context` with the context phrase; replaced the bullets with the four extended ones (rastreo/inteligencia vehicular, seguridad red ITS + firewalls, administración de servidores/homologación, monitoreo con Splunk/Wireshark + Power BI + capacitación).
- Added `.experience-context` style in `style.css` (muted lead paragraph, matching the card typography) and a `<=600px` font-size override. Tags were left unchanged (not specified in the instructions).

## Contenido (instrucciones.md) — tarjeta MySaaS
- Rewrote the **MySaaS** experience card (`index.html`) as its own full-width card, removing the shared LoWeb content (former role `Evolución de LoWeb · SaaS de punto de venta`, the LoWeb bullet and the `Ver LoWeb` link). LoWeb was left intact where it lives (Projects section, `LOWEB` card).
- New card structure: header `MySaaS` + tag `En construcción` + subtitle; short description; `Stack` chips (Next.js 16, React 19, TypeScript, Prisma, PostgreSQL, Tailwind CSS v4, Kinde Auth); `Estado del proyecto` in two columns (`Listo` with check icon / `Próximamente` muted); `Decisiones técnicas` bullets; pure-CSS progress bar with `5 de 9 módulos`. No `Ver repositorio` link (no URL provided).
- Added `.mysaas-*` styles in `style.css` (`mysaas-card`, `mysaas-head`, `mysaas-title`, `mysaas-subtitle`, `mysaas-block-title`, `mysaas-stack`, `mysaas-status`, `mysaas-list--done/--soon`, `mysaas-decisions`, `mysaas-progress`) plus a `@media (max-width: 820px)` rule stacking the two status columns. Reused existing classes (`experience-card`, `experience-card__body`, `experience-tags`, `experience-tag`, `experience-summary`, `experience-list`) to keep the visual style.
- Note: the Experience section is a JS carousel (`.experience-track` is `display: flex`, each `.experience-card` is `flex: 0 0 100%`), so the card is already full width; `grid-column: 1 / -1` was added on `.mysaas-card` per the spec (inert in the flex carousel) and `grid-template-columns: 1fr` removes the left aside column for the wide layout.
- Progress bar has `role="progressbar"` with `aria-label`, `aria-valuemin/max/now` (5 of 9).

## Enlace tienda Casa Viena
- Added a `Ver tienda` link to the **Casa Viena** experience card (`index.html`), pointing to `https://casaviena.myshopify.com/` (`target="_blank" rel="noreferrer"`), placed next to the existing `WhatsApp` link inside a new `.experience-actions` wrapper.
- Added `.experience-actions` styles in `style.css` (flex row, wrap, gap) and reset `.experience-link` margin/padding inside it so both links sit on one row.

## Enlace proyecto LoWeb
- In the **Projects** section, the `LOWEB` card action was a placeholder `<button onclick="location.href='https://github.com'">Cotiza ya!</button>`. Replaced it with an anchor `<a class="btn btn-color-2 projects-btn" href="https://loweb.mdmdigitalsolutions.com/" target="_blank" rel="noreferrer">Cotiza ya! </a>` (same classes/label, now opens the real URL in a new tab). `a.btn` style in `style.css` keeps the button look.
- Set the remaining Projects card actions to their real URLs (all as `<a class="btn btn-color-2 projects-btn" target="_blank" rel="noreferrer">`): `CASA VIENA` → `Visitanos` → `https://casaviena.myshopify.com/`; `REPOSITORIOS` → `GitHub` → `https://github.com/Anyelo85` (the profile URL). No active placeholder `https://github.com` buttons remain (only the commented-out ones).

## Cursos Udemy (Educación)
- In the **Educación Complementaria** card (`index.html`), kept the single `Udemy (2026)` entry (generic place text `Cursos avanzados en desarrollo, IA y tecnologia`) and added a nested `<ul class="education-courses">` with the two specific courses: `Curso completo de QA Engineer desde 0 hasta avanzado` and `React: De cero a experto`. One title (`Udemy (2026)`), same year, one list (per user). No separate `<li>` per course.
- Added `.education-courses` styles in `style.css` (no bullets, muted, no card-item border/padding override).






