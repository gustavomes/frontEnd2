const notas = [1,2,3,4]

let somas = notas.reduce((acc, i) => {
    return (acc + i)
}, 0);

alert(somas)


