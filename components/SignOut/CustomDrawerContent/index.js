function CustomDrawerContent(props) {
    const altura=Dimensions.get('screen').height
    const {signOut}=useContext(AuthContext);
    function handleSignOut(){
      signOut();
    }
    return (
      <>
      <View style={{flexDirection:'row',alignItems:'center',alignContent:'center'}}>
        <Image source={require('./../../../../assets/img/ht2T.png')}
        style={{height:75,width:60,}}
        />
        <Text style={{fontSize:28,fontFamily:'notoserif'}} >HomeTech2</Text>
        </View>
        <View style={{marginBottom:-700}}>
        <DrawerItemList {...props}  /> 
        </View>
        <View style={{alignItems:'center'}}>
        <TouchableOpacity style={{backgroundColor:'#d3cdcd',width:100,borderRadius:20,height:30,justifyContent:'center',marginBottom:300}} onPress={handleSignOut}><Text style={{textAlign:'center'}}>Deslogar</Text></TouchableOpacity>
        </View>
        </>
    );
  }
  export default CustomDrawerContent;