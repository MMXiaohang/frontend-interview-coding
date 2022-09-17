function main(num){
    const check = x => {
        let arr = []
        while(x){
            arr.unshift(x % 10)
            x = Math.floor(x / 10)
        }

        for(let i = 0; i < arr.length - 1; i++){
            if(arr[i + 1] > arr[i]) break
            if(i === arr.length - 2) return false
        }

        for(let i = 0; i < arr.length - 1; i++){
            if(arr[i + 1] < arr[i]) break
            if(i === arr.length - 2) return false
        }

        return true
    }

    let now = 100
    while(num){
        if(check(now)){
            num--
            if(num === 0) console.log(now)
        }
        now++
    }
}


