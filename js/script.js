function draw(){
    
    let people = ['Marlon', 'Kay', 'Chloe', 'Mary', 'Rick'];

    let numberPeople = people.length;

    let numberDraw = Math.floor(Math.random() * numberPeople);

    document.getElementById('d').innerHTML = people[numberDraw];
}