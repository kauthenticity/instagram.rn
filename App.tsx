import React from 'react'
import {SafeAreaView, FlatList, View} from 'react-native'
import styled from 'styled-components/native'
import Person from './src/copy/Person'
import * as D from './src/data'

const people: D.IPerson[] = D.makeArray(20).map(D.createRandomPerson)

export default function App() {
  return (
    <Container>
      <List
        data={people}
        renderItem={({item}) => <Person person={item} />}
        keyExtractor={(item, index) => item.id}
        ItemSeparatorComponent={() => <Separator />}></List>
    </Container>
  )
}

const Container = styled.SafeAreaView`
  flex: 1;
`

const List = styled.FlatList`` as unknown as typeof FlatList

const Separator = styled.View``
