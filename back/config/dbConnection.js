import { Pool } from "pg";

export const db = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "123",
  database: "blog",
});
