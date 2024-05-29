import { Navigate, Route, Routes, } from "react-router-dom"
import Layout from "./layouts/Layout"
import Home from "./pages/Home"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />


      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App