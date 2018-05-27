var task=1;
function addfield(){
  task++;
  var obj=document.getElementById('addmore');
  var divtest=document.createElement("div");
  divtest.innerHTML='<div class="label" >Task '+task+':</div> <div class="content"><span><input title="" type="text" style="width: 800px" value="" name="tasks[]"/> </span> </div>'
  obj.appendChild(test)

}
