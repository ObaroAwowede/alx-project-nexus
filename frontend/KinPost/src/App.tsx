import { Routes, Route } from "react-router-dom";
import "./styles/globals.css";
import SignInForm from "./components/SignInForm";
import { Home } from "./navigation/pages";
import SignUpForm from "./components/SignUpForm";
import PageLayout from "./navigation/PageLayout";
import FormLayout from "./components/FormLayout";

function App() {
  return (
    <main className="flex h-screen">
      <Route element={<PageLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route element= {<FormLayout/>}>
        <Route path="/sign-in" element={<SignInForm />} />
        <Route path="/sign-up" element={<SignUpForm />} />
      </Route>
    </main>
  );
}

export default App;
