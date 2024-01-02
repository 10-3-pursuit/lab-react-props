import { donations } from "../App"


 function RecentDonations() {

 

  return (
   <>
   <section className= "sidebar"> Recent Donations
   <ul>
    {donations.map((donation) => (
      <li key={donation.id}>
        {donation.amount} -  {donation.name}
      </li>
    ))}

   </ul>
   </section>
   </>
  )
}


export default RecentDonations