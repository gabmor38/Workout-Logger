import Image from "next/image";
import NavBar from "../app/components/NavBar";
import CompletedWkGrid from "./components/CompletedWkGrid";
import Form from "./components/Form";
import Home from "./components/Home";

export  default function Page() {
  return (  
    <div>
      <Home/>
      <div className="flex">
        <CompletedWkGrid/>
      </div>
      <div>
        <Form/>
      </div>
      <NavBar />
    </div>
  );
}
