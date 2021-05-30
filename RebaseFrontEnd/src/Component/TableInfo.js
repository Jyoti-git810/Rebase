import React from 'react';
import {Table,TableBody,TableCell, TableContainer,TableHead,TableRow} from '@material-ui/core'
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import './TableInfo.css'

 const TableInfo = ({Data}) => {
     const style={
        backgroundColor:"#2978b5",
        color:"white",
        fontWeight:"500",
        fontSize:"15px"
        }
    return (
        <div>
             <ReactHTMLTableToExcel
                table="Stategy"
                filename="Stategy"
                sheet="Stategy1"
                buttonText="EXPORT"
            />
            <TableContainer>
                <Table id="Stategy">
                    <TableHead>
                        <TableRow>
                            <TableCell style={style} align="right">Trade No.</TableCell>
                            <TableCell style={style} align="right">Lots</TableCell>
                            <TableCell style={style} align="right">Legs</TableCell>
                            <TableCell style={style} align="right">Entry Date</TableCell>
                            <TableCell style={style} align="right">Strike</TableCell>
                            <TableCell style={style} align="right">B/S</TableCell>
                            <TableCell style={style} align="right">Options</TableCell>
                            <TableCell style={style} align="right">Entry Price</TableCell>
                            <TableCell style={style} align="right">EXIT DATE</TableCell>
                            <TableCell style={style} align="right">Exit Price</TableCell>
                            <TableCell style={style} align="right">Days</TableCell>
                            <TableCell style={style} align="right">Profit</TableCell>
                            <TableCell style={style} align="right">Total Profit</TableCell>
                        </TableRow>
                    </TableHead>
                <TableBody>
                    {Data?
                        Data.data.map((element,index) => {
                           return(
                            <>
                            {element.legs.map((value,key)=>{
                                return(
                                    <TableRow>
                                         <TableCell align="center">{index+1}</TableCell>
                                        <TableCell  align="center">{value.lots}</TableCell>
                                        <TableCell  align="center">{key+1}</TableCell>
                                        <TableCell  align="center">{value.entryDate}</TableCell>
                                        <TableCell  align="center">{value.futuresOrOptions}</TableCell>
                                        <TableCell  align="center">{value.buyOrSell}</TableCell>
                                        <TableCell  align="center">{value.futuresOrOptions}</TableCell>
                                        <TableCell style={{backgroundColor:"yellow"}}  align="center">{value.entryValue}</TableCell>
                                        <TableCell  align="center">{value.exitDate}</TableCell>
                                        <TableCell style={{backgroundColor:"yellow"}}  align="center">{value.exitValue}</TableCell>
                                        <TableCell style={{backgroundColor:"yellow"}}  align="center">{value.Days}</TableCell>
                                        <TableCell  style={{backgroundColor:"#ffb366"}}  align="center">{value.Profit}</TableCell>
                                        <TableCell style={{backgroundColor:"#ffb366"}}  align="center">{value.Total}</TableCell>
                                    </TableRow>
                                )
                            })}
                            </>
                           )
                        })
                    :null}
                </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
export default TableInfo