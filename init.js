
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('genderOutput').innerText = initPerson.gander;
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('dateOfBirthOutput').innerText = initPerson.dateOfBirth;
    document.getElementById('fatherNameOutput').innerText = initPerson.fatherName;
    document.getElementById('professionOutput').innerText = initPerson.profession;
};



