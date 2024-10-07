import { useState } from "react";
import Category from "./category";
import Filter from "./filter";
import '../styles/product-list.css';
import Cartproduct from "./cart-product";


const ProductList = ({ showCart }) => {
    const products = [
        {
            id: 1,
            name: "Чизбургер-пицца",
            description: "томатный соус, сыр моцарелла, говядина, маринованные огурцы, лук",
            types: ["тонкое", "традиционное"],
            sizes: ["26 см", "30 см", "40 см"],
            price: 395,
            image: "Images/pizza1.svg",
            category: "Мясные",
        },
        {
            id: 2,
            name: "Сырная",
            description: "сливочный соус, четыре вида сыра: моцарелла, чеддер, дор блю, пармезан",
            types: ["тонкое", "традиционное"],
            sizes: ["26 см", "30 см", "40 см"],
            price: 450,
            image: "Images/pizza2.svg",
            category: "Вегетарианская",
        },
        {
            id: 3,
            name: "Креветки по-азиатски",
            description: "томатный соус, сыр моцарелла, креветки, болгарский перец, кунжут",
            types: ["тонкое", "традиционное"],
            sizes: ["26 см", "30 см", "40 см"],
            price: 290,
            image: "Images/pizza3.svg",
            category: "Гриль",
        },
        {
            id: 4,
            name: "Сырный цыпленок",
            description: "сливочный соус, сыр моцарелла, курица, томаты",
            types: ["тонкое", "традиционное"],
            sizes: ["26 см", "30 см", "40 см"],
            price: 385,
            image: "Images/pizza4.svg",
            category: "Мясные",
        },
        {
            id: 5,
            name: "Мафия",
            description: "Красный соус, ветчина, бекон, оливки, перец болгарский, помидор, лук марс, моцарелла",
            types: ["тонкое", "традиционное"],
            sizes: ["26 см", "30 см", "40 см"],
            price: 395,
            image: "Images/pizza1.svg",
            category: "Мясные",
        },
        {
            id: 6,
            name: "4 мяса",
            description: "Красный соус, охотничьи колбаски, горчица взернах, болгарский перец, кукуруза, моцарелла",
            types: ["тонкое", "традиционное"],
            sizes: ["26 см", "30 см", "40 см"],
            price: 643,
            image: "Images/pizza2.svg",
            category: "Мясные",
        },
        {
            id: 7,
            name: "груша Блю Чиз",
            description: "Сливочный соус, груша, сыр дор блю, моцарелла, руккола, кедровый орешек",
            types: ["тонкое", "традиционное"],
            sizes: ["26 см", "30 см", "40 см"],
            price: 395,
            image: "Images/pizza3.svg",
            category: "Вегетарианская",
        }, {
            id: 8,
            name: "4 сыра",
            description: "Сливочный соус, сыр российский, сыр гауда, сыр моцарелла, сыр дор блю",
            types: ["тонкое", "традиционное"],
            sizes: ["26 см", "30 см", "40 см"],
            price: 395,
            image: "Images/pizza4.svg",
            category: "Гриль",
        },

    ];

    const [cart, setCart] = useState([]);
    const [selectedSizes, setSelectedSizes] = useState({});
    const [selectedTypes, setSelectedTypes] = useState({});

    const [counter, setCounter] = useState(0)

    const handleSizeChange = (productId, size) => {
        setSelectedSizes({
            ...selectedSizes,
            [productId]: size,
        });
    };

    const handleTypeChange = (productId, type) => {
        setSelectedTypes({
            ...selectedTypes,
            [productId]: type,
        });
    };

    const AddtoCart = (product) => {
        const size = selectedSizes[product.id] || product.sizes[0]; // Выбранный или первый размер
        const type = selectedTypes[product.id] || product.types[0]; // Выбранное или первое тесто
        const newItem = {
            id: product.id,
            name: product.name,
            size,
            type,
            price: product.price
        };
        setCart([...cart, newItem]);
    };


    const [sortOption, setSortOption] = useState("По умолчанию");
    const [selectedCategory, setSelectedCategory] = useState("Все");

    const handleCategory = (category) => {
        setSelectedCategory(category);
    };

    const handleSortChange = (option) => {
        setSortOption(option);
    };

    const filteredProducts = selectedCategory === "Все"
        ? products
        : products.filter(product => product.category === selectedCategory);

    const sortedAndFilteredProducts = [...filteredProducts].sort((a, b) => {
        if (sortOption === "По цене") {
            return a.price - b.price;
        }
        if (sortOption === "По алфавиту") {
            return a.name.localeCompare(b.name);
        }
        return a.id - b.id;
    });



    return (
        <div className="product">
            {showCart ? ( // Показываем корзину, если showCart равно true
                <Cartproduct cart={cart} showCart={showCart} />
            ) : (
                <>
                    <div className="sort-block">
                        <Category onSelectCategory={handleCategory} selectedCategory={selectedCategory} />
                        <Filter onSortChange={handleSortChange} />
                    </div>
                    <h1 className="title-content">Все пиццы</h1>
                    <div className="product-inner">
                        {sortedAndFilteredProducts.map((product) => (
                            <div className="product-content" key={product.id}>
                                <img src={product.image} alt={product.name} className="product-image" />
                                <h2 className="name-pizza">{product.name}</h2>
                                <p className="product-description">{product.description}</p>
                                <div className="choice">
                                    <div className="types">
                                        <ul className="list-types">
                                            {product.types.map((type, index) => (
                                                <li
                                                    key={index}
                                                    className={`types-inner ${selectedTypes[product.id] === type ? 'active' : ''}`}
                                                    onClick={() => handleTypeChange(product.id, type)}
                                                >
                                                    {type}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="size">
                                        <ul className="list-sizes">
                                            {product.sizes.map((size, index) => (
                                                <li
                                                    key={index}
                                                    className={`size-inner ${selectedSizes[product.id] === size ? 'active' : ''}`}
                                                    onClick={() => handleSizeChange(product.id, size)}
                                                >
                                                    {size}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="price">
                                    <span>от {product.price} ₽</span>
                                </div>

                                <button className="add-button" onClick={() => AddtoCart(product)}>
                                    Добавить
                                </button>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );

};

export default ProductList;






// <div className="product">
//     <div className="sort-block">
//         <Category onSelectCategory={handleCategory} selectedCategory={selectedCategory} />
//         <Filter onSortChange={handleSortChange} />
//     </div>
//     <h1 className="title-content">Все пиццы</h1>
//     <div className="product-inner">
//         {sortedAndFilteredProducts.map((product) => (
//             <div className="product-content" key={product.id}>
//                 <img src={product.image} alt={product.name} className="product-image" />
//                 <h2 className="name-pizza">{product.name}</h2>
//                 <p className="product-description">{product.description}</p>

//                 <div className="types">
//                     <ul className="list-types">
//                         {product.types.map((type, index) => (
//                             <li key={index} className={`types-inner ${selectedTypes[product.id] === type ? 'active' : ''}`}
//                                 onClick={() => handleTypeChange(product.id, type)}
//                             >
//                                 {type}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>

//                 <div className="size">
//                     <ul className="list-sizes">
//                         {product.sizes.map((size, index) => (
//                             <li key={index} className={`size-inner ${selectedSizes[product.id] === size ? 'active' : ''}`}
//                                 onClick={() => handleSizeChange(product.id, size)}
//                             >
//                                 {size}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>

//                 <div className="price">
//                     <span>от {product.price} ₽</span>
//                 </div>

//                 <button className="add-button" onClick={() => AddtoCart(product)}>Добавить</button>
//             </div>
//         ))}
//     </div>
//     <Cartproduct cart={cart}></Cartproduct>
// </div>