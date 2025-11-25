import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContextProvider"

function App() {

  return (
    <UserContextProvider>
      <div className='flex flex-col justify-center items-center h-screen w-screen p-4 bg-gray-950'>
        <h1 className='font-medium text-2xl bg-gray-800 px-4 py-2 rounded-2xl text-white w-max'>Tailwind v4 is Working </h1>
      <Login/>
      <Profile/>
      </div>
    </UserContextProvider>
  )
}

export default App
