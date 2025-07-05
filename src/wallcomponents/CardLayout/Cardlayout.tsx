import React from "react";
import PostCard from "./postcard";
import Ballon from "./ballon";
import Classic from "./classic";
import Spotlight from "./spotlight";
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
  },
  type:string
}

const Cardlayout: React.FC<PostCardProps> = ({ item ,type}) => {
    const fullwidth=useSelector((state:any)=>state.layout.fullWidth)
    const customwidth=useSelector((state:any)=>state.layout.customWidth)
    const showimage=useSelector((state:any)=>state.layout.showLoadMoreButton)
    const reviebgcolor=useSelector((state:any)=>state.layout.reviewBackgroundColor)
    const borderColor=useSelector((state:any)=>state.layout.reviewOutlineColor)
    const layout=useSelector((state:any)=>state.layout.layout)
  return (
    <div style={{ backgroundColor: reviebgcolor, borderColor: borderColor }}
className={`flex h-full border-[1px] ${
  fullwidth
    ? "flex-row"
    : 
    (layout==="slider") ? (Number(customwidth)<600 ? "flex-col":"flex-row") :
    (layout === "list")
      ? (Number(customwidth)<550 ? "flex-col" : "flex-row")
      :
      (
        layout==="grid" && (Number(customwidth)<1100 ?"flex-col":"flex-row")
      )
} bg-white rounded-xl shadow mx-auto overflow-hidden`}
>
  <div className={`${showimage ? "block" : "hidden"} ${
  (fullwidth || layout === "list" || (layout==="slider" && Number(customwidth)<600)  || (layout === "grid" && Number(customwidth)<1100))
    ? "w-full"
    : "w-1/2"
}`}>

    <img
      src={item.reviewImage}
      alt={item.custName}
      className="w-full h-full object-cover"
    />
  </div>
  {type === "postcard" && <PostCard item={item} />}
  {type === "balloon" && <Ballon item={item} />}
  {type === "classic" && <Classic item={item} />}
  {type === "spotlight" && <Spotlight item={item} />}
</div>
);

};

export default Cardlayout;

