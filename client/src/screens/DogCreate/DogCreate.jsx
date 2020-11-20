import React, { useState } from "react";
import Layout from "../../Layouts/Layout";

export default function DogCreate(props) {
  const [formData, setFormData] = useState({
    name: "",
    img_url: "",
    breed: "",
  });
  const { name, img_url, breed } = formData;
  const { createDog } = props;
  // deconstruct the create dog function from props.

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Layout>
      <div className="form-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createDog(formData);
            // call the create dog function and pass in the formData;
          }}
        >
          <h3>Create a Dog</h3>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </label>
          <label>
            Image Url:
            <input
              type="text"
              name="img_url"
              value={img_url}
              onChange={handleChange}
            />
          </label>
          <label>
            Breed:
            <input
              type="text"
              name="breed"
              value={breed}
              onChange={handleChange}
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
    </Layout>
  );
}
