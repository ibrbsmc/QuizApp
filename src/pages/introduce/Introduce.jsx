import React, { useState } from 'react';
import './introduce.css';
import quizLogo from '../../assets/quizwp.png';
import Dropdown from '../../components/Dropdown';
import { useNavigate } from 'react-router-dom';

const Introduce = () => {
  const difficultyOptions = [
    { label: "ZORLUK MODU SEÇİNİZ", value: "" },
    { label: "Kolay", value: "easy" },
    { label: "Orta", value: "medium" },
    { label: "Zor", value: "hard" }
  ];

  const [difficultyChange, setDifficultyChange] = useState('');
  const navigate = useNavigate();
  const TOTAL_QUESTIONS = 10;

  const startQuiz = () => {
    if (difficultyChange) {
      navigate(`/quiz/${difficultyChange}/${TOTAL_QUESTIONS}`);
    }
  };

  return (
    <div className='introduce'>
      <div className="introduce-container">
        <img className='quiz-image' src={quizLogo} alt="Quiz Logo" />
        <Dropdown
          data={difficultyOptions.map(option => option.label)}
          setDifficultyChange={(selectedLabel) => {
            const selectedOption = difficultyOptions.find(option => option.label === selectedLabel);
            setDifficultyChange(selectedOption?.value || '');
          }}
        />
        <div onClick={startQuiz} className='introduce-btn'>
          BAŞLA
        </div>
      </div>
    </div>
  );
};

export default Introduce;
