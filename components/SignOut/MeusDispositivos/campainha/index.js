import React from 'react'
import { View,TouchableOpacity, Dimensions,Text } from 'react-native'
import MenuBar from '../../menubar';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function Mdispositivos({navigation}){
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
        
        </View>
    )
}