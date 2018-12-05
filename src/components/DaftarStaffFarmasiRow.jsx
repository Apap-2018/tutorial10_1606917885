import React from 'react';

export const DaftarStaffFarmasiRow = (props) => {
    return (
        <tbody>
            {props.listStaffFarmasi.map(staffFarmasi => {
                return (
                    <tr key={staffFarmasi.id}>
                        <td>{staffFarmasi.nama}</td>
                    </tr>
                )
            })}
        </tbody>
    )
}