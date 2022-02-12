import "dotenv/config"
import { Pool } from "pg"

const {
  POSTGRES_HOST_DEV,
  POSTGRES_DB_DEV,
  POSTGRES_USER_DEV,
  POSTGRES_PASSWORD_DEV,
  POSTGRES_HOST_TEST,
  POSTGRES_DB_TEST,
  POSTGRES_USER_TEST,
  POSTGRES_PASSWORD_TEST,
  NODE_ENV
} = process.env

let client

if (NODE_ENV == "test") {
  console.log("connecting to Test DB")

  client = new Pool({
    host: POSTGRES_HOST_TEST,
    database: POSTGRES_DB_TEST,
    user: POSTGRES_USER_TEST,
    password: POSTGRES_PASSWORD_TEST
  })
  console.log(`using Postgres DB: ${POSTGRES_HOST_TEST} DB:${POSTGRES_DB_TEST}  User:${POSTGRES_USER_TEST}`)
} else if (NODE_ENV == "dev") {
  console.log("connecting to Dev DB")
  client = new Pool({
    host: POSTGRES_HOST_DEV,
    database: POSTGRES_DB_DEV,
    user: POSTGRES_USER_DEV,
    password: POSTGRES_PASSWORD_DEV
  })
  console.log(`using Postgres DB: ${POSTGRES_HOST_DEV} DB:${POSTGRES_DB_DEV}  User:${POSTGRES_USER_DEV}`)
}

export default client
