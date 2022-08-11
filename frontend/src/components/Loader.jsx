import React from 'react'

function Loader() {

    return (
        <div className="flex flex-col justify-center items-center h-[50vh]">
            <img alt="loading" style={{ height: "150px" }} src="https://vwcontenidos.com.ar/app/local/bicicletas/images/loading.gif" />
            <p className="text-2xl" style={{ fontFamily: "'Jura', sans-serif", color: "#284953" }}>Loading...</p>
        </div>
    )
}

export default Loader