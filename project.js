obj = {
    Iphone: { 11: { ram: 2, rom: 6, price: 4320 }, smax: { ram: 8, rom: 8, price: 9892 }, promax13: { ram: 10, rom: 8, price: 62893 } },
    Samsung: { A10: { ram: 2, rom: 4, price: 6122 }, A20: { ram: 7, rom: 2, price: 7690 }, galaxyJ7: { ram: 8, rom: 2, price: 61291 } },
    Infinx: { Note7: { ram: 9, rom: 9, price: 69876 }, HOT11: { ram: 3, rom: 9, price: 7097 }, HOT10: { ram: 6, rom: 9, price: 7987 } },
    Tecno: { Spark9pro: { ram: 2, rom: 7, price: 87787 }, Spark4: { ram: 8, rom: 8, price: 9892 }, Spark7: { ram: 4, rom: 6, price: 7082 } }
}

let c = Object.keys(obj)
let d = Object(c).length;
for (let i = 0; i < d; i++) {
    document.getElementById("select").innerHTML += `<option value="${c[i]}">${c[i]}</option>`
}
function model() {
    document.getElementById("sel").disabled = false;
    document.getElementById("sel").innerHTML = "";
    let f = document.getElementById("select").value;
    let g = Object.keys(obj[f])
    let h = Object(g).length;
    for (let i = 0; i < h; i++) {
        document.getElementById("sel").innerHTML += `<option value="${g[i]}">${g[i]}</option>`
    }
}

function search() {
    let name = document.getElementById("select").value;
    let model = document.getElementById("sel").value;
    let z = obj[name][model];
    let a = Object.keys(z);
    let b = Object.values(z);
    spec.innerHTML = "Specifications";
    Name.innerHTML = name;
    Model.innerHTML = model;
    ram.innerHTML = b[0];
    rom.innerHTML = b[1];
    price.innerHTML = b[2];
    mob.innerHTML = "Mobile Name";
    mod.innerHTML = "Model"
    Ram.innerHTML = a[0];
    Rom.innerHTML = a[1];
    Price.innerHTML = a[2];
}

