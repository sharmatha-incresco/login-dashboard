import Signin from "./screens/login";
import Home from "./screens/home";
import Error from "./screens/error";
import Students from "./screens/students";
import Add from "./screens/add_stud";
import Course from "./screens/course";
import Payment from "./screens/payment";
import Report from "./screens/report";
import Settings from "./screens/settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Update from "./screens/update";
import Signup from "./screens/signup";
import Forgetpassword from "./screens/forgetpassword";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Signin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/course" element={<Course />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/report" element={<Report />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/addstudent" element={<Add />} />
          <Route path="*" element={<Error />} />
          <Route path="/update" element={<Update />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgetpassword" element={<Forgetpassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
