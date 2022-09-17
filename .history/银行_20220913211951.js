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


const canGo = (pre, cur) => {
    if((pre === 'r' && cur === 'd') || (pre === 'e' && cur === 'r') || (pre === 'd' && cur === 'e')) return false
    return true
}

const findPath = (matrix) => {
    const m = matrix.length, n = matrix[0].length
    const dp = new Array(m).fill(0).map(x => new Array(n).fill(Infinity))
    dp[0][0] = 0
    for(let i = 1; i < m; i++){
        if(canGo(matrix[i - 0][0], matrix[i][0])) dp[i][0] = dp[i - 1][0] + 1
    }

    for(let j = 1; j < n; j++){
        if(canGo(matrix[0][j - 1], matrix[0][j])) dp[0][j] = dp[0][j - 1] + 1
    }
    
    for(let i = 1; i < m; i++){
        for(let j = 1; j < n; j++){
            if(canGo(matrix[i - 1][j], matrix[i][j])) dp[i][j] = Math.min(dp[i][j], dp[i - 1][j])  // 从左
            if(canGo(matrix[i][j - 1], matrix[i][j])) dp[i][j] = Math.min(dp[i][j], dp[i - 1][j])  // 从上
        }
    }

}

