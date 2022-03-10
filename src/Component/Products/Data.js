import React, { useState } from 'react'
import Products from './Products';

function Data() {
    const [data, setData] = useState([
        {
            img:
                "https://content.poliform.it/assets/2022/01/Poliform_day_systems_LEXINGTON_anteprima_960x960px_02-1.jpg",
            title: "LEXINGTON",
            description: "Systèmes jour"
        },
        {
            img:
                "https://content.poliform.it/assets/2021/02/Poliform_poltrone_KEY-LOUNGE_anteprima_960x960px_02.jpg",
            title: "KAY LOUNGE",
            description: "Fauteuils"
        },
        {
            img:
                "https://content.poliform.it/assets/2021/02/Poliform_divani_BRISTOL_anteprima_960x960px_2021_01.jpg",
            title: "BRISTOL",
            description: "Canapés"
        },
        {
            img:
                "https://content.poliform.it/assets/2022/01/Poliform_day_systems_LEXINGTON_anteprima_960x960px_02-1.jpg",
            title: "LEXINGTON",
            description: "Systèmes jour"
        },

        {
            img:
                "https://content.poliform.it/assets/2021/02/Poliform_divani_BRISTOL_anteprima_960x960px_2021_01.jpg",
            title: "BRISTOL",
            description: "Canapés"
        },
        {
            img:
                "https://content.poliform.it/assets/2021/02/Poliform_divani_BELLPORT_anteprima_960x960px_02.jpg",
            title: "LEXINGTON",
            description: "Systèmes jour"
        },
        {
            img:
                "https://content.poliform.it/assets/2021/02/Poliform_poltrone_KEY-LOUNGE_anteprima_960x960px_02.jpg",
            title: "KAY LOUNGE",
            description: "Fauteuils"
        },
        {
            img:
                "https://content.poliform.it/assets/2022/01/Poliform_day_systems_LEXINGTON_anteprima_960x960px_02-1.jpg",
            title: "LEXINGTON",
            description: "Systèmes jour"
        },

        {
            img:
                "https://content.poliform.it/assets/2021/02/Poliform_divani_BRISTOL_anteprima_960x960px_2021_01.jpg",
            title: "BRISTOL",
            description: "Canapés"
        },
        {
            img:
                "https://content.poliform.it/assets/2021/02/Poliform_poltrone_KEY-LOUNGE_anteprima_960x960px_02.jpg",
            title: "KAY LOUNGE",
            description: "Fauteuils"
        }
    ]);
    return (
        <div>
            <Products data={data} setData={setData} />
        </div>
    )
}

export default Data