import { Navigate, Route, Routes, } from "react-router-dom"
import Layout from "./layouts/Layout"
import HomePage from "./pages/HomePage"
import UsersPage from "./pages/UsersPage"
import RolesPage from "./pages/RolesPage"
import CreateRolesPage from "./pages/CreateRolesPage"
import EditRolesPage from "./pages/EditRolesPage"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout><HomePage /></Layout>} />
      <Route path="/users" element={<Layout><UsersPage /></Layout>} />
      <Route path="/roles" element={<Layout><RolesPage /></Layout>} />


      <Route path="/create-role" element={<Layout><CreateRolesPage /></Layout>} />
      <Route path="/update-role/:id" element={<Layout><EditRolesPage /></Layout>} />


      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App