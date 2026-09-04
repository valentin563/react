import Profile from "./components/Porfile";

function User(age, name) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age : {age}</p>
    </div>
  )

}


function App() {
  return (
    <>
      <User name="Heddy Lamarr" age{101} />
    </>

  )

}

export default App
