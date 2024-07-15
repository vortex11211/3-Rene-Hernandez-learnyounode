console.log(Number(process.argv.reduce(function(before, current,i){
    return (i<2)?0: Number(before)+Number(current)
}
)));


