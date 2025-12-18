import Image from "next/image";
import NavBar from "../app/components/NavBar";
import CompletedWkGrid from "./components/CompletedWkGrid";

export  default function Home() {
  return (  
    <div>
      <h1>Journal</h1>
      <div className="flex">
        <CompletedWkGrid/>
      </div>
      <NavBar />
    </div>
  );
}
