// import { drizzle } from "drizzle-orm/postgres-js";

// async function main() {
// 	//@ts-expect-error - This is how Drizzle recommends we set up a Postgres connection
// 	//eslint-disable-next-line
// 	const db = drizzle("postgres-js", process.env.DATABASE_URL);
// }

// main();

// import "dotenv/config";
import { DATABASE_CONNECTION_STRING } from "$env/static/private";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

// const connectionString = process.env.DATABASE_CONNECTION_STRING;

if (!DATABASE_CONNECTION_STRING) {
	throw new Error("DATABASE_CONNECTION_STRING is not set");
}

// Disable prefetch as it is not supported for "Transaction" pool mode
export const pgClient = postgres(DATABASE_CONNECTION_STRING, { prepare: false });
export const db = drizzle(pgClient);
