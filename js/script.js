$(document).ready(function () {
    $('button').click(function () {

        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')

            .done(function (data) {
                let dImie = $(`<div id='dane-programisty'></div>`).text(`Imie: ${data.imie}`);
                let dNazwisko = $(`<div id='dane-programisty'></div>`).text(`Nazwisko: ${data.nazwisko}`);
                let dZawod = $(`<div id='dane-programisty'></div>`).text(`Zawod: ${data.zawod}`);
                let dFirma = $(`<div id='dane-programisty'></div>`).text(`Firma: ${data.firma}`);

                let jqBody = $('body');
                jqBody.append(dImie);
                jqBody.append(dNazwisko);
                jqBody.append(dZawod);
                jqBody.append(dFirma);

            })
            .fail(function (error) {
                console.error(error);
            });
    });
});