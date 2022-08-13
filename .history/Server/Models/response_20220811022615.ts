// Step 1 - import mongoose - database adapter
import mongoose from 'mongoose';
const Schema = mongoose.Schema; // alias for mongoose.Schema

// Step 2 - Create a Schema that matches the data in the collection
const responseSchema = new Schema
({
  responseId: String,
  
  name: String,
  
  question1: String,
  optionType1: String,
  optiondetails1_1: String,
  optiondetails1_2: String, 
  optiondetails1_3: String, 
  optiondetails1_4: String,
  question2: String,
  optionType2: String,
  optiondetails2_1: String,
  optiondetails2_2: String, 
  optiondetails2_3: String, 
  optiondetails2_4: String 
},
{
    collection: "response"
});

// Step 3- Create a Model using the Schema
const Model = mongoose.model("Survey", surveySchema);

// Step 4 - Export the Model -> converts this file into a module
export default Model;