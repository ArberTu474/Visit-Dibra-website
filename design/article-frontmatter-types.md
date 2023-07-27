# Article Front-matter Types

### A complete article head (front-matter)

```
---
layout: '../../layouts/ArticleLayout.astro'
title: 'Apples'
description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis quasi molestiae laudantium repellendus temporibus id'
img_src: '/foods/apples.jpg'
img_alt: 'apples'
date: '05/06/2023'
summary: ['Dibra Apples', 'Conclusion', 'Different types of apples in Dibra']
tags: ['culture', 'trail', 'food']
---

```

### Types

| Property      | Type             | Description                                                               | Max Length | Is Required |
| ------------- | ---------------- | ------------------------------------------------------------------------- | :--------: | :---------: |
| `layout`      | string           | Relative path to the layout of the article                                |     〰️     |     ✅      |
| `title`       | string           | Title of the article                                                      |   55-60    |     ✅      |
| `description` | string           | Description of the article                                                |  160-165   |     ✅      |
| `img_src`     | string           | Relative path to the image                                                |     〰️     |     ✅      |
| `img_alt`     | sting            | Describes the image                                                       |    125     |     ✅      |
| `date`        | string           | Date when the article was written                                         |     〰️     |     ❌      |
| `summary`     | Array of strings | An array of the most important topics of the article                      |     〰️     |     ❌      |
| `tags`        | Array of strings | Organizes articles and improves SEO                                       |     〰️     |     ❌      |
| `draft`       | boolean          | If `true` the article will not be displayed. By default is set to `false` |     〰️     |     ❌      |
