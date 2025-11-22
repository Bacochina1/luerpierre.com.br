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
          className="object-cover opacity-20 scale-105 animate-[pulse_15s_ease-in-out_infinite]" 
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
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 3.13 3.162.957.134 1.548.066 2.063.017.6-.058 1.847-.755 2.108-1.484.262-.729.262-1.354.184-1.485-.078-.13-.284-.208-.597-.365z"/></svg>
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