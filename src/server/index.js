// Entry point for Server
import { app } from './app';
import { port } from './config';

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
