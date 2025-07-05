import { useDispatch, useSelector } from "react-redux";// adjust import path
import {
  setReviewTextFullOrShort,
  setTextLength,
  setAlignCardsByHeight,
} from "../../../slices/LayoutSlice"; // adjust import path

export default function ReviewTextSettings() {
  const dispatch = useDispatch();

  // read values from Redux store
  const displayMode = useSelector((state: any) => state.layout.reviewTextFullOrShort);
  const previewLength = useSelector((state: any) => state.layout.textLength);
  const alignCards = useSelector((state: any) => state.layout.alignCardsByHeight);

  return (
    <div className="bg-[#343434] my-6 rounded">
      <h3 className="text-sm w-full text-left py-3 pl-3">How to Display Review Text</h3>
      <div className="flex rounded overflow-hidden text-xs px-3 py-1 mb-3">
        <button
          onClick={() => dispatch(setReviewTextFullOrShort("Short"))}
          className={`flex-1 rounded-l px-2 py-1 ${displayMode === "Short" ? "bg-blue-500 text-white" : "bg-gray-700 rounded-l text-gray-300"}`}
        >
          Short
        </button>
        <button
          onClick={() => dispatch(setReviewTextFullOrShort("Full"))}
          className={`flex-1 rounded-r px-2 py-1 ${displayMode === "Full" ? "bg-blue-500 text-white" : "bg-gray-700 rounded-r text-gray-300"}`}
        >
          Full
        </button>
      </div>

      {displayMode === "Short" && (
        <>
          {/* Preview Text Length */}
          <div className="w-full px-3 py-3 border-t-[1px] border-black">
            <div className="text-[15px]">Preview Text Length</div>
            <input
              type="range"
              min="10"
              max="100"
              value={previewLength}
              onChange={(e) => dispatch(setTextLength(Number(e.target.value)))}
              className="w-full mt-4 accent-blue-500"
            />
            <div className="flex justify-between text-[10px] text-gray-400">
              <span>Brief</span>
              <span>Extended</span>
            </div>
          </div>

          <div className="flex justify-between px-3 py-3 border-t-[1px] border-black mb-8 items-center">
            <span className="text-[14px]">Align Cards by Height</span>
            <button
              onClick={() => dispatch(setAlignCardsByHeight(!alignCards))}
              className={`relative inline-flex items-center h-5 w-10 rounded-full transition-colors duration-200 
                ${alignCards ? 'bg-blue-500' : 'bg-gray-600'}`}
            >
              <span
                className={`inline-block h-4 w-4 bg-white rounded-full transform transition-transform duration-200 
                  ${alignCards ? 'translate-x-5' : 'translate-x-1'}`}
              />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
