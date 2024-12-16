import React from "react";
import Header from "../../Header";
import ExpenseSection from "../../Expenses/ExpenseSection";

const Homepage = () => (
  <div className="w-screen h-screen px-4 py-2 max-w-[1440px] mx-auto">
    <Header />
    <ExpenseSection />
  </div>
);

export default Homepage;
