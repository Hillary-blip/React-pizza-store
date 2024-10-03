import { useState } from "react";
import Category from "./category";
import Filter from "./filter";
import '../styles/product-list.css';

const ProductList = () => {
    const products = [
        {
            id: 1,
            name: "Чизбургер-пицца",
            description: "томатный соус, сыр моцарелла, говядина, маринованные огурцы, лук",
            types: ["тонкое тесто", "традиционное тесто"],
            sizes: ["26 см", "30 см", "40 см"],
            price: 395,
            image: "Images/pizza1.svg",
            category: "Мясные",
        },
        {
            id: 2,
            name: "Сырная",
            description: "сливочный соус, четыре вида сыра: моцарелла, чеддер, дор блю, пармезан",
            types: ["тонкое тесто", "традиционное тесто"],
            sizes: ["26 см", "30 см", "40 см"],
            price: 450,
            image: "Images/pizza2.svg",
            category: "Вегетарианская",
        },
        {
            id: 3,
            name: "Креветки по-азиатски",
            description: "томатный соус, сыр моцарелла, креветки, болгарский перец, кунжут",
            types: ["тонкое тесто", "традиционное тесто"],
            sizes: ["26 см", "30 см", "40 см"],
            price: 290,
            image: "Images/pizza3.svg",
            category: "Гриль",
        },
        {
            id: 4,
            name: "Сырный цыпленок",
            description: "сливочный соус, сыр моцарелла, курица, томаты",
            types: ["тонкое тесто", "традиционное тесто"],
            sizes: ["26 см", "30 см", "40 см"],
            price: 385,
            image: "Images/pizza4.svg",
            category: "Мясные",
        },
        {
            id: 5,
            name: "Мафия",
            description: "Красный соус, ветчина, бекон, оливки, перец болгарский, помидор, лук марс, моцарелла",
            types: ["тонкое тесто", "традиционное тесто"],
            sizes: ["26 см", "30 см", "40 см"],
            price: 395,
            image: "Images/pizza1.svg",
            category: "Мясные",
        },
        {
            id: 6,
            name: "4 мяса",
            description: "Красный соус, охотничьи колбаски, горчица взернах, болгарский перец, кукуруза, моцарелла",
            types: ["тонкое тесто", "традиционное тесто"],
            sizes: ["26 см", "30 см", "40 см"],
            price: 643,
            image: "Images/pizza2.svg",
            category: "Мясные",
        },
        {
            id: 7,
            name: "груша Блю Чиз",
            description: "Сливочный соус, груша, сыр дор блю, моцарелла, руккола, кедровый орешек",
            types: ["тонкое тесто", "традиционное тесто"],
            sizes: ["26 см", "30 см", "40 см"],
            price: 395,
            image: "Images/pizza3.svg",
            category: "Вегетарианская",
        }, {
            id: 8,
            name: "4 сыра",
            description: "Сливочный соус, сыр российский, сыр гауда, сыр моцарелла, сыр дор блю",
            types: ["тонкое тесто", "традиционное тесто"],
            sizes: ["26 см", "30 см", "40 см"],
            price: 395,
            image: "Images/pizza4.svg",
            category: "Гриль",
        },

    ];

    const [sortOption, setSortOption] = useState("По умолчанию");
    const [selectedCategory, setSelectedCategory] = useState("Все");

    const handleCategory = (category) => {
        setSelectedCategory(category);
    };

    const handleSortChange = (option) => {
        setSortOption(option);
    };

    // Фильтрация по категории
    const filteredProducts = selectedCategory === "Все"
        ? products
        : products.filter(product => product.category === selectedCategory);

    // Сортировка отфильтрованных продуктов
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

                        <div className="types">
                            <ul className="list-types">
                                {product.types.map((type, index) => (
                                    <li key={index} className="types-inner">
                                        {type}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="size">
                            <ul className="list-sizes">
                                {product.sizes.map((size, index) => (
                                    <li key={index} className="size-inner">
                                        {size}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="price">
                            <span>от {product.price} ₽</span>
                        </div>

                        <button className="add-button">Добавить</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
