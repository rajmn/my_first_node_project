require('dotenv').config();
require('./database/db'); 
require('./traits/globalFunction'); 
const router = require('./route/apiRoute');
const app = require('./config/connection');
const errorHandlers = require('./handlers/errorHandlers');
const upload = require('./config/upload');

const port = process.env.PORT;

// If that above routes didnt work, we 404 them and forward to error handler
// app.use(errorHandlers.notFound);
// production error handler
app.use(errorHandlers.developmentErrors);
// production error handler
app.use(errorHandlers.productionErrors);
// for parsing multipart/form-data
// app.use(upload.any()); 
// app.use(upload);

app.use('/api', router);

// Export the upload middleware
// module.exports = upload;


app.listen(port, () => {
    console.log('Server is running on '+port);
})

