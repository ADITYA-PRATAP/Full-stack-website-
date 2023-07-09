const mongoose = require('mongoose')
const mongoURI="mongodb+srv://aditya22:aditya22@cluster0.pu863af.mongodb.net/lerning?retryWrites=true&w=majority";




module.exports = function (callback) {
    mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        // mongoDbClient.connect(mongoURI, { useNewUrlParser: true }, async(err, result) => {
        if (err) console.log("---" + err)
        else {
            // var database =
            console.log("connected to DataBase")
          
                    
               
            
        
        }
    })
};