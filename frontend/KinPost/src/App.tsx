import { Routes, Route } from 'react-router-dom'
import './styles/globals.css'
import SignInForm from './components/SignInForm'
import { Home } from './navigation/pages'

function App() { 
  return (
    <main className='flex h-screen'>
      <Route path='/sign-in' element={< SignInForm/>}/>
      <Route index element={<Home />}/>
    </main>
  )
}

export default App
