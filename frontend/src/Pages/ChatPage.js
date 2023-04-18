import { Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const ChatPage = () => {
	return (
		<div
			style={{
				padding: "50px",
			}}>
			<h1 style={{ fontSize: "1.3rem" }}>
				<strong>
					Boom!!!☠☠☠ You've came to Chat-Page.
				</strong>
			</h1>
			<br />
			<br />
			<Button colorScheme='blue'>
				<Link to='/'>
					Now go back to Homepage
				</Link>
			</Button>
		</div>
	);
};

export default ChatPage;
