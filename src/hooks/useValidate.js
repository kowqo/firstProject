import { useState } from 'react';
import { Keyboard } from 'react-native';

const useValidate = (options = ['name', 'email', 'password', 'confirmPassword']) => {
	const [errors, setErrors] = useState({ name: '', email: '', password: '', confirmPassword: '' });

	const onError = (errorMessage, input) => {
		setErrors((state) => ({
			...state,
			[input]: errorMessage,
		}));
	};

	const onSubmitValidate = (inputValues) => {
		Keyboard.dismiss();

		const { name, email, password, confirmPassword } = inputValues;

		let valid = true;

		if (options.includes('name')) {
			if (!name) {
				onError('please input name', 'name');
				valid = false;
			} else if (name.length < 5) {
				onError('Minimal length of 5', 'name');
				valid = false;
			}
		}

		if (options.includes('email')) {
			const condition =
				/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
			if (!email) {
				onError('please input email', 'email');
				valid = false;
			} else if (!condition.test(email)) {
				onError('Please input correct email', 'email');
				valid = false;
			}
		}

		if (options.includes('password')) {
			if (!password) {
				onError('Please input password', 'password');
				valid = false;
			} else if (password.length < 8) {
				onError('Minimal length is 8', 'password');
				valid = false;
			}
		}

		if (options.includes('confirmPassword')) {
			if (!confirmPassword) {
				onError('Please confirm password', 'confirmPassword');
				valid = false;
			} else if (password !== confirmPassword) {
				onError('Passwords do not match', 'confirmPassword');
				valid = false;
			}
		}
		return valid;
	};

	const clearErrors = () =>
		setTimeout(() => {
			setErrors((state) => ({
				name: '',
				email: '',
				password: '',
				confirmPassword: '',
			}));
		}, 400);

	return {
		onSubmitValidate,
		errors,
		onError,
		clearErrors,
	};
};
export default useValidate;
