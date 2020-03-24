var num = 0;

function takeANumber(katzDeliLine){
  return `Welcome, ${num++} You are number ${katzDeliLine.length} in line.`
  }
  //      result += (i+1) + ". " + line[i] + ", "


function nowServing(katzDeliLine){
  if(katzDeliLine.length>0){
    return `Currently serving ${katzDeliLine.shift()}.`
  }else{
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line){
  var result=""
  if(line.length > 0){
    for(var i=0;i<line.length;i++){
      result += (i+1) + ". " + line[i] + ", "
    }
    result = result.slice(0,-2)
    return "The line is currently: " + result;
  }else{
   return  "The line is currently empty."
  }
}
//Nikita 
//1.Nikita, 2.Shannon