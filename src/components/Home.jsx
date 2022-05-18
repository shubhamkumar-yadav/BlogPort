import React from "react";
import { Blockchain } from "./Blockchain";
import { DataStructure } from "./DataStructure";
import { Landing } from "./Landing";
import { Shop } from "./Shop";
const Home = ()=>{
    return(<>
    <Landing/>
    <DataStructure/>
    <Blockchain/>
    <Shop/>
    </>);
};
export{Home};