### TS setting

- Node setting

1. npm init

2. npm install -D typescript ts-node @types/node

3. npx tsc --init

4. edit package.json
- "scripts": {
    "dev" : "nodemon index.ts --exec \"ts-node index.ts\"",
    "build": "npx tsc",
    "start": "node dist/index.js"
  },

5. start server
- npm run dev
- npm run build => npm run start