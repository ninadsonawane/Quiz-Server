const mongoose = require('mongoose');
const { Schema } = mongoose;

const QuizSchema = new mongoose.Schema({
    quizname:String,
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'owner'
      },
    question: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'question'
    }]
})

module.exports = Quiz = mongoose.model('quiz', QuizSchema);