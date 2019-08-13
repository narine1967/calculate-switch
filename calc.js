function calc() {

    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    let oper = document.getElementById("simbol").value;
    
   
    
    switch(oper){
        case "+": alert(n1+n2);
        break;
        case "-": alert(n1-n2);
        break;
        case "*": alert(n1*n2);
        break;
        case "/": alert(n1/n2);
        break;
        case "%": alert(n1%n2);
        break;
    
    }
    }