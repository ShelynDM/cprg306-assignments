"use client";

import { useState } from "react";

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");

    function handleChangeName(e) {
        setName(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const item = { name, quantity, category };
        console.log("Name: ", name);
        console.log("Quantity: ", quantity);
        console.log("Category: ", category);
        alert(JSON.stringify("Name: " + name + ", Quantity: " + quantity + ", Category: " + category));
        setName("");
        setQuantity(1);
        setCategory("Produce");
    };

    return (
        <div className="flex justify-center">
            <form onSubmit={handleSubmit} className="p-5 bg-slate-800">
                <div>
                    <label>
                        <input
                            placeholder="Item Name"
                            className="text-black rounded-md m-2 p-2 w-72"
                            type="text"
                            value={name}
                            onChange={handleChangeName}
                        />
                    </label>
                </div>
                <div className="flex-auto flex-col space-x-24">
                        <label>
                            <input
                                className="text-black rounded-md m-2 p-2 w-16"
                                type="number"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                            />
                        </label>
                        <label>
                            <select
                                placeholder="Category"
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
                        </label>
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