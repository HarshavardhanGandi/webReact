import React from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {globalStyles} from './assets/styles/styles';

import W3Image from './assets/img/login.png';
import offerxLogo from './assets/img/offerx-logo.png';
import MicrosoftImg from './assets/img/Microsoft.png';
import GoogleImg from './assets/img/Google.png';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={globalStyles.safeContainer}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={globalStyles.container}>
          <View style={globalStyles.justifyContentBetween}>
            <Image source={W3Image} style={globalStyles.loginImg} />
            <View style={globalStyles.w40}>
              <Image style={globalStyles.mainLogo} source={offerxLogo} />
              <View>
                <Text
                  style={[
                    globalStyles.fs24,
                    globalStyles.fw700,
                    globalStyles.textCenter,
                    globalStyles.mb4,
                    globalStyles.textprimaryBlack,
                  ]}>
                  Login
                </Text>
                <Text style={globalStyles.label}>
                  Email<Text style={globalStyles.errorText}>*</Text>
                </Text>
                <TextInput
                  style={globalStyles.inputStyle}
                  placeholder="Enter Email"
                />

                <Text style={globalStyles.label}>
                  Password<Text style={globalStyles.errorText}>*</Text>
                </Text>
                <TextInput
                  style={globalStyles.inputStyle}
                  placeholder="Enter Password"
                  secureTextEntry
                />

                <TouchableOpacity style={globalStyles.btn}>
                  <Text
                    style={[
                      globalStyles.textCenter,
                      globalStyles.fs18,
                      globalStyles.textWhite,
                    ]}>
                    Login
                  </Text>
                </TouchableOpacity>
                <Text style={[globalStyles.link, globalStyles.textCenter]}>
                  Forgot Password?
                </Text>

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={globalStyles.orLine} />
                  <View>
                    <Text style={globalStyles.orText}>OR</Text>
                  </View>
                  <View style={globalStyles.orLine} />
                </View>
                <View style={globalStyles.justifyContentBetween}>
                  <Pressable
                    style={globalStyles.socialBtn}
                    onPress={() => console.log('Pressed!')}>
                    <Image
                      source={MicrosoftImg}
                      style={{width: 20, height: 20}}
                    />
                    <Text style={globalStyles.socialText}>
                      Sign in with Microsoft
                    </Text>
                  </Pressable>
                  <Pressable
                    style={globalStyles.socialBtn}
                    onPress={() => console.log('Pressed!')}>
                    <Image source={GoogleImg} style={{width: 20, height: 20}} />
                    <Text style={globalStyles.socialText}>
                      Sign in with Google
                    </Text>
                  </Pressable>
                </View>

                <Text style={globalStyles.termsText}>
                  By clicking sign in, you agree to the OfferX{'\n'}
                  <Pressable>
                    <Text style={globalStyles.link}>Terms & Conditions, </Text>
                  </Pressable>
                  <Pressable>
                    <Text style={globalStyles.link}>Privacy </Text>
                  </Pressable>
                  <Pressable>
                    <Text style={globalStyles.link}>and Cookies policies.</Text>
                  </Pressable>
                </Text>

                <Pressable
                  style={globalStyles.registerBtn}
                  onPress={() => console.log('Pressed!')}>
                  <Text style={globalStyles.registerText}>
                    Don't have account? Register
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default App;
