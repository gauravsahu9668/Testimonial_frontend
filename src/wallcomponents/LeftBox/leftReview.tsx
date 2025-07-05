import TestimonialCarousel from "./components/carousel"
import ToggleSettingsPanel from "./components/toggleforreview"
import ReviewTextSettings from "./components/shortfulltext"
const LeftReview = () => {
  return (
    <div className="w-full h-full pb-5 ">
      <TestimonialCarousel></TestimonialCarousel>
      <ToggleSettingsPanel ></ToggleSettingsPanel>
      <ReviewTextSettings></ReviewTextSettings>
    </div>
  )
}

export default LeftReview
