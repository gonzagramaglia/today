import Link from 'next/link';
import { Home, Compass } from 'lucide-react';
import Footer from './components/footer';

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative flex-grow flex flex-col items-center justify-center text-center px-4">
        {/* Background glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-[100px] pointer-events-none -z-10" />

        {/* Main content container with glassmorphism */}
        <div className="relative p-12 rounded-3xl bg-white/40 dark:bg-neutral-900/40 backdrop-blur-xl border border-white/20 dark:border-neutral-800/30 shadow-2xl transition-all hover:shadow-blue-500/10">
          
          {/* Large subtle background text */}
          <div className="absolute inset-0 flex items-center justify-center text-[12rem] md:text-[15rem] font-black text-neutral-900/[0.03] dark:text-white/[0.02] pointer-events-none select-none z-0 overflow-visible">
            404
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="p-4 bg-white dark:bg-neutral-800 rounded-2xl shadow-sm mb-8">
              <Compass className="w-12 h-12 text-[#6866D6]" strokeWidth={1.5} />
            </div>
            
            <h1 className="mb-2 text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-500 dark:from-white dark:to-neutral-400">
              Ups... Te perdiste
            </h1>
            
            <h2 className="mb-6 text-xl md:text-2xl font-medium text-neutral-600 dark:text-neutral-300">
              Página no encontrada
            </h2>
            
            <p className="mb-10 text-neutral-500 dark:text-neutral-400 max-w-md text-lg leading-relaxed">
              Parece que has llegado a un lugar que no existe en nuestro mapa. 
              No te preocupes, el camino a casa es fácil.
            </p>
            
            <Link 
              href="/"
              className="mt-4 flex items-center gap-3 px-8 py-4 bg-[#6866D6] hover:bg-[#5856c4] text-white rounded-full font-semibold shadow-[0_4px_20px_rgba(104,102,214,0.4)] transition-all hover:scale-105 active:scale-95 hover:shadow-[0_8px_30px_rgba(104,102,214,0.6)]"
            >
              <Home className="w-5 h-5 text-white" />
              <span className="text-white">Volver al inicio</span>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer wrapper with extra top margin to push it further down */}
      <div className="mt-12 md:mt-24 w-full">
        <Footer />
      </div>
    </div>
  )
}
