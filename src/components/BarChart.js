import React from "react";
import { Bar } from 'react-chartjs-2'
import { useSelector } from "react-redux";
import InputForm from "./InputForm";

export default function BarChart (){
    const [isOpen, setIsOpen] = React.useState(false);
    const data = useSelector(state => state.currency.data)
    
    return (
        <div className='container'>   
            <div style={{margin: '20px 0'}}>
                <button type="button" class="btn btn-primary" style={{margin: '0 5vw'}} onClick={() => setIsOpen(true)} >Create</button>
                <button type="button" class="btn btn-danger">Delete</button>
            </div>
            <div className='row row-cols-3'>

                {/* Youll have to map this div */}
                <div className='col'>
                    <Bar
                        data={data}
                        options={{ maintainAspectRatio: true }}
                    />
                </div>
                <div className='col'>
                    <Bar
                        data={data}
                        options={{ maintainAspectRatio: true }}
                    />
                </div>
                <div className='col'>
                    <Bar
                        data={data}
                        options={{ maintainAspectRatio: true }}
                    />
                </div>
                <div className='col'>
                    <Bar
                        data={data}
                        options={{ maintainAspectRatio: true }}
                    />
                </div>
            </div>
            <h3>Currency Chart</h3>
            <InputForm isOpen={isOpen} setIsOpen={setIsOpen}/>
        </div>
    )
}