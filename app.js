require('dotenv').config();
require('./database/db'); 
const router = require('./route/apiRoute');
const app = require('./setup/connection');
const port = process.env.PORT;



app.use('/api', router);
app.listen(port, () => {
    console.log('Server is running on '+port);
})