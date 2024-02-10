import app from './app.js';
import { connectDB } from './db.js';
const port = process.env.PORT || 4559;

connectDB();

app.listen(port, () => {
  console.log('server on port', port);
});
