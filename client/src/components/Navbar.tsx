'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { LayoutGrid, Home } from 'lucide-react';
import { clsx } from 'clsx';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Projects', href: '/projects', icon: LayoutGrid },
  ];

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center">
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center gap-2 px-4 py-3
          bg-[#111827]/80 backdrop-blur-xl
          border border-gray-800
          rounded-full shadow-lg"
      >
        {/* Brand */}
        <div className="flex items-center gap-2 pr-4 border-r border-gray-800">
          <div className="w-8 h-8 rounded-full bg-linear-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
            AK
          </div>
          <span className="hidden sm:block text-sm font-semibold text-gray-200">
            Amit Kumar
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-1 pl-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  'relative px-4 py-2 rounded-full text-sm font-medium transition flex items-center gap-2',
                  isActive
                    ? 'text-white'
                    : 'text-gray-400 hover:text-indigo-400'
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-gray-800 rounded-full -z-10"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <Icon size={16} />
                <span className="hidden sm:inline">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </motion.nav>
    </div>
  );
}
