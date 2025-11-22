import Link from 'next/link'
import Image from 'next/image'

// 1. CONFIGURAÇÃO DO TÍTULO DA PÁGINA
export const metadata = {
  title: 'Inscrição Confirmada — LUEUR PIERRE',
  description: 'Você está dentro. Complete os passos finais.',
}

export default function ThankYouPage() {
  return (
    <main className="min-h-screen relative flex flex-col items-center justify-center bg-[#020202] text-white font-sans p-6 overflow-hidden selection:bg-white selection:text-black">
      
      {/* --- 2. FUNDO CINEMÁTICO (Dark e Coeso) --- */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/bg.png" 
          alt="Background" 
          fill
          className="object-cover opacity-[0.6] scale-105 animate-[pulse_15s_ease-in-out_infinite]" 
          priority
        />
        {/* Overlay pesado para garantir o fundo escuro */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#050505]/90 to-black" />
      </div>

      {/* --- 3. CONTEÚDO CENTRAL --- */}
      <div className="relative z-10 w-full max-w-2xl animate-[fadeIn_1s_ease-out]">
        
        <div className="backdrop-blur-3xl bg-[#0a0a0a]/80 border border-white/10 p-8 md:p-12 rounded-sm shadow-2xl ring-1 ring-white/5 text-center">
          
          {/* Header: Logo e Slogan */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-32 md:w-40 mb-6 opacity-90 hover:opacity-100 transition-opacity">
              <Image 
                src="/logo.png" 
                alt="LUEUR PIERRE" 
                width={200} 
                height={80} 
                className="w-full h-auto object-contain"
              />
            </div>
            {/* Texto traduzido e cor ajustada para branco/cinza */}
            <p className="text-stone-400 text-[10px] md:text-xs tracking-[0.3em] uppercase font-medium border-b border-white/10 pb-2">
              Simplesmente deslumbrante
            </p>
          </div>

          {/* Título Principal */}
          <h1 className="text-3xl md:text-5xl font-serif italic text-white mb-4">
            Inscrição confirmada.
          </h1>
          <p className="text-stone-400 font-light text-base md:text-lg mb-10 leading-relaxed">
            Obrigada por entrar no universo da <span className="font-medium text-white">LUEUR PIERRE</span>.
            <br className="hidden md:block"/> Agora, complete os dois passos finais:
          </p>

          {/* --- PASSO 01: WHATSAPP (DESTAQUE MONOCROMÁTICO) --- */}
          <div className="mb-8 p-[1px] rounded-sm bg-gradient-to-r from-stone-800 via-stone-600 to-stone-800">
            <div className="bg-[#0a0a0a] p-6 md:p-8 relative group overflow-hidden rounded-sm">
              
              {/* Brilho de Fundo muito sutil (quase imperceptível) */}
              <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors duration-500"></div>
              
              <div className="relative z-10 flex flex-col items-center">
                <span className="inline-block px-3 py-1 mb-3 text-[9px] uppercase tracking-[0.2em] font-bold text-black bg-white rounded-full">
                  Passo 01
                </span>
                <h2 className="text-xl md:text-2xl font-light mb-2 text-white">
                  Entre na Comunidade Privé
                </h2>
                <p className="text-stone-500 text-sm mb-6 max-w-md mx-auto leading-relaxed">
                  Acesso reservado para receber novidades, prévias e avisos importantes.
                  <span className="block text-stone-600 text-xs mt-2 italic">Grupo silencioso, sem notificações desnecessárias.</span>
                </p>

                <a 
                  href="https://chat.whatsapp.com/GU8ODkx4uWE7otUf9vQS6y" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black hover:bg-stone-200 transition-all duration-500 uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold shadow-lg shadow-white/5 transform hover:-translate-y-1"
                >
                  <span>Entrar no Grupo Privé</span>
                </a>
              </div>
            </div>
          </div>

          {/* --- PASSO 02: E-MAIL (Secundário) --- */}
          <div className="flex flex-col items-center border-t border-white/5 pt-8">
            <span className="text-[10px] uppercase tracking-widest text-stone-600 mb-2 font-bold">Passo 02</span>
            <h3 className="text-lg font-light text-stone-200 mb-1">Verifique seu E-mail</h3>
            <p className="text-stone-600 text-xs max-w-xs">
              Enviamos a confirmação e as próximas orientações. 
              Marque como importante para não perder nenhuma novidade.
            </p>
          </div>

          {/* Footer Link */}
          <div className="pt-12">
            <Link 
              href="/" 
              className="inline-block text-[9px] uppercase tracking-[0.25em] text-stone-700 border-b border-transparent hover:border-white/20 hover:text-stone-400 transition-all pb-1"
            >
              Voltar ao Site
            </Link>
          </div>

        </div>
      </div>
    </main>
  )
}