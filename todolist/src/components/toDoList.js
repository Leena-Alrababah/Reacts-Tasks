import { useState } from "react";

export default function List() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([]);

  const handleAddArtist = () => {
    if (name.trim() === "") {
      return;
    }
    setArtists([...artists, { id: artists.length, name }]);
    setName("");
  };

  const handleDeleteArtist = (id) => {
    setArtists(artists.filter((artist) => artist.id !== id));
  };

  return (
    <>
      <h1>To Do List:</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Add a Task"
      />
      <button onClick={handleAddArtist}>Add</button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>
            {artist.name}{" "}

            
            <button
              onClick={() => handleDeleteArtist(artist.id)}
              style={{
                backgroundColor: "#ff0000",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
                transition: "background-color 0.3s ease", // Add a smooth transition for hover effect
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#cc0000")} // Change background color on hover
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#ff0000")} // Reset background color when not hovered
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
