export default function AvatarStack({ users }) {
  return (
    <div className="flex -space-x-2">
      {users.map((img, i) => (
        <img
          key={i}
          src={`/avatars/${img}`}
          className="w-6 h-6 rounded-full border-2 border-white object-cover"
          alt=""
        />
      ))}
    </div>
  );
}
