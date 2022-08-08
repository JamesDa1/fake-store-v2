import "./App.css"
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import StorePage from "./pages/StorePage"
import CartPage from "./pages/CartPage"
import CartContainer from "./pages/CartContainer"

function App() {
  return (
    <div className="App">
      <Navbar />
      <hr />
      <Routes>
        <Route path="/" element={<StorePage />} />
        <Route path="/StorePage" element={<CartContainer />} />
        <Route path="/CartPage" element={<CartContainer />} />
      </Routes>
    </div>
  )
}

export default App
