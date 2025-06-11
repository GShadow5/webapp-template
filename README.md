# Template for quickly getting webapps off the ground

## Setup steps

0. Completed
    1. `bun create next-app webapp-template`
    2. `bun add -D prettier prettier-plugin-tailwindcss eslint-config-prettier`
    3. Add `.prettierrc` file 
    4. Add `.prettierignore` file
    5. Add prettier to `.eslintrc.json` file
    6. Add prettier scripts to `package.json` file
    7. Add shadcn with `bun x shadcn@latest init`
1. For a new project
    1. Add a database like convex
    2. Add authentication with convex auth, clerk, workos