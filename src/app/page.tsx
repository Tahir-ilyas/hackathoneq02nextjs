import Image from "next/image";
import Navebar from "./Component/Navebar";
import Banner from "./Component/Banner";
import Range from "./Component/Range";
import Product from "./Product";
import Room from "./Room";

export default function Home() {
  return (
<>
<Navebar />
<Banner />
<Range />
<Product />
<Room />
</>
  );
}
