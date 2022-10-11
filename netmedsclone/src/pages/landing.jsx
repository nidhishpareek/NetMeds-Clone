import BestInBeauty from "./LandingPage/BestInBeauty"
import BrandDays from "./LandingPage/BrandDays"
import { Carousel } from "./LandingPage/Carousel"
import CategoriesOnFocus from "./LandingPage/CategoriesOnFocus"
import { Check } from "./chekc"
import ExploreBeauty from "./LandingPage/ExploreBeauty"
import { HealthSlider } from "./LandingPage/HealthSlider"
import { LimitedTimeDeals } from "./LandingPage/LimitedTimeDeals"
import NewOnNetmeds from "./LandingPage/NewOnNetmeds"
import { PaymentsPartner } from "./LandingPage/PaymentsPartner"
import PersonalCare from "./LandingPage/PersonalCare"
import PreviousAndBeauty from "./LandingPage/PreviousAndBeauty"
import ShopByCategory from "./LandingPage/ShopByCategory"
import { ThreeCategory } from "./LandingPage/ThreeCategory"
import TopBrands from "./LandingPage/TopBrands"
import TrendingToday from "./LandingPage/TrendingToday"
import MensGrooming from "./LandingPage/MensGrooming"
import HealthConcern from "./LandingPage/HealthConcern"

export const Landing = () => {
    return <>
    <Carousel/>
    <ThreeCategory/>
    <PaymentsPartner/>
    <PreviousAndBeauty/>
    <TrendingToday/>
    <LimitedTimeDeals/>
    <BrandDays/>
    {/* <HealthSlider/> */}
    <ShopByCategory/>
    <NewOnNetmeds/>
    <TopBrands/><fieldset><CategoriesOnFocus/></fieldset>
    <ExploreBeauty/>
    <BestInBeauty/>
    <PersonalCare/>
    <MensGrooming/>
    <HealthConcern/>
    {/* <Check buttons={false} width={400}/> */}
    </>
}