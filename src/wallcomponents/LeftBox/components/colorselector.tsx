import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setColorScheme, setAccentColor, setFont, setBackgroundColor, setReviewBackgroundColor, setReviewNameColor, setTitleColor, setReviewTextColor, setReadMoreColor, setRatingColor,  setReviewOutlineColor, setCaptionColor } from "../../../slices/LayoutSlice"; // adjust path

export default function StyleSettingsPanel() {
  const dispatch = useDispatch();

  // get current values from store
  const colorScheme = useSelector((state: any) => state.layout.colorScheme);
  const selectedColor = useSelector((state: any) => state.layout.accentColor);
  const selectedFont = useSelector((state: any) => state.layout.font);

  // local only for showing pickers
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showFontDropdown, setShowFontDropdown] = useState(false);

  const colorPalette = [
    ['#3b82f6', '#8b5cf6', '#ec4899', '#ef4444', '#f97316', '#eab308', '#22c55e', '#000000'],
    ['#1e40af', '#7c3aed', '#be185d', '#dc2626', '#ea580c', '#16a34a', '#059669', '#6b7280']
  ];

  const fonts = ["Default", "Roboto", "Open Sans", "Lato", "Montserrat", "Poppins"];
  const themeHandler=(mode:string)=>{
    dispatch(setColorScheme(mode))
    if(mode==="Dark"){
      dispatch(setBackgroundColor("#111111"))
      dispatch(setReviewBackgroundColor("#222222"))
      dispatch(setReviewNameColor("#FFF1C6"))
      dispatch(setCaptionColor("#919191"))
      dispatch(setTitleColor("#FFFFFF"))
      dispatch(setReviewTextColor("#FFFFFF"))
      dispatch(setReadMoreColor("#197BF1"))
      dispatch(setRatingColor("#FFA900"))
      dispatch(setAccentColor("#197BF1"))
      dispatch(setReviewOutlineColor("#222222"))
    }
    else{
      dispatch(setBackgroundColor("#FFFFFF"))
      dispatch(setReviewBackgroundColor("#F8F8F8"))
      dispatch(setReviewNameColor("#111111"))
      dispatch(setCaptionColor("#919191"))
      dispatch(setTitleColor("#111111"))
      dispatch(setReviewTextColor("#111111"))
      dispatch(setReadMoreColor("#197BF1"))
      dispatch(setRatingColor("#FFA900"))
      dispatch(setAccentColor("#197BF1"))
      dispatch(setReviewOutlineColor("#F8F8F8"))
    }
  }
  return (
    <div className="bg-[#343434] text-white rounded-b font-sans space-y-5">
      {/* Color Scheme */}
      <div className="px-3 pb-2 pt-4 space-y-3">
        <h3 className="text-[14px] mb-2">Color Scheme</h3>
        <div className="flex gap-2">
          {["Light", "Dark"].map((mode) => (
            <button
              key={mode}
              onClick={() => themeHandler(mode)}
              className={`flex-1 py-1 rounded text-xs font-medium transition-colors ${
                colorScheme === mode ? "bg-blue-500 text-white" : "bg-gray-700 hover:bg-gray-600 text-gray-300"
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      {/* Accent Color */}
      <div className="w-full px-3 pb-2 pt-4 border-t-[1px] space-y-3 border-black">
        <h3 className="text-[16px] mb-2">Accent Color</h3>
        <div className="space-y-2">
          {colorPalette.map((row, idx) => (
            <div key={idx} className="flex gap-1">
              {row.map((color) => (
                <button
                  key={color}
                  onClick={() => { dispatch(setAccentColor(color)); setShowColorPicker(false); }}
                  style={{ backgroundColor: color }}
                  className={`w-[28px] h-[28px] rounded-full transition-all ${
                    selectedColor === color ? " ring-2 ring-blue-500 border-[2px]" : " hover:border-gray-400"
                  }`}
                />
              ))}
              {idx === 1 && (
                <div className="relative">
                  <button
                    onClick={() => setShowColorPicker(!showColorPicker)}
                    style={{ backgroundColor: selectedColor }}
                    className={`w-[25px] h-[25px] rounded-full border-2 flex items-center justify-center transition-all hover:scale-110 ${
                      showColorPicker ? "border-white ring-2 ring-blue-500" : "border-gray-600 hover:border-gray-400"
                    }`}
                  >
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </button>
                  {showColorPicker && (
                    <div className="absolute top-8 left-0 z-10">
                      <input
                        type="color"
                        value={selectedColor}
                        onChange={(e) => { dispatch(setAccentColor(e.target.value)); setShowColorPicker(false); }}
                        className="w-8 h-8 rounded cursor-pointer border-none"
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Font */}
      <div className="w-full px-3 py-3 flex items-center justify-between">
        <h3 className="text-[20px] w-[30%] mb-2">Font</h3>
        <div className="relative w-full gap-x-3 text-[20px]">
          <button
            onClick={() => setShowFontDropdown(!showFontDropdown)}
            className="flex justify-end items-center w-full py-1 px-2 rounded text-xs hover:bg-[#202020]"
          >
            <span>{selectedFont}</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {showFontDropdown && (
            <div className="absolute mt-1 w-full bg-[#3f4042] rounded shadow z-10">
              {fonts.map((font) => (
                <button
                  key={font}
                  onClick={() => { dispatch(setFont(font)); setShowFontDropdown(false); }}
                  className="block w-full text-left px-2 py-1 text-xs hover:bg-gray-600"
                >
                  {font}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
