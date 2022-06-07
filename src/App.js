import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, User } from "./pages";

function App() {
   return (
      <Router>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:page/:username" element={<User />} />
         </Routes>
      </Router>
   );
}

export default App;
