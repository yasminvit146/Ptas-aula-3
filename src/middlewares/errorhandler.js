function erroFormat(status, titulo, detalhe) {
  return { status, titulo, detalhe, timestamp: new Date().toISOString() }
}

// handler centralizado: TODO throw do Express cai aqui
app.use((err, req, res, next) => {
  res.status(err.status || 500).json(
    erroFormat(err.status || 500, err.titulo || 'Erro interno', err.message)
  )
})