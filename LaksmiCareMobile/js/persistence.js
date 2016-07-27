function Database(name){
	var self = this;
	this.name = name;
	this.db = new PouchDB(this.name);
	this.insert = function(data, handler){
		self.db.put(data, handler);
	};
	this.destroy = function(handler){
		self.db.destroy(handler);
	};
	this.get = function(id, handler){
		self.db.get(id, handler);
	};
	this.findAll = function(handler){
		self.db.allDocs({
			  include_docs: true,
			  attachments: true
			}, handler);
	};
}