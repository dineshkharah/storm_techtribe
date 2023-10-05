import { createContext, useState } from "react";

export const MainContext = createContext();

const Context = ({ children }) => {
  const [component, setComponent] = useState("forum");
  const [modalVisible, setmodalVisible] = useState(false);
  const [forummodal, setforummodal] = useState([]);
  const [refresh, setrefresh] = useState(true);
  const [questionModal, setquestionModal] = useState(false);
  const [taskModal, settaskModal] = useState(false);
  const [mainrole, setmainrole] = useState("");
  const [loginModal, setloginModal] = useState(false);

  // console.log(component);

  return (
    <MainContext.Provider
      value={{
        component,
        setComponent,
        modalVisible,
        setmodalVisible,
        forummodal,
        setforummodal,
        refresh,
        setrefresh,
        questionModal,
        setquestionModal,
        taskModal,
        settaskModal,
        mainrole,
        setmainrole,
        loginModal,
        setloginModal,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default Context;
