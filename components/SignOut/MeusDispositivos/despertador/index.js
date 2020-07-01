import React from 'react'
import { View,TouchableOpacity, Text, Dimensions,Button } from 'react-native'
import MenuBar from '../../menubar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import database from '@react-native-firebase/database';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
export default function Despertador({navigation}){
    const [onOff,setOnOff]=useState(false);
    const altura=Dimensions.get('screen').height
    const AbraTeSesamo=()=>{
        navigation.openDrawer();
    }
    return(
<View>
<MenuBar>
          <View style={{flexDirection:'row'}}>
          <View>
<TouchableOpacity onPress={AbraTeSesamo}>
      <Ionicons name={'md-menu'} size={40} color={'white'}/>
    </TouchableOpacity>
          </View>
              <View style={{alignItems:'center',alignContent:'center'}}>
                <Text style={{color:'white',fontSize:22,marginLeft:7,marginTop:'3%'}}>
                  HomeTech
                </Text>
            </View>
            </View>
</MenuBar>
<View style={{flexDirection:'row',justifyContent:'space-between',padding:20,alignItems:'center',margin:2,borderWidth:2}}>
    <View>
      <MaterialCommunityIcons name={'door-open'} size={40} color={'black'}/>
    </View>
    <View>
      <Text>Minha casa</Text>
    </View>
    <View>
      <Button
      title="Open/Close"
      onPress={()=>{}}
      />
    </View>
</View>
        
        </View>
    )
}
