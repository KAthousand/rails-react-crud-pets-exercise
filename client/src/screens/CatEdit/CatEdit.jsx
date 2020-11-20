import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../Layouts/Layout";

export default function CatEdit(props) {
  const [formData, setFormData] = useState({
    name: "",
    img_url: "",
    breed: "",
  });
  const { name, img_url, breed } = formData;
  const { updateCat, allCats } = props;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const oneCat = allCats.find((cat) => {
        return cat.id === Number(id);
      });
      const { name, img_url, breed } = oneCat;
      setFormData({ name, img_url, breed });
    };
    if (allCats.length) {
      prefillFormData();
    }
  }, [allCats, id]);

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
            updateCat(id, formData);
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
