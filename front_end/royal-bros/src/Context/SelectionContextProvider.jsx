import React from "react";

export const SelectionContext = React.createContext();

const initState = {
  pickupDate: "",
  pickupTime: "",
  dropDate: "",
  dropTime: "",
};

function SelectionContextProvider({ children }) {
  const [info, setInfo] = React.useState(initState);
  const [selectedBike, setSelectedBike] = React.useState(null);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  const selectedBikeHandler = (payload) => {
    setSelectedBike({ ...payload });
  };

  const value = {
    info,
    onChangeHandler,
    onSubmitHandler,
    selectedBikeHandler,
    selectedBike,
  };
  return (
    <SelectionContext.Provider value={value}>
      {children}
    </SelectionContext.Provider>
  );
}

export default SelectionContextProvider;
