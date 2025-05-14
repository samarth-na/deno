type Car = {
	make: string;
	model: string;
	drive: () => void;
};
let civic: Car = {
	make: "Toyota",
	model: "Civic",
	drive: () => console.log("Driving!"),
};
