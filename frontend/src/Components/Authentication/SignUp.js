import { useState } from "react";
import {
	Button,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputRightElement,
	VStack,
} from "@chakra-ui/react";

const Signup = () => {
	const [show, setShow] = useState(false);
	const [show2, setShow2] = useState(false);
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [confirmPassword, setConfirmPassword] =
		useState();
	const [pic, setPic] = useState();

	const handleClick = () => setShow(!show);
	const handleClick2 = () => setShow2(!show2);

	const postDetails = () => {
		//
	};

	const submitHandler = () => {};

	return (
		<VStack spacing='5px' color='black'>
			<FormControl id='name' isRequired>
				<FormLabel>Name</FormLabel>
				<Input
					placeholder='Enter your name'
					onChange={(e) => setName(e.target.name)}
				/>
			</FormControl>
			<FormControl id='email' isRequired>
				<FormLabel>Email</FormLabel>
				<Input
					type='email'
					placeholder='Enter your email'
					onChange={(e) =>
						setEmail(e.target.email)
					}
				/>
			</FormControl>
			<FormControl id='password' isRequired>
				<FormLabel>Password</FormLabel>
				<InputGroup>
					<Input
						type={show ? "true" : "password"}
						placeholder='Password'
						onChange={(e) =>
							setPassword(e.target.password)
						}
					/>
					<InputRightElement width='4.5rem'>
						<Button
							h='1.75rem'
							size='sm'
							onClick={handleClick}>
							{show ? "Hide" : "Show"}
						</Button>
					</InputRightElement>
				</InputGroup>
			</FormControl>
			<FormControl
				id='confirmPassword'
				isRequired>
				<FormLabel>Confirm Password</FormLabel>
				<InputGroup>
					<Input
						type={show2 ? "text" : "password"}
						placeholder='Confirm Password'
						onChange={(e) =>
							setConfirmPassword(
								e.target.confirmPassword
							)
						}
					/>
					<InputRightElement width='4.5rem'>
						<Button
							h='1.75rem'
							size='sm'
							onClick={handleClick2}>
							{show2 ? "Hide" : "Show"}
						</Button>
					</InputRightElement>
				</InputGroup>
			</FormControl>
			<FormControl id='pic'>
				<FormLabel>Upload your Picture</FormLabel>
				<Input
					type='file'
					p={1.5}
					accept='image/*'
					onChange={(e) =>
						postDetails(e.target.files[0])
					}
				/>
			</FormControl>

			<Button
				colorScheme='blue'
				width='100%'
				style={{ marginTop: 15 }}
				onClick={submitHandler}>
				Signup
			</Button>
		</VStack>
	);
};

export default Signup;
