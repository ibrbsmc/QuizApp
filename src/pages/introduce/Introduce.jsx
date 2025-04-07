import React from 'react'
import './introduce.css'
import quizLogo from '../../assets/quizwp.png'
import Dropdown from '../../components/Dropdown'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Introduce = () => {
const difficulty = ["ZORLUK MODU SEÇİNİZ","KOLAY","ORTA","ZOR"];
  const [difficultyChange, setDifficultyChange] = useState('')
  const navigate = useNavigate()
  const TOTAL_QUESTIONS = 10;

  const startQuiz = () => {
    if(difficultyChange){
      navigate(`/quiz/${difficultyChange}/${TOTAL_QUESTIONS}`)
    }
  }

  const difficultyOptions = [
  { label: "ZORLUK MODU SEÇİNİZ", value: "" },
  { label: "Kolay", value: "easy" },
  { label: "Orta", value: "medium" },
  { label: "Zor", value: "hard" }
];

  return (
    <div className='introduce'>
      <div className="introduce-container">
        <img src={quizLogo} alt="" />
        <Dropdown 
  data={difficultyOptions.map(option => option.label)} 
  setDifficultyChange={(selectedLabel) => {
    const selectedOption = difficultyOptions.find(option => option.label === selectedLabel);
    setDifficultyChange(selectedOption?.value || '');
  }}
/>
        <div onClick={startQuiz} className='introduce-btn'>BAŞLA<label htmlFor=""></label></div>
      </div>
    </div>
  )
}

export default Introduce