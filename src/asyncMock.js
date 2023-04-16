

const products = [
    {
        id: '1',

        name: 'Exfoliante',
        price: 1000,
        category: 'facial',
        img: '/asset/ImgFacial/3.jpg',
        stock: 25,
        description: 'Exfoliante'

    },
    {
        id: '2',

        name: 'Filtro',
        price: 1500,
        category: 'facial',
        img: '/asset/ImgFacial/11.jpg',
        stock: 15,
        description: 'Filtro'

    },
    {
        id: '3',

        name: 'Linea Reep Calm',
        price: 800,
        category: 'facial',
        img: '/asset/ImgFacial/28.jpg',
        stock: 10,
        description: 'Linea Reep Calm'

    },
    {
        id: '4',

        name: 'Booster',
        price: 800,
        category: 'facial',
        img: '/asset/ImgFacial/16.jpg',
        stock: 10,
        description: 'Booster'

    },
    {
        id: '5',

        name: 'Get Slim',
        price: 600,
        category: 'corporal',
        img: '/asset/ImgCorporal/37.jpg',
        stock: 8,
        description: 'Get Slim'

    },
    {
        id: '6',

        name: 'Aceite Corporal',
        price: 600,
        category: 'corporal',
        img: '/asset/ImgCorporal/41.jpg',
        stock: 10,
        description: 'Aceite Corporal'

    },
    {
        id: '7',

        name: 'Body Lift',
        price: 600,
        category: 'corporal',
        img: '/asset/ImgCorporal/52.jpg',
        stock: 12,
        description: 'Body Lift'

    },
    {
        id: '8',

        name: 'BB Cream',
        price: 600,
        category: 'corporal',
        img: '/asset/ImgCorporal/63.jpg',
        stock: 14,
        description: 'BB Cream'

    },
    {
        id: '9',

        name: 'Oleo 31',
        price: 600,
        category: 'bienestar',
        img: '/asset/ImgBienestar/12.jpg',
        stock: 14,
        description: 'Oleo 31'

    },
    {
        id: '10',

        name: 'Reflexología',
        price: 600,
        category: 'bienestar',
        img: '/asset/ImgBienestar/1001.jpg',
        stock: 1,
        description: 'Reflexología'

    },
    {
        id: '11',

        name: 'Reiki',
        price: 600,
        category: 'bienestar',
        img: '/asset/ImgBienestar/1002.jpg',
        stock: 1,
        description: 'Reiki'

    },
    {
        id: '12',

        name: 'Masajes',
        price: 600,
        category: 'bienestar',
        img: '/asset/ImgBienestar/1003.jpg',
        stock: 1,
        description: 'Masajes'

    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}



