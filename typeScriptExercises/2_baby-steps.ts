console.log(Number(process.argv.reduce((before: string, current: string, i: number)=>{
    
    return (i<2)? before: String(Number(before)+Number(current));
},'0'
)))