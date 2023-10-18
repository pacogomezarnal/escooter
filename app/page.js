'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import Carousel from 'react-bootstrap/Carousel';


export default  function Home() {

  const [scList, setScList] = useState([])
  const [scListDestacados, setScListDestacados] = useState([])
  const [isLoading, setLoading] = useState(true)
 
  useEffect(()=>{
    const fetchSc = async () => {
        const response = await fetch("http://localhost:3000/api/scData.json");
        const scListData = await response.json();
        setScList(scListData.data);
        const scListF = scListData.data.filter((sc) => sc.destacado == 1)
        setScListDestacados(scListF)
        setLoading(false) 
      };
      fetchSc();
  }, []);


  return (
    <div className="container-fluid  pt-5 ">
    <div className="grid">
      <div className="row">
        <div className="col">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./img/patinete01_1080.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>E-SCooter</h3>
                <p>Desplázate de una forma diferente</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./img/patinete02_1080.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Scooter segunda mano</h3>
                <p>Conectamos directamente al vendedor y comprado</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-4">
          <img src="./img/patinete03_recortado.jpg" className="img-fluid" alt="..."/>
        </div>
        <div className="col-4">
          <h2>La revolución de los patinetes eléctricos</h2>
          <p>Los patinetes eléctricos se han vuelto cada vez más populares desde finales de la década de 2010, concretamente a partir de 2017-2018.​ La tendencia hacia la movilidad eléctrica observada en estos momentos muestra que, especialmente en las ciudades, muchas personas buscan para desplazarse una alternativa a un automóvil con motor de combustión interna. Los patinetes eléctricos permiten cubrir rápidamente distancias cortas, como por ejemplo desde el lugar de residencia hasta una estación de tren, un comercio, o el lugar de trabajo en algunos casos. Dentro de este contexto, se habla de desplazamiento de la última milla. Algunos modelos con mayor autonomía en la batería recorren medias distancias sin ningún problema.</p>
        </div> 
        <div className="col-4">
          <h2>Destacados</h2>
          <ul className="list-group list-group-flush">
        {
          scListDestacados.map(sc=>(

              <li className="list-group-item">{sc.modelo} <span class="badge text-bg-dark float-end">{sc.precio} €</span></li>
          ))
        }
          </ul>
        </div> 
      </div>
    </div>
    </div>
  )
}
