"use client";

import { useState } from "react";

export default function NewItem( {onAddItem} ) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            alert("Please enter an item name");
            return;
        }
        
        const newId = Math.random().toString(36);
        const newItem = {id: newId, name: name, quantity: quantity, category: category.toLowerCase()};
        onAddItem(newItem);

        console.log(newItem);

        setName("");
        setQuantity(1);
        setCategory("Produce");

    };

    return (
        <main>
        <div className="flex">
            <form onSubmit={handleSubmit} className="m-4 p-5 rounded-md bg-gray-600">
                <div>
                    <h2 className="text-2xl font-bold">Add New Item</h2>
                        <input
                            placeholder="Item Name"
                            className="text-black rounded-md m-2 p-2 w-72"
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                </div>
                <div className="flex-auto flex-col space-x-24">
                            <input
                                className="text-black rounded-md m-2 p-2 w-16"
                                type="number"
                                id="quantity"
                                value={quantity}
                                onChange={(e) => setQuantity(parseInt(e.target.value))}
                            />
                            <select
                                className="text-black rounded-md m-2 p-2 w-28"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}>
                                    <option value disabled>Category</option>
                                    <option value="produce">Produce</option>
                                    <option value="dairy">Dairy</option>
                                    <option value="bakery">Bakery</option>
                                    <option value="meat">Meat</option>
                                    <option value="frozen foods">Frozen Foods</option>
                                    <option value="canned goods">Canned Goods</option>
                                    <option value="dry goods">Dry Goods</option>
                                    <option value="beverages">Beverages</option>
                                    <option value="snacks">Snacks</option>
                                    <option value="household">Household</option>
                                    <option value="other">Other</option>
                            </select>
                </div>
                <button
                        type="submit"
                        className="bg-blue-500 text-white rounded-md m-2 p-2 hover:bg-blue-300 w-72"
                    >
                        +
                    </button>
            </form>
        </div>
        </main> 
    );
}