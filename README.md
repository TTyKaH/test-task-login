# Login API

## Запуск проекта

### 1. Клонирование репозитория

```bash
git clone git@github.com:TTyKaH/test-task-login.git
cd test-task-login
```

### 2. Создание .env

Создайте в корне проекта файл .env и вставте следующее:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=rootpassword
DB_NAME=auth_db
REDIS_HOST=localhost
REDIS_PORT=6379
JWT_SECRET=secret-key
JWT_REFRESH_SECRET=secret-key
PORT=3000
```

### 3. Запуск контейнеров (MySQL + Redis)

```bash
docker-compose up -d
```

### 4. Установка зависимостей (node v24.18.0)

```bash
npm install
```

### 5. Запуск приложения

```bash
npm run dev
```

Сервер будет доступен по адресу: http://localhost:3000

## Тестирование API локально или через postman

Для postman в проекте сохранен экспорт с json
При первом запуске автоматически создаётся тестовый пользователь:  
**Email:** `test@example.com`  
**Пароль:** `password123`

### 1. Регистрация

```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"password123"}'
```

### 2. Логин

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"password123"}'
```

### 3. Обновление токена

```bash
curl -X POST http://localhost:3000/api/auth/refresh \
  -H "Content-Type: application/json" \
  -d '{"refreshToken":"refresh_токен_from_login"}'
```
