var dal = require("../classes/dal.js");

var model = {"value": "xxxxxxxxxxxxxxx"}



module.exports.init = function(context, controlContext, callback){
    
    dal.connect(function(err, db){
        
        db.collection("users").find({}).toArray(function(err, data){
            
            controlContext.data = data;
            callback(controlContext);
            
        });
        
    });
    
}