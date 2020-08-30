import React from 'react'
import FormComponent from '../FormParts'
import {Card, Title, SubTitle
} from './styles'

const CardComponent = () => (
    <Card>
        <Title>Newsletters</Title>
        <SubTitle>Select all the newsletters you'd like to receive</SubTitle>
        <FormComponent />
    </Card>
)

export default CardComponent