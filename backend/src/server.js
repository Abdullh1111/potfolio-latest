import app from "./app.js";
import cloudinary from "cloudinary";
import config from "./config/index.js";

cloudinary.v2.config({
  cloud_name: config.cloudinary_cloud_name,
  api_key: config.cloudinary_api_key,
  api_secret: config.cloudinary_api_secret,
});
const port = config.port
app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});
