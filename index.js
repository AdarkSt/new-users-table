let usersArray = [{
        id: 45,
        name: "Keeley",
        surname: "Bosco",
        age: 36,
        gender: "male",
        email: "keeleybosco@gmail.com",
    },
    {
        id: 86,
        name: "Rubye",
        surname: "Jerde",
        age: 25,
        gender: "female",
        email: "rubyejerde@gmail.com",
    },
    {
        id: 10,
        name: "Darian",
        surname: "Breitenberg",
        age: 75,
        gender: "female",
        email: "darianbreitenburg@gmail.com",
    },
    {
        id: 98,
        name: "Celine",
        surname: "Ankunding",
        age: 23,
        gender: "female",
        email: "celineankuding@gmail.com",
    },
    {
        id: 63,
        name: "Araceli",
        surname: "Lang",
        age: 45,
        gender: "female",
        email: "aracelilang@gmail.com",
    },
    {
        id: 50,
        name: "Esteban",
        surname: "Johnson",
        age: 64,
        gender: "male",
        email: "estebanjohnson@gmail.com",
    },
    {
        id: 41,
        name: "Everette",
        surname: "Swift",
        age: 65,
        gender: "female",
        email: "everetteswift@gmail.com",
    },
    {
        id: 28,
        name: "Terrell",
        surname: "Boyle",
        age: 37,
        gender: "male",
        email: "terrelboyle@gmail.com",
    },
    {
        id: 16,
        name: "Emmie",
        surname: "Schamberger",
        age: 60,
        gender: "female",
        email: "emmieschamberg@gmail.com",
    },
    {
        id: 77,
        name: "Adrian",
        surname: "Robinson",
        age: 57,
        gender: "male",
        email: "adrianrobinson@gmail.com",
    },
    {
        id: 74,
        name: "Alex",
        surname: "Jackson",
        age: 55,
        gender: "male",
        email: "alexjackson@gmail.com",
    },
    {
        id: 51,
        name: "Amy",
        surname: "Scott",
        age: 36,
        gender: "female",
        email: "amyscott@gmail.com",
    },
    {
        id: 64,
        name: "Andrew",
        surname: "Wright",
        age: 54,
        gender: "male",
        email: "andrewwright@gmail.com",
    },
    {
        id: 38,
        name: "Anna",
        surname: "Mitchell",
        age: 34,
        gender: "female",
        email: "annamitchell@gmail.com",
    },
    {
        id: 95,
        name: "Anna",
        surname: "Parker",
        age: 22,
        gender: "female",
        email: "annaparker@gmail.com",
    },
    {
        id: 2,
        name: "Brandon",
        surname: "Johnson",
        age: 63,
        gender: "male",
        email: "brandonjohnson@gmail.com",
    },
    {
        id: 11,
        name: "Chuck",
        surname: "Taylor",
        age: 55,
        gender: "male",
        email: "chucktaylor@gmail.com",
    },
    {
        id: 23,
        name: "Elisabeth",
        surname: "Robinson",
        age: 23,
        gender: "male",
        email: "elisabethrobinson@gmail.com",
    },
    {
        id: 36,
        name: "Eric",
        surname: "Adams",
        age: 45,
        gender: "male",
        email: "ericadams@gmail.com",
    },
    {
        id: 82,
        name: "Erica",
        surname: "Clark",
        age: 20,
        gender: "female",
        email: "ericaclark@gmail.com",
    },
    {
        id: 81,
        name: "Jacob",
        surname: "Smith",
        age: 56,
        gender: "male",
        email: "jacomsmith@gmail.com",
    },
    {
        id: 20,
        name: "Vincent",
        surname: "Lee",
        age: 48,
        gender: "male",
        email: "vincentlee@gmail.com",
    },
    {
        id: 22,
        name: "Victoria",
        surname: "Lewis",
        age: 28,
        gender: "female",
        email: "victorialewis@gmail.com",
    },
    {
        id: 99,
        name: "Stuart",
        surname: "Thomson",
        age: 38,
        gender: "male",
        email: "stuartthomson@gmail.com",
    },
    {
        id: 57,
        name: "Rachel",
        surname: "Thomas",
        age: 49,
        gender: "female",
        email: "rachelthomas@gmail.com",
    },
    {
        id: 79,
        name: "Peter",
        surname: "Nelson",
        age: 57,
        gender: "male",
        email: "peternelson@gmail.com",
    },
    {
        id: 38,
        name: "Maria",
        surname: "Lopez",
        age: 36,
        gender: "female",
        email: "marialopez@gmail.com",
    },
    {
        id: 30,
        name: "Lisa",
        surname: "Moore",
        age: 47,
        gender: "male",
        email: "lisamoore@gmail.com",
    },
    {
        id: 69,
        name: "Lindsay",
        surname: "Moore",
        age: 34,
        gender: "female",
        email: "lindseymoore@gmail.com",
    },
    {
        id: 5,
        name: "Kim",
        surname: "Anderson",
        age: 43,
        gender: "female",
        email: "kimanderson@gmail.com",
    },
    {
        id: 48,
        name: "Juan",
        surname: "Rodriguez",
        age: 35,
        gender: "male",
        email: "juanrodriguez@gmail.com",
    },
];


const renderOfObject = function(trElement, object = null) {
    let tdElement = document.createElement('td');
    let divForElement = document.createElement('div');
    if (!object) {
        divForElement.textContent = this.label;
    } else {
        divForElement.textContent = object[this.key];
    }
    tdElement.append(divForElement);
    trElement.append(tdElement);
}

const renderOfHeader = function(trElement) {
    let thElement = document.createElement('th');
    let divForElement = document.createElement('div');
    divForElement.textContent = this.label;
    thElement.append(divForElement);
    trElement.append(thElement);
}


const deleteObject = function(userobject, usersArray, element) {
    usersArray.splice(usersArray.findIndex(item => item.id == userobject.id), 1);
    element.parentElement.remove();
    renderOfTable(usersArray, coll);
}


const editObject = function(userobject, usersArray, element) {
    let numberOfModifyingProperty = prompt('Please take a number of modifying property');
    let valueOfModifyingProperty = prompt('Please take a value of modifying property')
    userobject[Object.keys(userobject)[numberOfModifyingProperty]] = valueOfModifyingProperty;
    element.parentElement.remove();
    renderOfTable(usersArray, coll);
}

const renderOfButton = function(trElement, userobject, usersArray, element, countOfButtons) {
    let tdElement = document.createElement('td');
    for (let i = 0; i < countOfButtons; ++i) {
        let buttonElement = document.createElement('button');
        buttonElement.textContent = this.form[i];
        buttonElement.className = 'button';
        tdElement.append(buttonElement);
        buttonElement.onclick = () => {
            if (buttonElement.textContent == "Delete") {
                deleteObject(userobject, usersArray, element);
            } else if (buttonElement.textContent == "Edit") {
                editObject(userobject, usersArray, element);
            }
        }
    }
    trElement.append(tdElement);
}

const coll = [{
        key: 'name',
        label: 'Name Of User',
        renderOfObject: renderOfObject,
        renderOfHeader: renderOfHeader
    },
    {
        key: 'surname',
        label: 'Surname Of User',
        renderOfObject: renderOfObject,
        renderOfHeader: renderOfHeader
    },
    {
        key: 'age',
        label: 'Age Of User',
        renderOfObject: renderOfObject,
        renderOfHeader: renderOfHeader
    },
    {
        key: 'gender',
        label: 'male or female',
        renderOfObject: renderOfObject,
        renderOfHeader: renderOfHeader
    },
    {
        key: 'email',
        label: 'email Of User',
        renderOfObject: renderOfObject,
        renderOfHeader: renderOfHeader
    },
    {
        key: 'actions',
        label: 'actions',
        form: ['Edit', 'Delete'],
        renderOfObject: renderOfObject,
        renderOfHeader: renderOfHeader,
        renderOfButton: renderOfButton,
    },
]


const setup = (usersArray, coll, element) => {
    let index = 0;
    let trElementForHeader = document.createElement('tr');
    element.append(trElementForHeader);
    if (element.tagName == "TBODY") {
        index = 1;
    }

    for (const userobject of usersArray) {
        let map = new Map(Object.entries(userobject));
        let trElement = document.createElement('tr');
        for (const object of coll) {
            if (index == 0) {
                object.renderOfHeader(trElementForHeader, userobject)
            }
            if (map.has(object.key)) {
                let memory = map.get(object.key);
                map.delete(object.key);
                map.set(object.label, memory);
                object.renderOfObject(trElement, userobject);
            } else {
                map.set(object.key, object.label)
                object.renderOfButton(trElement, userobject, usersArray, element, 2);
            }
        }
        ++index;
        element.append(trElement);

    }
}

const renderOfTable = (usersArray, coll) => {
    const root = document.querySelector('.root');
    let tableElement = document.createElement('table');
    tableElement.className += "Table";
    tableElement.className += " fl-table";
    root.append(tableElement);
    theadElement = document.createElement('thead');
    tbodyElement = document.createElement('tbody');

    tableElement.append(theadElement);
    tableElement.append(tbodyElement);

    setup(usersArray, coll, theadElement);
    setup(usersArray, coll, tbodyElement);
}

renderOfTable(usersArray, coll);