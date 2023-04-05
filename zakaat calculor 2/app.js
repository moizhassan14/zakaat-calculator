function abc(){
  var gold=document.getElementById("ginput");
  var goldPrice = document.getElementById("gpinput");
  var nisabGold = 87.48;
  var zakatRateGold = 0.025;
  var goldValue = gold.value * goldPrice.value;
  goldZakat=(goldValue * zakatRateGold).toFixed(2);
  if (goldValue >= nisabGold) {
    console.log("Zakat for gold: $" + goldZakat);
  } else {
    console.log("Zakat for gold: $not possible");
  }
  var silver = document.getElementById("sinput");
  var silverPrice = document.getElementById("spinput");
  var nisabSilver = 612.36;
  var zakatRateSilver = 0.025;
  var silverValue = silver.value * silverPrice.value;
  silverZakat = (silverValue * zakatRateSilver).toFixed(2);
  if (silverValue >= nisabSilver) {
    console.log("Zakat for silver: $" + silverZakat);
  } else {
    console.log("Zakat for silver: $ not possible");
  }
  var money = document.getElementById("minput");
  var nisabMoney = 524.12;
  var zakatRateMoney = 0.025;
  var moneyZakat = (money.value * zakatRateMoney).toFixed(2);
  if (money.value >= nisabMoney) {
    console.log("Zakat for money: $" + moneyZakat);
  } else {
    console.log("Zakat for money: $ not possible");
  }
  var Result=document.getElementById("result").innerHTML;
  Result=moneyZakat;
  console.log(moneyZakat);
  
}
