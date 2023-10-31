import Navbar from "@/components/Navbar";
import { AiFillHeart } from "react-icons/ai";
export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="mt-16 justify-center flex">
        <div className="max-w-2xl p-4 flex items-center">
          <h3 className="text-xl md:text-2xl lg:text-3xl ">
            Encontre os livros que você mais {""}
            <span className="text-red-600 flex items-center">
              ama <AiFillHeart className="ml-2" />
            </span>
            , e salve-os para nunca mais perdê-los!
          </h3>
        </div>
      </div>
    </div>
  );
}
