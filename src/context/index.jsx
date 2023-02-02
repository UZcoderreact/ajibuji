import { createContext } from 'react'
import { PropertiesProvider } from './properties'
import React from 'react'


const Root=createContext();
export const Rootcontext = ({Children}) => {
  return (
   <Root.Provider>
    <PropertiesProvider>
      {Children}
    </PropertiesProvider>
   </Root.Provider>
  )
}
export default Rootcontext;