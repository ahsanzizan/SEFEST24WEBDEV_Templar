import Image from 'next/image';

const menus: string[] = ['Home', 'About Us'];

export default function Navbar() {
  return (
    <nav className="fixed z-50 flex h-20 w-screen items-center justify-between bg-[#EA9715] px-20 text-[#FFFBF2]">
      <div className="flex items-center gap-x-2">
        <Image
          src="/dummy.jpeg"
          alt="Logo"
          width={500}
          height={500}
          className="h-10 w-10 rounded-full"
        />
        <p className="text-2xl font-semibold">FeedForward</p>
      </div>
      <div className="flex justify-between gap-x-10">
        {menus.map((menu, index) => (
          <p
            key={index}
            className="relative h-6 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:rounded-full after:bg-white after:transition-transform after:duration-200 after:ease-in-out hover:after:origin-left hover:after:scale-x-100"
          >
            {menu}
          </p>
        ))}
      </div>
      <div className="flex justify-between gap-x-8">
        <p>Login</p>
        <p>Register</p>
        <p>Dashboard</p>
      </div>
    </nav>
  );
}
