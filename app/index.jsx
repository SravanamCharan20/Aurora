import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Text className="text-red-500">Open up App.js to start working on your app!</Text>
      <Link href='/profile'>
        <Text>Go to profile</Text>
      </Link>
      <StatusBar style="auto" />
    </View>
  );
}
