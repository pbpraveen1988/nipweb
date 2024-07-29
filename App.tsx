import React, { useState } from 'react';
import { StyleSheet, View, Platform, StatusBar, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => {
  const [canGoBack, setCanGoBack] = useState(false);
  const [webview, setWebview] = useState(null);

  const onNavigationStateChange = (navState: any) => {
    setCanGoBack(navState.canGoBack);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <WebView
        source={{ uri: 'https://takshvi.co/app/login.php' }}
        ref={(ref: any) => {
        //  setWebview(ref)
        }}
        onNavigationStateChange={onNavigationStateChange}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default App;
