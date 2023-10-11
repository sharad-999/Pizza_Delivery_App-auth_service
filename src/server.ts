import app from './app';
import { Config } from './config';

const startServer = () => {
    const PORT = Config.PORT;

    try {
        app.listen(PORT, () => {
            // eslint-disable-next-line no-console, no-undef
            console.log(`server is listening on port ${PORT}`);
        });
    } catch (error) {
        // eslint-disable-next-line no-console, no-undef
        console.error(error);
        // eslint-disable-next-line no-undef
        process.exit(1);
    }
};

startServer();
