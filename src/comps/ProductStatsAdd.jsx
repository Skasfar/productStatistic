import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';


const ProductStatsAdd = () => {


    function submit(e) {
        e.preventDefault();
        console.log(tdata)
        // navigator('/dash')
    }

    let x = ["productname", "Product Price", "total Sale", "Month"];
    let navigator = useNavigate()
    let newObj = {

        "name": "productName",
        "price": 0,
        "quantity": 0,
        "date": "00-00-0000"
    }


    let [heads, setHeads] = useState(x);
    let [tdata, setTdata] = useState([newObj]);

    useEffect(() => {

    }, [tdata])

    
    function add() {

        setTdata([...tdata, newObj]);
    }
    function remove(i) {
        let newdata = [...tdata];
        newdata.splice(i, 1);
        setTdata(newdata);
    }
    return (
        <div className="flex flex-col justify-center ">
            <div className=" mt-10 flex justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => { add() }}>Add New Row</button>

            </div>
            <table className="mt-7 w-auto h-auto table-fixed border-2">
                <thead className="p-8 w-full bg-gray-300 ">
                    <tr>
                        {heads.map((e) => {
                            return (
                                <td>
                                    {e}
                                </td>
                            )
                        })}
                    </tr>
                </thead>
                <tbody className="mt-8 ">

                    {
                        tdata.map((obj, index) => {
                            return (
                                <tr key={index}>
                                    <td key={1}>
                                        <input
                                            className="border border-gray-400 p-2 rounded-md"
                                            type="text"
                                            placeholder={obj.name}

                                            onChange={(e) => { tdata[index].name = e.target.value }}
                                        />
                                    </td>
                                    <td key={2}>
                                        <input
                                            className="border border-gray-400 p-2 rounded-md"
                                            type="text"
                                            placeholder={"Price"}

                                            onChange={(e) => { tdata[index].price = e.target.value }}
                                        />
                                    </td>
                                    <td key={3}>
                                        <input
                                            className="border border-gray-400 p-2 rounded-md"
                                            type="text"
                                            placeholder={"Quantity"}

                                            onChange={(e) => { tdata[index].quantity = e.target.value }}

                                        />
                                    </td>
                                    <td key={4}>
                                        <input
                                            className="border border-gray-400 p-2 rounded-md"
                                            type="month"
                                            placeholder={"Date"}

                                            onChange={(e) => { tdata[index].date = e.target.value }}

                                        />
                                    </td>

                                    <td>
                                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => { remove(index) }}>Remove</button>
                                    </td>
                                </tr>
                            )
                        })
                    }


                </tbody>
            </table>
            <div className="flex justify-center mt-7">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={submit} >SUBMIT</button>
            </div>
        </div>
    )
}

export default ProductStatsAdd