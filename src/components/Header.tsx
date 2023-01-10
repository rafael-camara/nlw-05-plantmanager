import React, { useEffect, useState } from 'react'

import { View, Text, StyleSheet, Image } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import AsyncStorage from '@react-native-async-storage/async-storage'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

export function Header() {
  const [userName, setUserName] = useState<string>()

  useEffect(() => {
    const loadStorageUserName = async () => {
      const user = await AsyncStorage.getItem('@plantmanager:user')
      setUserName(user || '')
    }

    loadStorageUserName()
  }, [])

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>{userName}</Text>
      </View>

      <Image
        source={{ uri: 'https://github.com/rafael-camara.png' }}
        style={styles.avatar}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: getStatusBarHeight(),
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  userName: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 40,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
})
