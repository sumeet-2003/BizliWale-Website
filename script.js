function sendwhatsapp(){
    var phonenumber = "919303541069";
    var message = "*Require Electrician*";
    var name = document.getElementById("name").value;
    var contact = document.getElementById("contact").value;
    var address = document.getElementById("address").value;
    var problem = document.getElementById("problem").value;
    var other = document.getElementById("otherProblem").value;

    var url = "https://wa.me/" + phonenumber + "?text="
    +message+"%0a%0a"
    +"Name : "+name+"%0a"
    +"Contact: "+contact+"%0a"
    +"Address: "+address+"%0a"
    +"Problem: "+problem+" "+other
    +"%0a";
    
    window.open(url, '_blank').focus();
  }
 document.getElementById('problem').addEventListener('change', function() {
    var problem = this.value;
    var cost;
    
    switch(problem) {
        case 'houseWiring':
            cost = "Estimated cost: ₹16 per sq ft";
            break;
        case 'fanFitting':
            cost = "Estimated cost: ₹150";
            break;
        case 'tubeLightFitting':
            cost = "Estimated cost: ₹100";
            break;
        case 'mcbFitting':
            cost = "Estimated cost: ₹150";
            break;
        case 'forepoleFitting':
            cost = "Estimated cost: ₹600";
            break;
        case 'switchBoard':
            cost = "Estimated cost: ₹100 per board";
            break;
        case 'openFitting':
            cost = "Estimated cost: ₹13 per sq ft";
            break;
        case 'gidgerFitting':
            cost = "Estimated cost: ₹700";
            break;
        case 'wallFanFitting':
            cost = "Estimated cost: ₹150";
            break;
        case 'meterBoardFitting':
            cost = "Estimated cost: ₹500";
            break;
        case 'serviceCable':
            cost = "Estimated cost: ₹14 per sq ft";
            break;
        case 'houseWirring':
            cost = "Estimated cost: ₹16 per sq ft";
            break;
        case 'complexWirring':
            cost = "Estimated cost: ₹15 per sq ft";
            break;
        case 'fallCeilingRepairing':
            cost = "Estimated cost: ₹30 per sq ft";
            break;
        case 'ropeLight':
            cost = "Estimated cost: Contact for pricing";
            break;
        case 'tulluPump':
            cost = "Estimated cost: ₹200";
            break;
        case 'borePanel':
            cost = "Estimated cost: ₹300";
            break;
        case 'coolerFitting':
            cost = "Estimated cost: ₹350";
            break;
        case 'exhaust':
            cost = "Estimated cost: ₹200";
            break;
        case 'gateLightFitting':
            cost = "Estimated cost: ₹600";
            break;
        case 'other: ':
            document.getElementById('otherProblem').style.display = 'block';
            cost = "Estimated cost: Please specify problem ";
            break;
        default:
            cost = "";
    }
    
    document.getElementById('estimatedCost').textContent = cost;
});

