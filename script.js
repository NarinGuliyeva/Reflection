function addRowToTable(firstName, lastName, email, phone) {

    const table = document
        .getElementById("dataTable")
        .getElementsByTagName('tbody')[0];

    const newRow = table.insertRow();
    newRow.insertCell(0).textContent = firstName;
    newRow.insertCell(1).textContent = lastName;
    newRow.insertCell(2).textContent = email;
    newRow.insertCell(3).textContent = phone;
}

document.getElementById('fileInput').addEventListener('change', (event) => {

    const file = event.target.files[0];
    if (!file) throw new Error('No file');

    const reader = new FileReader();
    reader.onload = (e) => {
        const content = e.target.result;
        const lines = content.split('\n');  // \n -> new line
        lines.forEach(line => {
            const [firstName, lastName, email, phone] = line.split(',');
            addRowToTable(firstName, lastName, email, phone);
        });
    }

    reader.readAsText(file);
});
 