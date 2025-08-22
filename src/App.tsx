import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import Login from "./pages/login/Login";

function DashboardLayout({
  title,
  children,
  extra,
}: {
  title: string;
  children: React.ReactNode;
  extra?: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-[#151B21] text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title={title} extra={extra} />
        <main className="flex-1 overflow-y-auto p-6 container">{children}</main>
      </div>
    </div>
  );
}

function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      {children}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicLayout>
              <Login />
            </PublicLayout>
          }
        />

       
      </Routes>
    </Router>
  );
}
