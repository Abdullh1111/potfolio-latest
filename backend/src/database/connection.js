import mongoose from "mongoose";
import config from "../config/index.js";

export const dbConnection = () => {
  mongoose
    .connect(config.db_url, {
      dbName: "MERN_STACK_PERSONAL_PORTFOLIO",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log("Some error occured while connecting to database:", err);
    });
};
