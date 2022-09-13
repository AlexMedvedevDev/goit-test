function result(){
    let output;
    const dollars = document.getElementById("dollars").value;
    const priceBtc = document.getElementById("priceBtc").value;

        if(dollars.length === 0 && priceBtc.length === 0) {
            alert("Please, fill in the fields"); 
        } 
        
        if(dollars < 0 || priceBtc < 0) {
            alert("Please, enter positive numbers");
        }

        else {
            let output = (dollars / priceBtc).toFixed(7);
        alert(`You can buy ${output} BTC`);
    }
}