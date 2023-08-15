import express from "express";
import os from "node:os";

import {PORT, HOST, SERVER_URL} from "./config"

const server = express();

server.use(express.static("dist"));

server.set("view engine", "ejs")

server.use("/", (req, res) => {
  res.render("index", { initialContent: "Loading..." })
});

server.listen(PORT, HOST, () => {
  console.info(
    `Express server is listening at ${SERVER_URL}`,
    `Free memory: ${os.freemem() / 1024 / 1024} MB`
  );
});
