import React from "react";
import { Link } from "react-router-dom";
import ProgressBar from "../../Components/ProgressBar";
import {
  StyleAside,
  StyleAsideDetail,
  StyleGrid,
  StyleHeader,
  StyleMain,
  StylePokiDetails,
  StyleProfile,
  StyleTopic,
  StyleTypes,
} from "./StyleSinglePage";

function SinglePage() {
  return (
    <StyleGrid>
      <StyleAside>
        <div>
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
            alt="Bulbasaur"
          />
          <h1>Pikachu</h1>

          <StyleTypes>
            <span>Grass</span>
            <span>Poision</span>
          </StyleTypes>
          <div>
            <StyleAsideDetail>
              <span>HP</span>
              <StylePokiDetails>
                <span>41</span>
                <ProgressBar width={41} color={"orange"} />
              </StylePokiDetails>
            </StyleAsideDetail>
            <StyleAsideDetail>
              <span>Attack</span>
              <StylePokiDetails>
                <span>10</span>
                <ProgressBar width={10} color={"orange"} />
              </StylePokiDetails>
            </StyleAsideDetail>
            <StyleAsideDetail>
              <span>Defense</span>
              <StylePokiDetails>
                <span>70</span>
                <ProgressBar width={70} color={"orange"} />
              </StylePokiDetails>
            </StyleAsideDetail>
            <StyleAsideDetail>
              <span>SP. Speed</span>
              <StylePokiDetails>
                <span>91</span>
                <ProgressBar width={91} color={"orange"} />
              </StylePokiDetails>
            </StyleAsideDetail>
            <StyleAsideDetail>
              <span>Speed</span>
              <StylePokiDetails>
                <span>91</span>
                <ProgressBar width={91} color={"orange"} />
              </StylePokiDetails>
            </StyleAsideDetail>
            <StyleAsideDetail>
              <span>Sp Def</span>
              <StylePokiDetails>
                <span>91</span>
                <ProgressBar width={91} color={"orange"} />
              </StylePokiDetails>
            </StyleAsideDetail>
          </div>
        </div>
      </StyleAside>

      <StyleMain>
        <div>
          {/* <StyleHeader>
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
              </svg>
              #001 Mew
            </Link>
            <Link to="/">
              #001 Mew
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg>
            </Link>
          </StyleHeader> */}
        </div>
        <StyleTopic>Profile</StyleTopic>
        <StyleProfile>
          <div>
            <span>Height</span>
            <span>0.7 m</span>
          </div>
          <div>
            <span>Weight</span>
            <span>6.9 kg</span>
          </div>
          <div>
            <span>Catch Rate</span>
            <span>0%</span>
          </div>
          <div>
            <span>Gender Ratio:</span>
            <span>2'2"</span>
          </div>
          <div>
            <span>Height</span>
            <span>2'2"</span>
          </div>
          <div>
            <span>Height</span>
            <span>2'2"</span>
          </div>
          <div>
            <span>Height</span>
            <span>2'2"</span>
          </div>
          <div>
            <span>Height</span>
            <span>2'2"</span>
          </div>
        </StyleProfile>

        <StyleTopic>Damage When Attacked</StyleTopic>
        <StyleProfile>
          <div>
            <span>Ground</span>
            <span>2x</span>
          </div>
          <div>
            <span>Weight</span>
            <span>6.9 kg</span>
          </div>
          <div>
            <span>Catch Rate</span>
            <span>0%</span>
          </div>
          <div>
            <span>Gender Ratio:</span>
            <span>2'2"</span>
          </div>
          <div>
            <span>Height</span>
            <span>2'2"</span>
          </div>
          <div>
            <span>Height</span>
            <span>2'2"</span>
          </div>
          <div>
            <span>Height</span>
            <span>2'2"</span>
          </div>
          <div>
            <span>Height</span>
            <span>2'2"</span>
          </div>
        </StyleProfile>

        <div>
          <StyleTopic>Evolutions</StyleTopic>
        </div>
        <div>
          <StyleTopic>Evolutions</StyleTopic>
        </div>
      </StyleMain>
    </StyleGrid>
  );
}

export default SinglePage;
