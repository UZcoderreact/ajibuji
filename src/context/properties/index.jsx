import React, { useReducer } from 'react'
import { createContext } from 'react'
import { reducer } from './reducer'

const PropertiesContext=createContext()

export const PropertiesProvider = ({Children}) => {
  const [state,dispatch]=useReducer(reducer,[])
  return (
    <PropertiesContext>{Children}</PropertiesContext>
  )
}