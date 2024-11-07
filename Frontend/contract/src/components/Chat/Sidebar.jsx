import React, { useState, useEffect } from "react";
import axios from "axios";
import UserItem from "./UserItem";

export default function Sidebar({ onSelectUser }) {
  const BASE_URL = "http://127.0.0.1:8000";
  const [userList, setUserList] = useState([]);
  const [userLoader, setUserLoader] = useState(true);
  const [searchInput, setSearchInput] = useState("");

  const getAuthtokenFromLocalStorage = () => {
    return localStorage.getItem("authToken");
  };

  useEffect(() => {
    const authtoken = getAuthtokenFromLocalStorage();
    if (authtoken) {
      axios
        .get(`${BASE_URL}/api/user`, {
          headers: {
            Authorization: `Bearer ${authtoken}`,
          },
        })
        .then((response) => {
          setUserList(response.data);
          setUserLoader(false);
        })
        .catch((error) => {
          console.log("Error making API request", error);
        });
    }
  }, []);

  const handleSearch = () => {
    console.log(searchInput);
    setSearchInput("");
  };

  return (
    <div className="sidebar w-80 bg-black text-green-900 p-5 fixed left-0 top-0 h-full overflow-y-auto shadow-lg">
      <div className="mb-4 flex items-center">
        
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="w-60 p-3 text-black border border-green-300 rounded-r"
          placeholder="Search users..."
        />
        <button
          onClick={handleSearch}
          className="p-3 ml-1 bg-green-600 text-white rounded-l hover:bg-green-700 transition duration-200"
        >
          Search
        </button>
      </div>
      {userLoader ? (
        <p className="text-center">Loading...</p>
      ) : (
        userList.map((user) => (
          <UserItem
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
            onClick={() => onSelectUser(user.id)}
          />
        ))
      )}
    </div>
  );
}