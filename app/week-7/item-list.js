"use client";
import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
    const [sortBy, setSortBy] = useState("name");
    items.sort((a, b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name);
        } else if (sortBy === "category") {
            return a.category.localeCompare(b.category);
        }    
    });




    return(
        <main className="m-4 ml-6">
            <div className=" mb-8">
                <strong className="font-bold m-4">Sort by:</strong>
                <button
                    className="w-24 m-2 p-2 bg-blue-600 hover:bg-blue-400"
                    onClick={() => setSortBy("name")}
                    style={{backgroundColor: sortBy === "name" ? "#5885AF" : ""}}>Name</button>
                <button
                    className="w-24 m-2 p-2  bg-blue-600 hover:bg-blue-400"
                    onClick={() => setSortBy("category")}
                    style={{backgroundColor: sortBy === "category" ? "#5885AF" : ""}}>Category</button>
            </div>
            <div>
                <ul>
                    {items.map((item) => (
                        <li key={item.id} >
                            <Item 
                                name={item.name} 
                                quantity={item.quantity} 
                                category={item.category} 
                                onSelect={() => onItemSelect(item.name)}/>
                        </li>
                    ))}
                </ul>
            </div>

    </main>
    );
}