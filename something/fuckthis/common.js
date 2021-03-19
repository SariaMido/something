$(function () {

    let data = [
        { name: 'john', section: 'gaming', age: 25 },
        { name: 'steve', section: 'stock', age: 35 },
        { name: 'ash', section: 'real estate', age: 40 }
    ];

    function buildTable() {
        let html = `<table class="table" id="youtuberTable"><thead><tr>`;

        html += `
            <th scope="col">Name</th>
            <th scope="col">section</th>
            <th scope="col">age</th>
            <th scope="col">
                <span id="showForm" class="controlForm">
                    <i class="fas fa-plus-square"></i>
                </span>
                <span id="hideForm" class="controlForm" style="display:none">
                <i class="fas fa-minus-square"></i>
                </span>
            </th>
            </tr></thead><tr>`;
        for (let i = 0; i < data.length; i++) {
            html += `<td>${data[i].name}</td>`;
            html += `<td>${data[i].section}</td>`;
            html += `<td>${data[i].age}</td>`;
            html += `</tr><tr>`;
        }
        html += `</tr></table>`;
        $('#tableYoutube')[0].innerHTML = html;
    }

    buildTable();

    $('.controlForm').click(function () {
        if (!$('#AddingYoutuberForm').is(":visible")) {
            $('#AddingYoutuberForm').show();
            $('#hideForm').show()
            $('#showForm').hide()
        } else {
            $('#AddingYoutuberForm').hide();
            $('#hideForm').hide()
            $('#showForm').show()
        }

    });

    $('#youtuber').submit(function (e) {
        e.preventDefault();
        let nameInput = $(this).serializeArray()[0].value;
        let sectionInput = $(this).serializeArray()[1].value;
        let ageInput = +$(this).serializeArray()[2].value;

        let youtuber = { name: nameInput, section: sectionInput, age: ageInput };

        data.push(youtuber);
        buildTable(youtuber);

    });

    // function addToTable(newItem) {
    //     let newElement = document.createElement('tr');
    //     newElement.className = 'newItem';
    //     newElement.innerHTML = `
    //     <td>${newItem.name}</td>
    //     <td>${newItem.section}</td>
    //     <td>${newItem.age}</td>
    //     `;
    //     document.getElementById('youtuberTable').appendChild(newElement);
    // }

});


