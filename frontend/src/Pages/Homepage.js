import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Homepage = () => {
	return (
		<div
			style={{
				padding: "50px",
			}}>
			<h1 style={{ fontSize: "1.3rem" }}>
				<strong>Yooo!!!! Homepage</strong>
			</h1>
			<br />
			<br />
			<Button colorScheme='blue'>
				<Link to='/chats'>Go To Chat-Page</Link>
			</Button>
		</div>
	);
};

export default Homepage;
