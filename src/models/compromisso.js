import db from 'infra/database.js'

function listarTodosCompromissos() {
  return db.prepare(`SELECT * FROM compromissos`).all()
}

function criarCompromisso({ titulo, data, descricao }) {
  const stmt = db.prepare(
    `INSERT INTO compromissos (titulo, data, descricao) VALUES (?, ?, ?)`,
  )
  const info = stmt.run(titulo, data, descricao)
  return info.lastInsertRowid
}

function removerCompromisso(id) {
  const stmt = db.prepare(`DELETE FROM compromissos WHERE id = ?`)
  stmt.run(id)
}

function editarCompromisso(id, titulo, decricao, data, concluido) {
  const stmt = db.prepare(
    `UPDATE compromissos SET titulo = ?, descricao = ?, data = ?, concluido = ? WHERE id = ?`,
  )

  stmt.run(titulo, decricao, data, concluido, id)
}

const compromisso = {
  listarTodosCompromissos,
  criarCompromisso,
  removerCompromisso,
  editarCompromisso,
}

export default compromisso
