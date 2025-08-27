import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

// import Login from "./pages/Login/Login";
import Statistika from "./pages/Statistic/Statistic";
import KPI from "./pages/Kpi/Kpi";
import UniversityDetail from "./pages/Statistic/components/UniversityDetail";
import UniversityDetailStat from "./pages/Statistic/components/univerDetailing pages/StudentMood";
import Login from "./pages/login/Login";
import Studentappearance from "./pages/Statistic/components/univerDetailing pages/Studentappearance";
// import Login from "./pages/Login/Login";

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
    <div className="h-screen  bg-[#151B21] text-white">
      <Sidebar />
      <div className="ml-[90px] flex flex-col">
        <Header title={title} extra={extra} />
        <main className="flex-1 py-6 px-6 ">{children}</main>
      </div>
    </div>
  );
}

function PublicLayout({ children }: { children: React.ReactNode }) {
  return <div className="">{children}</div>;
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

        <Route
          path="/"
          element={
            <DashboardLayout title="Statistika">
              <Statistika />
            </DashboardLayout>
          }
        />

        <Route
          path="/kpi"
          element={
            <DashboardLayout title="KPI Baholash">
              <KPI />
            </DashboardLayout>
          }
        />

        <Route
          path="/university/:id"
          element={
            <DashboardLayout title="Statistika">
              <UniversityDetail />
            </DashboardLayout>
          }
        />

        <Route
          path="/university/:id/studentsmood"
          element={
            <DashboardLayout title="Statistika">
              <UniversityDetailStat />
            </DashboardLayout>
          }
        />
        <Route
          path="/university/:id/appearance"
          element={
            <DashboardLayout title="Statistika">
              <Studentappearance />
            </DashboardLayout>
          }
        />
      </Routes>
    </Router>
  );
}
