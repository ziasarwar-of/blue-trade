import Image from "next/image";

export default function Profile() {
  return (
    <button className="w-11 h-11 rounded-full overflow-hidden border-2 border-gray-600 hover:border-blue-500 transition">
      <Image
        src="/ziapic.jpg"
        alt="Profile"
        width={44}
        height={44}
        className="w-full h-full object-cover"
      />
    </button>
  );
}
