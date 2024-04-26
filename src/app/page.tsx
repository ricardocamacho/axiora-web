import dynamic from "next/dynamic";

const DynamicMenu = dynamic(() => import("./components/Menu"));
const DynamicMain = dynamic(() => import("./components/MainContect"));
const DynamicSlider = dynamic(() => import("./components/Slider"))
const DynamicCaracteristicas  = dynamic(() => import("./components/Caracteristicas"));

export default function Home() {
  return (
  <main>
    <DynamicMenu />
    <DynamicMain />
    <br></br>
    <DynamicSlider />
    <br></br>
    <DynamicCaracteristicas data={[]} />
  </main>
  );
}
