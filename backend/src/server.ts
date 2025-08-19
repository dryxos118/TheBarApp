import app from "./app";
import { setupSwagger } from "./swagger";
import { testDBConnection } from "./utils/db";
import { log, LogLevel } from "./utils/logger";

const PORT = 3000;

setupSwagger(app);

(async () => {
  const isDBOk = await testDBConnection();
  if (!isDBOk) {
    console.error("Arrêt de l'application car la DB est inaccessible 🚨");
    process.exit(1);
  }

  app.listen(PORT, () => {
    log(
      LogLevel.INFO,
      `Server is running on port http://localhost:${PORT}/api-docs/#/`
    );
  });
})();
