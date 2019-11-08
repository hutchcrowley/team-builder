import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  background-color: white;
  opacity: 0.5;
  width: 350px;
  height: 300px;
  border-radius: 15px;
  padding: 10px;
  box-shadow: 20px 20px 15px black;
  text-align: center;
  margin: 10px auto;
  display: flex;
`

const Title = styled.div`
  font-size: 18px;
  color: black;
  border-bottom: 1px solid #f1f1f1;
`

const CardContent = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: flex-start;
  color: black;
`

const CardImage = styled.img`
  width: 150px;
  height: 150px;
`
const MembersList = (props) => {
  return (
    <Card>
      <Title>{props.info.name}</Title>
      <CardContent>
        <CardImage src={props.info.image} />
        <div>
          <div>ID: {props.info.id}</div>
          <div>email: {props.info.email}</div>
          <div>role: {props.info.role}</div>
        </div>
      </CardContent>
    </Card>
  )
}

export default MembersList
