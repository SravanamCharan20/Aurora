import { StatusBar } from "expo-status-bar";
import { Redirect, Tabs } from "expo-router";
import { Image, Text, View, Platform } from "react-native";

import { icons } from "../../constants";
// import { Loader } from "../../components";
// import { useGlobalContext } from "../../context/GlobalProvider";

const TabIcon = ({ icon, name, focused }) => {
  return (
    <View className="items-center justify-center h-[50px]">
      <View className={`${
        focused 
          ? 'bg-secondary p-3 rounded-full shadow-lg shadow-secondary/30 -mt-8' 
          : 'p-2'
      }`}>
        <Image
          source={icon}
          resizeMode="contain"
          className="w-6 h-6"
          style={{ 
            tintColor: focused ? '#fff' : '#8E8E93',
          }}
        />
        {focused && (
          <Text 
            className="text-[10px] text-secondary font-psemibold absolute -bottom-5 w-20 text-center" 
            numberOfLines={1}
          >
            {name}
          </Text>
        )}
      </View>
    </View>
  );
};

const TabLayout = () => {
  // const { loading, isLogged } = useGlobalContext();

  // if (!loading && !isLogged) return <Redirect href="/sign-in" />;

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#161622',
            height: 60,
            position: 'absolute',
            bottom: 16,
            left: 16,
            right: 16,
            borderRadius: 30,
            elevation: 0,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.15,
            shadowRadius: 8,
            paddingHorizontal: 8,
            paddingVertical: 8,
            borderWidth: 1,
            borderColor: '#232533',
          },
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#FF9C01',
          tabBarInactiveTintColor: '#8E8E93',
        }}
      >
        <Tabs.Screen
          name="Home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon
                icon={icons.home}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Bookmark"
          options={{
            title: "Bookmark",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon
                icon={icons.bookmark}
                name="Bookmark"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Create"
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon
                icon={icons.plus}
                name="Create"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon
                icon={icons.profile}
                name="Profile"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>

      {/* <Loader isLoading={loading} /> */}
      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default TabLayout;