const size = 5;

for (let i = 1; i <= size; i++) {
    let line = "";

    for (let j = 1; j <= size; j++) {
        line += "* ";
    }
    console.log(line.trim());
}