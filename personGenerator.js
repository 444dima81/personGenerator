let generatRandomGender = '';
const personGenerator = {
    // Фамилия
    surnameJson: `{  
        "count": 16,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    // Мужские имена
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    // Женские имена
    firstNameFemaleJson: `{
       "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Евгения",
            "id_3": "Наталья",
            "id_4": "Кира<з",
            "id_5": "Анастасия",
            "id_6": "Инна",
            "id_7": "Елизавета",
            "id_8": "Надежда",
            "id_9": "Вера",
            "id_10": "Ирина"
        }
    }`,
   // Профсессия Мужская
   professionMaleJson: `{
    "count": 7,
     "list": {     
         "id_1": "Слесарь",
         "id_2": "Электрик",
         "id_3": "Сантехник",
         "id_4": "Токарь",
         "id_5": "Строитель",
         "id_6": "Адвокат",
         "id_7": "Полицеский"
     }
 }`,
   // Профсессия Женская
   professionFemaleJson: `{
    "count": 7,
     "list": {     
         "id_1": "Маникюрщица",
         "id_2": "Модель",
         "id_3": "Бухгалтер",
         "id_4": "Повар",
         "id_5": "Учитель",
         "id_6": "Массажистка",
         "id_7": "Бариста"
     }
 }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;
        return obj.list[prop];
    },

    // Персона
    randomGender: function() {

        let myArray = [this.GENDER_MALE , this.GENDER_FEMALE];
        let sluchayni = Math.floor(Math.random() * myArray.length);
        generatRandomGender = myArray[sluchayni];

        return myArray[sluchayni];

    },

    // Имя
    randomFirstName: function() {

        return generatRandomGender == this.GENDER_MALE ?
        this.randomValue(this.firstNameMaleJson) : this.randomValue(this.firstNameFemaleJson)

    },

    // Фамилия   
     randomSurname: function() {

        return generatRandomGender == this.GENDER_MALE ?
        this.randomValue(this.surnameJson) : this.randomValue(this.surnameJson) + 'а';


    },

    // День рождения
    randomDateOfBirth: function() {

    randomMonthOfBirth = this.randomIntNumber(11, 1);
    if (randomMonthOfBirth == 2) {
        randomDayOfBirth = this.randomIntNumber(28, 1);
    } else if (randomMonthOfBirth == 4 || randomMonthOfBirth == 6 || randomMonthOfBirth == 9 || randomMonthOfBirth == 11){
        randomDayOfBirth = this.randomIntNumber(30, 1);
    } else {
        randomDayOfBirth = this.randomIntNumber(31, 1);
    }

    randomYearOfBirth = this.randomIntNumber (2005, 1905);

    let nameOfMonth = [
            'января',
            'февраля',
            'марта',
            'апреля',
            'мая',
            'июня',
            'июля',
            'августа',
            'сентября',
            'ноября',
            'декабря',
    ];

    randomMonthOfBirth = nameOfMonth[randomMonthOfBirth - 1];
    return randomDayOfBirth + ' ' + randomMonthOfBirth + ' ' + randomYearOfBirth;
},

// Функция отчества
randomFatherName: function() {
        
    let generatRandomFatherName = this.randomValue(this.firstNameMaleJson);
    let lastСharacter = generatRandomFatherName.substring(generatRandomFatherName.length - 1);

    if (generatRandomGender == this.GENDER_MALE){
        if (lastСharacter == 'й'){
            return generatRandomFatherName = generatRandomFatherName.slice(0, generatRandomFatherName.length -1 ) + 'евич';
        } else if (generatRandomFatherName == 'Алексей'){
            return generatRandomFatherName = generatRandomFatherName.slice(0, generatRandomFatherName.length -1) + 'ович';
        } else {
            return generatRandomFatherName = generatRandomFatherName + 'ович';
        }
        
    } else {
        if (lastСharacter == 'й'){
            return generatRandomFatherName = generatRandomFatherName.slice(0, generatRandomFatherName.length -1) + 'евна';
        } else if (generatRandomFatherName == 'Алексей'){
            return generatRandomFatherName = generatRandomFatherName.slice(0, generatRandomFatherName.length -1) + 'овна';
        } else {
            return generatRandomFatherName = generatRandomFatherName + 'овна';
        }
    }

},

    
    // Профессия
    randomProfession: function() {
        return generatRandomGender == this.GENDER_MALE ?
        this.randomValue(this.professionMaleJson) : this.randomValue(this.professionFemaleJson)
    },


    getPerson: function () {
        this.person = {};
        this.person.gander = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.dateOfBirth = this.randomDateOfBirth();
        this.person.fatherName = this.randomFatherName();
        this.person.profession = this.randomProfession();


        return this.person;
    }
};

// Кнопка Очистки
document.getElementById('clearData').addEventListener('click', function (){

    document.getElementById('genderOutput').innerText = '';
    document.getElementById('firstNameOutput').innerText = '';
    document.getElementById('surnameOutput').innerText = '';
    document.getElementById('dateOfBirthOutput').innerText = '';
    document.getElementById('fatherNameOutput').innerText = '';
    document.getElementById('professionOutput').innerText = '';

})

// Кнопка Генерация
document.getElementById('generateData').addEventListener('click', function(){

    let initPerson = personGenerator.getPerson();
    document.getElementById('genderOutput').innerText = initPerson.gander;
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('dateOfBirthOutput').innerText = initPerson.dateOfBirth;
    document.getElementById('fatherNameOutput').innerText = initPerson.fatherName;
    document.getElementById('professionOutput').innerText = initPerson.profession;

})
