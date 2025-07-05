import React from 'react';
import ColorSelectorList from './ReviewDesign';



const CustomizeElements: React.FC= () => {
  return (
    <div className="bg-[#343434] w-full mt-8 my-4 rounded-lg">
      <div className="px-2 py-4 bg-[#202020]">Customize Elements</div>
      <ColorSelectorList></ColorSelectorList>
    </div>
  );
};

export default CustomizeElements;
