import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

export default function CreatePage() {
  const [form, setForm] = useState({
    name: "",
    desc: "",
    image: "",
  });

  useEffect(() => {
    fetch("http://localhost:3000/data")
      .then((res) => res.json())
      .then((json) => setForm(json));
  }, []);
  
  const doForm = (e) => {
    const { value, name } = e.target;
    const newForm = { ...form };
    newForm[name] = value;
    setForm(newForm);
  };

  const doSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/data", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(form),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  console.log(form);
  return (
    <div>
      <Navbar />
      <form onSubmit={doSubmit}>
        <div class="m-auto form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Item's name</span>
          </label>
          <input
            onChange={doForm}
            name="name"
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full max-w-xs"
          />
        </div>
        <div class="m-auto form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Item's description</span>
          </label>
          <input
            onChange={doForm}
            name="desc"
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full max-w-xs"
          />
        </div>
        <div class="m-auto form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Item's image</span>
          </label>
          <input
            onChange={doForm}
            name="image"
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full max-w-xs"
          />
        </div>
        <button type="submit" class="btn btn-outline btn-info">
          Submit
        </button>
      </form>
    </div>
  );
}
