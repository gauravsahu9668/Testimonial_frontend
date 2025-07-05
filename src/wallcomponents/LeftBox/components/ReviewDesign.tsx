import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// adjust import as needed
import {
  setBackgroundColor, setTitleColor, setCaptionColor, setLinkColor, setRatingColor,
  setReviewBackgroundColor, setReviewOutlineColor, setReviewTextColor, setReadMoreColor, setReviewNameColor,
  setArrowBackgroundColor, setArrowColor, setArrowBackgroundColorHover, setArrowColorHover, setPaginationColor
} from '../../../slices/LayoutSlice'; // adjust import as needed

import ColorPicker from './colropicker';
import ColorSelectorItem from './colorseelctorItem';

const selectors = [
  { key: 'backgroundColor', label: 'Background', action: setBackgroundColor },
  { key: 'titleColor', label: 'Title', action: setTitleColor },
  { key: 'captionColor', label: 'Caption', action: setCaptionColor },
  { key: 'linkColor', label: 'ProfileBorder', action: setLinkColor },
  { key: 'ratingColor', label: 'Rating', action: setRatingColor },
  { key: 'reviewBackgroundColor', label: 'Review Background', action: setReviewBackgroundColor },
  { key: 'reviewOutlineColor', label: 'Review Outline', action: setReviewOutlineColor },
  { key: 'reviewTextColor', label: 'Review Text', action: setReviewTextColor },
  { key: 'readMoreColor', label: 'Read More', action: setReadMoreColor },
  { key: 'reviewNameColor', label: 'Reviewer Name Color', action: setReviewNameColor },
  { key: 'arrowBackgroundColor', label: 'Arrow Background Color', action: setArrowBackgroundColor },
  { key: 'arrowColor', label: 'Arrow Color', action: setArrowColor },
  { key: 'arrowBackgroundColorHover', label: 'Arrow Background Color on Hover', action: setArrowBackgroundColorHover },
  { key: 'arrowColorHover', label: 'Arrow Color on Hover', action: setArrowColorHover },
  { key: 'paginationColor', label: 'Pagination Color', action: setPaginationColor },
];

export default function ColorSelectorList() {
  const dispatch = useDispatch();
  const colors = useSelector((state:any) => state.layout);
  const [activePicker, setActivePicker] = useState<null | string>(null);

  return (
    <div className="relative bg-[#343434] text-[#d1d1d3] rounded">
      {activePicker && (
        <div className="absolute left-2 top-12 w-[95%] z-10">
          <ColorPicker
            onSelectColor={(color: string) => {
              // Find which selector is active and dispatch its action
              const found = selectors.find(s => s.key === activePicker);
              if (found) dispatch(found.action(color));
              setActivePicker(null);
            }}
            onClose={() => setActivePicker(null)}
          />
        </div>
      )}

      <div className="space-y-1">
        {selectors.map((item) => (
          <ColorSelectorItem
            key={item.key}
            label={item.label}
            color={colors[item.key as keyof typeof colors] as string}
            onClick={() => setActivePicker(item.key)}
          />
        ))}
      </div>
    </div>
  );
}
