# Drive app

React native technical test.

if you just want to see how it works you can see [this loom video](https://www.loom.com/share/8ea8d5ce311a42ce8987fb04cde3a7d0).

## Table of content

- Figma Mockup
- Getting started
  - First steps
  - Connecting the database
  - How to run the project

## Figma Mockup

You can check the figma initial mockup [here](https://www.figma.com/file/GJJah95zIfoZq6IIvcdDUX/drive?node-id=0%3A1):

Image...

## Getting started

For run this project you will need [yarn](https://yarnpkg.com), [react native cli](https://reactnative.dev/docs/0.9/getting-started) and [Android studio](https://developer.android.com/studio) installed on your computer.

it is convenient to have [ngrok](https://ngrok.com) installed for expose the localhost api to the app.

## First steps

Install project packages:

```bash
  yarn install
```

Link the assets

```bash
  yarn link
```

## Connecting the database

This project uses [json-server](https://github.com/typicode/json-server) as a backend solution, by default all request point to [my-json-server](https://my-json-server.typicode.com/CriticalGeek/drive/).

If you need the changes to persist, you can run json-server locally and expose the port with ngrok:

Run the server locally (by default it runs on port 3000)

```bash
  yarn server
```

Expose the port with ngrok

```bash
  ngrok http 3000
```

Copy the ngrok forwarding url and change the url base in `src/plugins/axios.js`

```javascript
const axiosInstance = axios.create({
  baseURL: 'http://b4f35b6980dc.ngrok.io',
});
```

## How to run the project

Run the project

```bash
  yarn start
```

From android studio run the project on your virtual device. if you need help you can consult the [react native cli quickstart](https://reactnative.dev/docs/0.5/getting-started).

And voila, you should be able to see the application running on the virtual device

Imagen...

---

Made with javascript and a lot of 🌮
