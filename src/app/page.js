'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { subscribeToNewsletter } from './actions'

export default function LueurPierrePage() {
  const router = useRouter()
  const [status, setStatus] = useState('idle')
  const [msg, setMsg] = useState('')
  const [acceptedTerms, setAcceptedTerms] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    
    if (!acceptedTerms) {
      setMsg('Por favor, aceite os termos para continuar.')
      setStatus('error')
      return
    }

    setStatus('loading')
    const formData = new FormData(event.target)
    const result = await subscribeToNewsletter(formData)
    
    if (result.error) {
      setStatus('error')
      setMsg(result.error)
    } else {
      setStatus('success')
      router.push('/obrigado')
    }
  }

  return (
    <main className="min-h-screen relative bg-[#020202] text-white font-sans overflow-hidden selection:bg-white selection:text-black">
      
      {/* --- 1. BANNER FIXO --- */}
      <nav className="fixed top-0 left-0 w-full h-16 bg-black z-50 flex items-center justify-center border-b border-white/5 shadow-lg">
     <Image 
                    src="/logo.png" 
                    alt="LUEUR PIERRE" 
                    width={200} 
                    height={80} 
                    className="w-[190px] h-auto object-contain"
                  />
      </nav>

      {/* --- 2. FUNDO --- */}
      <div className="fixed inset-0 z-0 mt-16">
        <Image 
          src="/bg.png" 
          alt="Background" 
          fill
          className="object-cover opacity-30 animate-[pulse_10s_ease-in-out_infinite]" 
          priority
        />
        <div className="absolute inset-0 lg:bg-gradient-to-r bg-gradient-to-b from-black via-[#050505]/50 to-black/30" />
      </div>

      {/* --- 3. CONTEÚDO --- */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-screen">
        
        {/* --- ESQUERDA --- */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 animate-[fadeIn_1s_ease-out]">
          
          <div className="space-y-6 max-w-3xl">
            <div className="flex flex-col gap-2 border-l-0 lg:border-l-2 border-[#702963] pl-0 lg:pl-4">
              <span className="text-[#702963] text-sm tracking-[0.3em] uppercase font-medium">
                Simplesmente deslumbrante.
              </span>
              <span className="text-stone-400 text-[10px] tracking-[0.15em] uppercase font-bold">
                Moda íntima de alta elegância
              </span>
            </div>

            <h1 className="text-2xl md:text-4xl lg:text-5xl font-light leading-snug tracking-wide text-white">
              A sofisticação francesa desembarca no Brasil com peças que elevam a feminilidade de forma discreta, sensual e natural.
            </h1>
            
            <p className="text-xl md:text-2xl font-serif italic text-stone-400">
              A beleza real nunca esteve tão elegante.
            </p>
          </div>
        </div>

        {/* --- DIREITA (FORMULÁRIO CORRIGIDO) --- */}
        <div className="lg:col-span-5 w-full max-w-md mx-auto lg:ml-auto animate-[fadeIn_1s_ease-out_0.4s_both]">
          <div className="relative bg-[#0a0a0a]/80 border border-white/10 p-8 md:p-10 rounded-sm shadow-2xl backdrop-blur-md">
            
            <div className="mb-8 text-center lg:text-left border-b border-white/5 pb-4">
              <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-1">
                Lista Exclusiva
              </h2>
              <p className="text-[10px] text-stone-400 uppercase tracking-widest">
                Acesso antecipado à coleção
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              <div className="space-y-5">
                <div className="group">
                  <input name="name" type="text" required disabled={status === 'loading'} placeholder="Nome Completo" 
                    className="w-full py-3 bg-transparent border-b border-stone-700 text-white placeholder:text-stone-400 focus:border-white focus:outline-none transition-colors font-light text-sm" />
                </div>
                
                <div className="group">
                  <input name="phone" type="tel" required disabled={status === 'loading'} placeholder="WhatsApp / Telefone" 
                    className="w-full py-3 bg-transparent border-b border-stone-700 text-white placeholder:text-stone-400 focus:border-white focus:outline-none transition-colors font-light text-sm" />
                </div>
                
                <div className="group">
                  <input name="email" type="email" required disabled={status === 'loading'} placeholder="E-mail Principal" 
                    className="w-full py-3 bg-transparent border-b border-stone-700 text-white placeholder:text-stone-400 focus:border-white focus:outline-none transition-colors font-light text-sm" />
                </div>
              </div>

              {/* --- TERMOS CORRIGIDOS (CHECKBOX PERSONALIZADO) --- */}
              <div 
                className="flex items-start gap-3 mt-2 cursor-pointer group" 
                onClick={() => setAcceptedTerms(!acceptedTerms)}
              >
                {/* O Checkbox Visual */}
                <div className={`
                  mt-0.5 w-4 h-4 border transition-all flex items-center justify-center shrink-0
                  ${acceptedTerms ? 'bg-white border-white' : 'bg-transparent border-stone-600 group-hover:border-stone-400'}
                `}>
                  {acceptedTerms && (
                    <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                
                {/* O Texto */}
                <label className="text-[10px] text-stone-500 cursor-pointer text-left leading-tight group-hover:text-stone-300 transition-colors select-none">
                  Concordo com a <span className="underline decoration-stone-600">Política de Privacidade</span> e em receber convites exclusivos.
                </label>
                
                {/* Input Invisível para acessibilidade */}
                <input 
                  type="checkbox" 
                  id="terms" 
                  checked={acceptedTerms} 
                  onChange={(e) => setAcceptedTerms(e.target.checked)} 
                  className="hidden" 
                />
              </div>

              <button type="submit" disabled={status === 'loading'} 
                className="mt-4 w-full py-4 bg-white text-black hover:bg-stone-200 transition-all uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold shadow-lg shadow-white/5">
                {status === 'loading' ? 'ENVIANDO...' : 'ENTRAR PARA A LISTA DE ESPERA'}
              </button>

              {status === 'error' && <p className="text-red-400 text-[10px] text-center border-l-2 border-red-500 pl-2">{msg}</p>}
            </form>
          </div>
        </div>

      </div>
      
      <footer className="absolute bottom-4 w-full text-center z-10 pb-4 lg:pb-0">
         <p className="text-[9px] text-stone-500 tracking-[0.3em] uppercase">Lueur Pierre © 2025</p>
      </footer>
    </main>
  )
}