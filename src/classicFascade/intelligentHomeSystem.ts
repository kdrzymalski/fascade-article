class Door {
	lock() {
		return 'Doors locked';
	}
	unlock() {
		return 'Doors opened';
	}
}

class Light {
	adjustBrightness(level: number) {
		return `Brightness level set to ${level}%`;
	}
}

class Temperature {
	setTemperature(temp: number) {
		return `Temperature set to ${temp}°C`;
	}
}

/// bad usage

const door = new Door();
const light = new Light();
const temp = new Temperature();

// Evening Mode
// Turn on at 7 PM
door.lock()
light.adjustBrightness(70)
temp.setTemperature(22)

// Morning Mode
// Turn on at 7 AM
door.unlock()
light.adjustBrightness(100)
temp.setTemperature(20)

class HomeFacade {
	private door: Door;
	private light: Light;
	private temp: Temperature;

	constructor() {
		this.door = new Door();
		this.light = new Light();
		this.temp = new Temperature();
	}

	// simple one method to handle complex evening mode
	eveningMode() {
			this.door.lock()
			this.light.adjustBrightness(70)
			this.temp.setTemperature(22)
	}

	// simple one method to handle complex morning mode
	morningMode() {
			this.door.unlock()
			this.light.adjustBrightness(100)
			this.temp.setTemperature(20)
	}
}

const home = new HomeFacade();

// Turn on at 7 PM
home.eveningMode();
// Turn on at 7 AM
home.morningMode();
