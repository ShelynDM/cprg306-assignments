export default function Item({name, quantity, category}) {
    return (
        <div className="w-80 mb-4 p-2 bg-gray-600">
          <h2 className="text-2xl font-semibold">{name}</h2>
          <p className="text-sm">
            Buy {quantity} in {category}
          </p>
        </div>
      );
}