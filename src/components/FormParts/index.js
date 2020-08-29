import React, {useState, useEffect} from 'react'
import {Formik, Form} from 'formik'
import {ListHolder, FormPartial, FormPartialImage, 
    FormPartialText, FormPartialCheck, FieldCheckbox, Paragraph,
    ParagraphTitle, EmailCard, EmailContainer, Input, Submit,
    FormHolder, SmallText
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
                                        <label htmlFor="topic">
                                        <FieldCheckbox 
                                            name="topic"
                                            type="checkbox"
                                            id="topic"
                                            //checked={field.value}
                                            //{...field}
                                        />
                                        <div></div>
                                        </label>
                                    </FormPartialCheck>
                                </FormPartial>
                            </ListHolder>
                            <EmailCard>
                                <EmailContainer>
                                    <Input name="email" type="email" placeholder="Enter email" />
                                    <Submit>Subscribe</Submit>
                                    <label htmlFor="subscribe">
                                        <input name="subscribe" id="subscribe" type="checkbox" />
                                        <SmallText>I do not want to receive information about future newsletters</SmallText>
                                    </label>
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