import React from 'react';
import { graphql } from 'gatsby';

export default function PizzasPage({ data }) {
  console.log(data);
  const pizzas = data.pizza.nodes;
  return (
    <>
      <p>Hey! There are {pizzas.length} pizzas </p>
    </>
  );
}
export const query = graphql`
  query {
    pizza: allSanityPizza {
      nodes {
        name
        id
        slug {
          current
        }
        toppings {
          id
          name
        }
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
