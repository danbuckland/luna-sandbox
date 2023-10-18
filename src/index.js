import React from "react";
import ReactDOM from "react-dom";

import {
  Container,
  Card,
  PrimaryButton,
  TableContainer,
  TableHeader,
  TableHeaderRow,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell
} from "../luna-react";
import { Favourites } from "../luna-react/icons";

function App() {
  return (
    <Container
      soft
      className="ln-u-soft-top"
      style={{ maxWidth: "600px", textAlign: "center" }}
    >
      <Card padded>
        <h1 className="ln-u-color-alpha">Welcome to Luna!</h1>
        <PrimaryButton className="ln-u-push-bottom" onClick={() => alert("🎉")}>
          <Favourites className="ln-u-margin-right" /> Tada!
        </PrimaryButton>
        <TableContainer className="ln-u-push-bottom">
          <TableHeader>
            <TableHeaderRow>
              <TableHeaderCell>Library</TableHeaderCell>
              <TableHeaderCell>Version</TableHeaderCell>
            </TableHeaderRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Luna React</TableCell>
              <TableCell>3.16.3</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Luna Style</TableCell>
              <TableCell>2.12.1</TableCell>
            </TableRow>
          </TableBody>
        </TableContainer>
        <p>Fork this sandbox if you want to try out Luna for yourself.</p>
        <p>
          Browse the{" "}
          <a target="_blank" href="https://jsainsburyplc.github.io/luna-react/">
            documentation
          </a>{" "}
          to see what components are available and information on how to
          configure these.
        </p>
      </Card>
    </Container>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
