import { Route, Routes, Navigate } from 'react-router'
import Home from '../home/Home'
const ContentContainer = () => {
  return (
    <>
    <Routes>
    <Route path={"/"} element={<Home />}/> 

    </Routes>
    </>
  )
}

export default ContentContainer
