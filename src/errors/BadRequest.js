class BadRequest extends Error {
	constructor(message) {
		super();
		this.status = 400;
		this.name = "BadRequest";
		this.message = [
			{
				details: [{	message: `${message}`}] 
			}
		];
	}
}

module.exports = BadRequest;