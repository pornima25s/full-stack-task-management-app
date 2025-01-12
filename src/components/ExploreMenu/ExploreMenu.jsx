import React, { useState } from "react";
import "./ExploreMenu.css";
import { assets } from "../../assets/assets";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  const [searchQuery, setSearchQuery] = useState(""); // State to handle the search query

  // Filter menu list based on search query
  const filteredMenu = menu_list.filter((item) =>
    item.menu_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your cravings and elevate your dining experience,
        one delicious meal at a time.
      </p>

      {/* Search Bar */}
      <div className="search-bar">
    
        <input
           type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for a menu item..."
          className="search-input"
        />
      </div>

      {/* Display Filtered Menu */}
      <div className="explore-menu-list">
        {filteredMenu.map((item, index) => (
          <div
            key={index}
            className="explore-menu-list-item"
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? "All" : item.menu_name
              )
            }
          >
            <img
              src={item.menu_image}
              className={category === item.menu_name ? "active" : ""}
              alt="menu_image"
            />
            <p>{item.menu_name}</p>
          </div>
        ))}

        {/* If no results found */}
        {filteredMenu.length === 0 && (
          <p className="no-results">No menu items match your search.</p>
        )}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
