import React from "react";
import { Route, Routes } from "react-router-dom";
import Bin from "./pages/Bin";
import Favourite from "./pages/Favourite";
import Inbox from "./pages/Inbox";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Sent from "./pages/Sent";
import Terms from "./pages/Terms";

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Inbox />} />
          <Route path="favourite" element={<Favourite />} />
          <Route path="sent" element={<Sent />} />
          <Route path="bin" element={<Bin />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
