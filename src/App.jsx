import FriendList from "./components/FriendList";
import FormAddFriend from "./components/FormAddFriend";
import Button from "./components/Button";
import FormSplitBill from "./components/FormSplitBill";
import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Cagatay",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Ceyda",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Selim",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);
  console.log(selectedFriend);
  console.log("Rendered");

  function handleSplitBill(value) {
    console.log(value);
    setFriends((prevFriends) =>
      prevFriends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
  }

  function handleSelectedFriend(friend) {
    setSelectedFriend((prevFriend) => {
      if (friend.id === prevFriend?.id) return null;
      return friend;
    });
    setShowAddFriend(false);
  }

  function handleShowAddFriend() {
    setShowAddFriend((prev) => !prev);
  }

  function handleAddFriend(newFriend) {
    setFriends((prevFriends) => {
      const updatedFriends = [...prevFriends];
      updatedFriends.push(newFriend);
      return updatedFriends;
    });
    setShowAddFriend(false);
  }
  return (
    <>
      <div className="app">
        <div className="sidebar">
          <FriendList
            friends={friends}
            onSelectedFriend={handleSelectedFriend}
            selectedFriend={selectedFriend}
          />
          {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
          <Button onClick={handleShowAddFriend}>
            {showAddFriend ? "Close" : "Add friend"}
          </Button>
        </div>
        {selectedFriend && (
          <FormSplitBill
            selectedFriend={selectedFriend}
            onSplitBill={handleSplitBill}
          />
        )}
      </div>
    </>
  );
}

export default App;
