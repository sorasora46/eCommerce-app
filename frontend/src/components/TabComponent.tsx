import { FC, ReactNode, useState } from "react";

export const TabComponent: FC<{
  tabTitles?: string[];
  tabBodies?: ReactNode[];
}> = ({ tabTitles, tabBodies }) => {
  const [currentTab, setCurrentTab] = useState<number>(0);
  return (
    <>
      <div className="container">
        {tabTitles?.map((topic, index) => {
          return (
            <div
              key={index}
              style={{ border: "1px solid black", cursor: "pointer" }}
              onClick={() => setCurrentTab(index)}
            >
              {topic}
            </div>
          );
        })}
      </div>
      <div>{tabBodies?.[currentTab]}</div>
    </>
  );
};
