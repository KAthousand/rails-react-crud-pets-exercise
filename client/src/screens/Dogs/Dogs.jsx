import React from "react";
import Layout from "../../Layouts/Layout";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";

export default function Dogs(props) {
  // deconstruct the dogs from props
  const { allDogs } = props;

  return (
    <Layout>
      <div className="card-list">
        {allDogs.map((dog) => (
          <React.Fragment key={dog.id}>
            <Link to={`/dogs/${dog.id}`}>
              <Card
                title={dog.name}
                image={dog.img_url}
                description={dog.breed}
              />
            </Link>
          </React.Fragment>
        ))}
      </div>
      <Link to="/dogs/new">
        <button>Adopt a dog</button>
      </Link>
    </Layout>
  );
}
