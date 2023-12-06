const getDonationTotal = (donations) => {
    return donations.reduce((sum, donation) => sum + parseInt(donation.amount), 0);
}

export default getDonationTotal;