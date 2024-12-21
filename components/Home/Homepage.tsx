import React from "react";
import ExpenseSection from "@/components/Expenses/ExpenseSection";
import Header from "@/components/Layout/Header";

const Homepage = () => (
  <div className="w-screen h-screen px-4 py-2 max-w-[1440px] mx-auto">
    <Header />
    <ExpenseSection />
  </div>
);

export default Homepage;
