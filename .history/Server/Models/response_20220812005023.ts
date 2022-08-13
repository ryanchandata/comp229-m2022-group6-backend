// Step 1 - import mongoose - database adapter
import mongoose from 'mongoose';
const Schema = mongoose.Schema; // alias for mongoose.Schema

// Step 2 - Create a Schema that matches the data in the collection
const responseSchema = new Schema
({
  responseId: String,
  
  surveyId: String,
  
  question1: String, 
  question1_ans: String,
  question2: String,
  optiondetails2_4: String 
},
{
    collection: "response"
});

// Step 3- Create a Model using the Schema
const Model = mongoose.model("Response", responseSchema);

// Step 4 - Export the Model -> converts this file into a module
export default Model;