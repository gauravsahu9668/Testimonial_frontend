import likeLogo from "../assets/like.png"
import image1 from "../assets/image1.jpeg"
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
const Main = () => {
    const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeContent);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const codeContent = `
    <script type="text/javascript" src="https://testimonial.to/js/iframeResizer.min.js"></script>
    <iframe id="testimonialto-wall-of-love-for-testimonial-light" src="https://embed-v2.testimonial.to/embed/wall-of-love?id=6495c637429890419308&theme=light&color=green&font=roboto"></iframe>
    <script type="text/javascript">iFrameResize({log: false, checkOrigin: false}, "#testimonialto-wall-of-love-for-testimonial-light");</script>
  `;
  return (
    // <div className="w-[70%] mx-auto">
    //     <h1 className="text-black text-[50px] text-center mx-auto w-[70%] mt-16 font-semibold">Get testimonials from your customers with ease</h1>
    //     <p className="text-[#555979] text-[20px] text-center mx-auto w-[85%] mt-4 font-semibold">Collecting testimonials is hard, we get it! So we built Testimonial. In minutes, you can collect text and video testimonials from your customers with no need for a developer or website hosting.</p>
    //     <div className="mt-10 w-[33%] flex items-center justify-between mx-auto gap-x-3 ">
    //         <button className="px-6 py-3 border-[1px] rounded-md bg-blue-500 hover:scale-110 transition-all duration-100">Try FREE now</button>
    //         <button className="px-12 py-3 border-[1px] rounded-md border-black  hover:scale-110 transition-all duration-100">Talk to us</button>
    //     </div>
    //     <p className="text-center mt-5 mb-5">Get started with free credits on us.</p>
    //       <div className="mt-8 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
    //         <img src={image1}></img>
    //       </div>
    //   <div className="flex flex-row mx-auto w-[30%] mt-10 mb-10">
    //     <img src={likeLogo} alt="Logo" className="h-10 mr-4" />
    //     <div  className="text-[20px] font-semibold text-[#545454] ">Testimonial</div>
    //   </div>
    //   <div className=" p-4 rounded-lg w-[70%] mb-10 mx-auto bg-[#1F2D3D]">
    //     <h2 className="text-white text-[20px] font-semibold">Try our sample embed code</h2>
    //     <p className="text-white text-[16px] font-semibold">Embed the wall of love to your website in 1 minute</p>
    //    <pre className="bg-[#1D1F21] p-4 border-inherit mt-5 border-t-[2px] border-b-[2px] border-black rounded-lg overflow-x-auto">
    //     <code className="text-[#98E758]">{codeContent}</code>
    //    </pre>
    //   <div className="flex flex-row items-start gap-x-3">
    //   <button
    //     className={" bg-[#DBEAFE] flex text-[#4A73E1] flex-row items-center gap-x-2 hover:bg-blue-700 font-bold py-2 px-4 rounded mt-4"}
    //     onClick={handleCopy}
    //     disabled={isCopied}
    //   >
    //     <IoCopyOutline></IoCopyOutline>
    //     {isCopied ? 'Copied!' : 'Copy Code'}
    //   </button>
    //    <button className=" flex bg-[#FEF3C7] flex-row items-center gap-x-2  font-bold py-2 px-4 rounded mt-4">
    //     <a href="https://jsfiddle.net/damonchen/0xdrsy3h/1/" className="text-[#BD661F] text-[15px]">Live demo</a>
    //    </button>
    //   </div>
    //   </div>
    // </div>
    <div className="w-[75%] px-4 sm:px-10 mx-auto">
  <div className="text-center">
    <h1 className="text-[#1F2937] text-[36px] sm:text-[48px] font-semibold leading-snug mt-12">
      Get testimonials from your customers with ease
    </h1>
    <p className="text-[#4B5563] text-[18px] sm:text-[20px] font-medium mt-4 mx-auto w-full sm:w-[70%]">
      Collecting testimonials is hard, we get it! So we built Testimonial. In minutes, you can collect text and video testimonials from your customers with no need for a developer or website hosting.
    </p>
  </div>

  {/* Buttons Section */}
  <div className="mt-8 flex justify-center gap-4">
    <button className="px-6 py-3 bg-[#2563EB] text-white font-medium text-[16px] rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200">
      Try FREE now
    </button>
    <button className="px-6 py-3 border-[2px] border-[#374151] text-[#374151] font-medium text-[16px] rounded-lg hover:bg-[#E5E7EB] hover:scale-105 transition-all duration-200">
      Talk to us
    </button>
  </div>
  <p className="text-[#6B7280] text-center font-medium mt-4">
    Get started with free credits on us.
  </p>

  {/* Image Section */}
  <div className="mt-8 mx-auto shadow-[0_4px_12px_rgba(0,0,0,0.1)] rounded-lg overflow-hidden">
    <img src={image1} alt="Example" className="w-full" />
  </div>

  {/* Footer Section */}
  <div className="flex justify-center items-center mt-8 mb-6">
    <img src={likeLogo} alt="Logo" className="h-10 mr-3" />
    <div className="text-[20px] font-medium text-[#374151]">Testimonial</div>
  </div>

  {/* Embed Code Section */}
  <div className="p-6 rounded-lg mx-auto bg-[#1F2937] text-white sm:w-[70%] w-full mb-10">
    <h2 className="text-[20px] font-semibold">Try our sample embed code</h2>
    <p className="text-[16px] mt-2">Embed the wall of love to your website in 1 minute</p>
    <pre className="bg-[#111827] p-4 mt-4 rounded-lg text-sm overflow-x-auto">
      <code className="text-[#22C55E]">{codeContent}</code>
    </pre>

    {/* Buttons */}
    <div className="flex gap-4 mt-4">
      <button
        className="flex items-center gap-2 bg-[#DBEAFE] text-[#2563EB] font-medium py-2 px-4 rounded-lg hover:bg-blue-500 hover:text-white transition-all"
        onClick={handleCopy}
        disabled={isCopied}
      >
        <IoCopyOutline />
        {isCopied ? "Copied!" : "Copy Code"}
      </button>
      <a
        href="https://jsfiddle.net/damonchen/0xdrsy3h/1/"
        className="flex items-center gap-2 bg-[#FEF3C7] text-[#BD661F] font-medium py-2 px-4 rounded-lg hover:bg-[#FCD34D] hover:scale-105 transition-all"
        target="_blank"
        rel="noopener noreferrer"
      >
        Live demo
      </a>
    </div>
  </div>
    </div>
  )
}

export default Main
