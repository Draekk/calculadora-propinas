import { formatCurrency } from "../helpers";
import { TMenuItem } from "../types";

type MenuItemProps = {
  item: TMenuItem;
  addItem: (item: TMenuItem) => void;
};

export default function MenuItem({ item, addItem }: MenuItemProps) {
  return (
    <button
      className="
        border-2 
        rounded-xl 
        hover:scale-105 
        hover:hue-rotate-180 
        border-teal-400 
        w-full
        flex
        justify-between
        py-4
        px-5
        text-2xl"
      onClick={() => addItem(item)}
    >
      <p>{item.name}</p>
      <p className="font-black">{formatCurrency(item.price)}</p>
    </button>
  );
}
