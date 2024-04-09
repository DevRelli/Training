class Processor{

    static Process(data){
        var linhas = data.split("\r\n");
        var rows = [];

        linhas.forEach(row => {
            var arr = row.split(";");
            rows.push(arr)
        });

        return rows;

    }
}

module.exports = Processor;