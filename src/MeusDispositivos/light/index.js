import React, { useState } from 'react'
import { View,TouchableOpacity,Switch, Text, Dimensions, Button } from 'react-native'
import MenuBar from '../../menubar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import database from '@react-native-firebase/database';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { FlatList } from 'react-native-gesture-handler';
 function Portas({navigation}){
     const [onOff,setOnOff]=useState(false);

     const AbraTeSesamo=()=>{
      navigation.openDrawer();
  }
     function ligaDesliga(){

         setOnOff(!onOff);
         if(onOff==true){
           
            function Atualizar(){
                database()
                .ref('/Lampada1/')
                .update({
                  valor: 'on',
                })
                .then(() => console.log('Data updated.'));
              }  
              Atualizar();
         }
         else{

            function Atualizar(){
                database()
                .ref('/Lampada1/')
                .update({
                  valor: 'off',
                })
                .then(() => console.log('Data updated.'));
              }  
              Atualizar();   
         }
     }

    function Ler(){
        database()
  .ref('/Lampada1/valor')
  .once('value')
  .then(snapshot => {
    console.log('User data: ', snapshot.val());
  });
}

    return(<>
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
    <View style={{flexDirection:'row',justifyContent:'space-between',padding:20,alignItems:'center',margin:2,borderWidth:2}}>

    <View>
      <Ionicons name={'ios-tv'} size={40} color={'black'}/>
    </View>
    <View>
      <Text>Sala de estar</Text>
    </View>
    <View>
      <Button
      title="On/Off"
      onPress={ligaDesliga}
      />
    </View>
</View>

<View style={{flexDirection:'row',justifyContent:'space-between',padding:20,alignItems:'center',margin:2,borderWidth:2}}>
    <View>
      <MaterialIcons name={'kitchen'} size={40} color={'black'}/>
    </View>
    <View>
      <Text>Cozinha</Text>
    </View>
    <View>
      <Button
      title="On/Off"
      onPress={ligaDesliga}
      />
    </View>

    </View>

    <View style={{flexDirection:'row',justifyContent:'space-between',padding:20,alignItems:'center',margin:2,borderWidth:2}}>
    <View>
      <MaterialCommunityIcons name={'bed-empty'} size={40} color={'black'}/>
    </View>
    <View>
      <Text>Quarto</Text>
    </View>
    <View>
      <Button
      title="On/Off"
      onPress={ligaDesliga}
      />
    </View>

    </View>
        </>
    );
    }

    export default Portas;


//     <View style={{justifyContent:'center',alignContent:'center',alignItems:'center'}}>
//           <View style={{flexDirection:'row',marginBottom:'4%',alignContent:'space-around',justifyContent:'space-around',alignItems:'center',marginTop:'5%'}}>
//                 <Ionicons name={'ios-tv'} size={40} color={'black'}/> 
//                 <Text style={{marginLeft:'10%'}}>Sala de estar</Text>
//                 <View style={{marginLeft:'10%'}}>
                  
//                 <Button
//                 title="On/Off"
//                 onPress={ligaDesliga}
//                 />
//                 </View>
//           </View>
// <View style={{flexDirection:'row',flex:0,justifyContent:'space-between',alignItems:'center'}}>
// <View style={{backgroundColor:'red'}}>
//   <MaterialIcons name={'kitchen'} size={40} color={'black'}/>
// </View>
// <View>
//   <Text>Cozinha</Text>
// </View>
// <View>
//                 <TouchableOpacity>
//                   <Text>ON/OFF</Text>
//                 </TouchableOpacity>
// </View>
//           </View>
//           <View style={{flexDirection:'row',marginBottom:'4%',marginTop:'5%',alignContent:'space-around',justifyContent:'space-around',alignItems:'center'}}>
//                 <MaterialCommunityIcons name={'bed-empty'} size={40} color={'black'}/><Text style={{marginLeft:'10%'}}>Quarto</Text>
//                 <View style={{marginLeft:'10%'}}>
//                 <Button
//                 title="On/Off"
//                 onPress={ligaDesliga}
//                 />
//                 </View>
//           </View>
                
//         </View>