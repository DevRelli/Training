// Conversor de Arquivos Excel para HTML e Pdf

var Reader = require("./Reader");
var Processor = require("./Processor");
var Table = require("./Table");
var HtmlParser = require("./HtmlParser");
var Writer = require("./Writer");
var PdfWriter = require("./PdfWriter");

var leitor = new Reader();
var escritor = new Writer();

async function main(){
    var dados = await leitor.Read("./users.csv");
    var dadosProcessados = Processor.Process(dados);

    var users = new Table(dadosProcessados);

    var conteudo = await HtmlParser.Parse(users);

    escritor.Write(`${Date.now()}.html`,conteudo)

    PdfWriter.WriterPdf(`${Date.now()}.pdf`,conteudo);

}

main();