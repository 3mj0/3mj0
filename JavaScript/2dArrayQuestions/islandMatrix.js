function numIslands(grid) {
    if (!grid.length) return 0;
    const rows = grid.length;
    const cols = grid[0].length;
    let islandCount = 0;
    function dfs(i, j) {
        if (i < 0 || j < 0 || i >= rows || j >= cols || grid[i][j] === '0') return;
        grid[i][j] = '0'; 
        dfs(i - 1, j); 
        dfs(i + 1, j); 
        dfs(i, j - 1); 
        dfs(i, j + 1); 
    }
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === '1') {
                islandCount++;
                dfs(i, j);
            }
        }
    }
    return islandCount;
}

const grid = [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1']
];
console.log('Number of Islands:', numIslands(grid)); 