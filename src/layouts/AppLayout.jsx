import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="w-screen overflow-x-hidden">
      <main className="min-h-screen container mx-auto overflow-hidden">
        <Header />
        <Outlet />
      </main>
      <footer className="p-6 text-center bg-gray-800 mt-10 text-stone-400">
        Copyright information
      </footer>
    </div>
  );
};

export default AppLayout;
