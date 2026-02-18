import { createApp } from './app';

const port = Number(process.env.PORT || 8080);
const app = createApp();

app.listen(port, () => {
  console.log(`[ar-landing-backend] running on http://localhost:${port}`);
});
