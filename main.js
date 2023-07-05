
$('#myTab a').on('click', function(e) {
  e.preventDefault()
  $(this).tab('show')
});
$('#myTab a[href="#profile"]').tab('show') // Select tab by name
$('#myTab li:first-child a').tab('show') // Select first tab
$('#myTab li:last-child a').tab('show') // Select last tab
$('#myTab li:nth-child(3) a').tab('show')


function get(){
  $("input").val("target");
  $("#Decor,#Decor_2,#Decor_3").text("");
  $("#light,#light_2,#light_3").text("");
  $("#dark,#dark_2,#dark_3").text("");

}



function BMI() {
var b= $("#b").val();
var a =$("#a").val();
var c=$("#c").val()/100;
var d=$("#d").val()/100;
 
  var bmi = a / b / c;
  var bm = bmi * c * d;
  var bg = (a-bm).toFixed(2);
  var bf =(bg/2).toFixed(2);
  var decor = (bm.toFixed(2));
  
  window.Decor.innerHTML=decor +"/m²";
  window.light.innerHTML=bf +"/m²";
  window.dark.innerHTML=bf +"/m²";
  
  window.Decor_2.innerHTML=(decor*2).toFixed(2) +"/m²";
  window.light_2.innerHTML=(bf-(decor/2)).toFixed(2)+"/m²";
  window.dark_2.innerHTML=(bf-(decor/2)).toFixed(2)+"/m²";
  window.Decor_3.innerHTML=(decor*3).toFixed (2)+"/m²";
  
  window.light_3.innerHTML=(bf-decor).toFixed(2) +"/m²";
  window.dark_3.innerHTML=(bf-decor).toFixed(2) +"/m²";  
}
 
 
  


  function Clear() {
    
  get();
  


}
function MBMI(){
var m_a=$("#m_a").val()/100;
var m_b=$("#m_b").val()/100;
var m_c=$("#m_c").val()/100;
var m_d=$("#m_d").val();
  
var Sleep= m_a*m_b;
var Based= m_a*m_c;
var solu=(Sleep+Based)*m_d;
document.getElementById("result-mar").innerHTML= solu;
}



