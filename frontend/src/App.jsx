import {BrowserRouter,Routes,Route} from "react-router-dom"
import {Signup} from "./pages/Signup"
import {Dashboard} from "./pages/Dashboard"
import {Signin} from "./pages/Signin"
import {SendMoney} from "./pages/SendMoney"
import { useState } from "react"
import { userContext } from "./Context"

function App() {
  const [userInfo,setuserInfo] = useState(null)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={
        <userContext.Provider value={{userInfo,setuserInfo}}>
          <Signin/>
        </userContext.Provider>
        }/>
        <Route path="/dashboard" element={
        <userContext.Provider value={{userInfo,setuserInfo}}>
          <Dashboard/>
        </userContext.Provider>
        }/>
        <Route path="/sendmoney" element={<SendMoney/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
