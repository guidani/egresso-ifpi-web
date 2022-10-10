import React from 'react'
import InfoAboutAlunos from './components/InfoAboutAlunos'
import InfoAboutCursos from './components/InfoAboutCursos'
import './styles.css'

const Dashboard = () => {
  return (
    <>
        <div>Dashboard</div>
        <div>
            <InfoAboutAlunos/>
            <InfoAboutCursos/>
        </div>
    </>
  )
}

export default Dashboard