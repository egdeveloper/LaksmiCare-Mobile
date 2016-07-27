function connectDB(db, stg, onSuccess, onError){
	var request = indexedDB.open(db, 1);
	request.onerror = function(err){
		onError(err)
	};
	request.onsuccess = function(){
		onSuccess(request.result);
	}
	request.onupgradeneeded = function(e){
		e.currentTarget.result.createObjectStore(stg, { keyPath: "key" });
		connectDB(f);
	}
}