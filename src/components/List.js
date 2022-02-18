import React from "react";
import ItemForm from "./ItemForm";

import SelectItem from "./SelectItem";
import AddItem from "./AddItem";

const List = () => {
  const [addNewDevice, setNewDevice] = React.useState('');

  const handleAddNewDevice = (addNewDevice) => {
    setNewDevice(addNewDevice);
return ItemForm

  };
  

  return (

   <>
     <AddItem handleAddNewDevice={handleAddNewDevice} addNewDevice={{addNewDevice}}/>
{handleAddNewDevice}

  </>
  );
};

export default List;
