import { FC, ReactNode, useState } from "react";

export const TabComponent: FC<{
  tabTitles?: string[];
  tabBodies?: ReactNode[];
}> = ({ tabTitles, tabBodies }) => {
  const [currentTab, setCurrentTab] = useState<number>(0);
  return (
    <div
      className="container flex-column"
      style={{ width: "40%", height: "50vh" }}
    >
      <div>
        <div className="container center-items">
          {tabTitles?.map((topic, index) => {
            return (
              <div
                className="tab"
                key={index}
                onClick={() => setCurrentTab(index)}
              >
                <h1>{topic}</h1>
              </div>
            );
          })}
        </div>
        <div>{tabBodies?.[currentTab]}</div>
      </div>
    </div>
  );
};
