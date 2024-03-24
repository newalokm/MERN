import app from "./app.js";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env['duzqrxe8t'],
  api_key: process.env['134755747279345'],
  api_secret: process.env['VIuVW7RTt8hTSIXwohMbyzA48Qo'],
});

app.listen(process.env.PORT, () => {
  console.log(`Server running at port ${process.env.PORT}`);
});
