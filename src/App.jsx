// import Profile from "./components/Porfile";
// import button from "./components/UI/Button";

const data = [
  { id: "1a", name: "Monstera", avatar: "https://i.pravatar.cc/150?img=3", connected: false },
  { id: "1b", name: "Ficus lyrata", avatar: "https://i.pravatar.cc/150?img=3", connected: true },
  { id: "2a", name: "Calathea", avatar: "https://i.pravatar.cc/150?img=3", connected: true },
  { id: "2b", name: "Olivier", avatar: "https://i.pravatar.cc/150?img=3", connected: true },
];








function Profile({ metier, photo, nom, connected }) {
  const statusColor = connected ? "bg-green-500 : bg-red-500";
  return (
    <div>
      <img src={photo} alt="photo de profil" />
      <div>
        <h1>{nom}</h1>
        <p>{metier}</p>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
      </svg>
    </div>
  )

}


function App() {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">Room</h1>
        <h2>5 people are around right now</h2>
      </div>
      <Profile
        photo="https://i.pravatar.cc/300"
        nom="Dale Houston"
        metier="Software Engineer"
      />
      <Profile
        photo="https://i.pravatar.cc/300"
        nom="Dale Houston"
        metier="Software Engineer"
      />
      <Profile
        photo="https://i.pravatar.cc/300"
        nom="Dale Houston"
        metier="Software Engineer"
      />
      <Profile
        photo="https://i.pravatar.cc/300"
        nom="Dale Houston"
        metier="Software Engineer"
      />





    </>

  )

}

export default App
