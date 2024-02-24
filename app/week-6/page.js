"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./item.json";
import { useState } from "react";

export default function Page() {
    const [items, setItems] = useState(itemsData);

    function handleAddItem(newItem) {
        setItems((prevItems) => {
          return [newItem, ...prevItems];
        });
      }

    return (
      <main>
        <h1 className="text-3xl font-bold bg-slate-800">Shopping List</h1>
        <div className="p-2 bg-slate-800 flex">
          <div>
            <NewItem onAddItem={handleAddItem}/>
          </div>
          <div>
            <ItemList items={items}/>
          </div>
        </div>
        </main>
    );
  }