
// var students = [
//     {first_name: 'Michael', last_name: 'Jordan'},
//     {first_name: 'John', last_name: 'Rosales'},
//     {first_name: 'Mark', last_name: 'Guillen'},
//     {first_name: 'KB', last_name: 'Tonel'}
// ]

// function studentNames(students) {
//     for (var i in students) {
//         console.log(students[i].first_name + ' ' + students[i].last_name)
//     }
// }

// studentNames(students)

var users = {
    'Students': [ 
        {first_name:  'Michael', last_name : 'Jordan'},
        {first_name : 'John', last_name : 'Rosales'},
        {first_name : 'Mark', last_name : 'Guillen'},
        {first_name : 'KB', last_name : 'Tonel'}
     ],
    'Instructors': [
        {first_name : 'Michael', last_name : 'Choi'},
        {first_name : 'Martin', last_name : 'Puryear'}
     ]
    }


function classMakeUp (users) {
    for (var i in users) {
        var GroupList = users[i]; // created variable to group students together and group instructors together
        console.log(i);
        for (var i = 0; i < GroupList.length; i++) {
            var person = GroupList[i]; //created variable for each individual person
            console.log((i + 1) + ' - ' + person.first_name + ' ' + person.last_name + ' - ' + (person.last_name.length + person.first_name.length))
        }
    }
}

classMakeUp(users)