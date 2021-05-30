const excel=require("excel4node");
const express=require("express");
const fs=require("fs")

const app=express();
const PORT=process.env.PORT || 9000;

app.get('/get/data',(req,res)=>{
   fs.readFile("strategy-builder.json","utf-8",(err,data)=>{
       if(err){
           console.log(err)
       }
       else{
           let newData=JSON.parse(data);
            newData.data.forEach((value,index)=>{
                let arr=[];
                let Total=0;
                value.legs.forEach((row,key)=>{
                    let Date1=new Date(row.exitDate);
                    let Date2=new Date(row.entryDate)
                    let oneDay=1000*60*60*24;
                    let DateDiff=Date1.getTime()-Date2.getTime();
                    let Days=Math.round(DateDiff/oneDay);
                    let Price=row.exitValue-row.entryValue;
                    let ProfitValue=Price*75*(row.lots);
                    let Profit=ProfitValue.toFixed(1)
                    arr.push(parseInt(Profit))
                    Total=Total+parseInt(Profit)
                    row.Days=Days;
                    row.Profit=Profit


                })
                value.legs.forEach((row,key)=>{
                    row.Total=Total
                })
            })
           res.status(200).send(newData)
       }
   })
})
app.listen(PORT,()=>{
    console.log(`connected on ${PORT}`)
})