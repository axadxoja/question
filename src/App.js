import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import CreartePage from "./pages/create";
import DetailPage from "./pages/detail";
import UserFoto from "./pages/Foto";
import Home from "./pages/home";
import LoginPage from "./pages/login";

import QuestionsPage from "./pages/questions";
import AuthProvider from "./utils/authContext";

function App() {
  return (
    <>
    {/* 2 etap butun proektni orash */}
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/questions" element={<QuestionsPage />} />
          <Route path="/questions/:id" element={<DetailPage />} />
          <Route path="/questions/create" element={<CreartePage />} />
          <Route path="/pages/Foto" element={<UserFoto />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>  
    </>
  );
}

export default App;
