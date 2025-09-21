import Login from "./components/Login";
import Chat from "./components/Chat";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Totalchats from "./components/Totalchats";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/chat" element={<Chat />}></Route>
          <Route path="/totalchats" element={<Totalchats />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
