import db from 'infra/database.js'

export default function handler(request, response) {
  if (request.method === 'GET') {
    const compromissos = db.prepare('SELECT * FROM compromissos').all()

    return response.status(200).json(compromissos)
  }

  if (request.method === 'POST') {
    const { titulo, data, descricao } = request.body

    const stmt = db.prepare(
      'INSERT INTO compromissos (titulo, data, descricao) VALUES (?, ?, ?)',
    )
    stmt.run(titulo, data, descricao)

    return response.status(201).json({
      mensagem: 'Compromisso salvo com sucesso! ',
    })
  }

  return response.status(405).json({
    erro: 'Método não permitido',
  })
}
