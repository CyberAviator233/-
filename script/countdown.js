var oCount = document.getElementById('count');
var spans = count.getElementsByTagName('span');
var spankkk = pcrt.getElementsByTagName('span');

var std = new Date('2022/01/14 17:00:00');

var dt = new Date('2022/02/13 16:30:00');

var t = dt - std ;

var timer = null ;
timer = setInterval(countTime,7);

function countTime(){
    var ct = new Date();
    
    var r = dt - ct ;
    
    var hg = ct - std;
    
    var per = hg/t ;
    
    if (per<=1){
        var larpr = parseInt(per * 10000000);
        var naper = larpr/100000;
        if (larpr%100000 == 0){
            fnper = naper +'.00000';
        }else if (larpr%10000 == 0){
            fnper = naper +'0000';
        }else if (larpr%1000 == 0){
            fnper = naper +'000';
        }else if (larpr%100 == 0){
            fnper = naper +'00';
        }else if (larpr%10 == 0){
            fnper = naper +'0';
        }else{
            fnper = naper;
        }
    }else{
        var fnper = 100.00000;
    }
    
    var rm = Math.abs(r);
    
    var tcs = rm/1000;
    
    if (rm%1000 == 0) {
        var tsc = tcs + '000';
    }else if (rm%100 == 0) {
        var tsc = tcs + '00';
    }else if (rm%10 == 0) {
        var tsc = tcs + '0';
    }else {
        var tsc = tcs;
    }
    
    var d = parseInt(rm/1000/60/60/24);
    if (d<10){
        day = '0'+ d;
    }else{
        day = d;
    }
    var h = parseInt(rm/1000/60/60 - day*24);
    if (h<10){
        hour = '0'+ h;
    }else{
        hour = h;
    }
    var m = parseInt(rm/1000/60 - day*24*60 - hour*60);
    if (m<10){
        min = '0'+ m;
    }else{
        min = m;
    }
    var s = parseInt(rm/1000 - day*24*60*60 - hour*60*60 - min*60);
    if (s<10){
        sec = '0'+ s;
    }else{
        sec = s;
    }
    var mss = parseInt(rm - day*24*60*60*1000 - hour*60*60*1000 - min*60*1000 - sec*1000);
    if (mss>=100){
        ms = mss;
    }else if (mss>=10) {
        ms = '0'+ mss;
    }else{
        ms = '00'+ mss;
    }
    
    var trut = day+':'+hour+':'+min+':'+sec+'.'+ms
    if (r>=0){
        var gra = '距离开学（2022/02/13 16:30:00）还剩';
    }else{
        var gra = '已经开学啦（2022/02/13 16:30:00）';
    }
    
    var dis = gra + '<br>' + trut + '<br>' + '即' + tsc +'s';
    var dispr = fnper + '%';
    
    if (per<=1){
        var cssp= (1-per)*97 + 'vh';
    }else{
        var cssp= '0vh';
    }
    if (per<=1){
        var cssbg= (1-per)*100 + 'vh';
    }else{
        var cssbg= '0';
    }
    if (per<=1){
        var cssbgh= per*100 + 'vh';
    }else{
        var cssbgh= '0';
    }
    oCount.style.top = cssbg ;
    oCount.style.height = cssbgh ;
    spankkk[0].style.top = cssp;
    spans[0].innerHTML = dis ;
    spankkk[0].innerHTML = dispr ;
}