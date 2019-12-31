//mongoose is the name of database 
const mongoose = require('mongoose');

// db connection
mongoose.connect('mongodb://127.0.0.1:27017/Hikeandsee',
{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
})