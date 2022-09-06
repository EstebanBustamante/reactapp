import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import "../ItemDetailContainer/ItemDetailContainer.css";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import firestoreDB from "../../services/firebase";
import { collection, doc, getDoc } from "firebase/firestore";

function getDetail(id) {
  return new Promise((resolve) => {
    const productosCollection = collection(firestoreDB, "sandwichs");
    const docRef = doc(productosCollection, id);
    getDoc(docRef).then((snapshot) => {
      resolve({ ...snapshot.data(), id: snapshot.id });
    });
  });
}
export default function ItemDetailContainer() {
  const Id = useParams().id;

  const [data, setData] = useState([]);

  useEffect(() => {
    getDetail(Id)
      .then((respuesta) => {
        setData(respuesta);
      })
      .catch((e) => alert(e));
  }, [Id]);

  return (
    <div className="ItemDetailContainer">
      {Object.entries(data).length === 0 ? (
        <div className="alertSpinner">
          {" "}
          <Spinner />
        </div>
      ) : (
        <div className="ItemDetailContainerInt">
          <h1>Detalles del {data.food}</h1>
          <ItemDetail
            data={data}
            product={data.food}
            detalles={data.detalles}
            images={data.img}
            variedad={data.food_type}
            key={data.id}
            price={data.price}
            id={data.id}
            cant={7}
          />
        </div>
      )}
    </div>
  );
}
