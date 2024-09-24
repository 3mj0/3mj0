function exist(board, word) {
    const rows = board.length;
    const cols = board[0].length;
    function dfs(row, col, index) {
        if (index === word.length) return true;
        if (row < 0 || col < 0 || row >= rows || col >= cols || board[row][col] !== word[index]) {
            return false;
        }
        const temp = board[row][col]; 
        board[row][col] = '#'; 
        const found = dfs(row + 1, col, index + 1) ||
                      dfs(row - 1, col, index + 1) ||
                      dfs(row, col + 1, index + 1) ||
                      dfs(row, col - 1, index + 1);
        board[row][col] = temp; 
        return found;
    }
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (dfs(i, j, 0)) return true;
        }
    }
    return false;
}

const board = [['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']];
console.log('Word search ABCCED:', exist(board, 'ABCCED')); 
console.log('Word search SEE:', exist(board, 'SEE')); 
console.log('Word search ABCB:', exist(board, 'ABCB')); 