import { useState } from "react";
import Category from "./category";
import Filter from "./filter";
import '../styles/product-list.css';
// import Cartproduct from "./cart-product";
import CartProductText from "./cart-product-inner";

const ProductList = ({ cart, setCart, showCart, toggleCart, totalPrice, totalItems, Cleaercart }) => {
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

    const [selectedSizes, setSelectedSizes] = useState({});
    const [selectedTypes, setSelectedTypes] = useState({});
    const [sortOption, setSortOption] = useState("По умолчанию");
    const [selectedCategory, setSelectedCategory] = useState("Все");

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
        const size = selectedSizes[product.id] || product.sizes[0];
        const type = selectedTypes[product.id] || product.types[0];

        const existingItemIndex = cart.findIndex(
            (item) => item.id === product.id && item.size === size && item.type === type
        );

        if (existingItemIndex !== -1) {
            // Если товар уже есть в корзине, увеличиваем его количество
            const updatedCart = [...cart];
            updatedCart[existingItemIndex].quantity += 1;
            setCart(updatedCart);
        } else {
            // Если товара нет в корзине, добавляем его с количеством 1
            const newItem = {
                id: product.id,
                name: product.name,
                size,
                type,
                price: product.price,
                quantity: 1,
                img: product.image
            };
            setCart([...cart, newItem]);
        }
    };

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
            {showCart ? (
                // <Cartproduct cart={cart} showCart={showCart} toggleCart={toggleCart} Cleaercart={Cleaercart} />
                <CartProductText
                    totalItems={totalItems}
                    totalPrice={totalPrice}
                    cart={cart}
                    showCart={showCart}
                    toggleCart={toggleCart}
                    Cleaercart={Cleaercart}
                    setCart={setCart}
                />
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
                                <div id="Add">
                                    <div className="price">
                                        <span>от {product.price} ₽</span>
                                    </div>
                                    <div className="block__btn-add" onClick={() => AddtoCart(product)}>
                                        <div class="icon">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                <path id="Vector" d="M10.8 4.79L7.2 4.79L7.2 1.2C7.2 0.53 6.66 0 6 0C5.33 0 4.79 0.53 4.79 1.2L4.79 4.79L1.2 4.79C0.53 4.79 0 5.33 0 6C0 6.66 0.53 7.2 1.2 7.2L4.79 7.2L4.79 10.8C4.79 11.46 5.33 12 6 12C6.66 12 7.2 11.46 7.2 10.8L7.2 7.2L10.8 7.2C11.46 7.2 12 6.66 12 6C12 5.33 11.46 4.79 10.8 4.79Z" fill="#EB5A1E" />
                                            </svg>
                                        </div>

                                        <button className="add-button" >
                                            Добавить
                                        </button>
                                        <span className="counter">{cart.find(item => item.id === product.id)?.quantity || null}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default ProductList;

