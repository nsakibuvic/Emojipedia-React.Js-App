import React from "react";

import Entry from "./Entry"
import Emojipedia from "../emojipedia"

function createEntry(Emojipedia){
  return(
    <Entry
    key={Emojipedia.id}
    emoji= {Emojipedia.emoji}
    name= {Emojipedia.name}
    meaning={Emojipedia.meaning}
   />
  )
}

export default function App() {
  return (
    <div>
    <h1>
    <span>emojipedia</span>
    </h1>
    <dl class= "dictionry">
    {Emojipedia.map(createEntry)}
    </dl>
    </div>
);
}


