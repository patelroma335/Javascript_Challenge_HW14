// from data.js
var tableData = data;
console.log(tableData);



var tbody = d3.select("tbody");
 data.forEach((Row) => {
     var row = tbody.append("tr")
   Object.values(Row).forEach((values) => {
     console.log(values);
      row.append("td").text(values)
   })
 })
 function CreateTable(filterdata) {
    tbody = d3.select("tbody");
     filterdata.forEach((Row) => {
         var row = tbody.append("tr")
       Object.values(Row).forEach((values) => {
         console.log(values);
          row.append("td").text(values)

       })
     })
 }
function ButtonClick() {
    tbody.html("")
    filterdata = tableData
   var DateTime = d3.selectAll("#datetime").property("value")
   if(DateTime) {
     filterdata = filterdata.filter(r => r.datetime == DateTime)
     
   } 
   var State = d3.selectAll("#State").property("value")
   if(State) {
     filterdata = filterdata.filter(r => r.state == State)
     
   } 
   var City = d3.selectAll("#City").property("value")
   if(City) {
     filterdata = filterdata.filter(r => r.city == City)
     
   } 
   var Shape = d3.selectAll("#Shape").property("value")
   if(Shape) {
     filterdata = filterdata.filter(r => r.shape == Shape)
     
   }   
 CreateTable(filterdata)


} 
d3.selectAll("#filter-btn").on("click",ButtonClick)