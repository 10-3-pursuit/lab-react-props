// export default function Progress() {
//   return null;
// }



const Progress = (props) => {
  const total = props.donations.reduce((acc, current) => {
    acc += current.amount
    return acc
  }, 0)

  return (
    <div>
      <section className="progress">
        <h2>
          Raised <span className="secondary">${total}</span> of 
          <span className="secondary">${props.targetAmount}</span>
        </h2>
      </section>
    </div>
  )
}

export default Progress