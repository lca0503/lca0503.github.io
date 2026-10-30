# Chen-An Li’s personal website

A personal academic website for Chen-An Li, built with Jekyll, HTML, CSS, and JavaScript.

## Edit content

| File | Purpose |
| --- | --- |
| `_config.yml` | Name, email, social profiles, and site URL |
| `index.html` | Introduction, research interests, news, and selected publications |
| `publications.html` | Complete publication list and search controls |
| `_data/publications.json` | All publications; `selected: true` features a paper on the homepage |
| `_layouts/default.html` | Shared page structure, navigation, and footer |
| `_includes/publication.html` | Shared publication entry used on both pages |
| `assets/pdf/cv.pdf` | Downloadable CV |
| `assets/img/profile.jpeg` | Profile photograph |
| `assets/style.css` | Colors, typography, and responsive layout |
| `assets/site.js` | Theme switch, publication search, and filters |

Publication titles without a verified paper URL remain readable text. Add `url` and optional `code` fields to link them. All papers are present in the generated HTML, including when JavaScript is disabled; JavaScript adds search, filters, and a saved color-theme preference.

## Writing style

- Use sentence case for headings, roles, and interface labels; omit final punctuation from headings.
- Preserve official capitalization in publication titles, author names, institutions, courses, and awards.
- Use “and” in site copy, while retaining symbols that belong to official names or titles.
- Use present tense for current research and past tense for completed experience and news. End descriptive sentences with a period.
- Use abbreviated months without periods and en dashes for ranges: `Jun–Nov 2023`, `Sep 2024–present`. Do not add dates more precise than the source.
- Keep contact labels and research terminology consistent across pages. Shared typography lives in `assets/style.css`.
- Use “Read paper” and “View code” for publication links. Preserve source-specific spellings in bibliographic author lists.

## Preview locally

Use Ruby 3.3 or newer:

```sh
bundle install
bundle exec jekyll serve
```

Open the local address printed by Jekyll. Build with `bundle exec jekyll build`. Generated output lives in ignored `dist/`; dependencies and caches are also ignored. Use `bundle exec jekyll clean` to remove generated output and caches.

## GitHub Pages

In the repository’s **Settings → Pages**, select **GitHub Actions** as the source. The included workflow builds and publishes the site when changes are pushed to `main`. The site URL is configured as `https://lca0503.github.io`.

`.openai/hosting.json` identifies the separate private Sites preview; it does not change the GitHub remote or GitHub Pages URL.

## Content notes

The profile and publication list are based on the September 2026 CV. Keep publication titles and author names as recorded by their sources. Replace the CV at `assets/pdf/cv.pdf` and the photo at `assets/img/profile.jpeg` when updating them; the photo crop is controlled by `.profile-photo` in `assets/style.css`.
