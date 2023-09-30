
function calculateTips(){
  const bills = parseFloat(document.getElementById("bills").value);
  const tipsPercentage = parseFloat(document.getElementById("tips").value);

  if(isNaN(bills) || isNaN(tipsPercentage)){
    alert("Please enter valid numbers for bills and tips");
    return;
  }
  
  const tips  = parseFloat((bills * (tipsPercentage / 100)).toFixed(2));
  const totalBills = parseFloat(bills + tips);
  console.log(totalBills);
  document.getElementById("tipValue").textContent = `$${tips}`;
  document.getElementById("total").textContent = `$${totalBills}`;
}
