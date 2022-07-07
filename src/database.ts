const config = require( "../config/db.config" );
const mongoose = require( "mongoose" );


const mongooseOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};



// Connect to the DB an initialize the app if successful
mongoose.connect( config.dbUrl, mongooseOptions )
  .then( () => {
    console.log( "Database connection successful" );
    })
