import React from "react";
import {
  StyleDescription,
  StyleMain,
  StyleProfile,
  StyleTopic,
} from "./StyleSinglePage";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";
import "@reach/tabs/styles.css";
import { useSelector } from "react-redux";

function Main() {
  const pokemon = useSelector((state) => state.pokemon);
  const {
    weight,
    height,
    flavor_text_entries,
    types,
    capture_rate,
    gender_rate,
  } = pokemon;

  console.log(types);
  return (
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

      <StyleTopic>Evolutions</StyleTopic>

      <div>
        <Tabs>
          <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab>Three</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </StyleMain>
  );
}

export default Main;
