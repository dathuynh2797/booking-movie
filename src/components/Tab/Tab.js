import React from "react";
import { Tabs, useTabState, Panel } from "@bumaga/tabs";
import moment from "moment";

import { NavLink } from "react-router-dom";

const cn = (...args) => args.filter(Boolean).join(" ");

const Tab = ({ children }) => {
  const { isActive, onClick } = useTabState();
  return (
    <button className={cn("tab", isActive && "active")} onClick={onClick}>
      {children}
    </button>
  );
};

const renderTab = (data) => {
  return data?.map((item, index) => {
    return (
      <Tab key={index}>
        <div className="cinema-content">
          <img src={item.logo} alt={item.maHeThongRap} />
        </div>
      </Tab>
    );
  });
};

const renderList = (heThongRapChieu) => {
  return heThongRapChieu?.map((heThongRap, index) => {
    return <Panel key={index}>{renderShowing(heThongRap.cumRapChieu)}</Panel>;
  });
};

const renderShowing = (cumRap) => {
  return cumRap?.map((cumRap, index) => {
    return (
      <div className="showing-time-item" key={index}>
        <h1>{cumRap.tenCumRap}</h1>
        <div className="time-content">
          {cumRap.lichChieuPhim.slice(0, 10).map((lichChieu, index) => {
            return (
              <NavLink
                key={index}
                className="btn-showingTime"
                to={`/booking/${lichChieu.maLichChieu}`}
              >
                {moment(lichChieu.ngayChieuGioChieu).format("HH:mm")}
              </NavLink>
            );
          })}
        </div>
      </div>
    );
  });
};

export default ({ movieInfor }) => {
  return (
    <Tabs>
      <div className="tab-content">
        <div className="nav-tab">{renderTab(movieInfor.heThongRapChieu)}</div>
        <div className="showing-time-content">
          {renderList(movieInfor.heThongRapChieu)}
        </div>
      </div>
    </Tabs>
  );
};
