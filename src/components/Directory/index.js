import React from "react";
import Cabeza from '../../images/Cabezapng.png'
import InfititeTag from "../InfiniteTag";
import ModeloIndividual from "../Models";


export default function Directory (props){
    return(
        <div>
            <section className="homepage--hero">
                <div >
                    <h1 className="homepage--hero--h1">Welcome to <br /> 3d models</h1>
                    <h3 className="homepage--hero--h3">Buy models in our store. Upload your 3d models <br/> and sell them through the web </h3>
                    <div className="buttonContainer">
                        <button className="button-1">Our products</button>
                        <button className="button-2">Buy Now</button>
                    </div>
                </div>
                <div className="homepage--hero--img">
                    <img src={Cabeza}></img>
                </div>
            </section>
            <InfititeTag/>
            <div className="abuelo">
                <ModeloIndividual/>
                <ModeloIndividual/>
                <ModeloIndividual/>
                <ModeloIndividual/>
                <ModeloIndividual/>
                <ModeloIndividual/>
                <ModeloIndividual/>
                <ModeloIndividual/>

            </div>
            

        </div>
      
    )
}