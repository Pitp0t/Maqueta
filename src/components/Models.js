import React from "react";
import Cabeza from '../models/cabeza.glb'




export default function modeloIndividual(){
    return(
        <div className="padre">
            <h3 className="padre--price">1200$</h3>
            <div className="hijo">
                <model-viewer className ='modelo' src={Cabeza} disable-zoom  camera-controls></model-viewer>
            </div>
            <p>Modelo 3d</p>
            <h4>Por <b>Gonzalo Iurman</b></h4>
            <button className="padre--boton">Comprar</button>
        </div>

    )
}