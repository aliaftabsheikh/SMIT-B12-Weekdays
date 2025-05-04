import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import CardInfo from "./components/CardInfo";
import "./App.css";
import { Button } from "./components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";

function App() {
  const [name, setName] = useState("Ali");

  const faq = [
    {
      id: 1,
      question: "Is it accessible?",
      answer: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      id: 2,
      question: "Is it accessible?",
      answer: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      id: 3,
      question: "Is it accessible?",
      answer: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      id: 4,
      question: "Is it accessible?",
      answer: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
  ]

  return (
    <div className="flex items-center justify-center w-screen flex-col h-screen">
      {/* <CardInfo setName={setName}/>

      <p className="text-2xl mt-4">My name is: {name}</p> */}


<div className="w-1/2">
{
  faq.map((item, index) => (
    <Accordion className="" type="single" collapsible key={item.id}>
      <AccordionItem value="item-1">
        <AccordionTrigger>{item.question}</AccordionTrigger>
        <AccordionContent>
          {item.answer}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ))  
}

  
</div>




      {/* // <Button size="lg">Button</Button>
      // <Button size="lg">Button</Button>
      // <Button size="lg">Button</Button>
      //{" "}
      <Button variant="apna" size="lg">
        Button
      </Button>
      // <Button size="lg">Button</Button>
      // <Button size="lg">Button</Button> */}
    </div>
  );
}

export default App;
