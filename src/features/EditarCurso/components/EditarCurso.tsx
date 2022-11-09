import React from 'react'
import { useParams } from 'react-router-dom'
import Wrapper from '../../ui/wrapper'

export const EditarCurso = () => {
  const {courseId} = useParams()
  return (
    <Wrapper>
      <h2>Editar curso</h2>
      {courseId}
    </Wrapper>
  )
}
