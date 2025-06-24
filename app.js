import express from "express";
const app = express();
export default app;

// TODO: this file!
import pg from "pg";
const db = new pg.Client(
  process.env.DATABASE_URL ||
    "postgres://benga:Bronny%231023!@localhost:5432/fullstack_employees"
);

app.route("/").get((request, response) => {
  response.send("Welcome to the Fullstack Employees API.");
});
