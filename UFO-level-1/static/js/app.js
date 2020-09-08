// from data.js
var tableData = data;
  

var tbody = d3.select("tbody");
function CreateTable(data) {
 data.forEach((Row) => {
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
         filterdata = filterdata.filter(row => row.datetime == DateTime)
         
       } 
 CreateTable(filterdata)
}
 
d3.selectAll("#filter-btn").on("click",ButtonClick)


