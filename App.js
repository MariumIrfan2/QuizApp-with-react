import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowOption from './components/showOption'
import { Box, Grid } from '@mui/system';
import { Typography } from '@mui/material';
import { dividerClasses } from '@mui/material';

function App() {

  var Questionbank = [
    {
      quizName: 'React Quiz',
      totalMarks: 60,
      marksPerQues: 10,
      Question: "HTML stands For_________",
      Answers: [
        { Answer: "Hyper Text Makeup Language", isCorrect: false },
        { Answer: "Hyper Text Markup Language", isCorrect: true },
        { Answer: "html", isCorrect: false },
        { Answer: "cascading style sheet", isCorrect: false }
      ]
    },
    {
      Question: "Css Stands For _______________________",
      Answers: [
        { Answer: "Casecading Style Sheet", isCorrect: false },
        { Answer: "Java", isCorrect: true },
        { Answer: "Ram", isCorrect: false },
        { Answer: "Hyper Text", isCorrect: false }
      ]
    },
    {
      Question: "Js Stands For _______________________",
      Answers: [
        { Answer: "Java Style", isCorrect: false },
        { Answer: "Java Script", isCorrect: true },
        { Answer: "Script", isCorrect: false },
        { Answer: "Script Src", isCorrect: false }
      ]
    },
    {
      Question: "2 +3 = ?",
      Answers: [
        { Answer: "5", isCorrect: true },
        { Answer: "7", isCorrect: false },
        { Answer: "4", isCorrect: false },
        { Answer: "3", isCorrect: false }
      ]
    },
    {
      Question: "What comes after january?",
      Answers: [
        { Answer: "feb", isCorrect: true },
        { Answer: "march", isCorrect: false },
        { Answer: "june", isCorrect: false },
        { Answer: "sept", isCorrect: false }
      ]
    }

  ]

  //useState Hook
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const handleAnswerResponse = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < Questionbank.length) {
      setCurrentQuestion(nextQuestion);
    }
    else {
      setShowScore(true);
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  }



  return (

    <Box className='text-center bg-light'>
      {showScore ? (
        <Box className='p-5 m-5 bg-light'>
          <Typography variant='h2' className='bg-secondary text-white text-center'>RESULT</Typography>
          <Typography variant='h4' className='p-2 m-2 text-center text-secondary'>{((score / Questionbank.length) * 100).toFixed(2)} %</Typography>
          <Typography variant='h4' className='p-2 m-2 text-center text-secondary'>{(score / Questionbank.length) * 100 < 60 ? "Fail" : "Pass"}{" "} </Typography>
          <Typography variant='h5' className=' p-2 m-2 text-center text-secondary'>
            You have scored {score} out of {Questionbank.length} </Typography>
          {/* <>
            <button type="submit" onClick={resetQuiz}>Play Again!!</button>
          </> */}
        </Box>
      )
        : (
          
            <Box>



              <Box className='text-center bg-secondary text-white text-center m-3 p-3'>
                <Typography variant='h3'>{Questionbank.quizName}</Typography>
                <Typography style={{ display: 'inline' }} variant='h6'>Question No: {currentQuestion + 1} / </Typography>
                <Typography style={{ display: 'inline' }} variant='h6'>{Questionbank.length}</Typography>
                <Box>
                  <Typography style={{ display: 'inline' }} variant='h6'>Quiz Marks: {Questionbank.totalMarks}</Typography>
                </Box>
              </Box>

              <Box>
                <Typography className='p-5 m-3' variant='h5'>
                  {Questionbank[currentQuestion].Question}
                </Typography>
              </Box>

              <Box>
                {Questionbank[currentQuestion].Answers.map((answer) =>
                (
                  <ShowOption optionVal={answer.Answer} onClick={() => handleAnswerResponse(answer.isCorrect)} />
                ))}
              </Box>
             <Box className='m-3 p-3'>
             <Typography style={{ display: 'inline' }} variant='body1'>QuestionAttempted:</Typography>
              <progress
              
              className="p-2"
              value={currentQuestion}
              max={Questionbank.length}
            ></progress>
             </Box>
             
            </Box>


          
        )
      }

    </Box>


  );
}

export default App;
