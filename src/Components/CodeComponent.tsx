import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
const CodeComponent = () => {
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
      <div className="p-6 rounded-lg mx-auto bg-[#111113] text-white w-full h-full mb-10">
          <h2 className="text-[20px] font-semibold">Try our sample embed code</h2>
          <p className="text-[16px] mt-2">Embed the wall of love to your website in 1 minute</p>
          <pre className="bg-[#0b101a] p-4 mt-4 rounded-lg text-sm overflow-x-auto">
            <code className="text-[#22C55E]">{codeContent}</code>
          </pre>
      
          <div className="flex gap-4 mt-4">
            <button
              className="bg-gradient-to-r flex items-center gap-x-2 from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]"
              onClick={handleCopy}
              disabled={isCopied}
            >
              <IoCopyOutline />
              {isCopied ? "Copied!" : "Copy Code"}
            </button>
            <a
              href="https://jsfiddle.net/damonchen/0xdrsy3h/1/"
              className="bg-black/40 text-white hover:bg-black/60 px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live demo
            </a>
          </div>
      </div>
  )
}

export default CodeComponent

