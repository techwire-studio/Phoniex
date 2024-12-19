import dotenv from "dotenv";
dotenv.config();

const config = {
    port: process.env.PORT || 3000,
    databaseUrl: process.env.DATABASE_URL,
    jwtSecret: process.env.JWT_SECRET || "supersecret"
}


export default config;