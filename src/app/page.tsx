import dynamic from "next/dynamic";

const DynamicMenu = dynamic(() => import("./components/Menu"));
const DynamicMain = dynamic(() => import("./components/MainContect"));
const DynamicSlider = dynamic(() => import("./components/Slider"));
const DynamicCarrusel = dynamic(() => import("./components/Carrusel"));
const DynamicCaracteristicas  = dynamic(() => import("./components/Caracteristicas"));
const DynamicPlan = dynamic(() => import("./components/Plan"));
const Dynamicwelcome = dynamic(() => import("./components/Welcome"));
const DynamicFooter = dynamic(() => import("./components/Footer"));

export default function Home() {
  return (
  <main>
    <DynamicMenu />
    <DynamicMain />
    <br></br>
    <DynamicSlider />
    <DynamicCarrusel />
    <br></br>
    <DynamicCaracteristicas data={[]} />
    <DynamicPlan data={[]} />
    <br></br>
    <Dynamicwelcome />
    <DynamicFooter />


  </main>
  );
}
