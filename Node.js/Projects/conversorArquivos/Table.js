class Table{

    constructor(arr){
        this.header = arr[0];
        arr.shift(); // shift() Remove sempre o primeiro elemento array
        arr.pop(); // pop() Remove o último elemento do array
        this.rows = arr;
    }
    
    get RowCount(){     
        return this.rows.length;
    }
    get ColumnCount(){
        return this.header.length;
    }
}

module.exports = Table;