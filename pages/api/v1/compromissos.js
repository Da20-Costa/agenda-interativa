import compromisso from 'src/models/compromisso.js'
import { diasSemana } from 'src/utils/constants.js'

export default function handler(request, response) {
  if (request.method === 'GET') {
    const compromissos = compromisso.listarTodosCompromissos()

    return response.status(200).json(compromissos)
  }

  if (request.method === 'POST') {
    const { titulo, data, descricao } = request.body

    if (!titulo || titulo.length > 100) {
      return response.status(400).json({
        erro: 'O título é obrigatório e deve ter no máximo 100 caracteres.',
      })
    }

    const diasValidos = diasSemana
    if (!data || !diasValidos.includes(data)) {
      return response.status(400).json({
        erro: 'Data inválida. Use um dia da semana válido (ex: Segunda, Terça...).',
      })
    }

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

  if (request.method === 'PUT') {
    const { id, titulo, descricao, data, concluido } = request.body

    if (!id || !titulo || !data) {
      return response
        .status(400)
        .json({ erro: 'ID, título e data são obrigatórios.' })
    }

    try {
      compromisso.editarCompromisso(id, titulo, descricao, data, concluido)

      return response
        .status(200)
        .json({ mensagem: 'Compromisso atualizado com sucesso!' })
    } catch (error) {
      console.error(error)
      return response
        .status(500)
        .json({ erro: 'Erro interno ao atualizar compromisso.' })
    }
  }

  return response.status(405).json({
    erro: 'Método não permitido',
  })
}
