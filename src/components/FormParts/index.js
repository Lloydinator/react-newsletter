import React, {useState, useEffect} from 'react'
import {Formik, Form} from 'formik'
import {ListHolder, FormPartial, FormPartialImage, 
    FormPartialText, FormPartialCheck, FieldCheckbox, Paragraph,
    ParagraphTitle, EmailCard, EmailContainer, Input, Submit,
    FormHolder, SmallText
} from './styles'
import axios from 'axios'

const FormComponent = () => {
    const [data, setData] = useState([])
    
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
    console.log(data[0])
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
                                {data.map(data => (
                                    <FormPartial key={data.id}>
                                        <FormPartialImage>
                                            <img src={require(`../../assets/${data.image}`)} alt="placeholder" />
                                        </FormPartialImage>
                                        <FormPartialText>
                                            <ParagraphTitle>{data.title}</ParagraphTitle>
                                            <Paragraph>{data.paragraph}</Paragraph>
                                        </FormPartialText>
                                        <FormPartialCheck>
                                            <label htmlFor="topic">
                                            <FieldCheckbox 
                                                name="topic"
                                                type="checkbox"
                                                id="topic"
                                                value={data.value}
                                                //checked={field.value}
                                                //{...field}
                                            />
                                            <div></div>
                                            </label>
                                        </FormPartialCheck>
                                    </FormPartial>
                                    )) 
                                }
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