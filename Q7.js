const arr = [
    { make: 'audi', model: 'r8', year: '2012' },
    { make: 'audi', model: 'rs5', year: '2013' },
    { make: 'ford', model: 'mustang', year: '2012' },
    { make: 'ford', model: 'fusion', year: '2015' },
    { make: 'kia', model: 'optima', year: '2012' }
]
const result = arr.reduce((acc, cur) => {
    acc[cur.make] = acc[cur.make] || []
    acc[cur.make] = [...acc[cur.make], cur]
    return acc;
}, {})
console.log(result)