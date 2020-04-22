const EXPORTDATA = (tableData,tableName)=>{

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = dd + '-' + mm + '-' + yyyy;

  let fileName=tableName+'-backup-'+today;
  let csvContent = "data:text/csv;charset=utf-8,";
  csvContent += [
    Object.keys(tableData[0]).join(";"),
    ...tableData.map(item => Object.values(item).join(";"))
  ]
    .join("\n")
    .replace(/(^\[)|(\]$)/gm, "");

  const data = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", data);
  link.setAttribute("download", `${fileName}.csv`);
  link.click();
}

export default EXPORTDATA
