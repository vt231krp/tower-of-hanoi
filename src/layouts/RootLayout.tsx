import { Outlet } from "react-router";
import { Header, Modal } from "../components";

export const RootLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-white">
      <Header />
      <main className="flex flex-1 p-5">
        <Outlet />
      </main>
      <Modal />
    </div>
  );
};
