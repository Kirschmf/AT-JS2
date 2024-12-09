let planetas = [ 
    "Mercúrio", 
    "Vênus", 
    "Terra", 
    "Marte", 
    "Júpiter", 
    "Saturno", 
    "Urano", 
    "Netuno", 
    "Plutão", 
    "Ceres" 
];

let indexTerra = planetas.indexOf("Terra");
if (indexTerra !== -1) {
    planetas.splice(indexTerra, 1);
}

let indexUrano = planetas.indexOf("Urano");
if (indexUrano !== -1) {
    planetas.splice(indexUrano, 1, "Terra");
}

let indexMarte = planetas.indexOf("Marte");
let indexJupiter = planetas.indexOf("Júpiter");
if (indexMarte !== -1 && indexJupiter !== -1) {
    let marte = planetas.splice(indexMarte, 1)[0];
    let jupiter = planetas.splice(indexJupiter - 1, 1)[0];
    planetas.splice(indexMarte, 0, jupiter);
    planetas.splice(indexMarte + 1, 0, marte);
}

console.log(planetas);