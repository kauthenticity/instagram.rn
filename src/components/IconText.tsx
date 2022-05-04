import React from 'react'
import type {ComponentProps} from 'react'
import {Text} from 'react-native'
import type {TextStyle, StyleProp} from 'react-native'
import Icons from 'react-native-vector-icons/Octicons'
import {TouchableView} from './TouchableView'
import {TouchableViewProps} from './TouchableView'

export type IconTextProps = TouchableViewProps & ComponentProps<typeof Icons>

export const IconText = ({name, size, color, ...touchableViewProps}: IconTextProps) => {
  return (
    <TouchableView {...touchableViewProps}>
      <Icons name={name} size={size} color={color}></Icons>
    </TouchableView>
  )
}
