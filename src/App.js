import "./App.css";
import Admin from "./components/Admin";
import EmployeePortal from "./components/EmployeePortal";
import LoginPage from "./components/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex p-4 h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/employee-portal" element={<EmployeePortal />} />
          <Route path="/admin-portal" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
