"use client";
import { useState } from "react";
import item from "./item.json";
import Item from "./item";

export default function ItemList() {
    const [sortBy, setSortBy] = useState("name");
    item.sort((a, b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name);
        } else if (sortBy === "category") {
            return a.category.localeCompare(b.category);
        } else if (sortBy === "groupedCategory") {
            return a.category.localeCompare(b.category);
        }    
    });


    return(
        <main className="m-4 ml-6">
            <div className=" mb-8">
                <strong className="font-bold m-4">Sort by:</strong>
                <button
                    className="w-24 m-2 p-2 bg-orange-600 hover:bg-orange-400"
                    onClick={() => setSortBy("name")}>Name</button>
                <button
                    className="w-24 m-2 p-2 bg-orange-600  hover:bg-orange-400"
                    onClick={() => setSortBy("category")}>Category</button>
                <button
                    className="w-24 m-2 p-2 bg-orange-600  hover:bg-orange-400"
                    onClick={() => setSortBy("groupedCategory")}>Grouped Category</button>
            </div>
            <div>
                <ul>
                    {item.map((item) => (
                        <li key={item.id} >
                            <Item name={item.name} quantity={item.quantity} category={item.category}/>
                        </li>
                    ))}
                </ul>
            </div>

    </main>
    );
}