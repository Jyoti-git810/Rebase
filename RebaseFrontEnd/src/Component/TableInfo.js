import React from 'react';
import {Table,TableBody,TableCell, TableContainer,TableHead,TableRow} from '@material-ui/core'
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import './TableInfo.css';
import {ThreeDots,Rings,Bars} from 'svg-loaders-react';

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
                filename="Excel"
                sheet="Sheet"
                buttonText="EXPORT TO EXCEL"
            />
            <TableContainer>
                <Table id="Stategy">
                    <TableHead>
                        <TableRow>
                            <TableCell style={style} align="center">Trade No.</TableCell>
                            <TableCell style={style} align="center">Lots</TableCell>
                            <TableCell style={style} align="center">Legs</TableCell>
                            <TableCell style={style} align="center">Entry Date</TableCell>
                            <TableCell style={style} align="center">Strike</TableCell>
                            <TableCell style={style} align="center">B/S</TableCell>
                            <TableCell style={style} align="center">Options</TableCell>
                            <TableCell style={style} align="center">Entry Price</TableCell>
                            <TableCell style={style} align="center">EXIT DATE</TableCell>
                            <TableCell style={style} align="center">Exit Price</TableCell>
                            <TableCell style={style} align="center">Days</TableCell>
                            <TableCell style={style} align="center">Profit</TableCell>
                            <TableCell style={style} align="center">Total Profit</TableCell>
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
                       
                    : <div className="spinners">
                        <p>Data Loading...</p>
                        <Bars fill="#ffb366" style={{width:"40%"}}/>
                    </div> }
                </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
export default TableInfo