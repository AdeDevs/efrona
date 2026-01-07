import { Route, Routes } from "react-router-dom"
import Nav from "./components/Nav"
import HomePage from "./components/Home"

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        {/* <Route path="/cart" element={<CartDemo />} /> */}
      </Routes>
    </div>
  )
}

export default App
