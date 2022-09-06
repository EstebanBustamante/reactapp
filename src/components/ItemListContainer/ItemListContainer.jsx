import "./ItemListContainer.css";
import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import firestoreDB from "../../services/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

export default function ItemListContainer({ greeting }) {
  // PROMISE
  function getProductos() {
    return new Promise((resolve) => {
      const productosCollection = collection(firestoreDB, "sandwichs");

      getDocs(productosCollection).then((snapshot) => {
        const docsData = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });

        resolve(docsData);
      });
    });
  }

  function getItemsFromDBbyIdCategory(idParam) {
    return new Promise((resolve) => {
      const productosCollection = collection(firestoreDB, "sandwichs");

      const q = query(productosCollection, where("food", "==", idParam));

      getDocs(q).then((snapshot) => {
        const docsData = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        resolve(docsData);
      });
    });
  }

  const [data, setData] = useState([]);

  const categoria = useParams().idCategorias;

  useEffect(() => {
    if (categoria) {
      getItemsFromDBbyIdCategory(categoria).then((resolve) => setData(resolve));
    } else {
      getProductos().then((resolve) => setData(resolve));
    }
  }, [categoria]);

  return (
    <div className="ItemListContainer">
      <h2 className="greeting">{greeting}</h2>
      <div className="containerProducts">
        <ItemList data={data} />
      </div>
    </div>
  );
}
