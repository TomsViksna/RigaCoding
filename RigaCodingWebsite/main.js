var number = 1; //integer - vesels skaitlis
var decimal = 3.14; //float - decimāls skaitlis
var text = 'some nice text'; // string - teksts
var bool = true; //boolian - true or false
var nothing = null; //nav vērtības
var cars = ['zaz', 'vaz', 'gaz', 'uvaz', false, 123] //array vai sarakts
var person = {
    name: 'John',
    surename: 'Doe',
    age: '60'
}; //objekti


var people = [{
        name: 'John',
        surename: 'Doe',
        age: '60'
    }, //objekti

    {
        name: 'Tom',
        surename: 'Doe',
        age: '60'
    }, //objekti

    {
        name: 'Sam',
        surename: 'Doe',
        age: '60'
    }, //objekti
]

// var name = 'Peteris';
// console.log(name);
// name = 'Anniņa';
// console.log(name);

// var number = 10;
// var number2 = 2;

// console.log(number / number2);
// console.log(8 %3);

// console.log("Hellow world");
// console.log(people);

// var name = 'Jonny';
//  var othername = 'Anny';

// if (name !== othername) {
//     console.log('yay');
// } else {
//     console.log('boo');
// }



// var number = 2;

//     switch (number)
//     {
//         case 1: {
//             console.log("yay1")
//             break;
//         }

//         case 2: {
//             console.log("yay2")
//             break;
//         }
//         case 3: {
//             console.log("yay3")
//             break;
//         }
//         default: {
//             console.log("boo")
//             break;
//         }
//     }


// var number = 1;
// var otherNumber = 3;
// if (number ==1 || otherNumber ==2)
//     {
//         console.log('yay');
//     } else {
//         console.log('boo');
//     }


//     var number = 1;
//     if(number == 1)
//         {
//             console.log('foo');
//         }





// function calculateVAT(price, vat){

//     var vatNumber = vat / 100 + 1
//     var priceWithVAT = price * vatNumber
//     return priceWithVAT;
// }

// console.log(calculateVAT(3,14, 10));


// console.log(typeof parseInt('123'));







// var shouldRun = 0;

// while (shouldRun > 10)
//     {
//         console.log('yay, we are in then loop' + shouldRun);
//         shouldRun = shouldRun + 1;
//     }
//         while(shouldRun > 10);


// for ( var index = 0; index < cars.length; index++)
//     {
//             console.log('yay, we are in the loop' + " " +cars[index]);
//     }






// console.log(cars[0]);


// for (var index = 0; index < 20; index++) {

//     if(index % 2 == 0) {
//         console.log(index);
//     }

// }

//majasdarbs uzrakstīt ciklu, kurā skaitam no 0 līdz 50 un, 
// ja skaitlis dalās ar 2(bez atlikuma) tad izvadam  "foo", 
// ja dadlās ar 3 izvadam "bar", 
// ja dalās ar 5 izvadam "baz", 
// ja nav neviens no šiem tad izvadam iterācijas numurs(index)


for (var index = 0; index <= 50; index++) {

    if (index % 2 == 0) {
        console.log("foo");
    }

   else if (index % 3 == 0) {
        console.log("bar");
    }

   else if (index % 5 == 0) {
        console.log("baz")
    }

    else {
        console.log(index);
    }
}