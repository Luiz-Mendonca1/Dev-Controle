import Link from "next/link";
import { FiUser, FiLogOut } from 'react-icons/fi';

export default function Header() {
    return (
        <header className="w-full h-20 bg-white border-b border-gray-100 shadow-sm">
            <div className="w-full max-w-7xl mx-auto h-full flex justify-between items-center px-4 sm:px-8">
                
                {/* Logo / Brand */}
                <Link href="/" className="group">
                    <h1 className="text-2xl font-bold text-gray-800 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
                        Dev<span className="text-blue-600 group-hover:text-gray-800 transition-colors duration-300">Controle</span>
                    </h1>
                </Link>
                
                {/* Actions */}
                <div className="flex items-center gap-4">
                    {/* Botão Perfil - Com fundo suave ao passar o mouse */}
                    <Link href="/dashboard">
                        <div className="p-2 rounded-full text-gray-500 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 cursor-pointer" title="Minha Conta">
                            <FiUser size={24} />
                        </div>
                    </Link>

                    {/* Divisor vertical (opcional) */}
                    <div className="h-6 w-px bg-gray-200"></div>

                    {/* Botão Logout - Com destaque de perigo/saída */}
                    <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-300">
                        <span className="hidden sm:inline">Sair</span>
                        <FiLogOut size={20} />
                    </button>
                </div>
            </div>
        </header>
    );
}