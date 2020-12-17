pragma solidity ^0.4.17;

contract inbox {
	string public message;

	function Inbox(string initialMessage) public {
		message = initialMessage;
	}

	function setMessage(string newMessage) public {
		message = newMessage;
	}
	
}

/* contract on rinkeby
0x28c505386681c9fb0a8502fa063013524BD8c838
*/