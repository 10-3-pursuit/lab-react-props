import React from "react";
import TopBar from "./Components/TopBar";
import "./App.css";
import Progress from "./Components/Progress";
import RecentDonations from "./Components/RecentDonations";

const targetAmount = 1000;
const donations = [
  {
    amount: 250,
    caption: "You really need this. Really.",
    id: 1,
    name: "Jo",
  },
  {
    amount: 30,
    caption: "Here, take a break from work!",
    id: 2,
    name: "Rami",
  },
  {
    amount: 20,
    caption: "LOL! You are too funny. Happy to do this for you. :)",
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
    caption: "Come visit me in Miami!",
    id: 5,
    name: "Sam",
  },
];


const initialValue= 0;
function App() {
  const totalDonations= donations.map(donation => donation.amount).reduce((acc, currentValue) => 
  acc+ currentValue, initialValue);

  return (
    <>
      <TopBar />
      <main className="container">
        <section className="sidebar">
          <h2>{"Recent Donations"}</h2>

            <h3>{"Jo donated $250"}</h3>
            <ul>{"You really need this. Really."}</ul>

            <h3>{"Rami donated $30"}</h3>
            <ul>{"Here, take a break from work!"}</ul>

            <h3>{"Michelle donated $20"}</h3>
            <ul>{"LOL! You are too funny. Happy to do this for you.:)"}</ul>

            <h3>{"Malinda donated $5"}</h3>
            <ul>{"Have fun!"}</ul>

            <h3>{"Sam donated $30"}</h3>
            <ul>{"Come visit me in Miami!"}</ul>

       

        <RecentDonations donations={donations}/>
        </section>
        <section className="">
          <ul>
            <ul>{"Raised $335 of $1000"}</ul>
            <ul>{"You could be donation #6!"}</ul>
            <ul><button>Donate!</button></ul>
          </ul>
          
          <Progress totalDonations = {totalDonations}
          targetAmount = {targetAmount}/>
          {/* Donation Form */}
        </section>
      </main>
    </>
  );
}

export default App;
