# Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── images/
│   │   └ dibra.jpg
│   └ hero_image.jpg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── articles/
│       │   └── Welcome to Diber.md
│       └── index.astro
└── package.json
```

## `public` folder

Here we can put our images and other assets.
Every thing that we put in here is going to be visible to the public.
we can access this files in the browser like this:

`website domain/images/dibra.jpg`

or

`website_domain/hero_image.jpg` _Note:_ You don't have to include the `.jpg` extension

> **Note:**
> In the future we probably will move our images to `/src/assets`, so they could be optimized.
> This change would require a new code rebase.

## `src` folder

This folder has a lot going on. First of all in the above diagram you can see 3 sub folders `components/`, `layouts/` and `pages/`.

- `components/` it contains reuseable code like NavBar, Footer, Card etc.
- `layouts/` it contains different files that describe the layout of different pages on our website
- `pages/` it holds all the pages of the website. The folder structure inside this folder determines the url of each page. For example I you want to access the `Welcome to Dibra.md` article you would have a url like this:

  `website_domain/articles/welcome-to-dibra`

  > _Note:_ You don't have to include the `.md` extension. In the url you don't have upper case letters and spaces are replaced by dashes `-`

  The `/pages` folder holds other important files like the `index.astro`(the main page of the website), the `404.astro` page that displays the 404 page

