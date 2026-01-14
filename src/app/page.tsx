import atendimento from '../../public/atendimento.png';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-950 flex items-center justify-center p-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div className="space-y-6 text-center md:text-left">
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Gerencie sua empresa de forma <span className="text-blue-600 dark:text-blue-500">simples</span>
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Controle total sobre seus atendimentos, clientes e serviços em um só lugar.
          </p>

          
        </div>

        <div className="relative">
          <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 dark:opacity-30 transition-opacity"></div>
          
          <img 
            src={atendimento.src} 
            alt="Ilustração de atendimento ao cliente" 
            className="relative w-full h-auto rounded-2xl shadow-xl border border-gray-100 dark:border-slate-800 transition-all"
          />
        </div>

      </div>
    </main>
  );
}