function solution(n) {
    for (let i = 1; i <= n; i++) {
        let line = "";
    

    for (let j = 1; j<= n - i; j++){
        line += " ";
    }

    for (let p = 1; p <= 2 * i - 1; p++){
        line += "*";
    }
    console.log(line)
    } 
}

solution(3);
solution(5);