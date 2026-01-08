"use client"

import Link from "next/link";
import { FiUser, FiLogOut, FiSun } from 'react-icons/fi';
import { MdOutlineDarkMode } from 'react-icons/md';
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Header() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <header className="w-full h-20 bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800 shadow-sm transition-colors duration-300">
            <div className="w-full max-w-7xl mx-auto h-full flex justify-between items-center px-4 sm:px-8">
                
                <Link href="/" className="group">
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white tracking-tight group-hover:text-blue-600 transition-colors duration-300">
                        Dev<span className="text-blue-600 group-hover:text-gray-800 dark:group-hover:text-white transition-colors duration-300">Controle</span>
                    </h1>
                </Link>
                
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 cursor-pointer"
                    >
                        {theme === 'dark' ? <FiSun size={24} /> : <MdOutlineDarkMode size={24} />}
                    </button>

                    <div className="h-6 w-px bg-gray-200 dark:bg-slate-700"></div>

                    <Link href="/dashboard">
                        <div className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 cursor-pointer">
                            <FiUser size={24} />
                        </div>
                    </Link>

                    <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-slate-800 rounded-lg transition-all duration-300">
                        <span className="hidden sm:inline">Sair</span>
                        <FiLogOut size={20} />
                    </button>
                </div>
            </div>
        </header>
    );
}