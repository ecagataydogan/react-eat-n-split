import { useState } from "react";
import Button from "./Button.jsx";

export default function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");

  function handleFormAddSubmit(e) {
    e.preventDefault();
    if (!name || !img) return;
    const newFriend = {
      name,
      img: "https://i.pravatar.cc/48?=1",
      balance: 0,
      id: crypto.randomUUID(),
    };

    onAddFriend(newFriend);
    setName("");
    setImg("");
  }

  return (
    <form className="form-add-friend" onSubmit={(e) => handleFormAddSubmit(e)}>
      <label> 🐵 Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label> 🎆 Image URL</label>
      <input type="text" value={img} onChange={(e) => setImg(e.target.value)} />
      <Button>Add</Button>
    </form>
  );
}
