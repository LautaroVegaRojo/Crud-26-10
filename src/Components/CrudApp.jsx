import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialDb = [
  {
    id: 1,
    name: "Lautaro",
    lastName: "Vega",
  },
  {
    id: 2,
    name: "Alejandro",
    lastName: "Casan",
  },
  {
    id: 3,
    name: "Marcos",
    lastName: "Basile",
  },
  {
    id: 4,
    name: "Diego",
    lastName: "Koltun",
  },
  {
    id: 5,
    name: "Messi",
    lastName: "Messi",
  },
];

export const CrudApp = () => {
  const [db, setDb] = useState(initialDb);

  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now()
    setDb([...db,data])
    // console.log(data)
  };

  const updateData = (data) => {
    let newData = db.map(el => el.id === data.id ? data:el)
    setDb(newData)
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(`Estas seguro de que quieres eliminar el registro con el id ${id}?`)
    if (isDelete){
        let newData = db.filter(el => el.id!==id)
        setDb(newData)
    }else{
        return
    }
  };

  return (
    <>
      <h2>CrudApp</h2>
      <CrudForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      <CrudTable
        data={db}
        setDataToEdit={setDataToEdit}
        deleteData={deleteData}
      />
    </>
  );
};
