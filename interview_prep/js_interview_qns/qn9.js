const persons = [
    {
        name:"kavya",
        age:12,
        class:6,
        marks:{
            science : 89,
            maths:50,
            telugu:80
        }
    },
    {
        name:"rajitha",
        age:15,
        class:10,
        marks:{
            science : 89,
            maths:69,
            telugu:72
        }
    },
    {
        name:"ravi",
        age:8,
        class:5,
        marks:{
            science : 92,
            maths:45,
            telugu:90
        }
    },
    {
        name:"naveen",
        age:10,
        class:6,
        marks:{
            science : 89,
            maths:90,
            telugu:87
        }
    }
];

let required = persons.map((item)=>{
    return {
        person:item.name,
        age:item.age,
        maths_marks:item.marks.maths
    }
})
console.log(required);

// output --
// [
//     { person: 'kavya', age: 12, maths_marks: 50 },
//     { person: 'rajitha', age: 15, maths_marks: 69 },
//     { person: 'ravi', age: 8, maths_marks: 45 },
//     { person: 'naveen', age: 10, maths_marks: 90 }
//   ]

let eligible = persons.filter((item)=>{
    return item.marks.maths> 50;
}
);
console.log(eligible)

// output --
// [
//     {
//       name: 'rajitha',
//       age: 15,
//       class: 10,
//       marks: { science: 89, maths: 69, telugu: 72 }
//     },
//     {
//       name: 'naveen',
//       age: 10,
//       class: 6,
//       marks: { science: 89, maths: 90, telugu: 87 }
//     }
//   ]
