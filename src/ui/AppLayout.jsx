import React from "react";
import Header from "./Header";
import CartOverview from "../Features/Cart/CartOverview";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}
