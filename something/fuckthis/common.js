$(function () {

    let data = [
        { name: 'john', section: 'gaming', age: 25 },
        { name: 'steve', section: 'stock', age: 35 },
        { name: 'ash', section: 'real estate', age: 40 }
    ];

    function buildTable() {
        let html = `<table class="table"><thead><tr>`;

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
});

