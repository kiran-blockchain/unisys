// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
// import ViewBoxComponent from './components/ViewBox';
// import TextInputComponent from './components/TextInput';
// import LandingPage from './components/LandingPage';

// const App: () => React$Node = () => {
//   return (
//     <>
//     <LandingPage/>
//       {/* <ViewBoxComponent/>
//       <TextInputComponent/> */}
//     </>
//   )
// }
// // const App: () => React$Node = () => {
// //   return (
// //     <>
// //       <StatusBar barStyle="dark-content" />
// //       <SafeAreaView>
// //         <ScrollView
// //           contentInsetAdjustmentBehavior="automatic"
// //           style={styles.scrollView}>
// //           <Header />
// //           {global.HermesInternal == null ? null : (
// //             <View style={styles.engine}>
// //               <Text style={styles.footer}>Engine: Hermes</Text>
// //             </View>
// //           )}
// //           <View style={styles.body}>
// //             <View style={styles.sectionContainer}>
// //               <Text style={styles.sectionTitle}>Step One</Text>
// //               <Text style={styles.sectionDescription}>
// //                 Edit <Text style={styles.highlight}>App.js</Text> to change this
// //                 screen and then come back to see your edits.
// //               </Text>
// //             </View>
// //             <View style={styles.sectionContainer}>
// //               <Text style={styles.sectionTitle}>See Your Changes</Text>
// //               <Text style={styles.sectionDescription}>
// //                 <ReloadInstructions />
// //               </Text>
// //             </View>
// //             <View style={styles.sectionContainer}>
// //               <Text style={styles.sectionTitle}>Debug</Text>
// //               <Text style={styles.sectionDescription}>
// //                 <DebugInstructions />
// //               </Text>
// //             </View>
// //             <View style={styles.sectionContainer}>
// //               <Text style={styles.sectionTitle}>Learn More</Text>
// //               <Text style={styles.sectionDescription}>
// //                 Read the docs to discover what to do next:
// //               </Text>
// //             </View>
// //             <LearnMoreLinks />
// //           </View>
// //         </ScrollView>
// //       </SafeAreaView>
// //     </>
// //   );
// // };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.blue,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

// export default App;

import React, { Component } from "react";
import Expo from "expo";
import HomeScreen from "./component/HomeScreen/index.js";
export default class AwesomeApp extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return <HomeScreen />;
  }
}

