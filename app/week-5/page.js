import ItemList from "./item-list";

export default function Page() {
    return (
      <main>
        <div className="p-2 bg-slate-800">
            <h1 className="text-3xl font-bold">Shopping List</h1>
            <ItemList/>
        </div>
        </main>
    );
  }