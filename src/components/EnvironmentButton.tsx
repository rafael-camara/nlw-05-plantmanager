import React, { ReactNode } from 'react'
import { Text, StyleSheet } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

interface EnvironmentButtonProps extends RectButtonProps {
  children: ReactNode
  active?: boolean
}

export function EnvironmentButton({
  children,
  active = false,
  ...rest
}: EnvironmentButtonProps) {
  return (
    <RectButton
      style={[styles.container, active && styles.containerActive]}
      {...rest}
    >
      <Text style={[styles.title, active && styles.textActive]}>
        {children}
      </Text>
    </RectButton>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.shape,
    width: 76,
    height: 40,
    marginHorizontal: 5,
    borderRadius: 12,

    justifyContent: 'center',
    alignItems: 'center',
  },
  containerActive: {
    backgroundColor: colors.green_light,
  },
  title: {
    color: colors.heading,
    fontFamily: fonts.text,
  },
  textActive: {
    fontFamily: fonts.heading,
    color: colors.green_dark,
  },
})
