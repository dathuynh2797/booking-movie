import React from "react";
import { Tabs, useTabState, Panel } from "@bumaga/tabs";

const cn = (...args) => args.filter(Boolean).join(" ");

const Tab = ({ children }) => {
  const { isActive, onClick } = useTabState();
  return (
    <button className={cn("tab", isActive && "active")} onClick={onClick}>
      {children}
    </button>
  );
};

export default () => (
  <Tabs>
    <div className="tab-content">
      <div className="nav-tab">
        <Tab>tab 1</Tab>
        <Tab>tab 2</Tab>
        <Tab>tab 3</Tab>
      </div>
      <div className="showing-time-content">
        <Panel>
          <div className="showing-time-item">tab 1 content</div>
        </Panel>
        <Panel>
          <div className="showing-time-item">tab 2 content</div>
        </Panel>
        <Panel>
          <div className="showing-time-item">tab 3 content</div>
        </Panel>
      </div>
    </div>
  </Tabs>
);
