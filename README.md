# Template for quickly getting webapps off the ground

## Setup steps already completed

1. `bun create next-app webapp-template`
2. `bun add -D prettier prettier-plugin-tailwindcss eslint-config-prettier`
3. Add `.prettierrc` file 
4. Add `.prettierignore` file
5. Add prettier to `.eslintrc.json` file
6. Add prettier scripts to `package.json` file
7. Add shadcn with `bun x shadcn@latest init`


# Default Tech Stack

Below is a reference of my default tech stack for webapps.

## Core Technologies

*   **[TypeScript](https://www.typescriptlang.org/)**: A strongly typed superset of JavaScript used for all projects. Its primary benefit is catching errors during development, which improves overall code quality and maintainability.
*   **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for all styling. It enables rapid UI development by applying pre-existing classes directly within the HTML markup, removing the need for separate CSS files.

## Frontend

*   **[Next.js](https://nextjs.org/)**: The primary choice for front-end development. As a React framework, it provides powerful features out-of-the-box, such as server-side rendering (SSR) and static site generation (SSG), which are crucial for performance and SEO.
*   **[React](https://react.dev/)**: Used for projects that require self-hosting or a more lightweight setup without the opinionated structure of a full framework. It is a JavaScript library for building component-based user interfaces.

## Backend

*   **[Express.js](https://expressjs.com/)**: A minimal and flexible Node.js web application framework used for building custom JavaScript backends. Its unopinionated nature provides a blank canvas for creating tailored server-side logic.
*   **[Flask](https://flask.palletsprojects.com/)**: A lightweight and extensible web framework for Python. It is the preferred choice for building APIs for AI-powered applications or other Python-based backend services.

## UI Components

*   **[Shadcn UI](https://ui.shadcn.com/)**: A collection of beautifully designed and accessible components. Unlike traditional component libraries, these are not installed as a package. Instead, you copy and paste the code for individual components into your project, giving you full control over their implementation.

## Authentication

#### Small Projects / No SSO

*   **[Clerk](https://clerk.com/)**: A complete user management solution for projects that do not require Single Sign-On (SSO). It provides a comprehensive suite of embeddable UIs, APIs, and SDKs to handle authentication, user profiles, and more.
*   **[Convex Auth](https://docs.convex.dev/auth)**: The preferred authentication method when using Convex for the backend. It integrates seamlessly into the Convex ecosystem, simplifying the process of securing applications.

#### SSO Required

*   **[WorkOS](https://workos.com/)**: The go-to solution when enterprise-grade Single Sign-On (SSO) is a project requirement. It provides a modern API to quickly add SSO and other enterprise-ready features.

## Database

*   **[Convex](https://www.convex.dev/)**: The preferred database solution. Convex is a reactive, real-time database that simplifies backend development by managing data flow and state synchronization automatically, reducing the need for complex state management logic on the front end.
*   **[Prisma](https://www.prisma.io/)** with **PostgreSQL**: The choice for projects that require a traditional relational database. Prisma is a next-generation ORM that provides a type-safe database client and a declarative schema, making database interactions safer and more predictable.
*   **[PlanetScale](https://planetscale.com/)**: A MySQL-compatible, serverless database platform designed for massive scale. It is used for applications that anticipate or require extremely high levels of traffic and data, offering features like non-blocking schema changes.

## Deployment

*   **[Vercel](https://vercel.com/)**: Best for Next.js projects. It provides a platform for hosting and scaling applications, offering a wide range of features and integrations. All serverless, however.
*   **[Railway](https://railway.app/)**: A cloud platform for webapps and general containerized hosting. Good for a variety of things, and good free and base tiers.
*   **[Sevalla](https://sevalla.com/)**: Another good cloud host for general projects. More for frontend webapp hosting imo, but has lots of features. Unintuitive UI unfortunately.
*   **[Netlify](https://www.netlify.com/)**: Another good cloud host for general projects. Has really great auto branching features. Great for live testing and doing controlled rollouts with no downtime.
*   **[Cloudflare](https://workers.cloudflare.com/)**: Cloudflare workers are best in class for *some* workloads. Vercel serverless functions are best at other things. It's worth doing a deep dive to understand the difference, but cloudflare definitely deserves a spot on this list.

## DNS and Hostnames

*   **[Cloudflare](https://www.cloudflare.com/)**: The go-to DNS provider for everything. Don't bother using anything else.


## Payments
*   **[Polar](https://polar.sh/)**: For usage based billing
*   **[Stripe](stripe.com)**: For general stuff. Still need to find the best way to integrate it seemslessly. I think Theo has a video or a sponsor about this.

