//infinite callstack, this will of course produce an error
function chicken() {
	return egg();
}
function egg(){
	return chicken();
}
console.log(chicken() + "came first.");
