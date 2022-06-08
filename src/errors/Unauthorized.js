class Unauthorized extends Error {
	constructor(item) {
		super();
		this.status = 401;
		this.name = "Unauthorized";
		this.message = [
			{
				details: [{	message: `${item}`}] 
			}
		];
	}
}

module.exports = Unauthorized;