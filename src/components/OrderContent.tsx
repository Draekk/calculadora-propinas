import { TOrderItem, TOrderItemID } from "../types";
import { formatCurrency } from "../helpers";

type OrderContentProps = {
  order: TOrderItem[];
  removeItem: (id: TOrderItemID) => void;
};

function OrderContent({ order, removeItem }: OrderContentProps) {
  return (
    <div>
      <h2 className="text-center font-black text-4xl my-5">Consumo</h2>
      <div className="space-y-3 mt-5">
        {order.length === 0 ? (
          <></>
        ) : (
          order.map((item) => (
            <div
              key={item.id}
              className="flex justify-between border-t py-5 last-of-type:border-b"
            >
              <div>
                <p className="text-lg">
                  {item.name} - {formatCurrency(item.price)}
                </p>
                <p className="font-black">
                  Cantidad: {item.quantity} -{" "}
                  {formatCurrency(item.quantity * item.price)}
                </p>
              </div>
              <button
                className="bg-red-600 h-8 w-8 rounded-full text-white self-center hover:bg-red-500"
                onClick={() => removeItem(item.id)}
              >
                X
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default OrderContent;
