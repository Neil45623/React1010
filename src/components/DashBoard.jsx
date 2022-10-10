import ReactDOM from "react-dom";
import React, { useState, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';


function Dashboard() {

    const [rowData, setRowData] = useState([
        {Marque: "", Modele: "", Prix:"" },
    ]);

    const [rowDatas, setrowDatas] = useState([])

    const gridref = useRef();

    const inputChanged = (event) => {
        setRowData({...rowData, [event.target.name]: event.target})
    };
    const addCar = (event) => {
        setrowDatas([...rowDatas,]);
    };
    const deleteCar = () => {
        if (gridref.current.getSelectedNodes().length>0) {
            setrowDatas(rowDatas.filter((car, index) =>     index !== gridref.current.getSelectedNodes()[0].child.Index));
        }
        else {
            alert("veuillez selectionner une ligne avant de supprimer");
        }
    };

    const colomn = [
        {headerName: "Marque", field: "marque"},
        {headerName: "Modele", field: "modele"},
        {headerName: "prix", field: "prix"}
    ];
    return (
        <div>
            <input type= "text" OnChange={inputChanged} placeholder="Marque" value={rowData.Marque}/>
            <input type= "text" OnChange={inputChanged} placeholder="Modele" value={rowData.Marque}/>
            <input type= "text" OnChange={inputChanged} placeholder="Prix" value={rowData.Marque}/>
            <button onClick={addCar} Ajouter/>
            <button onClick={deleteCar} supr/>
        
        <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
            <AgGridReact
                rowData={rowData}
                ref = {gridref}
                onGridReady= {params => gridref.current=params.api}
                columnDefs={colomn}>
            </AgGridReact>
        </div>
        </div>
    )
}


export default Dashboard;