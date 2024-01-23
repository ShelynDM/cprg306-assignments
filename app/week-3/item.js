export default function Item({name, quantity, category}) {
    return (
        <div className="ml-4">
          <h2 className="text-green-500">{name}</h2>
          <p className="text-xs">
            Buy {quantity} in {category}
          </p>
        </div>
      );
}