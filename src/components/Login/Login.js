import React from 'react';
import { Formik } from 'formik';
import {LoginAPI} from '../../API/api';

const LoginForm = (props) => {
	return <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Введите почту';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           props.onSubmit(values);
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
           <Field
             type="email"
             name="email"
             placeholder='email'
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
           {errors.email && touched.email && errors.email}
           <div><Field
             type="password"
             name="password"
             placeholder='password'
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           /></div>
           {errors.password && touched.password && errors.password}
           <Field name='rememberMe' value={values.rememberMe} type={'checkbox'}/> remember me
           <div>
           		<button type="submit" disabled={isSubmitting}>
             		Submit
           		</button>
           </div>
           
         </form>
       )}
     </Formik>
}


const Login = (props) => {
	const onSubmit = (formData) => {
		LoginAPI.sendLogin(formData);
	}

	return <div>
		<h1>Login</h1>
		<LoginForm onSubmit={onSubmit}/>
	</div>
}


export default Login