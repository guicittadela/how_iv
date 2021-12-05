let product = document.getElementById('product')
let ref = document.getElementById('ref')
let qtd = document.getElementById('quantity')
let color = document.getElementById('color')
let size = document.getElementById('size')

let btnAdd = document.querySelector('#btn-add')

function clearInput(){
    product.value = ''
    ref.value = ''
    qtd.value = ''
    color.value = ''
    size.value = ''
}

btnAdd.onclick = function(e){
    e.preventDefault()
    const item = new Produto(product.value, ref.value, qtd.value, color.value, size.value)
    console.log(item.product)
    let jsonProdutos = '{"produto" : "' + item.product + '", "ref" : "' + item.ref + '", "qtd" : "' + item.qtd + '", "color" : "' + item.color + '", "size" : "' + item.size + '"}'
    salvarBd(jsonProdutos)
    clearInput()
    
    

}

class Produto{
    constructor(product, ref, qtd, color, size){
        this._product = product,
        this._ref = ref,
        this._qtd = qtd,
        this._color = color,
        this._size = size
    }
    get product(){
        return this._product
    }

    get ref(){
        return this._ref
    }
    get qtd(){
        return this._qtd
    }
    
    get color(){
        return this._color
    }
    get size(){
        return this._size
    }
}


function salvarBd(object){
    let id = localStorage.length
    localStorage.setItem(id,object)
    
}



