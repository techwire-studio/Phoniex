import app from ".";
import config from "./config/env";

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
