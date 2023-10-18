import Link from 'next/link'

async function getMarcas() {
  const res = await fetch("http://localhost:3000/api/marcaData.json")
  if (!res.ok) {
    console.log("--------------ERROR--------------");
  }
  return res.json()
}

export default async function Page() {

    const marcasData = await getMarcas()
    const marcas = marcasData.data

    return(
      <div className="container contPrincipal pt-3">
        <div className="container-fluid  pt-5 ">
            <table class="table table-dark table-striped">
                    <thead>
                      <tr>
                      <th scope="col">Marca</th>
                      <th scope="col">Web</th>
                      <th scope="col">Modelos en tienda</th>
                      </tr>
                    </thead>
                    <tbody>
                    {
                      marcas.map(m=>(
                        <tr>
                          <th scope="row">{m.marca}</th>
                          <td><a href={m.web}>{m.web}</a></td>
                          <td>{m.modelos.map(mod=>(<Link href={`/scooter/${mod.id}`}> {mod.modelo}, </Link>))}</td>
                        </tr>
                      ))
                    }
                    </tbody>
                
            </table>
        </div>
      </div>
    )
  }