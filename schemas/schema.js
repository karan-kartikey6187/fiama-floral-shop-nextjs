import * as yup from "yup";

export const schema = yup.object({
  fname: yup
    .string()
    .required("First name is required")
    .min(3, "Name must be at least 3 characters")
    .max(20, "Name must not exceed 20 characters")
    .matches(/^[A-Za-z]+$/, "First name can contain only letters"),

  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters")
    .max(20, "Name must not exceed 20 characters")
    .matches(/^[A-Za-z]+$/, "First name can contain only letters"),

  dname: yup
    .string()
    .required("Display Name is required")
    .min(3, "Display Name must be at least 3 characters")
    .max(20, "Display Name must not exceed 20 characters")
    .matches(/^[A-Za-z]+$/, "Display name can contain only letters"),

  lname: yup
    .string()
    .required("Last name is required")
    .min(3, "Name must be at least 3 characters")
    .max(20, "Name must not exceed 20 characters")
    .matches(/^[A-Za-z]+$/, "Last name can contain only letters"),

  age: yup
    .number()
    .typeError("Age is required.")
    .min(18, "Age must be 18 or above.")
    .max(100, "Age must be 100 or below."),

  password: yup
    .string()
    .required("The password is required.")
    .min(6, "Password must be greater than or equal to 6 characters.")
    .max(10, "You can use a maximum of 10 characters for password.")
    .matches(
      /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>?]/,
      "Password must contain at least one special character",
    )
    .matches(/\d/, "Password must contain at least one number")
    .test("ValidateSpaces", "Password cannot contain spaces", (value) => {
      return !value.includes(" ");
    }),

  cpassword: yup
    .string()
    .required("Confirm password is required.")
    .test("ValidatePassword", "Passwords do not match.", function (value) {
      return value === this.parent.password;
    })
    .test(
      "ValidateSpaces",
      "Password cannot contain spaces",
      (value) => !value?.includes(" "),
    ),

  npassword: yup
    .string()
    .required("The password is required.")
    .min(6, "Password must be greater than or equal to 6 characters.")
    .max(10, "You can use a maximum of 10 characters for password.")
    .matches(
      /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>?]/,
      "Password must contain at least one special character",
    )
    .matches(/\d/, "Password must contain at least one number")
    .test(
      "ValidateSpaces",
      "Password cannot contain spaces",
      (value) => !value?.includes(" "),
    ),

  cnpassword: yup
    .string()
    .required("Confirm password is required.")
    .test("ValidatePassword", "Passwords do not match.", function (value) {
      return value === this.parent.npassword;
    })
    .test(
      "ValidateSpaces",
      "Password cannot contain spaces",
      (value) => !value?.includes(" "),
    ),

  phone: yup
    .string()
    .required("Phone number is required.")
    .matches(/^\d{10}$/, "Phone number contain only 10 digits."),

  email: yup
    .string()
    .required("Email is required.")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Enter a valid email address.",
    ),

  demail: yup
    .string()
    .required("Display Email is required.")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Enter a valid display email address.",
    ),

  country: yup.string().required("Country is required."),

  state: yup
    .string()
    .required("State is required.")
    .min(2, "Please Enter valid State Name"),

  cities: yup.array().min(2, "Please select at least 2 Cities."),

  address: yup
    .string()
    .required("Address is required.")
    .min(10, "Address must be at least 10 characters."),

  pincode: yup
    .string()
    .required("Pin code is required.")
    .matches(/^\d{6}$/, "Pin code must be 6 digits."),

  gender: yup.string().required("Please select gender."),

  paymentMode: yup
  .boolean()
  .oneOf([true], "Please select Payment Mode."),

  profilePicture: yup
    .mixed()
    .test("Required", "Profile picture is required.", (value) => {
      return value && value.length > 0;
    })
    .test(
      "AcceptedFormats",
      "Only JPG, PNG or GIF files are allowed.",
      (files) => {
        if (!files || files.length === 0) return true;
        const file = files?.[0];
        const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
        return allowedTypes.includes(file.type);
      },
    )

    .test("FileSize", "Profile picture must be maximum 6MB.", (files) => {
      if (!files || files.length === 0) return true;
      const file = files?.[0];
      return file.size <= 6 * 1024 * 1024;
    }),

   terms: yup
        .boolean()
        .oneOf([true], "Please accept the terms."),

  privacyPolicy: yup
    .boolean()
    .oneOf([true], "You must agree to the privacy policy."),

  coupon: yup.string().required("Coupon is required."),

  city: yup
    .string()
    .required("City is required.")
    .min(2, "Please Enter Valid City Name."),
});

