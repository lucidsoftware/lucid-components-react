export type InputValidator = (
  message?: string | null
) => (value: string) => { passed: boolean; message: string | null };

const InputDefaultValidator: InputValidator = message => value => {
  let passed = false;

  if (value.length > 0) {
    passed = true;
    message = null;
  } else if (!message) {
    message = 'Please enter a value';
  }

  return { passed, message };
};

const InputPasswordValidator: InputValidator = message => value => {
  let passed = false;

  if (value.length >= 6) {
    passed = true;
    message = null;
  } else if (!message) {
    message = 'Password must be at least 6 characters.';
  }

  return { passed, message };
};

const InputEmailValidator: InputValidator = message => value => {
  let passed = false;
  const emailReg = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  if (value.match(emailReg)) {
    passed = true;
    message = null;
  } else if (!message) {
    message = 'Email is not valid.';
  }

  return { passed, message };
};

export { InputDefaultValidator, InputPasswordValidator, InputEmailValidator };
