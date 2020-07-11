import React from "react";
import { Tabs, useTabState, usePanelState } from "@bumaga/tabs";

const Tab = ({ children }) => {
  const { onClick } = useTabState();

  return <button onClick={onClick}>{children}</button>;
};

const Panel = ({ children }) => {
  const isActive = usePanelState();

  return isActive ? <p>{children}</p> : null;
};

export default () => (
  <Tabs>
    <div className="showing-content">
      <div style={{ display: "flex", flexDirection: "column", width: "20%" }}>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
      </div>

      <Panel>
        <b>Panel 1</b>
        <br /> In sociology, anthropology, and linguistics, structuralism is the
        methodology that implies elements of human culture must be understood by
        way of their relationship to a broader, overarching system or structure.
        It works to uncover the structures that underlie all the things that
        humans do, think, perceive, and feel. Alternatively, as summarized by
        philosopher Simon Blackburn, structuralism is "the belief that phenomena
        of human life are not intelligible except through their interrelations.
        These relations constitute a structure, and behind local variations in
        the surface phenomena there are constant laws of abstract structure".
      </Panel>
      <Panel>
        <b>Panel 2</b>
        <br /> In sociology, anthropology, and linguistics, structuralism is the
        methodology that implies elements of human culture must be understood by
        way of their relationship to a broader, overarching system or structure.
        It works to uncover the structures that underlie all the things that
        humans do, think, perceive, and feel.
      </Panel>
    </div>
  </Tabs>
);
