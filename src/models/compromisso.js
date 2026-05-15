import sql from 'infra/database.js'

async function listarTodosCompromissos() {
  return await sql`SELECT * FROM compromissos ORDER BY data ASC`
}

async function criarCompromisso({ titulo, data, descricao }) {
  const [novoCompromisso] = await sql`
    INSERT INTO compromissos (titulo, data, descricao)
    VALUES (${titulo}, ${data}, ${descricao})
    RETURNING id
  `
  return novoCompromisso.id
}

async function removerCompromisso(id) {
  await sql`DELETE FROM compromissos WHERE id = ${id}`
}

async function editarCompromisso(id, titulo, descricao, data, concluido) {
  await sql`
    UPDATE compromissos
    SET titulo = ${titulo}, descricao = ${descricao}, data = ${data}, concluido = ${concluido}
    WHERE id = ${id}
  `
}

const compromisso = {
  listarTodosCompromissos,
  criarCompromisso,
  removerCompromisso,
  editarCompromisso,
}

export default compromisso
