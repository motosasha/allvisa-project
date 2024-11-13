# AllVisa

## Установка

Требуются установленный [git](https://git-scm.com/) и [Node.js (LTS)](https://nodejs.org/en/) не ниже 16 версии

Установка зависимостей проекта: `pnpm i`.

В редакторе кода или IDE установить (если не установлены) и включить плагины [EsLint](https://eslint.org/), [Stylelint](https://stylelint.io/), [EditorConfig](https://editorconfig.org/) и [Prettier](https://prettier.io/).

## Настройка для VS Code на Windows:

1. Настройки Git: `git config --global core.autocrlf input`
2. Склонировать репозиторий
3. Настройки VS Code:
- `Files: EOL` — `\n`,
- `Editor: Default Formatter` — `Prettier — Code formatter`
4. Настройки плагина Prettier:
- `Prettier: End of Line` — `lf`,
- `Prettier: Config Path` — `.prettierrc.json`
5. Настройки плагина EditorConfig: `Generate Auto` — `false`

Автоформатирование доступно по сочетанию клавиш — Shift + Alt + F (можно настроить форматирование при сохранении файла).

## Команды

```bash
pnpm run start         # запуск сервера разработки
pnpm run deploy        # отправка содержимого папки сборки на gh-pages
pnpm run build         # сборка без запуска сервера разработки
```

