# Chen-An Li

Personal academic website built with Jekyll.

## Local development

Requires Ruby 3.3 or newer.

```sh
bundle install
bundle exec jekyll serve
```

Build: `bundle exec jekyll build`

Clean generated files: `bundle exec jekyll clean`

## Files

| File | Purpose |
| --- | --- |
| `_config.yml` | Site settings and contact links |
| `index.html` | About, research interests, news, and selected publications |
| `publications.html` | Publication list and search controls |
| `_data/publications.json` | Publication records; `selected` marks homepage entries |
| `_layouts/default.html` | Shared page layout |
| `_includes/publication.html` | Publication entry template |
| `_includes/contact-links.html` | Contact links shared by the homepage and footer |
| `assets/style.css` | Site styles |
| `assets/site.js` | Theme switch and publication search |
| `assets/img/profile.webp` | Profile photo |
| `assets/img/publications/` | Full figures and thumbnails from selected papers |
| `assets/pdf/cv.pdf` | CV |

## Deployment

GitHub Actions builds and deploys the site when changes are pushed to `main`.
In **Settings → Pages**, select **GitHub Actions** as the source.
