function createClick() {
    const input = document.getElementById("input");
    const newItem = document.getElementById("item").value;
    const r = Math.random();
    if (!newItem) {
        alert('Mohon diisi, task tidak dapat diinput jika kosong!');
    } else {
        const taskId = newItem.toLowerCase().split(" ").join("") + r;
        input.innerHTML += `
        <div id="${taskId}" class="border rounded-top px-2 mt-2" draggable="true" ondragstart="drag(event)">
            <div class="mb-3">
                <span class="fs-4">${newItem}</span>
            </div>
            <div class="d-flex flex-row-reverse">
                <button onclick="enterTask('${taskId}')" class="btn btn-success"><i
                        class="bi bi-check-circle"> </i> Enter</button>
                <button onclick="editTask('${taskId}')" class="btn btn-primary mx-2"><i
                        class="bi bi-pencil-fill"> </i> Edit</button>
                <button onclick="deleteTask('${taskId}')" class="btn btn-danger"> <i
                        class="bi bi-x-square"> </i> Delete</button>
            </div>
        </div>
        `;
    }
}

function enterTask(id) {
    const input = document.getElementById('input');
    const progress = document.getElementById('progress');
    const complete = document.getElementById('complete');
    const item = document.getElementById(id);

    if (item.parentNode === input) {
        input.removeChild(item);
        progress.appendChild(item);
    } else if (item.parentNode === progress) {
        progress.removeChild(item);
        complete.appendChild(item);
    } else if (item.parentNode === complete) {
        complete.removeChild(item);
        input.appendChild(item);
    }
}

function deleteTask(id) {
    const element = document.getElementById(id);
    element.parentNode.removeChild(element);
}

function editTask(id) {
    const item = document.getElementById(id);
    const span = item.querySelector('span');

    const newText = prompt('Edit tugas:', span.textContent);

    if (newText !== null) {
        span.textContent = newText;
    }
}

