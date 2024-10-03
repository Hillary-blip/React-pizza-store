// import React, { useState } from "react";
// import '../styles/filter.css'; // Убедитесь, что этот импорт находится в верхней части файла

// const Filter = ({ onSortChange }) => {
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const [selectedOption, setSelectedOption] = useState("Умолчанию");

//     const toggleDropdown = () => {
//         setIsDropdownOpen(!isDropdownOpen);
//     };

//     const handleOptionClick = (option) => {
//         setSelectedOption(option);
//         setIsDropdownOpen(false);
//         onSortChange(option);
//     };

//     const options = [ "По умолчанию", "По цене", "По алфавиту"];

//     return (
//         <div className="filter">
//             <div className="wrapper-filtr" onClick={toggleDropdown}>
//                 <div className="title-filter">
//                     <p className="text-filter">
//                         Сортировка по: <span className="selected-option">{selectedOption}</span>
//                     </p>
//                 </div>
//                 {isDropdownOpen && (
//                     <ul className="filter-list">
//                         {options.map((option) => (
//                             <li
//                                 key={option}
//                                 className={`filter__list-inner ${option === selectedOption ? "active" : ""
//                                     }`}
//                                 onClick={() => handleOptionClick(option)}
//                             >
//                                 {option}
//                             </li>
//                         ))}
//                     </ul>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Filter;





// // import React from "react";
// // import '../styles/filter.css';

// // const Filter = ({ onSortChange }) => {

// //     const handleOption = (e) => {
// //         onSortChange(e.target.value);
// //     };

// //     return (
// //     <div className="filter">
// //         <div className="wrapper-filtr">
// //             <div className="title-filter">
// //                 <p className="tetx-filter">
// //                     Фильтрация по:
// //                 </p>
// //             </div>

// //             <select className="filter-select" onChange={handleOption}>
// //                 <option className="options" value="По умолчанию">По умолчанию</option>
// //                 <option className="options" value="По цене">По цене</option>
// //                 <option className="options" value="По алфавиту">По алфавиту</option>
// //             </select>
// //         </div>
// //     </div >
// //     );
// // };

// // export default Filter;








import React, { useState } from "react";
import '../styles/filter.css';

const Filter = ({ onSortChange }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("По умолчанию");

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsDropdownOpen(false);
        onSortChange(option);
    };

    const options = ["По умолчанию", "По цене", "По алфавиту"];

    return (
        <div className="filter">
            <div className="wrapper-filtr" onClick={toggleDropdown}>
                <div className="title-filter">
                    <p className="text-filter">
                        Сортировка по: <span className="selected-option">{selectedOption}</span>
                    </p>
                </div>
                <ul className={`filter-list ${isDropdownOpen ? "open" : ""}`}>
                    {options.map((option, index) => (
                        <li
                            key={index}
                            className={`filter__list-inner ${isDropdownOpen ? "visible" : ""} ${option === selectedOption ? "active" : ""}`}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Filter;







