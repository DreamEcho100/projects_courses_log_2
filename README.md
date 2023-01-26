# projects_courses_log_2

Don't forget to checkout
Environments / Configure github-pages -> Deployment branches

## Credits

<https://dev.to/shashannkbawa/deploying-vite-app-to-github-pages-3ane#comment-22iei>

> Or add: `base: "/<repo>/"`, to `vite.config.js`,
>
> `npm install gh-pages --save-dev`
>
> add to `package.json`
>
> ```js
>  "homepage": "https://<username>.github.io/<repo>/",
>   ...
>   "scripts": {
> ...
> "build": "vite build",
>     "predeploy": "npm run build",
>     "deploy": "gh-pages -d dist",
> ...
> ```
>
> and then run command npm run deploy to keep it simple.
