import Link from 'next/link'

const url = 'https://aliexpress-datahub.p.rapidapi.com/item_search?q=scooter&sort=latest&region=ES&currency=EUR';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '14190f6043msh4d653e7fa1e8643p11a347jsn7bfe02d73a05',
		'X-RapidAPI-Host': 'aliexpress-datahub.p.rapidapi.com'
	}
};
const url2 = 'https://aliexpress-datahub.p.rapidapi.com/item_detail?itemId=';
const options2 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '14190f6043msh4d653e7fa1e8643p11a347jsn7bfe02d73a05',
		'X-RapidAPI-Host': 'aliexpress-datahub.p.rapidapi.com'
	}
};
async function getItemsDt(items) {

    const itemsData = items.result.resultList

    const updateditemsData=itemsData.map(async (it)=>{
        //const tempIt = it.slice();
        const itemTempDt = await fetch(url2+it.item.itemId+'&region=ES&locale=es_ES', options2)
        .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
        
            return response.json();
        })
        if(itemTempDt.result) tempIt.item.storeTitle=itemTempDt.result.seller.storeTitle;
        else tempIt.item.storeTitle="Sin Vendedor"
        //return tempIt
    })
    console.log(updateditemsData)
    return updateditemsData;
}

async function getItems() {
	const res = await fetch(url, options);

    if (!res.ok) {
        console.log("--------------ERROR--------------");
    }else

    return res.json()
}






export default async function Page() {
    const items = await getItems()
    const itemsData = items.result.resultList
    //console.log(items)
    //const itemsData = await getItemsDt(items)


    return (
        <div className="container pt-3 contPrincipal">
            <div className="container-fluid  pt-5 ">
                <div className="container text-center d-flex flex-wrap justify-content-between p-0 ">
                {
                    itemsData.map(it=>(
                            <div className='card mb-3' style={{width:250}}>
                                <img src={(it.item.image?it.item.image:'./img/scooter/foto01.png') } className="card-img-top" widtht="250px" height="250px"/>
                                <div className="card-body">
                                    <h5 className="card-title">{it.item.storeTitle}</h5>
                                    <p className="card-text">{it.item.title}</p>
                                    <Link href={`/nuevos/${it.item.itemId}`} className="btn btn-dark"> Mas info </Link>
                                </div>
                                <ul className='list-group list-group-flush'>
                                    <li className="list-group-item">{it.item.sku.def.prices.pc} €</li>
                                </ul>
                            </div>   
                    ))
                }
                </div>
            </div>
        </div>
    )
}