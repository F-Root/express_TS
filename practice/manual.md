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



### gitignore setting

- auto setting
* https://www.toptal.com/developers/gitignore

- grammar setting
1. https://git-scm.com/docs/gitignore
2. https://inpa.tistory.com/entry/GIT-%E2%9A%A1%EF%B8%8F-gitignore-%EC%9E%90%EB%8F%99-%EC%83%9D%EC%84%B1
3. https://kyu9341.github.io/Git/2020/08/23/git_gitignore/
4. https://nochoco-lee.tistory.com/46
5. https://dololak.tistory.com/306