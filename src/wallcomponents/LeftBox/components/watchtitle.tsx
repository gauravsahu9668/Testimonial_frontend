import { ArrowLeft, Bold, Italic, Link, List } from "lucide-react";
import { Dispatch, SetStateAction } from 'react';
import { useSelector, useDispatch } from "react-redux"; // adjust the path
import {
  setWidgetTitleEnabled,
  setTitle,
  setCaption,
  setBold,
  setItalic
} from "../../../slices/LayoutSlice"; // adjust the path

type WidgetTitlePanelProps = {
  setwatchtitle: Dispatch<SetStateAction<boolean>>;
};

export default function WidgetTitlePanel({ setwatchtitle }: WidgetTitlePanelProps) {
  const dispatch = useDispatch();

  const enabled = useSelector((state: any) => state.layout.widgetTitleEnabled);
  const title = useSelector((state: any) => state.layout.title);
  const caption = useSelector((state: any) => state.layout.caption);
  const bold = useSelector((state: any) => state.layout.bold);
  const italic = useSelector((state: any) => state.layout.italic);
  return (
    <div className="text-gray-100 rounded w-full">
      <div className="flex items-center text-sm mb-4 pt-4">
        <div
          onClick={() => setwatchtitle(false)}
          className="flex hover:bg-[#304670] cursor-pointer items-center p-1 rounded-sm text-blue-500 justify-center"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span>Back</span>
        </div>
        <div className="font-semibold w-full flex items-center justify-center text-[#8F8F8F]">
          Widget Title
        </div>
      </div>
      <div className="bg-[#343434] rounded space-y-2">
        <div className="flex justify-between px-2 py-4 items-center">
          <span className="text-sm">Widget Title</span>
          <button
            onClick={() => dispatch(setWidgetTitleEnabled(!enabled))}
            className={`relative inline-flex items-center h-5 w-10 rounded-full transition-colors duration-200 
              ${enabled ? 'bg-blue-500' : 'bg-gray-600'}`}
          >
            <span
              className={`inline-block h-4 w-4 bg-white rounded-full transform transition-transform duration-200 
                ${enabled ? 'translate-x-5' : 'translate-x-1'}`}
            />
          </button>
        </div>
        <div className="w-full border-t-[1px] border-black px-2 py-3">
          <label htmlFor="title" className="text-[14px] text-[#8F8F8F]">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={e => dispatch(setTitle(e.target.value))}
            className="bg-[#343434] w-full rounded text-sm focus:outline-none"
            placeholder="Title"
          />
        </div>
        <textarea
          value={caption}
          onChange={e => dispatch(setCaption(e.target.value))}
          className="w-full bg-[#343434] rounded-b border-t-[1px] border-black px-2 py-1 text-sm text-[#8F8F8F] focus:outline-none resize-none"
          placeholder="Caption..."
          rows={8}
        />
        <div className="flex items-center space-x-4 w-full p-2 text-gray-400">
          <div onClick={()=>dispatch(setBold(!bold))} className={`flex ${bold && "bg-[#34349a]"} items-center justify-center rounded-sm hover:bg-[#454545] hover:text-[#c4c1c1] hover:font-bold p-1`}>
            <Bold  className="w-4 h-4 cursor-pointer" />
          </div>
          <div onClick={()=>dispatch(setItalic(!italic))}  className={`flex ${italic && "bg-[#34349a]"} items-center justify-center rounded-sm hover:bg-[#454545] hover:text-[#c4c1c1] hover:font-bold p-1`}>
            <Italic className="w-4 h-4 cursor-pointer" />
          </div>
          <div className="flex items-center justify-center rounded-sm hover:bg-[#454545] hover:text-[#c4c1c1] hover:font-bold p-1">
            <Link className="w-4 h-4 cursor-pointer" />
          </div>
          <div className="flex items-center justify-center rounded-sm hover:bg-[#454545] hover:text-[#c4c1c1] hover:font-bold p-1">
            <List className="w-4 h-4 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
