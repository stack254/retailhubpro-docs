# RetailHub Pro Docs Reference

This file is the quick reference for how the documentation site was set up, where files live, and which commands to run when updating it.

## Current setup

- Main frontend app: Vercel
- Backend API: VPS
- Docs site: VPS with Nginx
- Docs domain: `https://docs.retailhubpro.com`
- Docs source folder: `C:\Users\User\Desktop\POS\docs`
- Built docs output: `C:\Users\User\Desktop\POS\docs\.vitepress\dist`
- VPS upload staging folder: `~/retailhubpro-docs`
- VPS web root: `/var/www/retailhubpro-docs`
- Nginx site file: `/etc/nginx/sites-available/docs.retailhubpro.com`

## Docs structure

- `docs/index.md`: homepage
- `docs/getting-started.md`: product overview
- `docs/onboarding/`: onboarding guides
- `docs/operations/`: daily-use guides
- `docs/reference/`: roles and reference pages
- `docs/troubleshooting/`: common issues
- `docs/guides/`: technical or internal guides
- `docs/.vitepress/config.mjs`: VitePress nav and sidebar

## Local commands

Install dependencies:

```powershell
cd C:\Users\User\Desktop\POS\docs
npm install
```

Run docs locally:

```powershell
cd C:\Users\User\Desktop\POS\docs
npm run docs:dev
```

Build docs:

```powershell
cd C:\Users\User\Desktop\POS\docs
npm run docs:build
```

## Deploy commands

Upload built docs from local machine to the VPS home folder:

```powershell
scp -r "C:\Users\User\Desktop\POS\docs\.vitepress\dist\*" deploy@113.30.191.96:~/retailhubpro-docs/
```

Copy uploaded files into the Nginx web root on the VPS:

```bash
sudo cp -r ~/retailhubpro-docs/* /var/www/retailhubpro-docs/
```

Fix permissions so Nginx can read the files:

```bash
sudo chmod -R a+rX /var/www/retailhubpro-docs
```

## Nginx site config

Current working config:

```nginx
server {
    listen 443 ssl;
    listen [::]:443 ssl ipv6only=on;
    server_name docs.retailhubpro.com;

    root /var/www/retailhubpro-docs;
    index index.html;

    location / {
        try_files $uri $uri.html $uri/ =404;
    }

    ssl_certificate /etc/letsencrypt/live/docs.retailhubpro.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/docs.retailhubpro.com/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
}

server {
    listen 80;
    listen [::]:80;
    server_name docs.retailhubpro.com;

    return 301 https://$host$request_uri;
}
```

## Nginx commands

Test config:

```bash
sudo nginx -t
```

Reload Nginx:

```bash
sudo systemctl reload nginx
```

## Useful verification commands

Check docs files on the VPS:

```bash
sudo ls /var/www/retailhubpro-docs
sudo ls /var/www/retailhubpro-docs/onboarding
```

Check docs site over HTTP or HTTPS:

```bash
curl -I http://docs.retailhubpro.com
curl -I https://docs.retailhubpro.com/onboarding/register-business
```

## What we changed in docs content

- Created a VitePress site in `docs/`
- Added onboarding pages for:
  - registering a business
  - adding the first store
  - adding users and roles
  - adding products and stock
  - making the first sale
- Added operations, reference, troubleshooting, and technical guide sections

## Next content improvements

- Add real screenshots from the app
- Expand sales workflow documentation
- Add FAQ pages
- Add role-specific user guides for admin, manager, and cashier
