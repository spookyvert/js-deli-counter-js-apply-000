function takeANumber(latestNumber, latestName) {
    return "Welcome, " + latestName + ". You are number " + latestNumber.push(latestName) + " in line."
}

var i = [3,3,3,3,] /
function nowServing(katzDeliLine) {

    if (katzDeliLine.length === 0) {
        return "There is nobody waiting to be served!"
    } else {
        var latestTicket;
        latestTicket = katzDeliLine.shift();
        return "Currently serving " + latestTicket + "."
    }
}

function currentLine(katzDeliLine) {
    if (katzDeliLine.length === 0) {
        return "The line is currently empty."
    } else {
        return "The line is currently: 1. " + katzDeliLine[0] + ", 2. " + katzDeliLine[1] + ", 3. " + katzDeliLine[2]
    }
}

let n = 0

function takeNumberAlt(katzDeliLine){
  n++
  katzDeliLine.push(n)
  return n
}

function resetNumber(){
  n = 0
  return n
}