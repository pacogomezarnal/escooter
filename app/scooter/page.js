async function getScList() {
  const res = await fetch("http://localhost:3000/api/scData.json")
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function Page() {
  const data = await getScList();
  const scList = data.data;

  return(
    <div className="container-fluid  pt-5 ">
      <div className="container text-center d-flex flex-wrap justify-content-between p-0 ">
        {
            scList.map(sc=>(
                    <div className='card mb-3' style={{width:200}}>
                      <img src={'./img/scooter/' + (sc.img?sc.img:'foto01.png') }className="card-img-top"/>
                        <div className="card-body">
                          <h5 className="card-title">Titulo Patinete</h5>
                          <p className="card-text">{sc.txt}</p>
                        </div>
                        <ul className='list-group list-group-flush'>
                            <li className="list-group-item">{sc.precio}€</li>
                        </ul>
                    </div>   
            ))
        }
      </div>
    </div>
  )
}