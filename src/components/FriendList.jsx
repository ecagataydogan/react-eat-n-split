import Friend from "./Friend";
export default function FriendList({
  friends,
  onSelectedFriend,
  selectedFriend,
}) {
  return (
    <ol>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          onSelectedFriend={onSelectedFriend}
          selectedFriend={selectedFriend}
        />
      ))}
    </ol>
  );
}
