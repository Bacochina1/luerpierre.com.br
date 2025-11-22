'use server'

export async function subscribeToNewsletter(formData) {
  const email = formData.get('email')
  const name = formData.get('name')
  const phone = formData.get('phone')

  if (!email || !email.includes('@')) return { error: 'E-mail inválido.' }
  if (!name) return { error: 'O nome é obrigatório.' }

  const API_KEY = process.env.MAILCHIMP_API_KEY
  const LIST_ID = process.env.MAILCHIMP_AUDIENCE_ID
  const DATACENTER = process.env.MAILCHIMP_SERVER_PREFIX
  
  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `apikey ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        // MUDANÇA AQUI: 'subscribed' faz o contato entrar direto na lista
        status: 'subscribed', 
        merge_fields: {
          FNAME: name,
          PHONE: phone
        },
        tags: ['LP-HOME'] 
      }),
    })

    // Se der erro, vamos ler o que o Mailchimp disse
    if (response.status >= 400) {
      const data = await response.json()
      
      console.log("ERRO MAILCHIMP:", data) // <-- Olhe no seu terminal do VS Code

      if (data.title === 'Member Exists') {
        return { error: 'Este e-mail já está cadastrado.' }
      }
      
      // Erros comuns de validação
      if (data.detail && data.detail.includes('fake')) {
        return { error: 'O Mailchimp bloqueou este e-mail (parece falso).' }
      }

      return { error: 'Erro ao salvar. Tente outro e-mail.' }
    }

    return { success: true }
  } catch (error) {
    console.error(error)
    return { error: 'Erro de conexão com o servidor.' }
  }
}