import Image from 'next/image';
import Link from 'next/link';

const menus: { href: string; title: string }[] = [
  { href: '/admin', title: 'Dashboard' },
  { href: '/admin/user', title: 'Users' },
  { href: '/admin/user', title: 'Donations' },
  { href: '/admin/user', title: 'Organizations' },
  { href: '/admin/user', title: 'Events' }
];

export default function Sidebar() {
  return (
    <aside className="fixed flex h-screen w-[300px] flex-col gap-y-4 bg-accent p-4 text-primary rounded-r-3xl">
      <div className="flex items-center gap-x-2">
        <Image
          src="/dummy.jpeg"
          alt="Logo"
          width={500}
          height={500}
          className="h-10 w-10 rounded-full"
        />
        <p className="text-2xl font-semibold">Admin Panel</p>
      </div>
      <div className="h-0.5 w-full bg-primary"></div>
      {menus.map((menu, index) => (
        <Link
          key={index}
          className="relative h-7 text-lg after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:rounded-full after:bg-white after:transition-transform after:duration-200 after:ease-in-out hover:after:origin-left hover:after:scale-x-100"
          href={menu.href}
        >
          {menu.title}
        </Link>
      ))}
    </aside>
  );
}
