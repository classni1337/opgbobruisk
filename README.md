# Opgbobruisk4ever

Статический сайт находится в `html/`. GitHub Pages публикует содержимое этой папки через workflow `.github/workflows/pages.yml`.

## Локальный просмотр

Откройте `html/index.html` в браузере. Для корректной работы видео и автозагрузки ресурсов можно запустить любой локальный HTTP-сервер из папки `html`.

## Публикация

После создания GitHub-репозитория добавьте его как remote и отправьте ветку `main`:

```powershell
git remote add origin https://github.com/<USERNAME>/<REPOSITORY>.git
git push -u origin main
```

Затем в настройках репозитория откройте **Pages** и убедитесь, что источником публикации выбран **GitHub Actions**.
