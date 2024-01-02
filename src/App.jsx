import React from "react";
import TopBar from "./Components/TopBar";
import RecentDonations from "./Components/RecentDonations";
import Progress from "./Components/Progress";
import DonationForm from "./Components/DonationForm";
import "./App.css";

const targetAmount = 1000;
export const donations = [
  {
    amount: 250,
    caption: "You really need this. Really.",
    id: 1,
    name: "Jo",
  },
  {
    amount: 30,
    caption: "Here!",
    id: 2,
    name: "Rami",
  },
  {
    amount: 20,
    caption: " Happy to do this for you. :)",
    id: 3,
    name: "Michelle",
  },
  {
    amount: 5,
    caption: "Have fun!",
    id: 4,
    name: "Malinda",
  },
  {
    amount: 30,
    caption: "Come visit me!",
    id: 5,
    name: "Sam",
  },
];

function App() {
  return (
    <>
      <TopBar />
      <main className="container">
       <RecentDonations donations={donations} />
        <section className="side-bar">
         <Progress donations={donations} targetAmount={targetAmount} />
        </section>
        <DonationForm />
      </main>
    </>
  );
}

export default App;
