'use client'
import Link from 'next/link'
import Filter from '../components/filter'
import { useState,useEffect } from 'react';

export default function Page() {
  const [scList,setScList] = useState([]);
  const [scListOriginal,setScListOriginal] = useState([]);

  useEffect(()=>{
      const fetchSc = async () => {
          const response = await fetch("/api/scData.json");
          const scList = await response.json();
          //console.log(scList);
          setScList(scList.data);
          setScListOriginal(scList.data);
        };
        fetchSc();
  }, []);

  const filtrarScooter = (e) =>{
    if(e.target.value!=""){
        const precio=parseInt(e.target.value);
        const scListNuevo = scListOriginal.slice();
        const scListFiltrado = scListNuevo.filter((sc) => sc.precio > precio);
        setScList(scListFiltrado);
    }
  };

  return(
    <>
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
    <div className="container pt-3">
      <div className="container-fluid  pt-5 ">
        <div className="container text-center d-flex flex-wrap justify-content-between p-0 ">
          {
              scList.map(sc=>(
                      <div className='card mb-3' style={{width:250}}>
                        <img src={'./img/scooter/' + (sc.img?sc.img:'foto01.png') } className="card-img-top" widtht="250px" height="250px"/>
                          <div className="card-body">
                            <h5 className="card-title">{sc.modelo}</h5>
                            <p className="card-text">{sc.txt}</p>
                            <Link href={`/scooter/${sc.id}`} className="btn btn-dark"> Mas info </Link>
                          </div>
                          <ul className='list-group list-group-flush'>
                              <li className="list-group-item">{sc.precio}€</li>
                          </ul>
                      </div>   
              ))
          }
        </div>
      </div>
    </div>
    </>
  )
}