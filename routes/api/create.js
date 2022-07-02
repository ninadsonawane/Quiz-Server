const { Router } = require("express");
const express = require("express");
const Owner = require("../../models/Owner");
const Question = require("../../models/Question");
const Quiz = require("../../models/Quiz");
const router = express.Router();

//Create Owner
router.post("/create/owner", async (req, res) => {
  const { username, password, score } = req.body;
  try {
    const newOwner = new Owner({ username, password, score });
    const owner = await newOwner.save();
    res.json({ owner });
  } catch (error) {
    console.log(error);
  }
});

//Create Question
router.post("/create/question", async (req, res) => {
  const { question, correctOption, options, quizId } = req.body;
  try {
    const newQuestion = new Question({ question, correctOption, options });
    const nquestion = await newQuestion.save();
    const quiz = await Quiz.findById(quizId);
    quiz.question = [...quiz.question, nquestion._id];
    await quiz.save();

    res.json({ nquestion });
  } catch (error) {
    console.log(error);
  }
});

//Create Quiz
router.post("/create/quiz", async (req, res) => {
  const { owner, quizname, question } = req.body;
  try {
    const newQuiz = new Quiz({ owner, quizname, question });
    const nQuiz = await newQuiz.save();
    res.json({ data: nQuiz });
  } catch (error) {
    console.log(error);
  }
});

//Get Quiz by ID
router.get("/create/get-quiz", async (req, res) => {
  try {
    const quiz = await Quiz.find().populate(["owner"]).populate(["question"]);
    res.json({ quiz });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
