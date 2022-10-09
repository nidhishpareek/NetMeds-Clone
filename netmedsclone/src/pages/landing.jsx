
import { Carousel } from "./Carousel/Carousel"
import { HealthSlider } from "./HealthSlider/HealthSlider"
import { PaymentsPartner } from "./paymentsPartner/PaymentsPartner"
import ShopByCategory from "./ShopByCategory/ShopByCategory"

export const Landing = () => {
    return <>
    <Carousel/>
    <HealthSlider/>
    <PaymentsPartner/>
    <ShopByCategory/>
    </>
}