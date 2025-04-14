
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Footer from "./components/footer/Footer"
import Ticket from "./pages/ticket/Ticket"
import Details from "./pages/ticket/details/Details"
import Checkout from "./pages/ticket/checkout/Checkout"
import Invoice from "./pages/ticket/invoice/Invoice"
import SignUp from "./components/SignUp";
import Login from "./components/Login";

function App() {

  return (
    <>
    <Router>
    <main className="w-full flex flex-col bg-neutral-50 min-h-screen" >
      {/*Navbar*/ }
      <Navbar />
     {/*Routing */}
     <Routes>
      <Route path="/"element={<Home />} />
      <Route path="/about"element={<About />} />
      <Route path="/bus-tickets"element={<Ticket />} />
      <Route path="/bus-tickets/details"element={<Details />} />
      <Route path="/bus-tickets/checkout"element={<Checkout />} />
      <Route path="/bus-tickets/payment"element={<Invoice />} />
      <Route path="/signup" element={<SignUp />} />
      
      <Route path="/login" element={<Login />} />
     </Routes>

      {/* Footer */}
      <Footer/>
    </main>
    </Router>
    
    </>
  )
}

export default App
