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
    
    return (
        <Formik
            initialValues={{topics: [], email: ''}}
            onSubmit={(values, actions) => {
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
                values, handleSubmit, form, field, isSubmitting
            }) => (
                    <FormHolder>
                        <Form
                            name='newletter'
                            method='post'
                            netlify-honeyport='bot-field'
                            data-netlify='true'
                            onSubmit={handleSubmit}
                        >
                            <ListHolder>
                                {data.map(data => {
                                    return (
                                        <FormPartial key={data.id}>
                                            <FormPartialImage>
                                                <img src={require(`../../assets/${data.image}`)} alt="placeholder" />
                                            </FormPartialImage>
                                            <FormPartialText>
                                                <ParagraphTitle>{data.title}</ParagraphTitle>
                                                <Paragraph>{data.paragraph}</Paragraph>
                                            </FormPartialText>
                                            <FormPartialCheck>
                                                <label htmlFor={`topic ${data.id}`}>
                                                <FieldCheckbox 
                                                    name="topic"
                                                    type="checkbox"
                                                    id={`topic ${data.id}`}
                                                    value={data.value}
                                                    {...field}
                                                />
                                                <div></div>
                                                </label>
                                            </FormPartialCheck>
                                        </FormPartial>
                                        )
                                    }) 
                                }
                            </ListHolder>
                            <EmailCard>
                                <EmailContainer>
                                    <Input name="email" type="email" placeholder="Enter email" />
                                    <Submit onClick={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Submit'}</Submit>
                                    <label htmlFor="subscribe">
                                        <input name="subscribe" id="subscribe" type="checkbox" value="noregister" />
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