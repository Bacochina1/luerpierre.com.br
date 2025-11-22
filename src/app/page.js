'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation' // Importando o roteador
import Image from 'next/image'
import { subscribeToNewsletter } from './actions'

export default function LueurPierrePage() {
  const router = useRouter() // Inicializando o roteador
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
      // REDIRECIONAMENTO: Manda o usuário para a página de agradecimento
      router.push('/obrigado')
    }
  }

  return (
    <main className="min-h-screen relative flex items-center justify-center bg-[#050505] text-white font-sans overflow-hidden selection:bg-[#702963] selection:text-white">
      
      {/* --- 1. IMAGEM DE FUNDO --- */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/bg.png" 
          alt="Background Luxury Lingerie" 
          fill
          className="object-cover opacity-80 animate-[pulse_10s_ease-in-out_infinite]" 
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent " />
      </div>

      {/* --- 2. GRID LAYOUT --- */}
      <div className="relative z-10 container mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full">
        
        {/* --- COLUNA DA ESQUERDA (BRANDING) --- */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-10 animate-[fadeIn_1s_ease-out]">
          <div className="w-40 md:w-56 opacity-90 hover:opacity-100 transition-opacity duration-700">
             <Image 
              src="/logo.png" 
              alt="LUEUR PIERRE" 
              width={300} 
              height={100} 
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>

          <div className="space-y-6 max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              <span className="text-[#702963] text-sm md:text-base tracking-[0.4em] uppercase block mb-4 font-medium border-l-2 border-[#702963] pl-4">
                Simplement éclatante
              </span>
              <span className="bg-gradient-to-br from-white via-stone-200 to-stone-400 bg-clip-text text-transparent drop-shadow-lg">
                A luz que revela <br />
                sua essência.
              </span>
            </h1>
            
            <p className="text-stone-400 text-lg md:text-xl leading-relaxed font-light max-w-lg">
              A sofisticação francesa encontra a naturalidade brasileira. 
              Cadastre-se para acesso antecipado à coleção de estreia.
            </p>
          </div>
        </div>

        {/* --- COLUNA DA DIREITA (FORMULÁRIO) --- */}
        <div className="lg:col-span-5 w-full max-w-md mx-auto lg:ml-auto animate-[fadeIn_1s_ease-out_0.4s_both]">
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#702963] to-stone-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative backdrop-blur-2xl bg-[#0a0a0a]/60 border border-white/10 p-8 md:p-12 rounded-sm shadow-2xl ring-1 ring-white/5">
              
              <div className="mb-10">
                <h2 className="text-xs uppercase tracking-[0.3em] text-[#702963] font-bold mb-2">Lista Exclusiva</h2>
                <h3 className="text-2xl text-white font-serif italic">Garanta seu acesso.</h3>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                
                {/* Nome */}
                <div className="relative group">
                  <input
                    name="name"
                    type="text"
                    required
                    disabled={status === 'loading' || status === 'success'}
                    placeholder=" "
                    className="peer w-full py-3 bg-transparent border-b border-stone-700 text-white placeholder-transparent focus:border-[#702963] focus:outline-none transition-all duration-300 font-light text-lg"
                  />
                  <label className="absolute left-0 -top-3.5 text-stone-500 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-stone-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[#702963] peer-focus:text-xs pointer-events-none">
                    Nome Completo
                  </label>
                </div>

                {/* Telefone */}
                <div className="relative group">
                  <input
                    name="phone"
                    type="tel"
                    required
                    disabled={status === 'loading' || status === 'success'}
                    placeholder=" "
                    className="peer w-full py-3 bg-transparent border-b border-stone-700 text-white placeholder-transparent focus:border-[#702963] focus:outline-none transition-all duration-300 font-light text-lg"
                  />
                  <label className="absolute left-0 -top-3.5 text-stone-500 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-stone-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[#702963] peer-focus:text-xs pointer-events-none">
                    WhatsApp / Telefone
                  </label>
                </div>

                {/* Email */}
                <div className="relative group">
                  <input
                    name="email"
                    type="email"
                    required
                    disabled={status === 'loading' || status === 'success'}
                    placeholder=" "
                    className="peer w-full py-3 bg-transparent border-b border-stone-700 text-white placeholder-transparent focus:border-[#702963] focus:outline-none transition-all duration-300 font-light text-lg"
                  />
                  <label className="absolute left-0 -top-3.5 text-stone-500 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-stone-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[#702963] peer-focus:text-xs pointer-events-none">
                    E-mail Principal
                  </label>
                </div>

                {/* Termos */}
                <div className="flex items-start gap-3 mt-4 group">
                  <div className="relative flex items-center">
                    <input 
                      type="checkbox" 
                      id="terms"
                      checked={acceptedTerms}
                      onChange={(e) => setAcceptedTerms(e.target.checked)}
                      disabled={status === 'loading' || status === 'success'}
                      className="peer h-4 w-4 cursor-pointer appearance-none border border-stone-600 bg-transparent checked:border-[#702963] checked:bg-[#702963] transition-all"
                    />
                    <svg className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <label htmlFor="terms" className="text-[10px] text-stone-500 cursor-pointer select-none leading-relaxed group-hover:text-stone-400 transition-colors">
                    Concordo com a <span className="text-white underline decoration-[#702963]/50 hover:decoration-[#702963]">Política de Privacidade</span> e em receber convites exclusivos da LUEUR PIERRE.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className="mt-6 w-full py-4 bg-white text-black hover:bg-[#702963] hover:text-white transition-all duration-500 uppercase tracking-[0.25em] text-xs font-bold shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(112,41,99,0.4)] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Processando...' : status === 'success' ? 'Redirecionando...' : 'Entrar na Lista'}
                </button>

                {status === 'error' && (
                  <p className="text-red-400 text-[10px] tracking-wide text-center border-l-2 border-red-500 pl-2 animate-pulse">
                    {msg}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>

      </div>
      
      <footer className="absolute bottom-4 w-full text-center z-10">
         <p className="text-[10px] text-stone-600 tracking-[0.3em] uppercase opacity-50">Lueur Pierre © 2025</p>
      </footer>
    </main>
  )
}