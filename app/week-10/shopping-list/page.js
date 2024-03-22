"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import {getItems, addItem} from "../_services/shopping-list-service.js";

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  const loadItems = async () => {
    const items = await getItems(user.uid);
    setItems(items);
  }; 

  useEffect(() => {
      loadItems();
  }, [items]);

function handleAddItem(newItem) {
    addItem(user.uid, newItem).then((docRef) => {
      setItems((prevItems) => {
        return [{ id: docRef.id, ...newItem }, ...prevItems];
      });
    });
  }

  function handleItemSelect(name) {
      setSelectedItemName(name.split(",")[0].trim().replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|\uD83E[\uDD10-\uDDFF])|/g, ''));
      //console.log(name.split(",")[0].trim().replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|\uD83E[\uDD10-\uDDFF])|/g, ''));
    }

      return (
      <main>
        <div className="bg-slate-800 flex ">
          <div>
            <h1 className="text-3xl font-bold bg-slate-800 mt-10">Shopping List</h1>
          </div>        
        </div>
        <div className="p-2 bg-slate-800 flex">
          <div>
            <NewItem onAddItem={handleAddItem}/>
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
          <div>
          <h1 className="text-3xl font-bold">Meal Ideas</h1>
            {selectedItemName ? (
              <MealIdeas ingredient={selectedItemName}/>
            ) : (
              <p className="m-2 p-2 bg-slate-800">Click an item to get meal ideas.</p>
            )}
          </div>
        </div>
        </main>
    );
  }
