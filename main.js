readData(0, 8);

function readData(start, lengthData) {
    let isCheck = false;
    let request = new XMLHttpRequest();
    request.open('GET', 'https://sinhvien.phongdaotao.com/getcourses.php', true);
    request.send();
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(this.responseText);
            document.getElementById('status').style.display = "none";
            for (i = start; i < lengthData; i++) {
                let data = response.data[i];
                if (i == 3 || i == 7) {
                    isCheck = true;
                } else {
                    isCheck = false;
                }
                createTable(data, isCheck, i);
            }
        }
    }
}

function createTable(data, isCheck, id) {
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');

    td1.innerHTML = data.id;
    td2.innerHTML = data.name;

    temp = "infor" + data.id;

    tr.appendChild(td1);
    tr.appendChild(td2);

    if (isCheck == true) {
        td1.id = 'td1Add';
        td2.id = 'td2Add';
    } else {
        if (data.id)
            td1.id = 'td1';
        td2.id = 'td2';
    }

    if (i < 4) {
        td1.className = 'show1';
        td2.className = 'show1';
    } else {
        td1.className = 'show2';
        td2.className = 'show2';
    }

    document.getElementById('table1').appendChild(tr);
    document.getElementById("pre").disabled = true;
    document.getElementById("one").disabled = true;

    let x = document.getElementsByClassName("show2");
    for (j = 0; j < x.length; j++) {
        x[j].style.display = 'none';
    }
}

function displayPre() {
    let x = document.getElementsByClassName("show2");
    let y = document.getElementsByClassName("show1");

    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }
    for (i = 0; i < y.length; i++) {
        y[i].style.display = 'table-cell';
    }

    document.getElementById("pre").disabled = true;
    document.getElementById("one").disabled = true;
    document.getElementById("two").disabled = false;
    document.getElementById("next").disabled = false;
    document.getElementById('display').innerHTML = "Showing 1 to 4 of 8 entries";
}

function displayNext() {
    let x = document.getElementsByClassName("show1");
    let y = document.getElementsByClassName("show2");

    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }
    for (i = 0; i < y.length; i++) {
        y[i].style.display = 'table-cell';
    }

    document.getElementById("two").disabled = true;
    document.getElementById("next").disabled = true;
    document.getElementById("pre").disabled = false;
    document.getElementById("one").disabled = false;
    document.getElementById('display').innerHTML = "Showing 5 to 8 of 8 entries";
}