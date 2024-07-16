import { useState } from "react"



const FormValid = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        dob: ""
    })

    const [error, setError] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validateForm()) {
            // if form is valid then handle submission
            console.log("form submitted successfully", formData);
        } else {
            // if form is invalid then show errors
            console.log("there are some error in the form")
        }
    }


    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,  // spread operator to copy existing properties
            [name]: value, // update the specific property that has changed
        })
    }

    const validateEmail = (email) => {
      const emailRegex = /^\S+@\S+\.\S+$/;
      return emailRegex.test(email);
    };

    const validateForm = () => {
        const newErrors = {}
        
        if (!formData.name) {
        newErrors.name = "Name is required"
        }

        if (!formData.email) {
            newErrors.email = "Email is required"
        } else if (!validateEmail(formData.email)) {
            newErrors.email = "Email is invalid"
        }

        if (!formData.password) {
            newErrors.password = "Password is required"
        } else if (formData.password.length < 8 || formData.password.length > 16) {
            newErrors.password = "Password must be between 8 to 16 characters"
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "Confirm Password is required"
        } else if (formData.confirmPassword !== formData.password) {
            newErrors.confirmPassword = "Password must be same"
        }

        if (!formData.dob) {
            newErrors.dob = "DOB is required"
        } else if (new Date(formData.dob) > new Date()) {
            newErrors.dob = "Date of birth can not be in the future"
        }

        setError(newErrors)

        return Object.keys(newErrors).length ===  0
    }

  return (
    <form onClick={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        {error.name && <p> {error.name} </p>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {error.email && <p> {error.email} </p>}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        {error.password && <p> {error.password} </p>}
      </div>

      <div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword} onChange={handleChange}
        />
        {error.confirmPassword && <p> {error.confirmPassword} </p>}
      </div>

      <div>
        <label htmlFor="dob">DOB</label>
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
        {error.dob && <p> {error.dob} </p>}
      </div>

          <div>
              <button type="submit">Submit</button>
          </div>
    </form>
  );
}

export default FormValid