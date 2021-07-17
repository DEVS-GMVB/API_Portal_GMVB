const express = require('express');
const router = express.Router();
const multer = require('multer');
const multerConfig = require('../config/multer');
const multerConfigAssistencia = require('../config/multerAssistencia')
const ecxelConfig = require('../config/excel');
const UserController = require('../controllers/UserController');
const CadastroController = require('../controllers/CadastroController');
const PropostaController = require('../controllers/PropostaController');
const PreencherCamposController = require('../controllers/PreencherCamposController');
const ComissaoController = require('../controllers/ComissaoController');
const SaldoDevedorController = require('../controllers/SaldoDevedorController');
const HomeController = require('../controllers/HomeController');
const MargemController = require('../controllers/MargemController');
const SaldoFerController = require('../controllers/SaldoFerController');
const CancelamentoContreller = require('../controllers/CancelamentoController');
const AprovacaoPropostaController = require('../controllers/AprovacaoPropostaController');
const MargemGovernoController = require('../controllers/MargemGovernoController');
const ParceirosRestritosController = require('../controllers/ParceirosRestritosController');
const AtualizacaoClienteController = require('../controllers/AtualizacaoClienteController');
const AverbacaoGoiasController = require('../controllers/AverbacaoGoiasController');
const AutorizacaoInssController = require('../controllers/AutorizacaoInssController');
const ListaNegraController = require('../controllers/ListaNegraController');
const Service = require('../service/panService');
const ImobiliarioController = require('../controllers/ImobiliarioController');
const CancelamentoController = require('../controllers/CancelamentoController');
const SacController = require('../controllers/SacController');
const LancamentosController = require('../controllers/LancamentosController');
const ComunicadoController = require('../controllers/ComunicadoController');
const CalculadoraController = require('../controllers/CalculadoraController');
const RelatorioSemanalController = require('../controllers/RelatorioSemanalController');
const {
    ConsultarContratos
} = require('../service/panService');
const AssistenciaController = require('../controllers/AssistenciaController')
const RelatorioLogController = require('../controllers/RelatorioLogController');
const RelatorioSmsController = require('../controllers/RelatorioSmsController');
const RelatorioPendenciasController = require('../controllers/RelatorioPendenciasController');
const ControleFilasController = require("../controllers/ControleFilasController");
const PropostaBbController = require('../controllers/PropostaBbController');
const TblUsuarioController = require('../controllers/TblUsuarioController');
const PropostaAguardandoController = require('../controllers/PropostaAguardandoController');
const AntiFraudeController = require('../controllers/AntiFraudeController');
const RoboSimController = require('../controllers/RoboSimController');
const RelatorioSimController = require('../controllers/RelatorioSimController');
const AgendaReunioes = require('../controllers/AgendaReunioes');
//teste
router.get('/', (req, res) => {
    res.send('ok');
})

// rota para fazer login no portal
router.post('/login', UserController.Login);

//rota para envio de email de recuperação de senha/
router.post('/email', UserController.send);

//rota para alterar senha senha
router.post('/reset', UserController.update);

//Rota para buscar cpfs de gerente e supervisor
router.post('/buscar', UserController.BuscaCpf);

//Seta víncula em propostas
router.post('/vinculo', UserController.BuscaVinculo);

//pagina home 
router.post('/home', HomeController.Grafico)
//rotas para popular campos
router.post('/parceiros', PreencherCamposController.Parceiro);
router.post('/secundario', PreencherCamposController.Secundario);
router.post('/terceario', PreencherCamposController.Terceario)
router.get('/funcionario', PreencherCamposController.Funcionario);
router.get('/supervisor', PreencherCamposController.Supervisor);
router.get('/gerente', PreencherCamposController.Gerente);
router.get('/filial', PreencherCamposController.Filial);
router.get('/proposta/status', PreencherCamposController.Status);
router.get('/proposta/tipo', PreencherCamposController.Tipo);
router.get('/proposta/empresas', PreencherCamposController.Empresa);
router.get('/proposta/bancos', PreencherCamposController.Banco);
router.get('/proposta/substatus', PreencherCamposController.SubStatus);
router.get('/proposta/produto', PreencherCamposController.Produto);
router.get('/supervisormulti', PreencherCamposController.SupervisorMulti);
router.get('/comissao/promotor', PreencherCamposController.Promotor);
router.get('/comissao/status', PreencherCamposController.StausComissao);
router.get('/comissao/datagerente', PreencherCamposController.DataPagamentoGerente);
router.get('/comissao/datasupervisor', PreencherCamposController.DataPagamentoSupervisor);
router.get('/comissao/competencia', PreencherCamposController.Competencia);
router.get('/margem/status', PreencherCamposController.StatusMargem);
router.get('/bancoOrigi', PreencherCamposController.BancoOrigi);
router.get('/imobiliario/status', ImobiliarioController.StatusImobiliario);


// router.get('/banco',PreencherCamposController)

//pequisa de cadastros
router.post('/search', CadastroController.FullSearch);

// inclusão de cadastro 
router.post('/cadastro/inclusao', CadastroController.Create);

//cadastro de novo acesso no portal 
router.post('/cadastro/acesso', UserController.Create)
router.post('/cadastro/acesso/alterar', UserController.AlterarAceso);

//popular campos no modal de cadastro
router.post('/cadastro/modal', CadastroController.Modal)

//preencher modal de acessos
router.post('/cadastro/busca/acesso', UserController.PreencherAcesso)

//busca secundarios e tercearios


//busca cadastros para preencher acessos vinculados no cpf
router.post('/cadastro/buscar', UserController.BuscarAcesso);
router.post('/cadstro/alterar', CadastroController.Update);



router.post('/proposta/filtro', PropostaController.Interface);
router.post('/proposta/atualizar', PropostaController.AtualizarProposta)
router.post('/proposta/identificacao/filtro', PropostaController.FiltroPropostaIdentificacao)
router.post('/proposta/identificacao/inclusao', PropostaController.PropostaIdentificacaoCreate)
router.post('/proposta/identificacao/atualizar', PropostaController.UpdateIdentificacaoPropostaCampos)
router.post('/proposta/identificacao/modal', PropostaController.PropostaIdentificacaoModal)
router.post('/proposta/identificacao/atualizar/arquivos', multer(multerConfig).fields([{
        name: 'proposta',
        maxCount: 1
    },
    {
        name: 'identificacao',
        maxCount: 1
    },
    {
        name: 'endereco',
        maxCount: 1
    },
    {
        name: 'renda',
        maxCount: 1
    },
    {
        name: 'outros1',
        maxCount: 1
    },
    {
        name: 'outros2',
        maxCount: 1
    },
    {
        name: 'outros3',
        maxCount: 1
    },
    {
        name: 'outros4',
        maxCount: 1
    },
    {
        name: 'gravacao',
        maxCount: 1
    },
]), PropostaController.UpdateIdentificacaoPropostaFiles)
// router.post('/proppos')


router.post('/proposta/inclusao', PropostaController.CreateProposta);
router.post('/proposta/inclusao/arquivos', multer(multerConfig).fields([{
        name: 'proposta',
        maxCount: 1
    },
    {
        name: 'identificacao',
        maxCount: 1
    },
    {
        name: 'endereco',
        maxCount: 1
    },
    {
        name: 'renda',
        maxCount: 1
    },
    {
        name: 'identificacao',
        maxCount: 1
    },
    {
        name: 'extratoInss',
        maxCount: 1
    },
    {
        name: 'outros1',
        maxCount: 1
    },
    {
        name: 'outros2',
        maxCount: 1
    },
    {
        name: 'outros3',
        maxCount: 1
    },
    {
        name: 'outros4',
        maxCount: 1
    },

]), PropostaController.PropostaArquivos);



//perquisar comissao
router.post('/comissao/pesquisa', ComissaoController.Pesquisar);
router.post('/comissao/modal', ComissaoController.PreecherModal);

//incluir comissao
router.post('/comissao/incluir', multer(ecxelConfig).single('incluir_propostas'), ComissaoController.Incluir);
//alterar comissao
router.post('/comissao/alterar', multer(ecxelConfig).single('alterar_propostas'), ComissaoController.Alterar);


router.post('/solicitacoes/saldoDevedor', SaldoDevedorController.SaldoDevedor);
router.get('/statusSaldo/saldoDevedor', SaldoDevedorController.StatusSaldo);
router.post('/incluirSaldo/saldoDevedor', SaldoDevedorController.IncluirSaldo);
router.post('/alterarSaldo/saldoDevedor', SaldoDevedorController.AlterarSaldo);
router.post('/alterar/modal', SaldoDevedorController.Modal);
router.post('/margem/pesquisa', MargemController.Pesquisar);
router.post('/margem/incluir', MargemController.Incluir);
router.post('/margem/incluir/anexo', multer(multerConfig).single('anexo_print_margem'), MargemController.Anexo)
router.post('/margem/alterar', MargemController.Update);
router.post('/margem/modal', MargemController.Modal);
router.post('/saldofer/incluir', SaldoFerController.IncluirSaldoFer);
router.post('/saldofer/atualizar', SaldoFerController.Atualizar);
router.post('/saldofer/modal', SaldoFerController.Modal);
router.post('/saldofer/filtro', SaldoFerController.Filtro)
router.post('/saldofer/incluir/arquivos', multer(multerConfig).single('anexo_print_fer'), SaldoFerController.Anexo)

//Solicitação cancelamento
router.post('/cancelamento/incluir', CancelamentoController.IncluirCancelamento);
router.post('/cancelamento/filtro', CancelamentoController.Filtro);
router.post('/cancelamento/modal', CancelamentoController.Modal);
router.post('/cancelamento/alterar', CancelamentoController.Alterar);

//Aprovação proposta digittal
router.post('/aprovacaoproposta/incluir', AprovacaoPropostaController.IncluirAprovacao);
router.post('/aprovacaoproposta/filtro', AprovacaoPropostaController.Filtro);
router.post('/aprovacaoproposta/modal', AprovacaoPropostaController.Modal);
router.post('/aprovacaoproposta/alterar', AprovacaoPropostaController.Alterar);

//Margem governo gov sp
router.post('/margemgoverno/incluir', MargemGovernoController.IncluirMargemGoverno);
router.post('/margemgoverno/filtro', MargemGovernoController.Filtro);

//Parceiros restritos
router.post('/parceirosrestritos/incluir', ParceirosRestritosController.InluirParcRest);
router.post('/parceirosrestritos/filtro', ParceirosRestritosController.Filtro);
router.post('/parceirosrestritos/modal', ParceirosRestritosController.Modal);
router.post('/parceirosrestritos/alterar', ParceirosRestritosController.Alterar);

router.post('/atualizacao/cliente/filtro', AtualizacaoClienteController.Filtro)
router.post('/atualizacao/cliente/inserir', AtualizacaoClienteController.Inserir)
router.post('/atualizacao/cliente/anexo', multer(multerConfig).fields([{
        name: 'identificacao',
        maxCount: 1
    },

    {
        name: 'renda',
        maxCount: 1
    },

    {
        name: 'endereco',
        maxCount: 1
    }
]), AtualizacaoClienteController.Anexo)

router.post('/atualizacao/cliente/modal', AtualizacaoClienteController.Modal);
router.post('/atualizacao/cliente/atualizar/campos', AtualizacaoClienteController.Atualizar)

//averbacao goias
router.post('/averbacao/goias/filtro', AverbacaoGoiasController.Filtro)
router.post('/averbacao/goias/modal', AverbacaoGoiasController.Modal)
router.post('/averbacao/goias/inserir', AverbacaoGoiasController.Inserir)
router.post('/averbacao/goias/anexo', multer(multerConfig).single("anexo_print_margem"), AverbacaoGoiasController.Anexo)
router.post('/averbacao/goias/atualizar', AverbacaoGoiasController.Atualizar)

router.post('/autorizacao/inss/filtro', AutorizacaoInssController.Filtro)
router.post('/autorizacao/inss/modal', AutorizacaoInssController.Modal)
router.post('/autorizacao/inss/inserir', AutorizacaoInssController.Inserir)
router.post('/autorizacao/inss/anexo', multer(multerConfig).single('anexo_print_margem'), AutorizacaoInssController.Anexo)
router.post('/autorizacao/inss/atualizar', AutorizacaoInssController.Atualizar)

//Lista negra
router.post('/lista/negra/inserir', ListaNegraController.inclusao)

//Rota para buscar cpfs de gerente e supervisor
router.post('/buscar', UserController.BuscaCpf);
//service pan 
router.get('/pan', Service.Auth);
router.post('/pan/consulta', Service.FindUser);
router.post('/pan/consultar/contratos', ConsultarContratos);


//imobiliario
router.get('/imobiliario/status', ImobiliarioController.StatusImobiliario);
router.get('/imobiliario/imovel', ImobiliarioController.ImovelImobiliario);
router.post('/imobiliario/pesquisar', ImobiliarioController.Pesquisar);
router.post('/imobiliario/inclusao', ImobiliarioController.Incluir)
router.post('/imobiliario/alterar', ImobiliarioController.Alterar)
router.post('/imobiliario/inclusao/arquivos', multer(multerConfig).fields([{
        name: 'minuta',
        maxCount: 1
    },
    {
        name: 'comprovanteEstadoCivil',
        maxCount: 1
    },
    {
        name: 'comprovanteResidencia',
        maxCount: 1
    },
    {
        name: 'extratobancario1',
        maxCount: 1
    },
    {
        name: 'extatobancario2',
        maxCount: 1
    },
    {
        name: 'extratobancario3',
        maxCount: 1
    },
    {
        name: 'outros5',
        maxCount: 1
    },
    {
        name: 'outros6',
        maxCount: 1
    },
    {
        name: 'outros7',
        maxCount: 1
    },


]), ImobiliarioController.IncluirArquivos);

router.post('/imobiliario/logs', ImobiliarioController.BuscaLogs);
router.post('/imobiliario/alterar', ImobiliarioController.Alterar);
router.post('/sac/filtro', SacController.Filtro);
router.post('/sac/incluir', SacController.IncluirSac);
router.post('/sac/atualizar', SacController.Atualizar);
router.post('/sac/anexo', multer(multerConfig).fields([{
        name: 'arquivo1',
        macCount: 1
    },
    {
        name: 'arquivo2',
        maxCount: 1
    },
    {
        name: 'arquivo3',
        macCount: 1
    },
    {
        name: 'arquivo4',
        maxCount: 1
    }
]), SacController.Anexo)

router.post('/sac/incluir', SacController.IncluirSac)
router.post('/sac/filtro', SacController.Filtro)
router.post('/sac/anexo', multer(multerConfig).fields([{
        name: 'arquivo1',
        macCount: 1
    },
    {
        name: 'arquivo2',
        maxCount: 1
    },
    {
        name: 'arquivo3',
        macCount: 1
    },
    {
        name: 'arquivo4',
        maxCount: 1
    }
]), SacController.Anexo)

router.post('/sac/atualizar', SacController.Atualizar);

//Lançamento de Pagamentos//
router.post('/financeiro/filtro', LancamentosController.Filtro);
router.post('/financeiro/busca', LancamentosController.BuscarCnpj);
router.post('/financeiro/incluir', LancamentosController.IncluirLancamento);
router.post('/financeiro/alterar', LancamentosController.Alterar);

//Relatórios de cadastros
router.get('/pagamento', PreencherCamposController.BasePagamento);
router.get('/emails', PreencherCamposController.BaseEmails);
router.get('/comissionamento', PreencherCamposController.Comissionamento);
router.get('/propostabb', PreencherCamposController.PropostaBB);
router.get('/parceiro', PreencherCamposController.BaseParceiro);
router.get('/callcenter', PreencherCamposController.BaseCallcenter);
router.get('/identificacao/chave', PreencherCamposController.IdentificacaoChave);
router.get('/proposta/indica', PreencherCamposController.PropostaIndica);

//Comunicado
router.post('/comunicado/incluir', ComunicadoController.Incluir);
router.post('/comunicado/anexo', multer(multerConfig).fields([{
        name: 'url_img',
        macCount: 1
    },
    {
        name: 'url_img1',
        maxCount: 1
    },
    {
        name: 'url_img2',
        macCount: 1
    },
]), ComunicadoController.Anexo);

router.delete('/comunicado/deletar', ComunicadoController.Deletar);

// EndPoints / rotas de calculadora
router.post('/calculadora/convenios', CalculadoraController.Convenios);
router.post('/calculadora/regras', CalculadoraController.Regras);
router.post('/calculadora/coef', CalculadoraController.CoefTaxa);

// Relatorio Semanal
router.post('/semanal/busca', RelatorioSemanalController.Lista);
router.get('/semanal/faixa', RelatorioSemanalController.Faixa);

//Relatorio logs
router.get('/logs/status', PreencherCamposController.Status);
router.post('/logs/filtro', RelatorioLogController.Filtro);

//Assistencia 24hs
router.post('/assistencia/incluir', AssistenciaController.AssIncluir);
router.post('/assistencia/alterar', AssistenciaController.AssAlterar);
router.post('/assistencia/filtrartodasporid', AssistenciaController.AssFiltrarTodasPorId);
router.post('/assistencia/filtrarselecionadasporid', AssistenciaController.AssFiltrarSelecionadasPorId);
router.post('/assistencia/filtrarParaAlterar', AssistenciaController.AssFiltrarParaAlterar);
router.post('/assistencia/cnab', AssistenciaController.AssCnab);
router.post('/assistencia/txt', AssistenciaController.AssGerarTxt);
router.post('/assistencia/updateStatus', AssistenciaController.AssUpdateStatus);
router.post('/assistencia/emailBanco', AssistenciaController.AssSendEmailBanco);
router.post('/assistencia/emailCliente', AssistenciaController.AssSendEmailCliente);
router.post('/assistencia/ike', AssistenciaController.AssGerarArquivoIke);
router.post('/assistencia/ikeEnvio', AssistenciaController.AssSendSftpIke);
router.post('/assistencia/ikeDownload', AssistenciaController.AssDownloadSftpIke);
router.post('/assistencia/htmlToPdf', AssistenciaController.htmlToPdf);
router.post('/assistencia/atualizaParcelas', AssistenciaController.assUpdateParcelasRestantes);
router.get('/assistencia/downloadTxt', AssistenciaController.downloadTxt);
router.post('/assistencia/uploadTxt', multer(multerConfigAssistencia).fields([{
    name: 'txt_retorno', 
    maxCount: 1
}]), AssistenciaController.uploadTxt);


//Antifraude

router.post('/Antifraude/brtInsert', AntiFraudeController.Incluir); // BRT e unico
router.post('/Antifraude/brtUpdate', AntiFraudeController.Alterar); // BRT e unico
router.post('/Antifraude/brtSelectMailing', AntiFraudeController.selectMailings);
router.post('/Antifraude/brtSelectArquivos', AntiFraudeController.selectArquivos);
router.post('/Antifraude/brasilInDoc', AntiFraudeController.selectBrasilIndoc);


//roboSim Atualizacao propostas
router.post('/roboSim/select', RoboSimController.select);
router.post('/roboSim/update', RoboSimController.update);
router.post('/roboSim/filtro', RoboSimController.selecaoFiltro);

//relatorio SIM
router.post('/vw/relatorio', RelatorioSimController.selectView);

// Agenda Reunioes 
router.post('/agenda/reunioes', AgendaReunioes.Incluir);
router.post('/agenda/verify', AgendaReunioes.selectHorarios);


//Relatorio SMS
router.get('/sms/substatus', RelatorioSmsController.SubStatus);
router.post('/sms/filtro', RelatorioSmsController.Buscar);

//Relatorio Pendências
router.post('/pendencia/usuario', RelatorioPendenciasController.Usuario);
router.post('/pendencia/buscar', RelatorioPendenciasController.Buscar);

//Controle de Filas
router.get("/filas/precadastro/busca", ControleFilasController.BuscaPreCadastros);
router.get("/filas/dadospropostas/busca", ControleFilasController.BuscaDadosPropostas);
router.get("/filas/integradasdia/buscar", ControleFilasController.BuscaIntegradasDia);
router.get("/filas/integradasmes/buscar", ControleFilasController.BuscaIntegradasMes);
router.get("/filas/faroltotal/buscar", ControleFilasController.FarolTotal);
router.get("/filas/preanalise/buscar", ControleFilasController.BuscaPreAnalisa);
router.get("/filas/confirmacao/buscar", ControleFilasController.BuscaFaseConfirmacao);
router.get("/filas/digitacao/buscar", ControleFilasController.BuscaFilaDigitacao);
router.get("/filas/saldo/buscar", ControleFilasController.BuscaFilaSaldo);
router.get("/filas/acompanhamento/buscar", ControleFilasController.BuscaFaseAcompanhamento);

//Auditoria
router.get("/auditoria/falta", PropostaBbController.Falta);
router.get("/auditoria/substatus", PropostaBbController.SubStatus);
router.get("/auditoria/venda", PropostaBbController.Venda);
router.get('/auditoria/tipo/falta', PropostaBbController.TipoFalta);
router.get("/auditoria/operador", PropostaBbController.Operador);
router.get('/auditoria/tipo', PropostaBbController.Tipo);
router.get('/auditoria/mes', PropostaBbController.Mes);
router.get("/auditoria/supervisor", PropostaBbController.Supervisor);
router.get("/auditoria/status", PropostaBbController.StatusAuditoria);
router.get("/auditoria/status/proposta", PropostaBbController.StatusProposta);
router.post("/auditoria/filtro", PropostaBbController.Filtro);
router.post('/auditoria/modal', PropostaBbController.Modal);
router.post('/auditoria/alterar', PropostaBbController.Alterar);
router.post('/auditoria/buscarlogs', PropostaBbController.BuscarLogs);
router.post("/indica/anexo", multer(multerConfig).single("gravacao_parceiro"), PropostaBbController.Anexo);
router.post("/indica/vendas", PropostaBbController.Incluir);
router.get("/auditoria/falta", PropostaBbController.Falta);
router.get("/auditoria/substatus", PropostaBbController.SubStatus);
router.get('/auditoria/tipo/falta', PropostaBbController.TipoFalta);
router.get("/indica/vendas/referencia", PropostaBbController.BemReferencia);

//Produção analista
router.post('/producao/analista/setor', TblUsuarioController.FiltroSetor);
router.post('/producao/analista/mes', TblUsuarioController.FiltroMensal);
router.post('/producao/analista/dia', TblUsuarioController.Dia);

// Proposta aguardando contrato
//GETs
router.get('/proposta/aguardando/banco', PropostaAguardandoController.Banco);
router.get('/proposta/aguardando/tipo', PropostaAguardandoController.Tipo);
router.get('/proposta/aguardando/status', PropostaAguardandoController.Status);
router.get('/proposta/aguardando/produto', PropostaAguardandoController.Produto);
//POSTs
router.post('/proposta/aguardando/incluir', PropostaAguardandoController.Incluir);
router.post('/proposta/aguardando/filtro', PropostaAguardandoController.Filtro);
router.post('/proposta/aguardando/anexos', multer(multerConfig).fields([{
        name: "arquivo5",
        macCount: 1
    },
    {
        name: "arquivo6",
        macCount: 1
    },
    {
        name: "arquivo7",
        macCount: 1
    },
    {
        name: "arquivo8",
        macCount: 1
    },

    {
        name: "arquivo_proposta",
        macCount: 1
    },

    {
        name: "termo",
        macCount: 1
    }

]), PropostaAguardandoController.Anexo);

router.post("/proposta/aguardando/preventivo", multer(multerConfig).single("arquivo_prev"), PropostaAguardandoController.AnexoPreventivo);
router.get("/proposta/aguardando/download", PropostaAguardandoController.ObterArquivo);

module.exports = router;