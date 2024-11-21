import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Edu from "./Education/Edu";
import Class9 from "./Education/Class9";
import Class10 from "./Education/Class10";
import Class11 from "./Education/Class11";
import Class12 from "./Education/Class12";
import Class9physics from "./Education/Class9physics";
import Class9Chemistry from "./Education/Class9Chemistry";
import Class9Biology from "./Education/Class9Biology";
import Class9maths from "./Education/Class9maths";
import Class10biology from "./Education/Class10biology";
import Class10maths from "./Education/Class10maths";
import Class10physics from "./Education/Class10physics";
import Class10chemistry from "./Education/Class10chemistry";
import Class11physics from "./Education/Class11physics";
import Class11chemistry from "./Education/Class11chemistry";
import Class11maths from "./Education/Class11maths";
import Class11biology from "./Education/Class11biology";
import Class12physics from "./Education/Class12physics";
import Class12chemistry from "./Education/Class12chemistry";
import Class12maths from "./Education/Class12maths";
import Class12biology from "./Education/Class12biology";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Edu />} />
        <Route path="/Class9" element={<Class9 />} />
        <Route path="/Class10" element={<Class10 />} />
        <Route path="/Class11" element={<Class11 />} />
        <Route path="/Class12" element={<Class12 />} />
        <Route path="/Class9physics" element={<Class9physics />} />
        <Route path="/Class9Chemistry" element={<Class9Chemistry />} />
        <Route path="/Class9Biology" element={<Class9Biology />} />
        <Route path="/Class9maths" element={<Class9maths />} />
        <Route path="/Class10biology" element={<Class10biology />} />
        <Route path="/Class10maths" element={<Class10maths />} />
        <Route path="/Class10physics" element={<Class10physics />} />
        <Route path="/Class10chemistry" element={<Class10chemistry />} />
        <Route path="/Class11physics" element={<Class11physics />} />
        <Route path="/Class11chemistry" element={<Class11chemistry />} />
        <Route path="/Class11maths" element={<Class11maths />} />
        <Route path="/Class11biology" element={<Class11biology />} />
        <Route path="/Class12physics" element={<Class12physics />} />
        <Route path="/Class12chemistry" element={<Class12chemistry />} />
        <Route path="/Class12maths" element={<Class12maths />} />
        <Route path="/Class12biology" element={<Class12biology />} />
      </Routes>
    </BrowserRouter>
  );
}
