export default function Item({name, quantity, category, onSelect}) {
    return (
      <ul onClick={onSelect} >
          <div className="w-80 mb-4 p-2 bg-gray-600 hover:bg-blue-600" >
            <li>
              <h2 className="text-2xl font-semibold">{name}</h2>
              <p className="text-sm">
                Buy {quantity} in {category}
              </p>
            </li>
          </div>
      </ul>

      );
}