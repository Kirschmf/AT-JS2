let planetas = [ "Mercúrio", "Vênus", "Terra", "Marte", "Júpiter", "Terra", "Urano", "Netuno", "Plutão", "Ceres" ];

let indiceTerra = planetas.indexOf("Terra");

planetas.splice(0, indiceTerra);

console.log(planetas);