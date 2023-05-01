const mongoose = require('mongoose');
const mongoURI ="mongodb+srv://Gofood:Gofood@cluster0.houglwv.mongodb.net/gofood?retryWrites=true&w=majority"

const mongoDB= async()=>{

    mongoose.connect(mongoURI,{useNewUrlParser:true},async(err,result)=>{
    if(err) {
        console.log("----" ,err)
    }else{

        console.log("DB Connected")
        const fetched_data= await mongoose.connection.db.collection("food-items");
        fetched_data.find({}).toArray(async function (err,data){

            const foodCategory= await mongoose.connection.db.collection("food-category");

            foodCategory.find({}).toArray(function(err,catData){
                if(err)console.log(err);
                else{
                    global.food_items=data;
                    global.foodCategory=catData;
                }
            })
            // if(err)
            //     console.log(err);
            // else {

            //     global.food_item = data
            //     // console.log(global.food_item )
            // }
            
        })
    }
    });
}

module.exports = mongoDB;
// mongoose.set('strictQuery', true)
// module.exports = function (callback) {
//     mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
//         // mongoDbClient.connect(mongoURI, { useNewUrlParser: true }, async(err, result) => {
//         if (err) console.log("---" + err)
//         else {
//             // var database =
//             console.log("connected to mongo")
//             const foodCollection = await mongoose.connection.db.collection("food-items");
//             foodCollection.find({}).toArray(function (err, data) {
//                 if(err) console.log(err)
//                 else console.log(data);
//                 // const categoryCollection = await mongoose.connection.db.collection("category");
//                 // categoryCollection.find({}).toArray(async function (err, Catdata) {
//                 //     callback(err, data, Catdata);

//                 // })
//             });
//             // listCollections({name: 'food_items'}).toArray(function (err, database) {
//             // });
//             //     module.exports.Collection = database;
//             // });
//         }
//     })
// };
