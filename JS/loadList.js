window.onload = function(){
    
    for(let i = 0; i <localStorage.length; i++ ){ 
        let = itemBd = localStorage.getItem(i)
        let objetoBd = JSON.parse(itemBd)
        let table = document.getElementById('corpo').innerHTML += `
                <div id="item-${i}">
                    <th class="itens">${objetoBd.ref} </th>
                    <th class="itens">${objetoBd.produto}</th>
                    <th class="itens">${objetoBd.qtd}</th> 
                    <th class="itens">${objetoBd.size}</th>
                    <th class="itens">${objetoBd.color}</th>
                    <th id="col-btn">
                        <a class="button">Editar</a>
                        <a id="${i}" class="button" onClick="excluir(${i})">Excluir</a>
                    </th>
                </div>
                `
    }
}


function excluir(key){
    localStorage.removeItem(`${key}`)
    let line = document.getElementById(`item-${key}`)
    line.innerHTML= ''
    alert('item excluído com sucesso!')
}