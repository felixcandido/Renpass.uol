class NotFound extends Error {
	constructor(item) {
		super();
		this.status = 404;
		this.name = "Not Found";
		this.message = [
			{
				details: [{	message: `${item} Not Found`}] 
			}
		];
	}
}

module.exports = NotFound;