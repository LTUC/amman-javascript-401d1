# Dynamic Forms

## Learning Objectives

* Implement a generic form using Redux Form
* Implement a generic standard form using JSON Schema
* Connect form data back to the store

## Outline
* :05 **Housekeeping/Recap**
* :30 **Whiteboard/DSA Review**
* :15 **Lightning Talk**
* Break
* :30 **CS/UI Concepts** -
* :20 **Code Review**
* Break
* :60 **Main Topic**

## UI Concept:
* UX: Form Usability and Styling
* <Record> Component

## Main Topic:
* Dynamic forms from JSON Schema
* Manually creating forms
* Handling RESTful actions in state

### JSON Schema Form
Generates a full form through configuration. Given a proper JSON schema, and proper rule sets, the forms will auto appear and populate.

In either a POC, or a system where top-down forms are ok, this is a great solution to jump in with.

```javascript
import Form from 'react-jsonschema-form';

  // When the form is submitted, you'll get an object from it.
  handleSubmit = (form) => {
    console.log(form.formData);
  }

  // Create the form with valid JSON Schema Object and some display rules (optional) in {uiSchema}

  <Form
    schema={this.state.schema}
    uiSchema={uiSchema}
    formData={this.state.data}
    onSubmit={this.handleSubmit}
  />

```

### Redux Form
Is not dynamically generated, you'll need to put in some work in architecture and wiring.

Puts you more in control over each facet of the form (elements, input types, workflow, etc)

**Store**
```javascript
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({
  // you are required to pass formReducer under 'form' key,
  form: formReducer
})

const store = createStore(reducers)
```

**Form Component**

Note the use of the `<Field />` component and the declaration of `type`...

```javascript
import { Field, reduxForm } from 'redux-form'

MyForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default reduxForm({
  form: 'myform'
})(MyForm)

```

**Handling Submit**

So long as you pass an onSubmit to the Form component, you can use your own handler, which will receive the filled in values.

```javascript
class ContactPage extends React.Component {
  submit = values => {
    // print the form values to the console
    console.log(values)
  }
  render() {
    return <ContactForm onSubmit={this.submit} />
  }
}
// normal redux connections and exports down here ...
```
