"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
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
        const newItem = {id: newId, name: name, quantity: quantity, category: category};
        onAddItem(newItem);

        setName("");
        setQuantity(1);
        setCategory("Produce");

    };

    return (
        <div className="flex">
            <form onSubmit={handleSubmit} className="p-5 bg-slate-800">
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
                                    <option value="Produce">Produce</option>
                                    <option value="Dairy">Dairy</option>
                                    <option value="Bakery">Bakery</option>
                                    <option value="Meat">Meat</option>
                                    <option value="Frozen Foods">Frozen Foods</option>
                                    <option value="Canned Goods">Canned Goods</option>
                                    <option value="Dry Goods">Dry Goods</option>
                                    <option value="Beverages">Beverages</option>
                                    <option value="Snacks">Snacks</option>
                                    <option value="Household">Household</option>
                                    <option value="Other">Other</option>
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
    );
}