function func() {
    console.log('salom');
}
func();



let a = ['polka', 'shkaf', 'kilogram', 'ustoz', 'aldohchi']
a.shift()
a.pop()
a.push('salom')

console.log(a);



let obj = {
    yosh: '30',
    ism: 'akobir',
    teacher: 'ezio'
}
console.log(obj);
delete obj.yosh
obj.job = 'salom'


let div = document.querySelector('.box');
div.style = 'background-color:red; height:550px; width:550px; border-radius:300px;'
console.log(div);


for (let i = 1; i < 101; i++) {
    if (i % 2 === 0) {
        console.log('juft son')
    } else {
        console.log('toq son');
    }

}