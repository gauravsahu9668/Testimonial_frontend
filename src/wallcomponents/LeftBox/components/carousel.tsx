import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux"; // adjust path
import { setReviewStyle } from "../../../slices/LayoutSlice"; // adjust path
import image1 from "../../../assets/postcard.png"
import image2 from "../../../assets/classic.png"
import image3 from "../../../assets/balloon.png"
import image4 from "../../../assets/spotlight.png"
import { useState } from "react";
export default function AnimatedTestimonialCarousel() {
  const dispatch = useDispatch();

  const reviewStyle = useSelector((state: any) => state.layout.reviewStyle);

  const testimonials = [
    { id: 1, key: "postcard", author: image1 },
    { id: 2, key: "classic", author: image2 },
    { id: 3, key: "balloon", author: image3 },
    { id: 4, key: "spotlight", author: image4 },
  ];

  const activeIndex = testimonials.findIndex(t => t.key === reviewStyle);

  const [direction, setDirection] = useState(0);

  const prevSlide = () => {
    setDirection(-1);
    const newIndex = activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1;
    dispatch(setReviewStyle(testimonials[newIndex].key));
  };

  const nextSlide = () => {
    setDirection(1);
    const newIndex = activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1;
    dispatch(setReviewStyle(testimonials[newIndex].key));
  };

  const slideVariants = {
    enter: (dir: any) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      position: "absolute"
    }),
    center: { x: 0, opacity: 1, position: "relative" },
    exit: (dir: any) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      position: "absolute"
    })
  };

  return (
    <div className="text-gray-100 bg-[#343434] rounded-b w-full">
      <div className="bg-[#343434] rounded relative overflow-hidden">
        <h3 className="text-sm mb-3 w-full text-left px-3 py-4 text-[#a1a1a1] bg-[#343434]">Review Style</h3>
        <div className="flex items-center justify-between px-3 relative">
          <div className="w-8 h-8 flex items-center hover:bg-[#202020] justify-center rounded-full">
            <button onClick={prevSlide} className="text-gray-400 hover:text-white z-10">
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="w-40 h-36 flex justify-center items-center rounded-lg overflow-hidden relative">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={testimonials[activeIndex]?.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="bg-white text-gray-900 p-3 rounded text-xs text-center w-full"
              >
                <img src={testimonials[activeIndex]?.author} alt="logo" className="rounded-lg" />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="w-8 h-8 flex items-center hover:bg-[#202020] justify-center rounded-full">
            <button onClick={nextSlide} className="text-gray-400 hover:text-white z-10">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div className="flex justify-center my-4 space-x-1">
          {testimonials.map((t, idx) => (
            <span
              key={t.id}
              className={`w-2 h-2 rounded-full ${
                idx === activeIndex ? 'bg-blue-500' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
