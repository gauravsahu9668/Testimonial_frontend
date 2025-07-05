import React, { useState } from "react";
import { Star } from "lucide-react";
import { useSelector } from "react-redux";
	import { ShieldCheck } from "lucide-react";
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

const PostCard: React.FC<PostCardProps> = ({ item }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleReadMore = () => setExpanded(!expanded);
  const customwidth=useSelector((state:any)=>state.layout.customWidth)
  const fullwidth=useSelector((state:any)=>state.layout.fullWidth)
  const showimage=useSelector((state:any)=>state.layout.showLoadMoreButton)
  const name=useSelector((state:any)=>state.layout.showReviewerName)
  const badge=useSelector((state:any)=>state.layout.showVerifiedBadge)
  const picture=useSelector((state:any)=>state.layout.showReviewerPicture)
  const rating=useSelector((state:any)=>state.layout.showRating)
  const date=useSelector((state:any)=>state.layout.showDate)
  const email=useSelector((state:any)=>state.layout.showEmail)
  const badgeColor=useSelector((state:any)=>state.layout.accentColor)
  const font=useSelector((state:any)=>state.layout.font)
  const link=useSelector((state:any)=>state.layout.linkColor)
  const ratingColor=useSelector((state:any)=>state.layout.ratingColor)
  const reviewTextColor=useSelector((state:any)=>state.layout.reviewTextColor)
  const readMoreColor=useSelector((state:any)=>state.layout.readMoreColor)
  const nameColor=useSelector((state:any)=>state.layout.reviewNameColor)
  const captionColor=useSelector((state:any)=>state.layout.captionColor)
  const layout=useSelector((state:any)=>state.layout.layout)
  console.log(font)
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
    <div className="flex flex-col items-center mb-3">
      <img
        src={item.custPorfilePicture}
        alt="Reviewer"
        style={{borderColor:link}}
        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full border-[1px] object-cover mb-2 ${picture ? "block":"hidden"}`}
      />
      <div className="flex items-center justify-center gap-x-1">
        <p style={{color:nameColor}} className={`font-semibold text-gray-900 ${name ?"block":"hidden"}`}>{item.custName}</p>
        <span className={`${badge ? "block" : "hidden"}`}
style={{ color: badgeColor }}
><ShieldCheck size={"15px"}></ShieldCheck></span>
      </div>
      <p style={{color:captionColor}} className={`text-xs ${email? "block":"hidden"} sm:text-sm text-gray-500`}>{item.custEmail}</p>
      <p style={{color:captionColor}} className={`text-xs text-gray-400 ${date?"block":"hidden"}`}>{new Date(item.createdAt).toLocaleDateString()}</p>
    </div>
    <div className={`flex justify-center mb-3 ${rating?"block":"hidden"}`}>
      {Array.from({ length: item.starRating }).map((_, idx) => (
        <Star key={idx} className="w-4 h-4 sm:w-5 sm:h-5" style={{color:ratingColor,fill:ratingColor}} />
      ))}
    </div>
    <div style={{color:reviewTextColor}} className="text-center text-sm sm:text-base mb-2">
      {expanded
        ? item.custMessage
        : item.custMessage.length > 100
          ? item.custMessage.slice(0,150) + "..."
          : item.custMessage}
    </div>
    {item.custMessage.length > 100 && (
      <button
        onClick={toggleReadMore}
        style={{color:readMoreColor}}
        className=" font-medium text-xs sm:text-sm self-center"
      >
        {expanded ? "Read less" : "Read more"}
      </button>
    )}
  </div>

  );
};

export default PostCard;
