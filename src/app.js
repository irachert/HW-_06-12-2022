function Auto(brand, model, year, vin) {
	this.brand = brand;
	this.model = model;
	this.year = year;
	this.vin = vin;
	this.log = () => `${this.brand} ${this.model} ${this.year}`
	this.checkVin = () => this.vin.length === 16 ? true : false
}


const newAvto = new Auto("Tesla", "Model X", 2020, "AF12124AEGJ32413");
console.log(newAvto.log());
console.log(newAvto.checkVin());

function Auto_Fuel(engineVolume, litr) {
	this.engineVolume = engineVolume;
	this.litr = litr;
	this.showFuelConsumption = () => `${this.engineVolume} ${this.litr}/100км`
}

Auto_Fuel.prototype = Object.create(Auto.prototype);

const newAvto2 = new Auto_Fuel("3000 куб.см", 8);
console.log(newAvto2.showFuelConsumption());


Auto_Electric.prototype = Object.create(Auto.prototype);
function Auto_Electric(batteryConfig) {
	this.batteryConfig = batteryConfig;
	this.showBatteryConfig = () => this.batteryConfig;

}
const newAvto3 = new Auto_Electric('100 кВт/ч');
console.log(newAvto3.showBatteryConfig());


