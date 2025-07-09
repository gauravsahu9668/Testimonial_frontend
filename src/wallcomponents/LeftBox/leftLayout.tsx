import { useSelector, useDispatch } from "react-redux";
import {
  setLayout,
  setFullWidth,
  setCustomWidth
} from "../../slices/LayoutSlice"; 

import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import WidgetTitlePanel from "./components/watchtitle";
import ListLayoutPanel from "./components/cutomizepage";
import { 
  LayoutGrid, 
  List, 
  SlidersHorizontal 
} from "lucide-react";

export default function LayoutSelector() {
  const dispatch = useDispatch();

  // ✅ Get current layout state from Redux
  const fullWidth = useSelector((state:any) => state.layout.fullWidth);
  const customWidth = useSelector((state:any) => state.layout.customWidth);
  const selected = useSelector((state: any) => state.layout.layout);

  // Local state just for page navigation
  const [watchtitle, setwatchtitle] = useState(false);
  const [customizepage, setCustomizepage] = useState(false);

  const layouts = [
    { id: 'grid', label: 'Grid', icon: LayoutGrid },
    { id: 'list', label: 'List', icon: List },
    { id: 'slider', label: 'Slider', icon: SlidersHorizontal },
  ];

  return (
    <>
    {
      watchtitle ? (
        <WidgetTitlePanel setwatchtitle={setwatchtitle} />
      ) :
      customizepage ? (
        <ListLayoutPanel setcustomizepage={setCustomizepage} />
      ) : (
        <div className="text-gray-100 w-full pb-5">
          {/* Layout options */}
          <div className="grid bg-[#343434] grid-cols-1 gap-3 py-4 px-3">
            {layouts.map(({ id, label, icon: Icon }) => (
              <div
                key={id}
                onClick={() => dispatch(setLayout(id))}
                className={`flex items-center text-[#8F8F8F] gap-x-6 justify-between p-3 rounded cursor-pointer 
                  ${selected === id ? 'border border-blue-500' : 'hover:bg-[#656565] hover:opacity-80'}
                `}
              >
                <Icon className="w-6 h-6 mb-1" />
                <span className="text-[18px]">{label}</span>
              </div>
            ))}
          </div>

          {/* Customize button */}
          <div
            onClick={() => setCustomizepage(true)}
            className="w-full cursor-pointer bg-[#343434] rounded-b flex items-center justify-center text-blue-500 py-4 border-t-[1px] border-black"
          >
            customize
          </div>

          {/* Full Width toggle */}
          <div className="mt-8 text-[#8F8F8F] bg-[#343434] mb-4 p-4 rounded w-full max-w-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm">Full Width</span>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={fullWidth}
                  onChange={() => dispatch(setFullWidth(!fullWidth),setCustomWidth("200"))}
                />
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-500 relative after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
              </label>
            </div>

            {/* Custom Width slider */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm">Custom Width</span>
              <span className="text-blue-400 text-sm">{customWidth}px</span>
            </div>
            <input
              type="range"
              min="200"
              max="1920"
              value={customWidth}
              disabled={fullWidth}
              onChange={(e) => dispatch(setCustomWidth(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
            <div className="flex justify-between text-xs mt-1 text-gray-400">
              <span>200px</span>
              <span>1920px</span>
            </div>
          </div>

          {/* Widget title panel button */}
          <div
            onClick={() => setwatchtitle(true)}
            className="mt-8 cursor-pointer flex items-center justify-between text-[#8F8F8F] bg-[#343434] mb-4 p-4 rounded w-full max-w-sm"
          >
            <span>widget title</span>
            <FaChevronRight />
          </div>
        </div>
      )
    }
    </>
  );
}
