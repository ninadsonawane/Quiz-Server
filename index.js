const mongoose = require("mongoose");
const express = require("express");
const app = express();
const dotenv = require('dotenv');
dotenv.config()

const PORT = process.env.PORT || 8000;
const URL = process.env.URL

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(URL);
  console.log("DB connected")
}

app.use('/api'  , require('./routes/api/create'))


app.get('/' ,(req ,res ) => res.send("Helloo!"))
app.listen(PORT , (req ,res) => console.log(`Server running on ${PORT}`));

