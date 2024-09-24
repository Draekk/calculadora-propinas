import MenuItem from "./components/MenuItem";
import OrderContent from "./components/OrderContent";
import OrderTotal from "./components/OrderTotal";
import TipPercentageForm from "./components/TipPercentageForm";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";

function App() {
  const { order, addItem, removeItem, tip, setTip, placeOrder } = useOrder();
  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">
          Calculadora de Propinas y Consumo
        </h1>
      </header>

      <main className=" max-w-7xl mx-auto my-20 grid md:grid-cols-2">
        <div className=" text-center px-5">
          <h2 className="font-black text-4xl my-5">Menú</h2>
          <div className=" space-y-3">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem}></MenuItem>
            ))}
          </div>
        </div>
        <div className="border-2 border-slate-300 p-5 rounded-lg space-y-10">
          {order.length > 0 ? (
            <>
              <OrderContent
                order={order}
                removeItem={removeItem}
              ></OrderContent>
              <TipPercentageForm setTip={setTip} tip={tip}></TipPercentageForm>
              <OrderTotal
                order={order}
                tip={tip}
                placeOrder={placeOrder}
              ></OrderTotal>
            </>
          ) : (
            <p className="text-center">La orden esta vacia</p>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
