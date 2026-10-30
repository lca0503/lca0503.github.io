# Chen-An Li’s personal website

A small, custom Jekyll website for research, publications, and academic background. Inspired by the academic organization of [al-folio](https://github.com/alshedivat/al-folio) and [Tzu-Han Lin’s site](https://github.com/hank0316/hank0316.github.io), with original layouts, styling, and JavaScript. No full theme, sample pages, or third-party frontend libraries are included.

## Edit content

| File | Purpose |
| --- | --- |
| `_config.yml` | Name, email, social profiles, and site URL |
| `index.html` | Introduction, research interests, and highlights |
| `_data/publications.json` | All publications; `selected: true` features a paper on the homepage |
| `background.html` | Education, research, teaching, and service |
| `assets/pdf/cv.pdf` | Downloadable CV |
| `assets/img/profile.jpeg` | Profile photograph |
| `assets/style.css` | Colors, typography, and responsive layout |

Publication titles without a verified paper URL remain readable text. Add `url` and optional `code` fields to link them. All papers are present in the generated HTML, including when JavaScript is disabled; JavaScript adds search, filters, and a saved color-theme preference.

## Preview locally

Use Ruby 3.3 or newer:

```sh
bundle install
bundle exec jekyll serve
```

Open the local address printed by Jekyll. Build with `bundle exec jekyll build`. Generated output lives in ignored `dist/`; dependencies and caches are also ignored.

## GitHub Pages

In the repository’s **Settings → Pages**, select **GitHub Actions** as the source. The included workflow builds and publishes the site when changes are pushed to `main`. The site URL is configured as `https://lca0503.github.io`.

`.openai/hosting.json` identifies the separate private Sites preview; it does not change the GitHub remote or GitHub Pages URL.

## Content notes

The profile and publication list are based on the supplied September 28, 2026 CV. Selected paper links and summaries were checked against the papers. The displayed email was confirmed as `f13942069@ntu.edu.tw`. The downloadable CV was replaced with the revised PDF supplied on October 30, 2026; its email link now matches the displayed address. The profile photo is the supplied `me.jpeg`, displayed with a CSS crop; the original is unchanged.
