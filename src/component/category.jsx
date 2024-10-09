import React from "react";
import '../styles/category.css';

const Category = ({ onSelectCategory, selectedCategory }) => {
    const categories = ["Все", "Мясные", "Вегетарианская", "Гриль"];

    return (
        <div className="category-filter">
            <ul className="category-list">
                {categories.map((category) => (
                    <li
                        key={category}
                        className={`category-item ${selectedCategory === category ? "active" : ""}`}
                        onClick={() => onSelectCategory(category)}
                    >
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Category;
