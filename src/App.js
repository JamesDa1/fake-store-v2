import "./App.css"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import StorePage from "./pages/StorePage"
import CartPage from "./pages/CartPage"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<StorePage />} />
        <Route path="/StorePage" element={<StorePage />} />
        <Route path="/CartPage" element={<CartPage />} />
      </Routes>
    </div>
  )
}

export default App
