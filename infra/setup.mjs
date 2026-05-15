import postgres from 'postgres'
import 'dotenv/config'
async function configurarBanco() {
  console.log('⏳ Conectando ao Neon e configurando o Banco de Dados...')

  const sql = postgres(process.env.DATABASE_URL, { ssl: 'require' })

  try {
    await sql`
      CREATE TABLE IF NOT EXISTS compromissos (
        id SERIAL PRIMARY KEY,
        titulo TEXT NOT NULL,
        data TEXT NOT NULL,
        descricao TEXT,
        concluido BOOLEAN DEFAULT false
      )
    `
    console.log('✅ Tabelas criadas com sucesso no Neon!')
  } catch (error) {
    console.error('❌ Erro ao configurar o banco:', error)
  } finally {
    await sql.end()
  }
}

configurarBanco()
