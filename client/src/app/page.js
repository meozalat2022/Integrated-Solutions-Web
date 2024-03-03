import Image from "next/image";
import Index from "./Index/Index";

export default function Home() {
  //dispatch products, categories, brands here
  return (
    <div className="overflow-scroll scrollbar-none scroll-smooth transition-all">
      <Index />
    </div>
  );
}
