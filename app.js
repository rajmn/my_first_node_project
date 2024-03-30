require('dotenv').config();
require('./database/db'); 
require('./traits/globalFunction'); 
const router = require('./route/apiRoute');
const app = require('./setup/connection');
const errorHandlers = require('./handlers/errorHandlers');


const multer = require('multer');
const path = require('path');

// const upload = multer({
//     storage: multer.diskStorage({
//         destination: function (req, file, cb) {
//             cb(null, 'uploads/');
//         },
//         filename: function (req, file, cb) {
//             cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//         }
//     })
// });

const port = process.env.PORT;

// If that above routes didnt work, we 404 them and forward to error handler
// app.use(errorHandlers.notFound);
// production error handler
app.use(errorHandlers.developmentErrors);
// production error handler
app.use(errorHandlers.productionErrors);

// app.use(upload);

app.use('/api', router);

// Export the upload middleware
// module.exports = upload;


app.listen(port, () => {
    console.log('Server is running on '+port);
})

