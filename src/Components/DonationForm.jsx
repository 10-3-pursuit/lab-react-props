export default function DonationForm({DonationNumber}) {
  return (
    <>
    <h3>You could be donation <span className="secondary">#{DonationNumber}!</span></h3>
    <form>
     <label htmlFor="name"
      >Name<br/><input
        id="name"
        name="name"
        type="text"
        placeholder="Your name..." /><br /></label
    ><br/><label htmlFor="caption"
      >Caption,<br /><input
        id="caption"
        name="caption"
        type="text"
        placeholder="Add a brief message..." /><br/></label
    ><br/><label htmlFor="amount"
      >Amount, <br /><input
        id="amount"
        name="amount"
        type="number"
        placeholder="0" /></label
    ><br /><button>Donate!</button>
  </form>
  </>
  )
}
