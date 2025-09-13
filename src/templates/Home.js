import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Header from '../components/Header'

function Home({children}) {
    return (
    <SafeAreaView>
        <ScrollView>
            <View>
                <Header />
                <Text>ESSA É A HOME PORRRA</Text>
                {children}
            </View>
        </ScrollView>
    </SafeAreaView>
    )
}

export default Home;