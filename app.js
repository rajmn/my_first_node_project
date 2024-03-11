require('dotenv').config();
require('./database/db'); 
require('./traits/globalFunction'); 
const router = require('./route/apiRoute');
const app = require('./setup/connection');
const errorHandlers = require('./handlers/errorHandlers');

const port = process.env.PORT;

// If that above routes didnt work, we 404 them and forward to error handler
// app.use(errorHandlers.notFound);
// production error handler
app.use(errorHandlers.developmentErrors);
// production error handler
app.use(errorHandlers.productionErrors);
 

app.use('/api', router);
app.listen(port, () => {
    console.log('Server is running on '+port);
})