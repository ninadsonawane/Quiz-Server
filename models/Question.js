const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    question:String,
    correctOption:String,
    options: [
        {
          id: String,
          value: String,
        },
      ],
})

module.exports = Question = mongoose.model('question' , QuestionSchema);