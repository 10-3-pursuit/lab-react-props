import React from 'react';

const DonationForm = ({ addDonation, donations }) => {
  const nextDonationNumber = donations.length + 1;

  const handleSubmit = (e) => {
    e.preventDefault();

    const newDonation = {
      amount: e.target.amount.value,
      caption: e.target.caption.value,
      id: nextDonationNumber,
      name: e.target.name.value,
    };

    addDonation(newDonation);

    e.target.reset();
  };

  return (
    <section className="donation-form">
      <h2>You could be donation #{nextDonationNumber}!</h2>
      
      <form onSubmit={handleSubmit}>
        <label>
          Amount:
          <input type="number" name="amount" required />
        </label>
        <label>
          
        <input type="text" name="name" required />
        Name:
        </label>
        <button type="submit">Donate</button>
      </form>
    </section>
  );
};

export default DonationForm;
