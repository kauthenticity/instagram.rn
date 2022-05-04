import type, {ReactNode, ComponentProps} from 'react'
import React from 'react'
import {Touchable} from 'react-native'
import {TouchableOpacity, View} from 'react-native'
import type {StyleProp, ViewStyle} from 'react-native'

// react core component인 touchableOpacity에 넘겨줄 props
type TouchableOpacityProps = ComponentProps<typeof TouchableOpacity>

export type TouchableViewProps = TouchableOpacityProps & {
  viewStyle?: StyleProp<ViewStyle>
  mainStyle?: StyleProp<ViewStyle>
}

export const TouchableView = ({children, viewStyle, mainStyle, ...touchableProps}: TouchableViewProps) => {
  return (
    //이렇게 touchableProps를 받은 그대로 넘겨줌.
    <TouchableOpacity style={mainStyle} {...touchableProps}>
      <View style={viewStyle}>{children}</View>
    </TouchableOpacity>
  )
}
