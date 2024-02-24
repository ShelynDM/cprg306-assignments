"use client";
import { useState } from "react";

export default function ItemList({ items }) {
    const [sortBy, setSortBy] = useState("name");
    items.sort((a, b) => {
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
                    {items.map((item) => (
                        <li key={item.id} className="w-80 mb-4 p-2 bg-gray-600">
                            <h2 className="text-2xl font-semibold">{item.name}</h2>
                            <p className="text-sm">
                                Buy {item.quantity} in {item.category}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>

    </main>
    );
}