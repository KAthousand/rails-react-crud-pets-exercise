import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../Layouts/Layout";

export default function DogEdit(props) {
  const [formData, setFormData] = useState({
    name: "",
    img_url: "",
    breed: "",
  });
  const { name, img_url, breed } = formData;
  // deconstruct all dogs and the update dog function from props
  const { updateDog, allDogs } = props;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const oneDog = allDogs.find((dog) => {
        return dog.id === Number(id);
      });
      const { name, img_url, breed } = oneDog;
      setFormData({ name, img_url, breed });
    };
    if (allDogs.length) {
      prefillFormData();
    }

    // use .find on the all dogs array to pull out the single dog
    // that matches the id from the url params
    // .find((dog) => dog.id === Number(id));

    // deconstruct name, img_url, and breed from the one dog

    // set the name, img_url and breed to the formData state
  }, [allDogs, id]);

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
            updateDog(id, formData);
            // call the update dog function and pass it the id and formData;
          }}
        >
          <h3>Update Cat</h3>
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
