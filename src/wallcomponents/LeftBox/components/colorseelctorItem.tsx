// components/ColorSelectorItem.js

export default function ColorSelectorItem({ label, color, onClick }:any) {
  return (
    <div className="flex justify-between border-t-[1px] border-black hover:bg-[#4e4e4e] items-center px-6 py-4  cursor-pointer" onClick={onClick}>
      <span>{label}</span>
      <div className="w-8 h-8 rounded-full border" style={{ backgroundColor: color }} />
    </div>
  );
}
