import React from "react";

export type CarType = {
    manufacturer: string
    model: string
}

type CarsPropsType = {
    cars: Array<CarType>
}

export const Cars = (props: CarsPropsType) => {
    let carsForTable;
    if (props.cars.length === 0) {
        carsForTable = <span>There is no car!</span>
    } else {
        carsForTable = props.cars.map((c: CarType, index) => {
            return (
                <tr>
                    <td>{index}</td>
                    <td>{c.manufacturer}</td>
                    <td>{c.model}</td>
                </tr>
            )
        })
    }

    return(
        <div>
            <table>
                <tr>
                    <th>№</th>
                    <th>Manufacturer</th>
                    <th>Model</th>
                </tr>
                {carsForTable}
            </table>
        </div>
    )
}