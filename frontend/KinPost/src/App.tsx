import { Routes, Route } from 'react-router-dom'
import SignInForm from './components/SignInForm'
import SignUpForm from './components/SignUpForm'
import { Home } from './navigation/pages'
import PageLayout from './navigation/PageLayout'
import FormLayout from './components/FormLayout'

function App() {
  return (
    <main className="flex h-screen">
      <Routes>
        <Route element={<PageLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route element={<FormLayout />}>
          <Route path="sign-in" element={<SignInForm />} />
          <Route path="sign-up" element={<SignUpForm />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App
