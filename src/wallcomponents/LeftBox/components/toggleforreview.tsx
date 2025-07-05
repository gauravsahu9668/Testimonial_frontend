import { useDispatch, useSelector } from "react-redux";// adjust path
import {
  setShowReviewerName,
  setShowVerifiedBadge,
  setShowReviewerPicture,
  setShowCaption,
  setShowDate,
  setShowRating,
  setShowLogo,
} from "../../../slices/LayoutSlice"; // adjust path

export default function ToggleSettingsPanel() {
  const dispatch = useDispatch();

  // ✅ Get current toggle values from Redux
  const settings = useSelector((state: any) => ({
    showReviewerName: state.layout.showReviewerName,
    showVerifiedBadge: state.layout.showVerifiedBadge,
    showReviewerPicture: state.layout.showReviewerPicture,
    showCaption: state.layout.showCaption,
    showDate: state.layout.showDate,
    showRating: state.layout.showRating,
    showEmail: state.layout.showEmail,
  }));

  // Map key to action for cleaner dispatch
  const toggleActions: Record<string, any> = {
    showReviewerName: setShowReviewerName,
    showVerifiedBadge: setShowVerifiedBadge,
    showReviewerPicture: setShowReviewerPicture,
    showCaption: setShowCaption,
    showDate: setShowDate,
    showRating: setShowRating,
    showEmail: setShowLogo,
  };

  const handleToggle = (key: string) => {
    dispatch(toggleActions[key](!settings[key as keyof typeof settings]));
  };

  return (
    <div className="bg-[#343434] text-white rounded-md mt-5 space-y-2">
      {Object.entries(settings).map(([key, value]) => (
        <div
          key={key}
          className="flex px-4 py-3 justify-between items-center border-b border-gray-700 last:border-none"
        >
          <span className="capitalize">{key.replace(/([A-Z])/g, " $1")}</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={value}
              onChange={() => handleToggle(key)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-blue-500 peer-focus:ring-2 peer-focus:ring-blue-300 transition-all after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
          </label>
        </div>
      ))}
    </div>
  );
}
