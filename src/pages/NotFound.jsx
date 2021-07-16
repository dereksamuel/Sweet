import React from "react";
import { Container } from "../components/Container404/styles";
import HelmetMeta from "../components/HelmetMeta/index.jsx";

export default function NotFound() {
  return (
    <div>
      <HelmetMeta
        title="Not found"
        desc="??? what do you find?"
      />
      <Container>
        <h3>404 error</h3>
        <p>Page not exist</p>
        <img src="https://cdn2.iconfinder.com/data/icons/beagle-dog-emoticon/512/beagle_emoji_confuse-512.png" alt="dog" />
      </Container>
    </div>
  );
}
