import LeftBox from "../../wallcomponents/LeftBox/LeftBox";
import RightBox from "../../wallcomponents/RightBox/RightBox";

const WallOfLove = () => {
  return (
    <div className="w-screen h-screen flex flex-col pt-16">
      <div className="w-full h-[50px] flex text-[#e1dede] text-center items-center justify-center">Design your own wall of love</div>
    <div className="flex  flex-1 overflow-hidden bg-[#202020]">
    <LeftBox></LeftBox>
    <RightBox></RightBox>
    </div>
  </div>

  );
};

export default WallOfLove;
