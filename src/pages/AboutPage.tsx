import React from 'react'
import { useNavigate } from 'react-router-dom'

export const AboutPage: React.FC = () => {
  const navigate = useNavigate()
  return (
    <>
        <h1>Cтраница информации</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo perferendis sunt veniam alias sequi distinctio at quam iusto vero minima.</p>
        <button
            onClick={() => navigate('/')} 
            className="btn">Обратно к списку дел</button>
    </>
  )
}
