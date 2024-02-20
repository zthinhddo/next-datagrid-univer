import { Pool } from "pg";

const dbConfig = {
  host: "localhost",
  user: "postgres",
  password: "1234",
  database: "univerdemo",
};

const pool = new Pool({ ...dbConfig });

export const query = (text, params?: any) => pool.query(text, params);
