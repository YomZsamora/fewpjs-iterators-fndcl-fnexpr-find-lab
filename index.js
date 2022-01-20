let superbowlWin = superbowlWinRecord => {
	// let superbowlWon = superbowlWinRecord.find(superbowl => superbowl.result === "W");
	// return superbowlWon.year;
	
	let superbowlWon = superbowlWinRecord.find( superbowl => {  return superbowl.result === "W" })
	if (superbowlWon){ 
		return superbowlWon.year
	} else {
		return undefined
	}
}


