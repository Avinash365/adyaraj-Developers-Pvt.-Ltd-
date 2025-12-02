import DirectorsMessage from "../../../page/aboutUs/directors-message/DirectorsMessage";
import Navbar  from "@/components/navbar/Navbar"; 
import Footer from "@/components/footer/Footer"; 


export default function Home() {
    return (
        <div> 
            <Navbar/> 
            <DirectorsMessage />      
            <Footer />   
        </div>
    )
}