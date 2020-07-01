import React,{useState,useEffect} from 'react'
import { View,Button,Text,Dimensions,Image,TouchableOpacity,StatusBar,ScrollView, Alert,Linking} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import MenuBar from '../menubar';
export default function Home({navigation}){
    
    const AbraTeSesamo=()=>{
        navigation.openDrawer();
    }   

    return (
    <ScrollView>
        <StatusBar
        backgroundColor='#0F0821'
        />
        <MenuBar>
          <View style={{flexDirection:'row'}}>
          <View>
<TouchableOpacity onPress={AbraTeSesamo}>
      <Ionicons name={'md-menu'} size={40} color={'white'}/>
    </TouchableOpacity>
          </View>
              <View style={{alignItems:'center',alignContent:'center'}}>
                <Text style={{color:'white',fontSize:20,marginLeft:7,marginTop:'3%'}}>
                  HomeTech
                </Text>
            </View>
            </View>
</MenuBar>
<ScrollView>
 
  <Card>
    <CardImage 
      source={{uri: 'https://images.pexels.com/photos/840996/pexels-photo-840996.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}} 
      
    />
    <CardTitle
      subtitle="Rafael Araújo"
    />
    <CardContent text="Quanto custa automatizar tudo hoje em dia?" />
    <CardAction 
      separator={true} 
      inColumn={false}>
      <CardButton
        onPress={() => Linking.openURL('http://34.125.9.50/qual-o-custo/')}
        title="Ir ao Blog"
        color="#FEB557"
      />
    </CardAction>
  </Card>


  <Card>
    <CardImage 
      source={{uri: 'https://images.pexels.com/photos/4709377/pexels-photo-4709377.jpeg?cs=srgb&dl=close-vista-de-perto-eletronico-eletronicos-4709377.jpg&fm=jpg'}} 
      
    />
    <CardTitle
      subtitle="Pedro "
    />
    <CardContent text="Especialista falam sobre o futuro da automação" />
    <CardAction 
      separator={true} 
      inColumn={false}>
      <CardButton
        onPress={() => Linking.openURL('http://34.125.9.50/o-que-da-para-automatizar/')}
        title="Ir ao Blog"
        color="#FEB557"
      />
    </CardAction>
  </Card>

  <Card>
    <CardImage 
      source={{uri: 'https://images.pexels.com/photos/4065152/pexels-photo-4065152.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}} 
      
    />
    <CardTitle
      subtitle="Rafael Pereira"
    />
    <CardContent text="Novidades em nosso Portal" />
    <CardAction 
      separator={true} 
      inColumn={false}>
      <CardButton
        onPress={() => Linking.openURL('http://34.125.9.50/22/')}
        title="Ir ao Blog"
        color="#FEB557"
      />
    </CardAction>
  </Card>


  
  
 
</ScrollView>
    
    </ScrollView>
        );
}