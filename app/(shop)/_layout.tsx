import { FontAwesome } from '@expo/vector-icons'
import { Stack, Tabs } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name']
  color: string
}) {
  return (
    <FontAwesome
      size={24}
      style={{ color: '#16a34a' }}
      {...props}
    />
  )
}

export default function ShopLayout() {
  return (
    <SafeAreaView className='flex-1'>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#16a34a',
          tabBarLabelStyle: {
            fontSize: 16,
          },
          tabBarStyle: {
            height: 60,
          },
          headerShown: false,
        }}>
        <Tabs.Screen
          name='index'
          options={{
            title: 'shop',
            tabBarIcon(props) {
              return (
                <TabBarIcon
                  name='shopping-cart'
                  {...props}
                />
              )
            },
          }}
        />
        <Tabs.Screen
          name='orders'
          options={{
            title: 'orders',
            tabBarIcon(props) {
              return (
                <TabBarIcon
                  name='book'
                  {...props}
                />
              )
            },
          }}
        />
      </Tabs>
    </SafeAreaView>
  )
}
