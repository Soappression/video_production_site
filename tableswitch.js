let currentTable = 1;
const totalTables = 2;

function showTable(tableNumber) {
    for (let i = 1; i <= totalTables; i++) {
        const table = document.getElementById(`table${i}`);
        if (i === tableNumber) {
            table.style.display = "table";
        } else {
            table.style.display = "none";
        }
    }
}

document.getElementById("left-arrow").addEventListener("click", () => {
    currentTable--;
    if (currentTable < 1) {
        currentTable = totalTables; // Loop back to the last table
    }
    showTable(currentTable);
});

document.getElementById("right-arrow").addEventListener("click", () => {
    currentTable++;
    if (currentTable > totalTables) {
        currentTable = 1; // Loop back to the first table
    }
    showTable(currentTable);
});
