import { config } from 'dotenv';
config();

// eslint-disable-next-line no-undef
const { PORT, NODE_ENV } = process.env;

export const Config = {
    PORT,
    NODE_ENV,
};
