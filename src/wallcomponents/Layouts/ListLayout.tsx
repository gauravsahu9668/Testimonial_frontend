import { useSelector } from "react-redux"
import Cardlayout from "../CardLayout/Cardlayout";
import { useState } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";
const ListLayout = ({textReview}:any) => {
    const reviewStyle = useSelector((state: any) => state.layout.reviewStyle);
    const title=useSelector((state:any)=>state.layout.title)
    const caption=useSelector((state:any)=>state.layout.caption)
    const bold=useSelector((state:any)=>state.layout.bold)
    const italic=useSelector((state:any)=>state.layout.italic)
    const widgetTitleEnabled=useSelector((state:any)=>state.layout.widgetTitleEnabled)
    const fullwidth=useSelector((state:any)=>state.layout.fullWidth)
    const customwidth=useSelector((state:any)=>state.layout.customWidth)
    const spacing=useSelector((state:any)=>state.layout.reviewsSpacing)
    const showcaption=useSelector((state:any)=>state.layout.showCaption)
    const bgcolor=useSelector((state:any)=>state.layout.backgroundColor)
    const titleColor=useSelector((state:any)=>state.layout.titleColor)
    const captionColor=useSelector((state:any)=>state.layout.captionColor)
    const layout=useSelector((state:any)=>state.layout.layout)
    const color1=useSelector((state:any)=>state.layout.arrowBackgroundColor)
    const color2=useSelector((state:any)=>state.layout.arrowColor)
    const color5=useSelector((state:any)=>state.layout.paginationColor) 
    const [index, setIndex] = useState(0);

       const nextSlide = () => {
        setIndex((prev:any) => (prev + 1) % textReview.length);
      };

  const prevSlide = () => {
    setIndex((prev:any) => (prev - 1 + textReview.length) % textReview.length)
  }
  return (
          <div
            className={`flex flex-col rounded-xl`}
            style={ fullwidth ? { width: '100%',backgroundColor:bgcolor } : { width: `${customwidth}px`,backgroundColor:bgcolor } }>
            <div style={{color:titleColor}} className={`w-full ${widgetTitleEnabled ? "block":"hidden"} text-center  text-[30px] pt-4 ${ bold &&  "font-bold"} ${italic && "italic"}`}>
            {title}
            </div>
            <div style={{color:captionColor}} className={`w-full  ${showcaption ? "block":"hidden"} text-center  text-[20px]`}>
            {caption}
            </div>
            {
              layout==="list" && <div className="flex flex-col w-full p-4"
  style={{ gap: `${spacing}px` }}>
              {
              textReview.map((item: any, idx: number) => (
              <div key={idx}>
              <Cardlayout item={item} type={reviewStyle}></Cardlayout>
              </div>
              ))
              }
            </div>
            }
            {
              layout==="grid" && <div 
  className={`grid  ${fullwidth? "grid-cols-2": (Number(customwidth)< 500 ? "grid-cols-1" : "grid-cols-2")}   w-full p-4`}
  style={{ gap: `${spacing}px` }}
>
  {textReview.map((item: any, idx: number) => (
    <div key={idx} className="flex flex-col h-full">
      <Cardlayout item={item} type={reviewStyle} />
    </div>
  ))}
            </div>
            }
            {
              layout==="slider" &&  
              <div className="w-full h-full rounded-lg p-3">
                <div className="relative w-full max-w-5xl py-6 mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {textReview.map((item:any, idx:any) => (
  <div key={idx} className="min-w-full ">
    <Cardlayout item={item} type={reviewStyle}></Cardlayout>
  </div>
))}

      </div>
      <button
        onClick={prevSlide}
        style={{backgroundColor:color1}}
        className="absolute top-1/2 left-1 transform -translate-y-1/2 mybutton hover:bg-gray-400 rounded-full p-2"
      >
        <IoMdArrowRoundBack size={"30px"} style={{color:color2}}></IoMdArrowRoundBack>
      </button>
      <button
      style={{backgroundColor:color1}}
        onClick={nextSlide}
        className="absolute top-1/2 right-1 transform -translate-y-1/2 mybutton  hover:bg-gray-400 rounded-full p-2"
      >
        <IoMdArrowRoundForward size={"30px"} style={{color:color2}}></IoMdArrowRoundForward>
      </button>
      <div className="flex justify-center mt-6 gap-1">
        {textReview.map((_:any, i:any) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            style={{backgroundColor:index!==i? color5 : '#060101'}}
            className={`h-2 w-2 rounded-full cursor-pointer }`}
          ></span>
        ))}
      </div>
              </div>
              </div>
            }
          </div>

  )
}

export default ListLayout
