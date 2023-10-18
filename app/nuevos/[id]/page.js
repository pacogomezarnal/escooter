async function getScList() {
    const res = await fetch("http://localhost:3000/api/scData.json", { cache: 'no-store' })
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }

export default async function Page({ params }) {
    const data = await getScList();
    const scList = data.data;
    const sc = scList[(params.id)-1];

    return(
        <div className="container contPrincipal pt-3">
        <div className="container-fluid  py-5 ">
            <div className= "container text-center" >
                <div className="row">
                    <div className="col-4">
                    <img src={'/img/scooter/' + (sc.img?sc.img:'foto01.png') } className="border card-img-top rounded"/>
                    </div>
                    <div className="col-8 text-start">
                        <h1>{sc.modelo}e</h1>
                        <p>{sc.txt}</p>
                    </div>
                </div>
            </div> 
        </div> 
        </div>

    )
  }