import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <Router>
      <div className="flex h-screen bg-[#151B21] text-white">
        <Sidebar />

        <div className="flex-1 flex flex-col overflow-hidden">
          <Header title="Xavsiz Talaba" />
          {/* <Routes>
            <Route
              path="/statistika"
              element={
                <>
                  <Header title="Statistika" />
                  <main className="flex-1 overflow-y-auto p-6 container">
                    <Statistika />
                  </main>
                </>
              }
            /> */}

            {/* Statistika -> Profilaktika */}
            
          {/* </Routes> */}
        </div>
      </div>
    </Router>
  );
}
