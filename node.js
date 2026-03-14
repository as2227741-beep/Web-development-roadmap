const PH=[
{name:"Foundations",c:"#7F77DD",bg:"#7F77DD18",sub:"HTML · CSS · Vanilla JS",weeks:[
  {t:"Week 1 — HTML5 mastery",d:[
    ["Semantic HTML","Sections, articles, figures, semantic landmarks, document outline","MDN HTML","https://developer.mozilla.org/en-US/docs/Learn/HTML","The Odin Project","https://www.theodinproject.com/paths/foundations","Rebuild a Wikipedia article using 100% semantic HTML"],
    ["Forms & validation","Input types, constraints, labels, ARIA, autocomplete, form UX","MDN Forms","https://developer.mozilla.org/en-US/docs/Learn/Forms","web.dev Forms","https://web.dev/learn/forms/","Build a multi-step form with complete client-side validation"],
    ["HTML APIs","Canvas, drag & drop, geolocation, Web Audio, File API, notifications","MDN Web APIs","https://developer.mozilla.org/en-US/docs/Web/API","web.dev","https://web.dev","Build a canvas drawing app using only the HTML5 Canvas API"],
    ["SEO & metadata","Open Graph, Twitter cards, JSON-LD, canonical, robots.txt","Google SEO Guide","https://developers.google.com/search/docs/fundamentals/seo-starter-guide","schema.org","https://schema.org","Add complete metadata + structured data to any live page"],
    ["Accessibility","WCAG 2.1, ARIA roles, keyboard navigation, focus management","MDN Accessibility","https://developer.mozilla.org/en-US/docs/Learn/Accessibility","web.dev A11y","https://web.dev/learn/accessibility/","Audit & fix a11y issues using axe DevTools browser extension"],
    ["HTML deep review","Edge cases, browser quirks, htmlreference.io, Can I Use","htmlreference.io","https://htmlreference.io","Can I Use","https://caniuse.com","Build a fully semantic, accessible, SEO-ready landing page"],
    ["Rest & review","Consolidate week 1 — reread docs, review your own code","MDN HTML guide","https://developer.mozilla.org/en-US/docs/Learn/HTML","roadmap.sh","https://roadmap.sh/frontend","No project — read, review notes, fix any gaps you spotted"],
  ]},
  {t:"Week 2 — CSS mastery",d:[
    ["Box model & cascade","Specificity, stacking contexts, inheritance, initial/revert","CSS-Tricks cascade","https://css-tricks.com/the-c-in-css-the-cascade/","MDN CSS","https://developer.mozilla.org/en-US/docs/Learn/CSS","Reproduce 5 complex layouts using only box model knowledge"],
    ["Flexbox deep dive","All flex properties, alignment, wrapping, gaps, order","Flexbox Froggy","https://flexboxfroggy.com","CSS-Tricks Flexbox","https://css-tricks.com/snippets/css/a-guide-to-flexbox/","Build a responsive nav + hero section using Flexbox only"],
    ["CSS Grid","Tracks, areas, auto-placement, subgrid, named lines","Grid Garden","https://cssgridgarden.com","CSS-Tricks Grid","https://css-tricks.com/snippets/css/complete-guide-grid/","Build a magazine-style editorial layout using CSS Grid"],
    ["Custom properties & functions","Variables, calc(), clamp(), min()/max(), color-mix()","MDN CSS Functions","https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Functions","web.dev Design","https://web.dev/learn/design/","Build a fluid, zero-breakpoint responsive layout"],
    ["Animations & transforms","@keyframes, transition, transform, will-change, perf tips","MDN Animations","https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations","Kevin Powell YT","https://www.youtube.com/@KevinPowell","Recreate 5 UI micro-interactions in pure CSS"],
    ["Responsive & container queries","Mobile-first, media queries, container queries, aspect-ratio","web.dev Responsive","https://web.dev/learn/design/","MDN Media Queries","https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Media_queries","Make any desktop site fully responsive with container queries"],
    ["CSS project day","Apply everything — complete a real challenge","Frontend Mentor","https://www.frontendmentor.io","cssreference.io","https://cssreference.io","Complete a 3-star Frontend Mentor challenge from scratch"],
  ]},
  {t:"Week 3 — JavaScript foundations",d:[
    ["ES6+ syntax","Destructuring, spread/rest, optional chaining, nullish coalescing","javascript.info","https://javascript.info","MDN JS","https://developer.mozilla.org/en-US/docs/Web/JavaScript","Rewrite 3 old-style JS functions using modern ES2024 syntax"],
    ["Closures & scope","Lexical scope, closures, IIFE, hoisting, temporal dead zone","javascript.info Closures","https://javascript.info/closure","You Don't Know JS","https://github.com/getify/You-Dont-Know-JS","Build a counter factory + memoize function using closures"],
    ["Prototypes & classes","Prototype chain, Object.create, classes, this, bind/call/apply","javascript.info OOP","https://javascript.info/prototypes","MDN Classes","https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes","Implement a mini ORM class using prototypal inheritance"],
    ["Arrays & functional JS","map, filter, reduce, flatMap, sort, immutability, pure functions","javascript.info Arrays","https://javascript.info/array-methods","Functional-Light JS","https://github.com/getify/Functional-Light-JS","Solve 10 LeetCode easy array problems in functional style"],
    ["Async JavaScript","Callbacks, Promises, async/await, Promise.all, abort signals","javascript.info Async","https://javascript.info/async","MDN Promises","https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises","Build a sequential + parallel API fetcher with full error handling"],
    ["Modules & error handling","ESM, CommonJS, try/catch, custom errors, finally, re-throwing","javascript.info Modules","https://javascript.info/modules","MDN Error","https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error","Build a robust API wrapper with typed errors and retry logic"],
    ["JS project day","Consolidate with a real build","javascript30","https://javascript30.com","jschallenger.com","https://www.jschallenger.com","Build an interactive quiz app — vanilla JS, no libraries"],
  ]},
]},
{name:"Browser & DOM",c:"#1D9E75",bg:"#1D9E7518",sub:"DOM · Browser APIs · CSS Architecture",weeks:[
  {t:"Week 4 — DOM & events",d:[
    ["DOM manipulation","querySelector, createElement, insertAdjacentHTML, DocumentFragment","javascript.info DOM","https://javascript.info/document","MDN DOM","https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model","Build a dynamic TODO list — no libraries at all"],
    ["Events deep dive","Bubbling, capturing, delegation, custom events, AbortController","javascript.info Events","https://javascript.info/events","MDN Events","https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events","Build a drag-and-drop sortable list using native browser events"],
    ["Fetch API & REST","Fetch, Headers, CORS, JSON, async patterns, abort signals","MDN Fetch","https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API","javascript.info Network","https://javascript.info/network","Build a GitHub profile viewer using the GitHub REST API"],
    ["Storage & offline","localStorage, sessionStorage, IndexedDB, Cache API, cookies","MDN Storage","https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API","javascript.info Storage","https://javascript.info/data-storage","Build a note-taking app with full offline persistence"],
    ["Performance APIs","IntersectionObserver, ResizeObserver, requestAnimationFrame, debounce","MDN IntersectionObserver","https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver","web.dev Performance","https://web.dev/performance/","Build an infinite-scroll gallery using IntersectionObserver"],
    ["Web Workers & PWA","Worker threads, Service Workers, Workbox, background sync","MDN Workers","https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API","web.dev PWA","https://web.dev/learn/pwa/","Add a service worker + manifest to make an app installable"],
    ["Browser project day","Combine APIs into one app","whatwebcando.today","https://whatwebcando.today","web.dev","https://web.dev","Build a PWA weather app: geolocation + service worker + offline cache"],
  ]},
  {t:"Week 5 — CSS architecture",d:[
    ["CSS architecture","BEM, CUBE CSS, ITCSS, utility-first vs component-first","getbem.com","https://getbem.com","CUBE CSS","https://cube.fyi","Refactor a messy stylesheet into a clean BEM architecture"],
    ["Sass / SCSS","Variables, nesting, mixins, functions, @each/@for, partials, maps","Sass docs","https://sass-lang.com/guide/","Sass Guidelines","https://sass-guidelin.es","Build a design system with Sass variables, mixins, and partials"],
    ["Tailwind CSS mastery","JIT, plugins, arbitrary values, @apply, responsive, dark mode","Tailwind docs","https://tailwindcss.com/docs","Tailwind Labs YT","https://www.youtube.com/@tailwindlabs","Rebuild a component previously written in CSS using Tailwind"],
    ["Advanced animations","Scroll-driven animations, View Transitions API, GSAP fundamentals","MDN Scroll animations","https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline","GSAP docs","https://gsap.com/docs/v3/","Build a scroll-driven storytelling page with animated reveals"],
    ["Dark mode & theming","CSS custom property system, prefers-color-scheme, theme toggle","web.dev color-scheme","https://web.dev/articles/color-scheme","MDN color-scheme","https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme","Add dark/light/system theme switching to any existing app"],
    ["Design tokens","Token architecture, spacing scale, type scale, component variants","Design Tokens","https://www.designtokens.org","Storybook","https://storybook.js.org","Build a mini design token system powering 5 core components"],
    ["CSS project day","Production-quality CSS","Frontend Mentor","https://www.frontendmentor.io","Awwwards","https://www.awwwards.com","Complete an Advanced-level Frontend Mentor challenge"],
  ]},
  {t:"Week 6 — JavaScript deep",d:[
    ["The event loop","Call stack, microtasks, macrotasks, task queue, queueMicrotask","What is the event loop?","https://www.youtube.com/watch?v=8aGhZQkoFbQ","javascript.info Event Loop","https://javascript.info/event-loop","Predict execution order of 10 async puzzles — then verify each"],
    ["Generators & iterators","Symbol.iterator, custom iterables, generators, yield, async generators","javascript.info Generators","https://javascript.info/generators","MDN Generators","https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator","Build a lazy data pipeline using generators"],
    ["Proxy & Reflect","Proxy traps, Reflect API, WeakMap, WeakSet, reactive patterns","javascript.info Proxy","https://javascript.info/proxy","MDN Proxy","https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy","Build a Vue-style reactive state system using Proxy"],
    ["Design patterns","Module, factory, observer, strategy, decorator, command","patterns.dev","https://www.patterns.dev","Refactoring Guru JS","https://refactoring.guru/design-patterns/javascript","Implement 5 patterns with real, practical use-case examples"],
    ["Regular expressions","Groups, lookaheads, backreferences, flags, common patterns","regex101","https://regex101.com","javascript.info Regexp","https://javascript.info/regular-expressions","Build a form validator using regex (email, phone, URL, password)"],
    ["Testing fundamentals","Vitest/Jest, describe/it/expect, mocking, spies, coverage","Vitest docs","https://vitest.dev","Kent C. Dodds blog","https://kentcdodds.com/blog","Write tests for your quiz app, targeting 80%+ coverage"],
    ["JS mastery project","Build something advanced","exercism.io","https://exercism.org/tracks/javascript","Codewars","https://www.codewars.com","Build a utility library with 10 functions — fully tested"],
  ]},
]},
{name:"React & Frameworks",c:"#378ADD",bg:"#378ADD18",sub:"React · Next.js · TypeScript · Testing",weeks:[
  {t:"Week 7 — React core",d:[
    ["React mental model","JSX, components, reconciliation, virtual DOM, props, purity","react.dev","https://react.dev","Full Stack Open","https://fullstackopen.com","Build 5 reusable components with clean prop interfaces"],
    ["State & events","useState, controlled inputs, lifting state, synthetic events","react.dev State","https://react.dev/learn/state-a-components-memory","Full Stack Open Part 1","https://fullstackopen.com/en/part1","Build a shopping cart with add/remove/quantity controls"],
    ["useEffect","Side effects, deps array, cleanup, data fetching, timing pitfalls","react.dev useEffect","https://react.dev/learn/synchronizing-with-effects","Overreacted blog","https://overreacted.io/a-complete-guide-to-useeffect/","Fetch live data with proper loading, error, and empty states"],
    ["Refs & perf hooks","useRef, useMemo, useCallback, React.memo, key prop importance","react.dev useMemo","https://react.dev/reference/react/useMemo","react.dev Rendering","https://react.dev/learn/render-and-commit","Optimize a slow list render using memoization techniques"],
    ["Context API","createContext, useContext, context patterns, when not to use it","react.dev Context","https://react.dev/learn/passing-data-deeply-with-context","react.dev State mgmt","https://react.dev/learn/managing-state","Build a theme + auth context system for a multi-page app"],
    ["Custom hooks","Extracting logic, useLocalStorage, useFetch, useDebounce","usehooks.com","https://usehooks.com","react.dev Custom Hooks","https://react.dev/learn/reusing-logic-with-custom-hooks","Build 5 production-ready custom hooks with tests"],
    ["React project day","Multi-feature app","react.dev Tutorial","https://react.dev/learn/tutorial-tic-tac-toe","Full Stack Open","https://fullstackopen.com","Build a markdown editor with live preview + word count"],
  ]},
  {t:"Week 8 — React advanced",d:[
    ["React Router v6","Routes, nested routes, loaders, actions, useNavigate, params","React Router docs","https://reactrouter.com/en/main","Web Dev Simplified","https://www.youtube.com/@WebDevSimplified","Build a multi-page app with protected + nested routes"],
    ["Forms with RHF + Zod","React Hook Form, Zod schema validation, field arrays, errors","React Hook Form","https://react-hook-form.com","Zod docs","https://zod.dev","Build a complex multi-step registration form with Zod"],
    ["TanStack Query","useQuery, useMutation, caching, invalidation, optimistic updates","TanStack Query","https://tanstack.com/query/latest","TkDodo blog","https://tkdodo.eu/blog/practical-react-query","Replace all fetch/useEffect combos in a real app with TanStack Query"],
    ["Zustand","Store creation, slices, middleware, devtools, immer integration","Zustand docs","https://zustand-demo.pmnd.rs","pmnd.rs","https://pmnd.rs","Migrate a Context-heavy app to Zustand"],
    ["Advanced component patterns","Compound components, render props, HOC, headless UI patterns","patterns.dev React","https://www.patterns.dev/react","kentcdodds.com","https://kentcdodds.com/blog","Build an accessible headless dropdown component from scratch"],
    ["Suspense & lazy loading","React.lazy, Suspense, Error Boundaries, code splitting by route","react.dev Suspense","https://react.dev/reference/react/Suspense","react.dev lazy","https://react.dev/reference/react/lazy","Add code splitting + Suspense to a large React app"],
    ["React performance project","Profiler, bundle analysis, re-render prevention","react.dev Performance","https://react.dev/learn","web.dev React","https://web.dev/articles/react","Take a React app from Lighthouse 50 to 90+"],
  ]},
  {t:"Week 9 — Next.js",d:[
    ["App Router","File-based routing, layouts, loading.tsx, error.tsx, metadata","Next.js docs","https://nextjs.org/docs","Next.js Learn","https://nextjs.org/learn","Build a blog with nested layouts + loading states"],
    ["Rendering strategies","SSR, SSG, ISR, PPR — when to use each, real trade-offs","Next.js Rendering","https://nextjs.org/docs/app/building-your-application/rendering","Vercel blog","https://vercel.com/blog","Build a page demonstrating all four rendering modes"],
    ["Server Components","RSC vs Client Components, 'use client', data fetching patterns","Josh Comeau RSC","https://www.joshwcomeau.com/react/server-components/","react.dev RSC","https://react.dev/blog","Rewrite a client-heavy page using Server Components"],
    ["Route handlers & middleware","API routes, Edge middleware, headers, cookies, redirects","Next.js API Routes","https://nextjs.org/docs/app/building-your-application/routing/route-handlers","Next.js Middleware","https://nextjs.org/docs/app/building-your-application/routing/middleware","Build a rate-limited, JWT-authenticated API route"],
    ["Optimization","next/image, next/font, metadata API, OG image generation","Next.js Optimization","https://nextjs.org/docs/app/building-your-application/optimizing","Vercel OG","https://vercel.com/docs/functions/og-image-generation","Optimize a Next.js site to a perfect 100 Lighthouse score"],
    ["Auth in Next.js","Auth.js, sessions, JWT, OAuth providers, middleware protection","Auth.js docs","https://authjs.dev","Next.js Auth guide","https://nextjs.org/docs/app/building-your-application/authentication","Add GitHub OAuth + email/password auth to a Next.js app"],
    ["Deploy to Vercel","CLI, env vars, custom domains, CI/CD via GitHub, Analytics","Vercel docs","https://vercel.com/docs","Vercel Learn","https://vercel.com/learn","Deploy your Next.js app with full GitHub CI/CD pipeline"],
  ]},
  {t:"Week 10 — TypeScript",d:[
    ["TS fundamentals","Types, interfaces, union/intersection, type guards, generics","TS Handbook","https://www.typescriptlang.org/docs/handbook/2/basic-types.html","Total TypeScript (free)","https://www.totaltypescript.com/tutorials","Convert a full JavaScript project to TypeScript"],
    ["Advanced types","Utility types, mapped types, conditional types, template literals","TS Utility Types","https://www.typescriptlang.org/docs/handbook/utility-types.html","type-challenges","https://github.com/type-challenges/type-challenges","Solve 10 type-challenges (easy and medium level)"],
    ["TypeScript with React","Typing components, hooks, events, forwardRef, generic components","React TS Cheatsheet","https://react-typescript-cheatsheet.netlify.app","Total TS React","https://www.totaltypescript.com/tutorials/react-with-typescript","Type a full component library with prop inference"],
    ["Zod & runtime validation","Zod schemas, type inference, safeParse, error formatting","Zod docs","https://zod.dev","tRPC docs","https://trpc.io/docs","Add Zod validation to all API inputs in a project"],
    ["Advanced TS patterns","Discriminated unions, branded types, satisfies, infer keyword","Total TypeScript","https://www.totaltypescript.com","type-challenges hard","https://github.com/type-challenges/type-challenges","Solve 5 hard type-challenges"],
    ["TS project migration","tsconfig, strict mode, incremental migration, declaration files","TS Migration Guide","https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html","TypeScript Deep Dive","https://basarat.gitbook.io/typescript/","Migrate a complete project from JS to strict TypeScript"],
    ["Full TS project day","End-to-end typed app","Create T3 App","https://create.t3.gg","TS docs","https://www.typescriptlang.org","Build a typed React app with Zod forms and inferred API types"],
  ]},
  {t:"Week 11 — Testing & quality",d:[
    ["Vitest & unit testing","Test structure, assertions, mocking, spies, coverage config","Vitest docs","https://vitest.dev","Jest docs","https://jestjs.io/docs/getting-started","Write unit tests for a utility module — target 100% coverage"],
    ["React Testing Library","render, userEvent, queries, async testing, a11y queries","RTL docs","https://testing-library.com/docs/react-testing-library/intro/","Kent C. Dodds RTL","https://kentcdodds.com/blog/common-mistakes-with-react-testing-library","Test a full React component including user interactions"],
    ["E2E with Playwright","Locators, page actions, assertions, fixtures, screenshots","Playwright docs","https://playwright.dev","Playwright tutorial","https://playwright.dev/docs/intro","Write E2E tests for a login + protected dashboard flow"],
    ["MSW & API mocking","Mock Service Worker, handlers, fixtures, testing async flows","MSW docs","https://mswjs.io","Testing Trophy","https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications","Set up MSW to mock all API calls in a full test suite"],
    ["Code quality tooling","ESLint, Prettier, Husky, lint-staged, commitlint setup","ESLint docs","https://eslint.org/docs/latest/","Husky docs","https://typicode.github.io/husky/","Set up a complete quality pipeline with pre-commit hooks"],
    ["CI with GitHub Actions","Test workflow, parallel jobs, coverage reports, PR checks","GitHub Actions","https://docs.github.com/en/actions","Codecov free","https://codecov.io","Automate your test suite to run on every push via CI"],
    ["Testing project day","Full test suite","Real World App","https://github.com/gothinkster/realworld","Vitest","https://vitest.dev","Write a complete test suite for your task manager app"],
  ]},
]},
{name:"Backend & Databases",c:"#BA7517",bg:"#BA751718",sub:"Node.js · SQL · MongoDB · Auth · APIs",weeks:[
  {t:"Week 12 — Node.js core",d:[
    ["Node.js internals","Event loop in Node, libuv, process, cluster, worker threads","Node.js docs","https://nodejs.org/en/docs","Node Best Practices","https://github.com/goldbergyoni/nodebestpractices","Build a CPU-bound task offloaded to a worker thread"],
    ["File system & streams","fs, path, streams, pipe, Transform, readline, large file handling","Node.js streams","https://nodejs.org/api/stream.html","Stream Handbook","https://github.com/substack/stream-handbook","Build a CSV parser using Node.js streams — no external libs"],
    ["HTTP from scratch","http module, request/response cycle, status codes, routing","Node.js HTTP","https://nodejs.org/api/http.html","MDN HTTP","https://developer.mozilla.org/en-US/docs/Web/HTTP","Build an HTTP server with routing using only the http module"],
    ["Express mastery","Router, middleware chain, error middleware, request parsing, helmet","Express docs","https://expressjs.com","Full Stack Open Part 3","https://fullstackopen.com/en/part3","Build a full CRUD REST API with Express + error handling"],
    ["REST API design","Resource naming, HTTP verbs, status codes, HATEOAS, versioning","REST API Tutorial","https://restapitutorial.com","Microsoft REST Guidelines","https://github.com/microsoft/api-guidelines","Design and document a blogging API in OpenAPI spec"],
    ["JWT authentication","JWT structure, bcrypt, refresh tokens, secure cookies, rotation","jwt.io","https://jwt.io","Full Stack Open Auth","https://fullstackopen.com/en/part4","Build a complete auth system: register, login, refresh, logout"],
    ["Backend project day","Complete REST API","Full Stack Open","https://fullstackopen.com","Odin Project Node","https://www.theodinproject.com/paths/full-stack-javascript","Build a blogging API: full CRUD + auth + comments + pagination"],
  ]},
  {t:"Week 13 — Databases",d:[
    ["SQL fundamentals","SELECT, WHERE, JOINs, GROUP BY, subqueries, transactions, ACID","SQLZoo","https://sqlzoo.net","PostgreSQL Tutorial","https://www.postgresqltutorial.com","Solve 20 progressive SQL exercises on SQLZoo"],
    ["PostgreSQL advanced","Indexes, EXPLAIN ANALYZE, CTEs, window functions, full-text search","PostgreSQL docs","https://www.postgresql.org/docs/","Use The Index Luke","https://use-the-index-luke.com","Optimize a slow query using EXPLAIN ANALYZE + proper indexes"],
    ["Prisma ORM","Schema, migrations, relations, nested writes, transactions","Prisma docs","https://www.prisma.io/docs","Prisma YouTube","https://www.youtube.com/@PrismaData","Build an e-commerce data model + seed script with Prisma"],
    ["MongoDB advanced","Aggregation pipeline, indexes, transactions, schema design patterns","MongoDB University","https://learn.mongodb.com","MongoDB docs","https://www.mongodb.com/docs/","Build a leaderboard system using MongoDB aggregation pipeline"],
    ["Redis","Strings, hashes, sorted sets, pub/sub, TTL, caching patterns","Redis docs","https://redis.io/docs","Redis University","https://university.redis.com","Add Redis caching with proper invalidation to an Express API"],
    ["Database design patterns","N+1 problem, normalization, connection pooling, multi-tenancy","Prisma Data Guide","https://www.prisma.io/dataguide","DB Design course","https://www.youtube.com/watch?v=ztHopE5Wnpc","Design a normalized schema for a multi-tenant SaaS app"],
    ["Database project day","Full data layer","Supabase docs","https://supabase.com/docs","PlanetScale docs","https://planetscale.com/docs","Build an API with PostgreSQL + Redis caching + Prisma ORM"],
  ]},
  {t:"Week 14 — API patterns",d:[
    ["GraphQL schema","Types, queries, mutations, subscriptions, schema design","GraphQL.org","https://graphql.org/learn/","How to GraphQL","https://www.howtographql.com","Design a GraphQL schema for a Twitter-like app"],
    ["Apollo Server","Resolvers, context, DataLoader, error handling, schema directives","Apollo docs","https://www.apollographql.com/docs/apollo-server","Apollo Studio free","https://studio.apollographql.com","Build the Twitter GraphQL API with DataLoader for N+1 prevention"],
    ["WebSockets","Socket.io, rooms, namespaces, broadcasting, reconnection logic","Socket.io docs","https://socket.io/docs/v4/","WebSocket MDN","https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API","Build a real-time chat room with rooms and user presence"],
    ["File uploads & media","Multer, multipart forms, Cloudinary free tier, presigned URLs","Multer docs","https://github.com/expressjs/multer","Cloudinary docs","https://cloudinary.com/documentation","Build a photo upload pipeline with image transformations"],
    ["Email & transactional APIs","Resend free tier, Nodemailer, HTML email, templates, queuing","Resend docs","https://resend.com/docs","Nodemailer","https://nodemailer.com","Build a transactional email system (welcome + password reset)"],
    ["Background jobs","BullMQ, queues, retries, cron scheduling, Redis-backed processing","BullMQ docs","https://docs.bullmq.io","BullMQ tutorial","https://www.youtube.com/watch?v=gCkP6SiLmXo","Process image resizing as an async background job"],
    ["API project day","Real-time + jobs combined","Node Best Practices","https://github.com/goldbergyoni/nodebestpractices","Full Stack Open","https://fullstackopen.com","Build a job board API with real-time notifications + email alerts"],
  ]},
  {t:"Week 15 — Security & auth",d:[
    ["OAuth 2.0 & OIDC","Auth code flow, PKCE, scopes, access tokens, refresh tokens","OAuth.net","https://oauth.net/2/","Auth0 docs","https://auth0.com/docs","Implement Google OAuth from scratch (no auth library)"],
    ["Auth.js (NextAuth)","Providers, callbacks, JWT vs database sessions, adapters","Auth.js docs","https://authjs.dev","Auth.js tutorial","https://youtu.be/w2h54xz6Ndw","Add GitHub + Google + email/password auth to a Next.js app"],
    ["RBAC & permissions","Role-based access, resource-level permissions, middleware guards","CASL docs","https://casl.js.org","RBAC patterns","https://www.youtube.com/watch?v=5GG-VUvruzE","Build an admin/user/moderator permission system"],
    ["OWASP Top 10","XSS, CSRF, SQL injection, SSRF, insecure deserialization, IDOR","OWASP Top 10","https://owasp.org/www-project-top-ten/","Web Security MDN","https://developer.mozilla.org/en-US/docs/Web/Security","Find and fix 5 vulnerabilities in a deliberately insecure app"],
    ["Hardening APIs","Rate limiting, input sanitization, helmet.js, CORS hardening","Helmet.js","https://helmetjs.github.io","express-rate-limit","https://github.com/express-rate-limit/express-rate-limit","Harden an Express API: rate limiting, validation, security headers"],
    ["HTTPS & CSP","TLS/SSL, Content Security Policy, HSTS, SameSite cookies","Scott Helme headers","https://scotthelme.co.uk","securityheaders.com","https://securityheaders.com","Get an A+ rating on securityheaders.com for a deployed site"],
    ["Security audit day","Full project security review","Snyk free","https://snyk.io","npm audit","https://docs.npmjs.com/cli/v10/commands/npm-audit","Complete a full security audit of your best project"],
  ]},
]},
{name:"DevOps & Architecture",c:"#D85A30",bg:"#D85A3018",sub:"Docker · CI/CD · System Design · Performance",weeks:[
  {t:"Week 16 — DevOps & deployment",d:[
    ["Git advanced","Rebase, cherry-pick, bisect, reflog, interactive staging, worktrees","Git Book","https://git-scm.com/book/en/v2","Oh Shit Git","https://ohshitgit.com","Practice rebase, use bisect to find a bug, clean up messy history"],
    ["GitHub Actions CI/CD","Workflows, jobs, matrices, caching, reusable workflows, secrets","GitHub Actions","https://docs.github.com/en/actions","Actions marketplace","https://github.com/marketplace?type=actions","Build a complete pipeline: lint → test → build → deploy"],
    ["Docker","Images, layers, Dockerfile, multi-stage builds, volumes, networks","Docker docs","https://docs.docker.com","Docker get started","https://docs.docker.com/get-started/","Dockerize a Node.js + PostgreSQL application"],
    ["Docker Compose","Services, depends_on, health checks, env files, production config","Docker Compose docs","https://docs.docker.com/compose/","Compose best practices","https://docs.docker.com/compose/production/","Run a full MERN stack locally using Docker Compose"],
    ["Nginx","Reverse proxy, SSL termination, gzip, load balancing, static files","Nginx guide","https://nginx.org/en/docs/beginners_guide.html","DigitalOcean Nginx","https://www.digitalocean.com/community/tutorials","Configure Nginx as reverse proxy with Let's Encrypt SSL"],
    ["VPS setup","Ubuntu, SSH hardening, ufw firewall, fail2ban, systemd services","DigitalOcean tutorials","https://www.digitalocean.com/community/tutorials","linuxcommand.org","http://linuxcommand.org","Set up a hardened Ubuntu VPS from scratch"],
    ["Full deployment day","Deploy end-to-end on a real server","Render free tier","https://render.com","Fly.io free","https://fly.io","Deploy a full-stack app with Docker + Nginx + SSL + CI/CD"],
  ]},
  {t:"Week 17 — System design",d:[
    ["Scalability basics","Vertical vs horizontal scaling, stateless services, 12-factor app","12factor.net","https://12factor.net","ByteByteGo YT","https://www.youtube.com/@ByteByteGo","Identify scalability bottlenecks in 3 different architectures"],
    ["Caching strategies","CDN, browser cache, server cache, Redis patterns, invalidation","ByteByteGo Caching","https://www.youtube.com/watch?v=dGAgxozNWFE","Cloudflare Learning","https://www.cloudflare.com/learning/","Implement a multi-layer caching strategy in an existing API"],
    ["Message queues","Pub/sub, Kafka concepts, BullMQ, event-driven architecture","System Design Primer","https://github.com/donnemartin/system-design-primer","ByteByteGo","https://www.youtube.com/@ByteByteGo","Design an event-driven notification system on paper"],
    ["Database scaling","Read replicas, sharding, partitioning, CQRS, event sourcing","System Design Primer","https://github.com/donnemartin/system-design-primer","Prisma Data Guide","https://www.prisma.io/dataguide","Design a DB scaling strategy for 1M daily active users"],
    ["Microservices","Service boundaries, API gateway, service discovery, inter-service comms","microservices.io","https://microservices.io","Sam Newman articles","https://samnewman.io","Break a monolith into 3 microservices with clear boundaries"],
    ["System design practice","Full walkthroughs: URL shortener, Twitter, Netflix, WhatsApp","System Design Primer","https://github.com/donnemartin/system-design-primer","Grokking (free)","https://www.designgurus.io/blog","Design a system from scratch in 45 minutes — record yourself"],
    ["Architecture project day","Full architecture planning for your capstone","Excalidraw","https://excalidraw.com","draw.io","https://app.diagrams.net","Design your capstone project architecture as a professional ADR"],
  ]},
  {t:"Week 18 — Performance & monitoring",d:[
    ["Core Web Vitals","LCP, CLS, INP — measuring, interpreting, and improving each","web.dev Vitals","https://web.dev/vitals/","PageSpeed Insights","https://pagespeed.web.dev","Improve a real site's Core Web Vitals from poor to good"],
    ["Bundle optimization","Code splitting, tree shaking, dynamic imports, bundle analysis","Bundlephobia","https://bundlephobia.com","webpack Bundle Analyzer","https://github.com/webpack-contrib/webpack-bundle-analyzer","Reduce a production bundle by 40%+ using code splitting"],
    ["Asset optimization","AVIF/WebP, lazy loading, font-display, font subsetting, CDN","web.dev Images","https://web.dev/learn/images/","Squoosh","https://squoosh.app","Optimize all assets on a page to under 500KB total"],
    ["Backend performance","N+1 queries, DataLoader, query profiling, connection pooling","Node.js Profiling","https://nodejs.org/en/docs/guides/simple-profiling","DataLoader","https://github.com/graphql/dataloader","Fix all N+1 queries in a GraphQL or REST API"],
    ["Error monitoring","Sentry, structured logging with Pino, alerting, error dashboards","Sentry docs","https://docs.sentry.io","Pino logger","https://getpino.io","Add Sentry + structured logging to a production app"],
    ["Observability","OpenTelemetry, traces, spans, uptime monitoring, alerting","OpenTelemetry docs","https://opentelemetry.io/docs/","Better Uptime free","https://betteruptime.com","Add distributed tracing to a multi-service application"],
    ["Performance project day","90+ Lighthouse on all 4 metrics","Lighthouse","https://developer.chrome.com/docs/lighthouse","WebPageTest","https://www.webpagetest.org","Get 90+ on Performance, Accessibility, Best Practices, SEO"],
  ]},
  {t:"Week 19 — Clean architecture",d:[
    ["SOLID & clean code","SOLID principles, DRY, YAGNI, separation of concerns, DI","Clean Code summary","https://gist.github.com/wojteklu/73c6914cc446146b8b533c0988cf8d29","Refactoring Guru","https://refactoring.guru/refactoring","Refactor a spaghetti codebase using clean architecture principles"],
    ["Design patterns in TS","Repository, service layer, factory, builder, observer in TypeScript","Refactoring Guru","https://refactoring.guru/design-patterns","patterns.dev","https://www.patterns.dev","Implement the repository pattern for a full data layer"],
    ["Monorepos","Turborepo, pnpm workspaces, shared packages, task caching","Turborepo docs","https://turbo.build/repo/docs","pnpm workspaces","https://pnpm.io/workspaces","Set up a monorepo with shared UI + utils + API packages"],
    ["Component libraries","Storybook, docs addon, a11y addon, interaction tests","Storybook docs","https://storybook.js.org/docs/react/get-started/introduction","Chromatic free","https://www.chromatic.com","Document 10 components in Storybook with stories + a11y checks"],
    ["API documentation","OpenAPI/Swagger, Redoc, JSDoc, TSDoc, changelog conventions","Swagger editor","https://editor.swagger.io","Redocly free","https://redocly.com","Document a full API with OpenAPI spec + Redoc UI"],
    ["Open source workflow","PRs, issues, code review etiquette, conventional commits","First Contributions","https://firstcontributions.github.io","Open Source Guide","https://opensource.guide/how-to-contribute/","Submit a meaningful PR to a real open-source project"],
    ["Architecture review day","Audit your best project top to bottom","Martin Fowler","https://martinfowler.com/architecture/","roadmap.sh Architect","https://roadmap.sh/software-architect","Write a professional Architecture Decision Record for your best project"],
  ]},
]},
{name:"Mastery Projects",c:"#639922",bg:"#63992218",sub:"SaaS · Real-time · Portfolio · Job-ready",weeks:[
  {t:"Week 20 — Capstone: SaaS app",d:[
    ["SaaS planning","Scope, data model, auth, billing, dashboard, API design","Indie Hackers","https://www.indiehackers.com","SaaSDesign.io","https://saasdesign.io","Write complete spec: features, schema, wireframes, routes"],
    ["Multi-tenant auth","Clerk or Auth.js, org model, team invitations, role system","Clerk docs","https://clerk.com/docs","Auth.js","https://authjs.dev","Build full auth + team invitations + organization-level roles"],
    ["SaaS dashboard","Server Components, charts, activity feed, filters, pagination","Tremor UI free","https://www.tremor.so","shadcn/ui","https://ui.shadcn.com","Build a complete admin dashboard with real data"],
    ["Stripe billing","Products, prices, webhooks, customer portal, subscription lifecycle","Stripe docs","https://stripe.com/docs","Stripe webhooks","https://stripe.com/docs/webhooks","Integrate Stripe subscriptions + webhook handling in test mode"],
    ["Public API & docs","API keys, rate limiting, OpenAPI spec, developer documentation","Swagger UI","https://swagger.io/tools/swagger-ui/","Redocly","https://redocly.com","Build and fully document a versioned public API"],
    ["Full test suite + CI","80%+ coverage, E2E tests, staging env, GitHub Actions pipeline","Playwright","https://playwright.dev","GitHub Actions","https://docs.github.com/en/actions","Achieve 80%+ test coverage with a full CI pipeline"],
    ["SaaS production deploy","Vercel + DB + Sentry + analytics + uptime monitoring","Vercel","https://vercel.com","Sentry","https://sentry.io","Deploy to production with monitoring, analytics, and error tracking"],
  ]},
  {t:"Week 21 — Capstone: Real-time app",d:[
    ["Real-time planning","WebSocket architecture, state sync, conflict resolution strategy","Liveblocks docs","https://liveblocks.io/docs","Partykit docs","https://docs.partykit.io","Plan a collaborative whiteboard or live document editor"],
    ["WebSocket server","Socket.io rooms, broadcasting, presence system, reconnection","Socket.io docs","https://socket.io/docs/v4/","Socket.io tutorial","https://socket.io/docs/v4/tutorial/introduction","Build the full real-time server with presence indicators"],
    ["Optimistic UI","Optimistic updates, rollback on failure, offline queue pattern","TanStack Optimistic","https://tanstack.com/query/latest/docs/framework/react/guides/optimistic-updates","Replicache","https://doc.replicache.dev","Implement optimistic updates with automatic rollback"],
    ["CRDT & collaboration","Yjs, conflict-free editing, awareness API, undo manager","Yjs docs","https://docs.yjs.dev","CRDT explained","https://crdt.tech","Add multi-user conflict-free collaborative editing with Yjs"],
    ["Scaling WebSockets","Redis adapter, sticky sessions, horizontal pod scaling","Socket.io Redis Adapter","https://socket.io/docs/v4/redis-adapter/","Upstash free","https://upstash.com","Scale the app to handle 1000+ concurrent WebSocket connections"],
    ["Load testing","k6, Playwright stress tests, bottleneck identification, optimization","k6 docs","https://k6.io/docs/","Grafana k6 free","https://grafana.com/products/cloud/k6/","Load test until stable under 500 concurrent users"],
    ["Real-time deploy","Deploy with WebSocket support, CDN, monitoring","Railway free","https://railway.app","Fly.io free","https://fly.io","Deploy and share a live production-grade real-time app"],
  ]},
  {t:"Week 22 — Portfolio & brand",d:[
    ["Portfolio strategy","Target role research, case study writing, project selection","Josh Comeau Portfolio","https://www.joshwcomeau.com/effective-portfolio/","read.cv","https://read.cv","Write detailed case studies for your 3 best projects"],
    ["Portfolio design","Personal brand, typography, layout, uniqueness, performance","Awwwards Portfolios","https://www.awwwards.com/websites/portfolio/","Dribbble","https://dribbble.com","Design wireframes + color system + visual identity for your portfolio"],
    ["Portfolio build","Next.js, MDX blog, case studies, animations, 100 Lighthouse","Next.js MDX","https://nextjs.org/docs/app/building-your-application/configuring/mdx","Framer Motion","https://www.framer.com/motion/","Build and polish your portfolio site to production quality"],
    ["GitHub presence","Profile README, pinned repos, READMEs, contribution graph","GitHub Profile READMEs","https://github.com/abhisheknaiidu/awesome-github-profile-readme","Markdown guide","https://www.markdownguide.org","Polish all repos: READMEs, demos, screenshots, license files"],
    ["Open source contribution","Find a real issue, write quality code, get a PR merged","goodfirstissue.dev","https://goodfirstissue.dev","up-for-grabs.net","https://up-for-grabs.net","Merge a meaningful contribution to an established OSS project"],
    ["Technical writing","Write a deep-dive post explaining something complex you've learned","Dev.to free","https://dev.to","Hashnode free","https://hashnode.com","Publish a 1500-word technical blog post on Dev.to or Hashnode"],
    ["Resume & LinkedIn","ATS optimization, quantify impact, strong headline, featured work","Teal resume builder","https://www.tealhq.com","Resume Worded free","https://resumeworded.com","Update resume + LinkedIn using your portfolio as evidence"],
  ]},
  {t:"Week 23 — Job ready",d:[
    ["Mock technical screen","Live coding: LeetCode patterns, thinking out loud, communication","LeetCode free","https://leetcode.com","NeetCode roadmap","https://neetcode.io/roadmap","Do 2 timed mock interviews on Pramp.com or with a peer"],
    ["System design interview","YouTube, Uber, URL shortener, Twitter feed — full walkthroughs","System Design Primer","https://github.com/donnemartin/system-design-primer","ByteByteGo","https://www.youtube.com/@ByteByteGo","Record a 45-min system design walkthrough, review it critically"],
    ["Behavioral interview","STAR method, storytelling with your projects, questions to ask","Tech Interview Handbook","https://www.techinterviewhandbook.org/behavioral-interview/","Levels.fyi","https://www.levels.fyi","Prepare 10 STAR stories mapped to your strongest projects"],
    ["Specialization deep dive","AI/LLM integration, React Native, WebGL, or Edge — pick one","Next.js AI SDK","https://sdk.vercel.ai","React Native docs","https://reactnative.dev/docs/getting-started","Build a polished demo in your chosen specialization"],
    ["Advanced performance","HTTP/3, Brotli, edge rendering, partial hydration, speculation rules","web.dev Advanced Performance","https://web.dev/explore/performance","Vercel Edge","https://vercel.com/docs/functions/edge-functions","Implement edge rendering for a latency-critical page"],
    ["Final deploy & review","All projects live, all links working, portfolio completely polished","Vercel","https://vercel.com","Netlify","https://www.netlify.com","Every project deployed, documented, and linked from portfolio"],
    ["Day 163 — reflect & plan","Review the full journey, identify gaps, set your next 90-day goals","roadmap.sh","https://roadmap.sh","Developer Roadmap","https://github.com/kamranahmedse/developer-roadmap","Write a 'state of my skills' doc + your next milestone plan"],
  ]},
]},
];

const TOTAL=163;
const STORE_KEY='wdm_163_progress';
const STREAK_KEY='wdm_163_streak';

function loadState(){
  try{
    const s=localStorage.getItem(STORE_KEY);
    return s?new Set(JSON.parse(s)):new Set();
  }catch{return new Set()}
}
function saveState(done){
  try{localStorage.setItem(STORE_KEY,JSON.stringify([...done]))}catch{}
}
function loadStreak(){
  try{
    const s=localStorage.getItem(STREAK_KEY);
    return s?JSON.parse(s):{last:null,count:0};
  }catch{return{last:null,count:0}}
}
function updateStreak(){
  const today=new Date().toISOString().slice(0,10);
  const st=loadStreak();
  if(st.last===today)return st.count;
  const yesterday=new Date(Date.now()-86400000).toISOString().slice(0,10);
  const count=st.last===yesterday?st.count+1:1;
  try{localStorage.setItem(STREAK_KEY,JSON.stringify({last:today,count}))}catch{}
  return count;
}

let curPhase=0;
let openWeeks=new Set();
let done=loadState();

function dayKey(pi,wi,di){return`${pi}-${wi}-${di}`}
function dayNum(pi,wi,di){
  let n=1;
  for(let i=0;i<pi;i++)for(let w of PH[i].weeks)n+=w.d.length;
  for(let i=0;i<wi;i++)n+=PH[pi].weeks[i].d.length;
  return n+di;
}
function phaseDone(pi){
  let c=0;
  PH[pi].weeks.forEach((w,wi)=>w.d.forEach((_,di)=>{if(done.has(dayKey(pi,wi,di)))c++}));
  return c;
}
function phaseTotal(pi){return PH[pi].weeks.reduce((a,w)=>a+w.d.length,0)}

function renderHeader(){
  const tot=done.size;
  const pct=Math.round(tot/TOTAL*100);
  const streak=loadStreak().count;
  document.getElementById('h-done').textContent=tot+'/'+TOTAL;
  document.getElementById('h-pct').textContent=pct+'%';
  document.getElementById('h-streak').textContent=streak+' 🔥';
  // mini bar
  const md=document.getElementById('hm-done');if(md)md.textContent=tot;
  const mp=document.getElementById('hm-pct');if(mp)mp.textContent=pct+'%';
  const ms=document.getElementById('hm-streak');if(ms)ms.textContent=streak;
  // tiny bar data attr for <380
  const hi=document.querySelector('.hdr-inner');if(hi)hi.setAttribute('data-pct',pct+'%');
  // segmented progress bar
  const segs=document.getElementById('pbar-segs');
  segs.innerHTML=PH.map((p,pi)=>{
    const phTot=phaseTotal(pi);
    const phDn=phaseDone(pi);
    const segW=phTot/TOTAL*100;
    const fillW=phDn/phTot*100;
    return`<div style="width:${segW}%;background:var(--bd);position:relative">
      <div style="height:100%;width:${fillW}%;background:${p.c};transition:width .5s"></div>
    </div>`;
  }).join('');
}

function renderSidebar(){
  const sb=document.getElementById('sidebar');
  sb.innerHTML=`<div class="sb-lbl">Phases</div>`+
    PH.map((p,pi)=>{
      const tot=phaseTotal(pi);
      const dn=phaseDone(pi);
      const pct=Math.round(dn/tot*100);
      return`<button class="sb-ph${pi===curPhase?' act':''}" style="--ph-c:${p.c}" onclick="switchPhase(${pi})">
        <div class="sb-ph-top"><div class="sb-dot"></div><span class="sb-ph-name">${p.name}</span></div>
        <div class="sb-ph-sub">${p.sub}</div>
        <div class="sb-ph-bar"><div class="sb-ph-fill" style="width:${pct}%;background:${p.c}"></div></div>
        <div class="sb-ph-pct">${dn}/${tot} days · ${pct}%</div>
      </button>`;
    }).join('')+
    `<div class="sb-divider"></div>
    <div class="sb-footer">
      <p>Progress auto-saved in your browser.<br>Resources are 100% free.</p>
    </div>`;
}

function renderPhaseTabs(){
  const tabs=document.getElementById('ph-tabs');
  tabs.innerHTML=PH.map((p,pi)=>
    `<button class="ph-tab${pi===curPhase?' act':''}" style="--ph-c:${p.c}" onclick="switchPhase(${pi})">${p.name}</button>`
  ).join('');
}

function renderPhase(){
  const p=PH[curPhase];
  const tot=phaseTotal(curPhase);
  const dn=phaseDone(curPhase);
  const pct=Math.round(dn/tot*100);
  let html=`<div class="ph-header">
    <div class="ph-num" style="color:${p.c}">Phase ${curPhase+1} of ${PH.length}</div>
    <div class="ph-title">${p.name}</div>
    <div class="ph-sub">${p.sub} · Days ${dayNum(curPhase,0,0)}–${dayNum(curPhase,p.weeks.length-1,p.weeks[p.weeks.length-1].d.length-1)}</div>
    <div class="ph-prog">
      <div class="ph-prog-track"><div class="ph-prog-fill" style="width:${pct}%;background:${p.c}"></div></div>
      <div class="ph-prog-pct" style="color:${p.c}">${pct}%</div>
    </div>
  </div>`;
  html+=p.weeks.map((w,wi)=>{
    const wk=`${curPhase}-${wi}`;
    const isOpen=openWeeks.has(wk);
    const wDn=w.d.filter((_,di)=>done.has(dayKey(curPhase,wi,di))).length;
    html+=`<div class="wk${isOpen?' open':''}" id="wk-${wk}">
      <div class="wk-hdr" onclick="toggleWeek('${wk}')">
        <span class="wk-title">${w.t}</span>
        <div class="wk-right">
          <span class="wk-cnt">${wDn}/${w.d.length}</span>
          <span class="wk-chev">▼</span>
        </div>
      </div>
      <div class="wk-body">
        ${w.d.map((d,di)=>{
          const key=dayKey(curPhase,wi,di);
          const isDone=done.has(key);
          const dn=dayNum(curPhase,wi,di);
          const[topic,concepts,r1n,r1u,r2n,r2u,project]=d;
          return`<div class="dc${isDone?' dn':''}" id="dc-${key}">
            <div class="dc-top">
              <div class="dc-check${isDone?' on':''}" style="--ph-c:${p.c}" onclick="toggleDay('${key}')"></div>
              <div class="dc-meta">
                <span class="dc-num" style="--ph-c:${p.c};--ph-bg:${p.bg}">Day ${dn}</span>
                <div class="dc-topic">${topic}</div>
              </div>
            </div>
            <div class="dc-concepts">${concepts}</div>
            <div class="dc-links">
              <a href="${r1u}" target="_blank" class="dc-link">${r1n} ↗</a>
              ${r2n?`<a href="${r2u}" target="_blank" class="dc-link">${r2n} ↗</a>`:''}
            </div>
            <div class="dc-project"><b>Build: </b>${project}</div>
          </div>`;
        }).join('')}
      </div>
    </div>`;
    return '';
  });
  document.getElementById('phase-content').innerHTML=html;
  // re-render phase content properly
  let c='';
  c+=`<div class="ph-header">
    <div class="ph-num" style="color:${p.c}">Phase ${curPhase+1} of ${PH.length}</div>
    <div class="ph-title">${p.name}</div>
    <div class="ph-sub">${p.sub} · Days ${dayNum(curPhase,0,0)}–${dayNum(curPhase,p.weeks.length-1,p.weeks[p.weeks.length-1].d.length-1)}</div>
    <div class="ph-prog">
      <div class="ph-prog-track"><div class="ph-prog-fill" style="width:${pct}%;background:${p.c}"></div></div>
      <div class="ph-prog-pct" style="color:${p.c}">${pct}%</div>
    </div>
  </div>`;
  p.weeks.forEach((w,wi)=>{
    const wk=`${curPhase}-${wi}`;
    const isOpen=openWeeks.has(wk);
    const wDn=w.d.filter((_,di)=>done.has(dayKey(curPhase,wi,di))).length;
    c+=`<div class="wk${isOpen?' open':''}" id="wk-${wk}">
      <div class="wk-hdr" onclick="toggleWeek('${wk}')">
        <span class="wk-title">${w.t}</span>
        <div class="wk-right">
          <span class="wk-cnt">${wDn}/${w.d.length}</span>
          <span class="wk-chev">▼</span>
        </div>
      </div>
      <div class="wk-body">
        ${w.d.map((d,di)=>{
          const key=dayKey(curPhase,wi,di);
          const isDone=done.has(key);
          const dn2=dayNum(curPhase,wi,di);
          const[topic,concepts,r1n,r1u,r2n,r2u,project]=d;
          return`<div class="dc${isDone?' dn':''}" id="dc-${key}">
            <div class="dc-top">
              <div class="dc-check${isDone?' on':''}" style="--ph-c:${p.c}" onclick="toggleDay('${key}')"></div>
              <div class="dc-meta">
                <span class="dc-num" style="--ph-c:${p.c};--ph-bg:${p.bg}">Day ${dn2}</span>
                <div class="dc-topic">${topic}</div>
              </div>
            </div>
            <div class="dc-concepts">${concepts}</div>
            <div class="dc-links">
              <a href="${r1u}" target="_blank" class="dc-link">${r1n} ↗</a>
              ${r2n?`<a href="${r2u}" target="_blank" class="dc-link">${r2n} ↗</a>`:''}
            </div>
            <div class="dc-project"><b>Build: </b>${project}</div>
          </div>`;
        }).join('')}
      </div>
    </div>`;
  });
  document.getElementById('phase-content').innerHTML=c;
}

function switchPhase(pi){
  curPhase=pi;
  openWeeks=new Set();
  renderSidebar();
  renderPhaseTabs();
  renderPhase();
  window.scrollTo({top:0,behavior:'smooth'});
}

function toggleWeek(wk){
  if(openWeeks.has(wk))openWeeks.delete(wk);
  else openWeeks.add(wk);
  const el=document.getElementById('wk-'+wk);
  if(!el)return;
  el.classList.toggle('open',openWeeks.has(wk));
  // update count
  const[pi,wi]=wk.split('-').map(Number);
  const wDn=PH[pi].weeks[wi].d.filter((_,di)=>done.has(dayKey(pi,wi,di))).length;
  el.querySelector('.wk-cnt').textContent=`${wDn}/${PH[pi].weeks[wi].d.length}`;
}

function toggleDay(key){
  if(done.has(key))done.delete(key);
  else{done.add(key);updateStreak();}
  saveState(done);
  // update card
  const card=document.getElementById('dc-'+key);
  if(card){
    card.classList.toggle('dn',done.has(key));
    const chk=card.querySelector('.dc-check');
    chk.classList.toggle('on',done.has(key));
  }
  // update week count
  const[pi,wi]=key.split('-').map(Number);
  const wk=`${pi}-${wi}`;
  const wkEl=document.getElementById('wk-'+wk);
  if(wkEl){
    const wDn=PH[pi].weeks[wi].d.filter((_,di)=>done.has(dayKey(pi,wi,di))).length;
    wkEl.querySelector('.wk-cnt').textContent=`${wDn}/${PH[pi].weeks[wi].d.length}`;
  }
  // update phase progress
  const phTot=phaseTotal(pi);
  const phDn=phaseDone(pi);
  const phPct=Math.round(phDn/phTot*100);
  const fillEl=document.querySelector('.ph-prog-fill');
  const pctEl=document.querySelector('.ph-prog-pct');
  if(fillEl)fillEl.style.width=phPct+'%';
  if(pctEl)pctEl.textContent=phPct+'%';
  renderHeader();
  renderSidebar();
}

// init
renderHeader();
renderSidebar();
renderPhaseTabs();
renderPhase();
// open first week by default
const firstWk=`${curPhase}-0`;
openWeeks.add(firstWk);
renderPhase();