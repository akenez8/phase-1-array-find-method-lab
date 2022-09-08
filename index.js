function isWin(record) {
    return (record.result === "W")

}
function superbowlWin(record) {
    if (record.find(isWin) != undefined) {
        return record.find(isWin).year
    }
    else{
        return undefined
    }
}

