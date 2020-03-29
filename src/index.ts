import "reflect-metadata";
import { startServer } from "./app";
import { connect } from "./config/typeorm";

async function main() {
    connect();
    const app = await startServer();
    const port = process.env.PORT || 4000;
    app.listen(port);
    console.log('SERVER ON PORT', port);
}

main();