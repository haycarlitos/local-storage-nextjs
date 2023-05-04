import { useEffect, useState } from "react"

export default function Home() {
  // Set the value received from the local storage to a local state
  const [favoriteNumber, setFavoriteNumber] = useState("")

  useEffect(() => {
    let value
    // Get the value from local storage if it exists
    value = localStorage.getItem("favoriteNumber") || ""
    setFavoriteNumber(value)
  }, [])

  // When user submits the form, save the favorite number to the local storage
  const saveToLocalStorage = e => {
    e.preventDefault()
    localStorage.setItem("favoriteNumber", favoriteNumber)
  }

  // Add a class to the input element based on the value of favoriteNumber
  const inputClass = favoriteNumber === "" || isNaN(favoriteNumber) ? "" : "error";

  return (
    <div>
      <label htmlFor="number">Your favorite number</label>
      <form onSubmit={saveToLocalStorage}>
        <input
          id="number"
          value={favoriteNumber}
          onChange={e => setFavoriteNumber(e.target.value)}
          className={inputClass} // Set the class of the input element based on favoriteNumber
        />
        <input type="submit" value="Save" />
      </form>
      {/* Set the CSS style for the error class */}
      <style jsx>{`
        .error {
          color: red;
        }
      `}</style>
    </div>
  )
}
