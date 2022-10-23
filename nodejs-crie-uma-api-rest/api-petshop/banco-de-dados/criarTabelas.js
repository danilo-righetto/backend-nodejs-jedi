const ModeloTabela = require('../rotas/fornecedores/ModeloTabelaFornecedor')

ModeloTabela.sync().then(() => console.log('Tabela Criado com sucesso')).catch(console.log)