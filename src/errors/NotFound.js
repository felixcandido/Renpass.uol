class NotFound extends Error {
	constructor(item) {
		super();
		this.status = 404;
		this.name = "NotFound";
		this.message = [
			{
				details: [{	message: `${item} Not Found`}] 
			}
		];
	}
}

module.exports = NotFound;