function carrosel() {
    const controls = document.querySelectorAll('.control')
    const item = document.querySelectorAll('.item')
    const maxItems = item.length
    let currentItens = 0

    controls.forEach(controls => {
        controls.addEventListener('click', () => {
            const isLeft = controls.classList.contains('arrow-left')

            if (isLeft) {
                currentItens -= 1
            } else {
                currentItens += 1
            }

            if (currentItens >= maxItems) {
                currentItens = 0
            } else if (currentItens < 0 ) {
                currentItens = maxItems - 1
            }

            item.forEach(item => item.classList.remove('current-item'))

            item[currentItens].scrollIntoView({
                inline: "center",
                behavior: 'smooth'
            })

            item[currentItens].classList.add('current-item')
        })
    })
}

function carroselTec() {
    const controlsTec = document.querySelectorAll('.control-tec')
    const itemTec = document.querySelectorAll('.item-tec')
    const maxItemsTec = itemTec.length
    let currentItensTec = 0

    controlsTec.forEach(controlsTec => {
        controlsTec.addEventListener('click', () => {
            const isLeftTec = controlsTec.classList.contains('arrow-left-tec')

            if (isLeftTec) {
                currentItensTec -= 1
            } else {
                currentItensTec += 1
            }

            if (currentItensTec >= maxItemsTec) {
                currentItensTec = 0
            } else if (currentItensTec < 0 ) {
                currentItensTec = maxItemsTec - 1
            }

            itemTec.forEach(itemTec => itemTec.classList.remove('current-item-tec'))

            itemTec[currentItensTec].scrollIntoView({
                inline: "center",
                behavior: 'smooth'
            })

            itemTec[currentItensTec].classList.add('current-item-tec')
        })
    })
}

function menus() {
    const menuAberto = document.querySelector('#menuAberto')
    const perfilAberto = document.querySelector('#perfilAberto')
    const searchAberto = document.querySelector('#search')
    const btnMenu = document.querySelector('#checkbox')
    const btnPerfil = document.querySelector('#btnPerfil')
    const btnSearch = document.querySelector('.btnSearch')
    const lupa = document.querySelector('#lupa')
    const itemOpen = document.querySelector('.item-tec')
    const pagProdutos = document.querySelector('#pagOpen')
    const btnX = document.querySelector('#btnX')
    const btnHeart = document.querySelector('.fa-heart')

//Produto aberto
    itemOpen.addEventListener('click', () => {
        n1 = pagProdutos

        abriMenu()
    })

//Button para fechar o produto
    btnX.addEventListener('click', () => {
        n1 = pagProdutos

        abriMenu()
    })

    btnHeart.addEventListener('click', () => {
        if (btnHeart.classList.contains('fa-regular')) {
            (btnHeart.classList.remove('fa-regular'))
            (btnHeart.classList.add('fa-solid'))
        } else {
            (btnHeart.classList.add('fa-regular'))
            (btnHeart.classList.remove('fa-solid'))
        }
    })

//Menu de opções aberto
    btnMenu.addEventListener('click', () => {
        n1 = menuAberto

        abriMenu()
    })

//Menu do perfil aberto
    btnPerfil.addEventListener('click', () => {
        n1 = perfilAberto

        abriMenu()
    })

//Barra de pesquisa aberta
    btnSearch.addEventListener('click', () => { 
        n1 = searchAberto

        abriMenu()
        
        lupa.addEventListener('click', () => {
            searchAberto.classList.remove('open')
        })
    })
}

//Função que abre os menus
function abriMenu() {
    if (n1.classList.contains('open')) {
        (n1.classList.remove('open'))
    } else {
        (n1.classList.add('open')) 
    }
}

menus()
carroselTec()
carrosel()