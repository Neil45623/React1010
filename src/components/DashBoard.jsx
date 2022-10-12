import React, { useState, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import style from "./Dashboard.module.css";
import Navbar from './Navbar';



function Dashboard() {

    const [rowData, setRowData] = useState({ Race: "", Age: "", Prix: "" });

    const [rowDatas, setRowDatas] = useState([]);

    const gridRef = useRef();

    const inputChanged = (event) => {
        setRowData({ ...rowData, [event.target.name]: event.target.value })
    };

    const addDog = (event) => {
        setRowDatas([...rowDatas, rowData]);
    };

    const deleteDog = () => {
        if (gridRef.current.getSelectedNodes().length > 0) {
            setRowDatas(rowDatas.filter((car, index) =>
                index !== gridRef.current.getSelectedNodes()[0].childIndex));
        } else {
            alert("Selectioner une ligne!");
        }
    };

    const column = [
        { headerName: "Race", field: "Race" },
        { headerName: "Age", field: "Age" },
        { headerName: "Prix", field: "Prix" },
    ]

    return (
        <><div className={style.Navbar2}><Navbar></Navbar></div><div className={style.tablix}>

            <div className={style.text}>
                <input type="text" onChange={inputChanged} placeholder="Race" name="Race" value={rowData.Marque} />
                <input type="text" onChange={inputChanged} placeholder="Age" name="Age" value={rowData.Modele} />
                <input type="number" onChange={inputChanged} placeholder="Prix" name="Prix" value={rowData.Prix} />
                <button onClick={addDog}>Ajouter</button>

                <button onClick={deleteDog}>Supprimer</button>
            </div>
            <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
                <AgGridReact
                    rowData={rowDatas}
                    rowSelection="multiple"
                    ref={gridRef}
                    onGridReady={params => gridRef.current = params.api}
                    columnDefs={column}>
                </AgGridReact>
            </div>
        </div></>
    )
}


export default Dashboard;