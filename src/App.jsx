import React from "react";
import TopBar from "./Components/TopBar";
import "./App.css";
import DonationForm from "./Components/DonationForm";
import RecentDonations from "./Components/RecentDonations";
import Progress from "./Components/Progress";

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

function App() {
  // const totalDonation = donations.reduce(
  //   (acc, curr) => acc.amount + curr.amount,
  //   0
  // );
  // console.log(totalDonation);
  const potentialDonor = donations.length + 1;
  const totalDonations = donations
    .map((ele) => ele.amount)
    .reduce((acc, curr) => acc + curr, 0);
  // console.log(totalDonations);
  return (
    <>
      <TopBar />
      <main className="container">
        <section className="sidebar">
          {/* Recent Donations */}
          <RecentDonations donations={donations} />
        </section>
        <section className="">
          {/* Progress */}
          <Progress
            totalDonations={totalDonations}
            targetAmount={targetAmount}
          />
          {/* Donation Form */}
          <DonationForm potentialDonor={potentialDonor} />
        </section>
      </main>
    </>
  );
}

export default App;
