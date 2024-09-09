

import React, { useState } from 'react'

export const WatherApp = () => {


    const url = "https://api.openweathermap.org/data/2.5/weather"
    const apiKey = "3505b441c1b08769221ff297d93e85fb"
    const difKelvin = 273.15


    const [ciudad, setCiudad] = useState('')
    const [data, setData] = useState(null)


    const cambioCiudad = (e) => {
        setCiudad(e.target.value)
        console.log(ciudad)
    }

    const buscarDatos = (e) => {
        e.preventDefault()
        if(ciudad.length > 0) fetchData()

    }


    const fetchData = async () =>{
        try{
            const response = await fetch(`${url}?q=${ciudad}&appid=${apiKey}`)
            const data = await response.json()
            setData(data)
            console.log(data)
        }
        catch(error){
            console.log("Error en la comunicacion" + error)
        }
    }

    return (
        <>
            <div className='h-[100vh] bg-gradient-to-r from-blue-500 to-blue-300 content-center'>
                <div className='my-10'>
                    <h1 className='text-7xl text-white font-bold text-center'>WEATHER APP</h1>
                </div>

                <div className='my-10'>
                    <form action="" onSubmit={buscarDatos}>
                        <div className='flex space-x-5 justify-center'>
                            <input 
                                type="text" 
                                className='rounded-xl w-2/4 px-4' 
                                placeholder=''
                                value={ciudad}
                                onChange={cambioCiudad} />
                            <button type='submit' className='bg-emerald-500 hover:bg-emerald-400 rounded-xl p-5 font-semibold text-xl text-white'>Buscar</button>

                        </div>
                    </form>

                    { data &&
                        <div className='my-10'>
                            <h1 className='text-4xl my-3 text-center text-white font-bold'>{data.name}</h1>
                            <p className='text-xl text-center text-white font-bold'>Temperatura: 
                                <span className='font-light mx-3'>{parseInt(data?.main?.temp - difKelvin)}ºC</span>
                            </p>
                            <p className='text-xl text-center text-white font-bold'>Condiciion metereologica:
                                <span className='font-light mx-3'> {data.weather[0].description}</span>
                            </p>

                            <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} className='my-5 m-auto' alt="" width={100}/>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}
