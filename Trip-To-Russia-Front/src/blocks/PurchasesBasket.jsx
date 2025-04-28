import Footer from "./Footer";
import Header from "./Header";
import ContainerPurchases from "./Purchases/ContainerPurchases";
import TrashPurchases from "./Purchases/TrashPurchases";
import '/src/blocks/Purchases/purchases.css';


export default function PurchasesBasket() {
    return (
        <section>
        <Header/>
        <TrashPurchases/>
        <ContainerPurchases/>
        <Footer/>
        </section>
    )
}