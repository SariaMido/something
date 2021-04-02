$(function () {

    let data = [
        { id: 1, name: 'john', section: 'gaming', age: 25 },
        { id: 2, name: 'steve', section: 'stock', age: 35 },
        { id: 3, name: 'ash', section: 'real estate', age: 40 }
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
            html +=
                `<td><i class="fas fa-user-times deleteButton" style="cursor:pointer"></i></td>`;

            html += `</tr><tr>`;
        }
        html += `</tr></table>`;
        $('#tableYoutube')[0].innerHTML = html;

        var allDeleteButtons = document.getElementsByClassName('deleteButton');
        for (let i = 0; i < allDeleteButtons.length; i++) {
            allDeleteButtons[i].addEventListener('click', function () {
                deleteItem(i);
            });
        }
    }

    buildTable();

    $('.controlForm').click(function () {
        //To Do: problem with event disappearing after DOM manipulation
        console.log('hide/show form clicked');
        if (!$('#AddingYoutuberForm').is(":visible")) {
            $('#AddingYoutuberForm').show();
            $('#hideForm').show();
            $('#showForm').hide();
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

        let lastId = 1;
        data.forEach(el => {
            if (lastId < el.id) {
                lastId = el.id
            }
        })

        let youtuber = { id: lastId + 1, name: nameInput, section: sectionInput, age: ageInput };
        if (validateInputs(youtuber)) {
            data.push(youtuber);
            console.log(data)
            buildTable();
            this.reset();
        }

    });

    function validateInputs(person) {
        let formIsValid = true;
        if (person.name == '') {
            let nameInputElement = document.getElementById('youtuberName');
            displayValidationResults(nameInputElement);
            formIsValid = false;
        }
        if (person.section == '') {
            let nameInputElement = document.getElementById('youtuberSection');
            displayValidationResults(nameInputElement);
            formIsValid = false;

        }
        if (person.age < 12 || person.age > 60) {
            let nameInputElement = document.getElementById('youtuberAge');
            displayValidationResults(nameInputElement);
            formIsValid = false;
        }

        return formIsValid
    }

    function displayValidationResults(input) {
        input.placeholder = 'This field is required*'
        input.classList.add('invalidInput');
    }

    $('input').focus(function () {
        $(this).removeClass('invalidInput');
        let inputType = $(this).attr('data-inputType');
        this.placeholder = 'Enter ' + inputType;
    })


    function deleteItem(index) {
        data.splice(index, 1);
        buildTable();
    }
});


