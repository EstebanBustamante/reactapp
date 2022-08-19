import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import ItemsData from '../../data/data'
import '../ItemDetailContainer/ItemDetailContainer.css'
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
    const Id = useParams().id;
     // PROMISE 
    function getDetail() {
        return new Promise((resolve, reject) => {

            let itemRequired = ItemsData.find(elemente => elemente.id == Id);

            itemRequired === undefined ? reject('No se encontro la comida deseada') :
                setTimeout(() => resolve(itemRequired), 2000)
        })
    };

    const [data, setData] = useState([])

    useEffect(() => {
        getDetail().then((respuesta) => {
            setData(respuesta)
        }).catch((e) => alert(e));

    }, [])

    return (
        data.length === 0 ? 'Cargando...' :
            <div className='ItemDetailContainer'>
                <h1>Detalles del {data.food}</h1>
                <ItemDetail
                    product={data.food}
                    detalles={data.detalles}
                    images={data.img}
                    variedad={data.food_type}
                    key={data.id}
                    price={data.price}
                    cant={7}
                />
            </div>
    )
}
