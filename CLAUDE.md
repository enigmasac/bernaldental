# Bernal Dental Clinic - Project Instructions

## Stack
- React 19 + Vite (port 4000)
- Framer Motion, lucide-react
- react-router-dom (BrowserRouter)
- CSS custom properties (no framework)

## Deploy to Production

Server: `serverenigma.com`
Domain: `bernaldentalclinic.com`
User: `bernaldentalclinic`
SSH key: `~/.ssh/serverenigma.pem`
Login: `debian@serverenigma.com` (sudo to manage files)

### Step 1 — Build & zip (local)

```bash
rm -rf dist
npm run build
zip -r .claude/dist.zip dist/ -x "dist/Bernie.mp4"
```

The video (232MB) is excluded from the zip and uploaded separately.

### Step 2 — Backup on server

```bash
ssh -i ~/.ssh/serverenigma.pem debian@serverenigma.com \
  "sudo bash -c 'mkdir -p /home/bernaldentalclinic/backups && tar czf /home/bernaldentalclinic/backups/public_html_backup_\$(date +%Y%m%d_%H%M%S).tar.gz -C /home/bernaldentalclinic public_html'"
```

### Step 3 — Upload zip to server

```bash
scp -i ~/.ssh/serverenigma.pem .claude/dist.zip debian@serverenigma.com:/tmp/dist.zip
```

### Step 4 — Replace files on server

```bash
ssh -i ~/.ssh/serverenigma.pem debian@serverenigma.com "sudo bash -c '
rm -rf /home/bernaldentalclinic/public_html/assets
rm -rf /home/bernaldentalclinic/public_html/mutuas
rm -f /home/bernaldentalclinic/public_html/.htaccess
rm -f /home/bernaldentalclinic/public_html/index.html
rm -f /home/bernaldentalclinic/public_html/logo-blanco.png
rm -f /home/bernaldentalclinic/public_html/logo.png
rm -f /home/bernaldentalclinic/public_html/vite.svg
rm -f /home/bernaldentalclinic/public_html/yeimi.png

cd /tmp && unzip -o dist.zip -d /tmp/dist_extract
cp -r /tmp/dist_extract/dist/* /home/bernaldentalclinic/public_html/
cp /tmp/dist_extract/dist/.htaccess /home/bernaldentalclinic/public_html/
chown -R bernaldentalclinic:bernaldentalclinic /home/bernaldentalclinic/public_html/
rm -rf /tmp/dist.zip /tmp/dist_extract
'"
```

### Step 5 — Upload video (only if changed)

```bash
scp -i ~/.ssh/serverenigma.pem public/Bernie.mp4 debian@serverenigma.com:/tmp/Bernie.mp4

ssh -i ~/.ssh/serverenigma.pem debian@serverenigma.com "sudo bash -c '
cp /tmp/Bernie.mp4 /home/bernaldentalclinic/public_html/Bernie.mp4
chown bernaldentalclinic:bernaldentalclinic /home/bernaldentalclinic/public_html/Bernie.mp4
rm -f /tmp/Bernie.mp4
'"
```

### Step 6 — Verify

```bash
ssh -i ~/.ssh/serverenigma.pem debian@serverenigma.com "sudo ls -la /home/bernaldentalclinic/public_html/ && sudo ls -la /home/bernaldentalclinic/public_html/assets/"
```

Then open https://bernaldentalclinic.com in the browser to confirm visually.

## Important Notes

- `public/.htaccess` contains SPA rewrite rules for React Router — without it, direct access to `/condiciones-implantes` returns 404
- `public/Bernie.mp4` (232MB) is in `.gitignore` — deploy it manually via scp
- Backups are stored in `/home/bernaldentalclinic/backups/`
