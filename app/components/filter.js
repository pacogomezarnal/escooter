'use client'
import { useState,useEffect } from 'react';


const Filter = ({sc}) => {

    const [scList,setScList] = useState(sc);
    const [scListOriginal,setScListOriginal] = useState(sc);

    const filtrarScooter = (e) =>{
        if(e.target.value!=""){
            const precio=parseInt(e.target.value);
            const scListNuevo = scListOriginal.slice();
            const scListFiltrado = scListNuevo.filter((sc) => sc.precio > precio);
            setScList(scListFiltrado);
        }
    };

    return(
        <ul class="nav justify-content-end contPrincipal pt-3 pb-1 pe-2 text-bg-dark">
            <li class="nav-item">
                <div class="row text-bg-dark">
                    <label for="inputPrecio" class="col col-form-label text-end">Precio maximo</label>
                    <div class="col">
                        <input  class="form-control" id="inputPrecio" onChange={filtrarScooter}/>
                    </div>
                </div>
            </li>

        </ul>
    )
};

export default Filter;