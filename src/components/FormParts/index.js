import React, {useState, useEffect} from 'react'
import {Formik, Form} from 'formik'
import {ListHolder, FormPartial, FormPartialImage, 
    FormPartialText, FormPartialCheck, FieldCheckbox, Paragraph,
    ParagraphTitle, EmailCard, EmailContainer, Input, Submit,
    FormHolder
} from './styles'
import axios from 'axios'

const FormComponent = () => {
    const [data, setData] = useState({posts: []})
    
    useEffect(() => {
        const fetch = async () => {
            const response = await axios('./data.json')
            setData(response.data)
        }
        fetch()
    }, [])

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
            .join('&');
    }
    
    const [formValues, setFormValues] = useState()

    return (
        <Formik
            initialValues={{topics: [], email: ''}}
            onSubmit={(values, actions) => {
                setFormValues(values)
                fetch('/', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    body: encode({
                        'form-name': 'newsletter',
                        ...values
                    }),
                }).then(() =>{
                    alert('Success!')
                    actions.setSubmitting(false)
                }).then(error => {
                    alert('Something went wrong. Please try again.')
                    actions.setSubmitting(false)
                })
                console.log(values)
            }}
        >
            {({
                values, handleSubmit, handChange, isSubmitting
            }) => (
                    <FormHolder>
                        <Form
                        name='newletter'
                        method='post'
                        onSubmit={handleSubmit}
                        >
                            <ListHolder>
                                <FormPartial>
                                    <FormPartialImage>
                                        <img src={require('../../assets/krabs.PNG')} alt="placeholder" />
                                    </FormPartialImage>
                                    <FormPartialText>
                                        <ParagraphTitle>Hi</ParagraphTitle>
                                        <Paragraph>Lorem ipsum and whatnot</Paragraph>
                                    </FormPartialText>
                                    <FormPartialCheck>
                                        <FieldCheckbox 
                                            name="topic"
                                            type="checkbox"
                                            render={(field, form) => (
                                                <input 
                                                    type="checkbox" 
                                                    checked={field.value}
                                                    {...field}
                                                />
                                            )}
                                        />
                                    </FormPartialCheck>
                                </FormPartial>
                            </ListHolder>
                            <EmailCard>
                                <EmailContainer>
                                    <Input></Input>
                                    <Submit>Submit</Submit>
                                </EmailContainer>
                            </EmailCard>
                        </Form>  
                    </FormHolder>   
                    )
            }
        </Formik>
    )
}

export default FormComponent