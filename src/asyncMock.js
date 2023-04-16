

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
        img: '/asset/ImgFacial/37.jpg',
        stock: 8,
        description: 'Get Slim'

    },
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



