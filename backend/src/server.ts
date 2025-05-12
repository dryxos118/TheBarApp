import app from "./app";
import { setupSwagger } from "./swagger";

const PORT = 3000;

setupSwagger(app);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}/api-docs/#/`);
});
