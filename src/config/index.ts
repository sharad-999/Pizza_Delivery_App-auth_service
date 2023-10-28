import { config } from 'dotenv';
import path from 'path';
config({ path: path.join(__dirname, `../../.env.${process.env.NODE_ENV}`) });

// eslint-disable-next-line no-undef
const { PORT, NODE_ENV, DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME } =
    process.env;

export const Config = {
    PORT,
    NODE_ENV,
    DB_HOST,
    DB_PORT,
    DB_USERNAME,
    DB_PASSWORD,
    DB_NAME,
};
