# NTP-TS
A template project for Nextjs, Prisma and Tailwind.

Technologies used
* Typescript
* Nextjs (with app router)
* Prisma
* Tailwind


## Installation guide
```bash
# create .env file and copy the content of .env.example
# If you want to change the database change the url respectively
# Install packages
yarn

## create database manually

## migrate database and seed data
yarn prisma migrate dev

## start dev server
yarn dev

```

## useful prisma commands
```bash
prisma db seed
```