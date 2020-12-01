import React, { createContext, useState } from 'react'

export const DataContext = createContext();
export const DataProvider = (props) => {
    
    const [products, setProducts] = useState([
        {
            "id": "1",
            "title": "Shoes Product 01",
            "images": [
                "https://assets-global.website-files.com/5ecd265e0a25fc8e657cdd7b/5ed0db14592a1f3425b4a0e4_shoe.png",
                "https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/53260c64fbbe-123973a89938-5.png",
                "https://shoesclub.pk/wp-content/uploads/2019/10/ULTRA-BOOST-BLACK-WHITE-A.png",
                "https://shoesclub.pk/wp-content/uploads/2020/01/JOYRIDE-CHARCOL-PNG.png"
            ],
            "description": "This is the best Shoe store where you com first",
            "content": "welcom to our new shoe store we have a very special designs for you",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 101
        },
        {
            "id": "2",
            "title": "Shoes Product 02",
            "images": [
                "https://i.pinimg.com/originals/d6/82/b8/d682b8ba6249d5e89fb86d9ebe6f8c59.png",
                "https://assets-global.website-files.com/5ecd265e0a25fc8e657cdd7b/5ed0db14592a1f3425b4a0e4_shoe.png",
                "https://i.pinimg.com/originals/82/5a/b8/825ab81b50880cd5cd928a6893cd9078.png",
                "https://freepngimg.com/thumb/shoes/27428-5-nike-shoes-transparent-background-thumb.png"
            ],
            "description": "This is the best Shoe store where you com first",
            "content": "welcom to our new shoe store we have a very special designs for you",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 102
        },
        {
            "id": "3",
            "title": "Shoes Product 03",
            "images": [
                "https://shoesclub.pk/wp-content/uploads/2019/10/ULTRA-BOOST-BLACK-WHITE-A.png",
                "https://lh3.googleusercontent.com/proxy/T7Tmbm_A2K-uQIA3EkTewOuxZYfSEhvzWi3zVNx5bvnb5-QIr8yOPg3Zu6feMVbOw23HW15A7acKMmTYxgcrg_1vxC48wNpYvgDBGRyuMKclob8EZnpZ8o2E3HOq6Y6LH_edy_KfzxpRxNKgo6m7b_FbAFipIYu8aidd",
                "https://www.freepngimg.com/thumb/adidas_shoes/58146-pw-adidas-tr-mens-nmd-race-sneakers.png",
                "https://freepngimg.com/thumb/shoes/27428-5-nike-shoes-transparent-background-thumb.png"
            ],
            "description": "This is the best Shoe store where you com first",
            "content": "welcom to our new shoe store we have a very special designs for you",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 103
        },
        {
            "id": "4",
            "title": "Shoes Product 04",
            "images": [
                "https://img.pngio.com/nike-shoe-png-transparent-nike-shoepng-images-pluspng-nike-shoes-png-400_300.png",
                "https://lh3.googleusercontent.com/proxy/T7Tmbm_A2K-uQIA3EkTewOuxZYfSEhvzWi3zVNx5bvnb5-QIr8yOPg3Zu6feMVbOw23HW15A7acKMmTYxgcrg_1vxC48wNpYvgDBGRyuMKclob8EZnpZ8o2E3HOq6Y6LH_edy_KfzxpRxNKgo6m7b_FbAFipIYu8aidd",
                "https://lh3.googleusercontent.com/proxy/QvSs8TouKkof5143raCTS8HpxSW4gArDUJuOEMLwekgS81Hr_0qxpnQ6EQcOP6Hug1bRb2iNsmcrrPu_wGcQFYYCqAmkliwLiWXtMeqzh-s95mu54udX6r35Am0wg0Kzj3y980E05-IECfE",
                "https://freepngimg.com/thumb/shoes/27428-5-nike-shoes-transparent-background-thumb.png"
            ],
            "description": "This is the best Shoe store where you com first",
            "content": "welcom to our new shoe store we have a very special designs for you",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 104
        },
        {
            "id": "5",
            "title": "Shoes Product 05",
            "images": [
                "https://shoesclub.pk/wp-content/uploads/2020/01/JOYRIDE-CHARCOL-PNG.png",
                "https://lh3.googleusercontent.com/proxy/T7Tmbm_A2K-uQIA3EkTewOuxZYfSEhvzWi3zVNx5bvnb5-QIr8yOPg3Zu6feMVbOw23HW15A7acKMmTYxgcrg_1vxC48wNpYvgDBGRyuMKclob8EZnpZ8o2E3HOq6Y6LH_edy_KfzxpRxNKgo6m7b_FbAFipIYu8aidd",
                "https://lh3.googleusercontent.com/proxy/QvSs8TouKkof5143raCTS8HpxSW4gArDUJuOEMLwekgS81Hr_0qxpnQ6EQcOP6Hug1bRb2iNsmcrrPu_wGcQFYYCqAmkliwLiWXtMeqzh-s95mu54udX6r35Am0wg0Kzj3y980E05-IECfE",
                "https://freepngimg.com/thumb/shoes/27428-5-nike-shoes-transparent-background-thumb.png"
            ],
            "description": "This is the best Shoe store where you com first",
            "content": "welcom to our new shoe store we have a very special designs for you",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 105
        },
        {
            "id": "6",
            "title": "Shoes Product 06",
            "images": [
                "https://i.pinimg.com/originals/25/8c/c1/258cc15e96656ee0efdca911adca6582.png",
                "https://lh3.googleusercontent.com/proxy/T7Tmbm_A2K-uQIA3EkTewOuxZYfSEhvzWi3zVNx5bvnb5-QIr8yOPg3Zu6feMVbOw23HW15A7acKMmTYxgcrg_1vxC48wNpYvgDBGRyuMKclob8EZnpZ8o2E3HOq6Y6LH_edy_KfzxpRxNKgo6m7b_FbAFipIYu8aidd",
                "https://lh3.googleusercontent.com/proxy/QvSs8TouKkof5143raCTS8HpxSW4gArDUJuOEMLwekgS81Hr_0qxpnQ6EQcOP6Hug1bRb2iNsmcrrPu_wGcQFYYCqAmkliwLiWXtMeqzh-s95mu54udX6r35Am0wg0Kzj3y980E05-IECfE",
                "https://freepngimg.com/thumb/shoes/27428-5-nike-shoes-transparent-background-thumb.png"
            ],
            "description": "This is the best Shoe store where you com first",
            "content": "welcom to our new shoe store we have a very special designs for you",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 106
        }
    ])


    return (
       <DataContext.Provider value={[products, setProducts]}>
           {props.children}
       </DataContext.Provider>
    )
}
