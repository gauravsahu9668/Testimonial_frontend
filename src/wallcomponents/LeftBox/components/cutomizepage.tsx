import { ArrowLeft } from "lucide-react";
import { Dispatch, SetStateAction } from 'react';
import { useSelector, useDispatch } from "react-redux";// adjust path
import {
  setReviewsPerPage,
  setReviewsPerPageMobile,
  setReviewsSpacing,
  setShowLoadMoreButton
} from "../../../slices/LayoutSlice"; // adjust path

type WidgetTitlePanelProps = {
  setcustomizepage: Dispatch<SetStateAction<boolean>>;
};

export default function ListLayoutPanel({ setcustomizepage }: WidgetTitlePanelProps) {
  const dispatch = useDispatch();

  // ✅ Get current values from Redux
  const itemsPerPage = useSelector((state: any) => state.layout.reviewsPerPage);
  const itemsPerPageMobile = useSelector((state: any) => state.layout.reviewsPerPageMobile);
  const itemSpacing = useSelector((state: any) => state.layout.reviewsSpacing);
  const showimage = useSelector((state: any) => state.layout.showLoadMoreButton);
  return (
    <div className="text-gray-100 rounded w-full">
      <div className="flex items-center text-sm mb-4 pt-4">
        <div
          onClick={() => setcustomizepage(false)}
          className="flex hover:bg-[#304670] cursor-pointer items-center p-1 rounded-sm text-blue-500 justify-center"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span>Back</span>
        </div>
        <div className="font-semibold w-full flex items-center justify-center text-[#8F8F8F]">
          List Layout
        </div>
      </div>
      <div className="bg-[#343434] rounded divide-y divide-black">
        <div className="flex justify-between items-center px-3 py-5">
          <span className="text-sm">Reviews per Page</span>
          <input
            type="text"
            value={itemsPerPage}
            onChange={(e) => dispatch(setReviewsPerPage(Number(e.target.value)))}
            className="bg-[#343434] w-12 text-right text-blue-700 rounded text-[16px] focus:outline-none"
          />
        </div>

        <div className="flex justify-between items-center px-3 py-5">
          <span className="text-sm">Reviews per Page on Mobile</span>
          <input
            type="text"
            value={itemsPerPageMobile}
            onChange={(e) => dispatch(setReviewsPerPageMobile(Number(e.target.value)))}
            className="bg-[#343434] w-12 text-right text-blue-700 rounded text-[16px] focus:outline-none"
          />
        </div>

        <div className="relative group flex justify-between items-center px-3 py-5">
          <span className="text-sm">Reviews Spacing</span>
          <div>
            <input
              type="text"
              value={itemSpacing}
              onChange={(e) => dispatch(setReviewsSpacing(Number(e.target.value)))}
              className="bg-[#343434] w-12 text-right text-blue-700 rounded text-[16px] focus:outline-none"
            />
            <span className="ml-1 text-[#5e5e5e]">px</span>
          </div>
        </div>
        <div className="flex items-center justify-between px-3 py-5">
                    <span className="text-sm">Show Review Image</span>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={showimage}
                        onChange={() => dispatch(setShowLoadMoreButton(!showimage))}
                      />
            <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-500 relative after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
          </label>
       </div> 
      </div>          
    </div>
  );
}
