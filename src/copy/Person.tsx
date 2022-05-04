import React from 'react'
import {Alert, StyleSheet} from 'react-native'
import styled from 'styled-components/native'
import moment from 'moment-with-locales-es6'
import type {StyleProp, ViewStyle} from 'react-native'
import * as D from '../data'
import {Avatar, IconText} from '../components'

moment.locale('ko')

export type PersonProps = {
  person: D.IPerson
}
type mainStyle = StyleProp<ViewStyle>

const avatarPressed = () => {
  Alert.alert('avatar pressed')
}
const deletePressed = () => {
  Alert.alert('delete pressed')
}

const countIconPressed = (name: string) => () => {
  Alert.alert(`${name} pressed`)
}

const Person = ({person}: PersonProps) => {
  return (
    <Container>
      <Header>
        <Avatar uri={person.avatar} imageStyle={[styles.avatar]} size={40} onPress={avatarPressed} />
        <Name>{person.name}</Name>
        <Created>{moment(person.createdDate).startOf('day').fromNow()}</Created>
      </Header>
      <Content>
        <Img source={{uri: person.image}}></Img>
        <Likes>{person.counts.heart} likes</Likes>
        <IconContainer>
          <IconText mainStyle={{marginLeft: 5}} viewStyle={[styles.touchableIcon]} onPress={countIconPressed('like')} name="heart" size={20} color="#000" />
          <IconText viewStyle={[styles.touchableIcon]} onPress={countIconPressed('comment')} name="comment" size={20} color="#000" />
          <IconText viewStyle={[styles.touchableIcon]} onPress={countIconPressed('retweet')} name="paper-airplane" size={20} color="#000" />
          <IconText
            mainStyle={{marginLeft: 'auto', marginRight: 5}}
            viewStyle={[styles.touchableIcon]}
            onPress={countIconPressed('bookmark')}
            name="bookmark"
            size={20}
            color="#000"
          />
        </IconContainer>

        <Description>
          <User numberOfLines={2} ellipsizeMode="tail">
            {person.name}
            <Comment>&nbsp;{person.comments}</Comment>
          </User>
        </Description>

        <ViewMore>View all {person.counts.comment} comments</ViewMore>
      </Content>
    </Container>
  )
}

export default Person

const ViewMore = styled.Text`
  margin-left: 10px;
  padding: 10px 0;
  color: #5f5f5f;
`

const User = styled.Text`
  font-weight: 600;
  margin-right: 10px;
`

const Description = styled.View`
  margin: 0px 10px;
  flex-direction: row;
  flex-wrap: wrap;
`
const Likes = styled.Text`
  margin-left: 15px;
  font-weight: 600;
`

const IconContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  /* justify-content: flex-start; */
`

const Content = styled.View`
  width: 100%;
`

const Header = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: flex-start;
`

const styles = StyleSheet.create({
  avatar: {
    marginLeft: 10,
    marginRight: 10,
  },
  touchableIcon: {
    padding: 10,
  },
})

const Img = styled.Image`
  width: 100%;
  height: 300px;
  margin: 10px 0px;
`
const Comment = styled.Text`
  font-weight: 400;
`

const Container = styled.View`
  width: 100%;
  padding: 10px 0px;
`

const Name = styled.Text`
  margin-right: 5;
  font-size: 14;
  font-weight: 600;
`

const Created = styled.Text`
  margin-left: auto;
  font-size: 12;
  margin-right: 10;
`
