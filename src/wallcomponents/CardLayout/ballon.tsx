import React, { useState } from "react";
import { Star, ShieldCheck } from "lucide-react";
import { useSelector } from "react-redux";

interface PostCardProps {
  item: {
    Liked: boolean;
    createdAt: string;
    custEmail: string;
    custMessage: string;
    custName: string;
    custPorfilePicture: string;
    reviewImage: string;
    starRating: number;
    textReview_id: number;
  };
}

const Ballon: React.FC<PostCardProps> = ({ item }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleReadMore = () => setExpanded(!expanded);

  const customwidth = useSelector((state: any) => state.layout.customWidth);
  const fullwidth = useSelector((state: any) => state.layout.fullWidth);
   const picture=useSelector((state:any)=>state.layout.showReviewerPicture)
  const showimage=useSelector((state:any)=>state.layout.showLoadMoreButton)
  const name = useSelector((state: any) => state.layout.showReviewerName);
  const badge = useSelector((state: any) => state.layout.showVerifiedBadge);
  const badgeColor = useSelector((state: any) => state.layout.accentColor);
  const font = useSelector((state: any) => state.layout.font);
  const rating = useSelector((state: any) => state.layout.showRating);
  const ratingColor = useSelector((state: any) => state.layout.ratingColor);
  const reviewTextColor = useSelector((state: any) => state.layout.reviewTextColor);
  const readMoreColor = useSelector((state: any) => state.layout.readMoreColor);
  const nameColor = useSelector((state: any) => state.layout.reviewNameColor);
  const captionColor = useSelector((state: any) => state.layout.captionColor);
  const date = useSelector((state: any) => state.layout.showDate);
  const email = useSelector((state: any) => state.layout.showEmail);
  const link = useSelector((state: any) => state.layout.linkColor);
  const layout=useSelector((state:any)=>state.layout.layout)
  return (
    <div
  style={{ fontFamily: font }}
  className={`flex ${font} flex-col ${
    fullwidth
      ? (showimage ? "w-1/2" : "w-full")
      : (layout==="slider") ? (Number(customwidth)<600? "w-full":"w-1/2")
      : (layout === "list"
          ? (Number(customwidth) < 550 ? "w-full" : (showimage ? "w-1/2" : "w-full"))
          : (layout === "grid" && Number(customwidth) < 1100
              ? "w-full"
              : (showimage ? "w-1/2" : "w-full")))
  } p-4 sm:p-6 md:p-8`}
>
      <div className={`flex mb-2 ${rating ? "block" : "hidden"}`}>
        {Array.from({ length: item.starRating }).map((_, idx) => (
          <Star
            key={idx}
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
            style={{ color: ratingColor, fill: ratingColor }}
          />
        ))}
      </div>

      <div
        style={{ color: reviewTextColor }}
        className=" relative text-sm sm:text-base mb-2"
      >
        {expanded
          ? item.custMessage
          : item.custMessage.length > 120
            ? item.custMessage.slice(0, 150) + "..."
            : item.custMessage}
      </div>
      {item.custMessage.length > 120 && (
        <button
          onClick={toggleReadMore}
          style={{ color: readMoreColor }}
          className="relative font-medium text-xs sm:text-sm mb-2 self-start"
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      )}

      <div className="flex items-center gap-3 mt-auto">
        <img
          src={item.custPorfilePicture}
          alt={item.custName}
          style={{ borderColor: link }}
          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-[1px] ${picture ? "block" : "hidden"}`}
        />
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <p
              style={{ color: nameColor }}
              className={`font-semibold text-sm sm:text-base ${name ? "block" : "hidden"}`}
            >
              {item.custName}
            </p>
            <span className={`${badge ? "block" : "hidden"}`} style={{ color: badgeColor }}>
              <ShieldCheck size="15px" />
            </span>
          </div>
          <p
            style={{ color: captionColor }}
            className={`text-xs sm:text-sm ${email ? "block" : "hidden"}`}
          >
            {item.custEmail}
          </p>
          <p
            style={{ color: captionColor }}
            className={`text-xs text-gray-500 ${date ? "block" : "hidden"}`}
          >
            {new Date(item.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ballon;
