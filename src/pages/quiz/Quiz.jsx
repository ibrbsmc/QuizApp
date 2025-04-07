import { useState } from 'react'
import React, {useEffect} from 'react'
import './quiz.css'
import {useParams} from 'react-router-dom'
import * as api from '../../api/Api'
import QuestionCard from '../../components/QuestionCard'
import Modal from '../../components/Modal'

const Quiz = () => {
  const {difficulty, amount} = useParams()

  const [questionsData, setQuestionsData] = useState([])

  const [score,setScore] = useState(0)
  const [count,setCount] = useState(0)
  const [modal,setModal] = useState(false)


  useEffect(() => {
    const getData = async() => {
      const data = await api.fetchQuizData(difficulty,amount)
      setQuestionsData(data)
    }
    getData();
  }, [])


  return (
    <div className='quiz'>
      {
        modal ? <Modal score={score} /> : <QuestionCard 
      questionsData={questionsData} 
      score={score}
      setScore={setScore}
      count={count}
      setCount={setCount}
      modal={modal}
      setModal={setModal}
      amount={amount}
      />
      }
      
    </div>
  )
}

export default Quiz