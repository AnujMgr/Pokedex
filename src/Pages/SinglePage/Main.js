import React, { useEffect, useState } from "react";
import {
  StyleAbility,
  StyleDescription,
  StyleMain,
  StyleProfile,
  StyleTopic,
} from "./StyleSinglePage";
import "@reach/tabs/styles.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { useParams } from "react-router";
import Loading from "../../Components/Loading";

function Main() {
  const pokemon = useSelector((state) => state.pokemon);
  const [loading, setLoading] = useState(true);
  const [evolutionData, setEvolutionData] = useState("");
  const { pokemonId } = useParams();

  const {
    weight,
    height,
    flavor_text_entries,
    capture_rate,
    gender_rate,
    abilities,
    evolution_chain,
    held_items,
  } = pokemon;

  let data = [];

  var evolutionChain = function (evolution) {
    if (evolution === undefined) {
      return;
    } else {
      data.push(evolution.species.name);
      evolutionChain(evolution.evolves_to[0]);
    }
  };
  const fetchData = async () => {
    const getPokemons = await axios.get(evolution_chain.url).catch((err) => {
      console.log(err);
    });

    await evolutionChain(getPokemons.data.chain);

    setLoading(false);

    setEvolutionData([...data]);
  };

  useEffect(() => {
    fetchData();
  }, [pokemonId]);

  return loading ? (
    <Loading />
  ) : (
    <StyleMain>
      <StyleDescription>{flavor_text_entries[0].flavor_text}</StyleDescription>
      <div>
        <StyleTopic>Profile</StyleTopic>
        <StyleProfile>
          <div>
            <span>Height</span>
            <span>{height} m</span>
          </div>
          <div>
            <span>Weight</span>
            <span>{weight} KG</span>
          </div>
          <div>
            <span>Catch Rate</span>
            <span>{capture_rate}%</span>
          </div>
          <div>
            <span>Gender Ratio:</span>
            <span>
              {100 - (gender_rate / 8) * 100} % M {(gender_rate / 8) * 100} % F
            </span>
          </div>
        </StyleProfile>
      </div>
      <StyleTopic>Ability</StyleTopic>
      <StyleProfile>
        {abilities.map((ability) => {
          return (
            <div key={ability.ability.name}>
              <h1>
                <span>{ability.ability.name}</span>
              </h1>
            </div>
          );
        })}
      </StyleProfile>

      <StyleTopic>Evolutions</StyleTopic>

      <StyleProfile>
        {evolutionData !== "" ? (
          evolutionData.map((element) => {
            return (
              <div key={element}>
                <h1>
                  <StyleAbility>{element}</StyleAbility>
                </h1>
              </div>
            );
          })
        ) : (
          <p>Loading....</p>
        )}
      </StyleProfile>

      <StyleTopic>Held Items</StyleTopic>

      <StyleProfile>
        {held_items !== "" ? (
          held_items.map((element) => {
            return (
              <div key={element.name}>
                <h1>
                  <span>{element.item.name}</span>
                </h1>
              </div>
            );
          })
        ) : (
          <p>Loading....</p>
        )}
      </StyleProfile>
    </StyleMain>
  );
}

export default Main;
