import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

export default function HomePage() {
  const [publicAPIData, setPublicAPIData] = useState(null);
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setPublicAPIData(json));
  }, []);
  useEffect(() => {
    fetch("http://localhost:3000/data")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  const doDelete = (id) => {
    fetch("http://localhost:3000/data/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((_) =>
        fetch("http://localhost:3000/data")
          .then((res) => res.json())
          .then((json) => setData(json))
      );
  };

  console.log(data);

  return (
    <div>
      <Navbar />
      <div class="grid grid-cols-4 gap-1 justify-evenly">
        <div>
          {data &&
            data.map((e) => {
              return (
                <div key={e.id} class="m-auto card w-48 bg-base-100 shadow-xl">
                  <figure>
                    <img src={e.image} />
                  </figure>
                  <div class="card-body">
                    <h2 class="card-title">
                      {e.title}
                      <div class="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{e.description}</p>
                    <button
                      onClick={() => {
                        doDelete(e.id);
                      }}
                      class="btn btn-error"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => {
                        doEdit(e.id);
                      }}
                      class="btn btn-error"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
