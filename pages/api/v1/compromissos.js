import compromisso from 'src/models/compromisso.js'

export default function handler(request, response) {
  if (request.method === 'GET') {
    const compromissos = compromisso.listarTodosCompromissos()

    return response.status(200).json(compromissos)
  }

  if (request.method === 'POST') {
    const { titulo, data, descricao } = request.body

    compromisso.criarCompromisso({ titulo, data, descricao })

    return response.status(201).json({
      mensagem: 'Compromisso salvo com sucesso! ',
    })
  }

  if (request.method === 'DELETE') {
    const { id } = request.query

    compromisso.removerCompromisso(id)

    return response.status(204).end()
  }

  return response.status(405).json({
    erro: 'Método não permitido',
  })
}
