import React from "react";
import { View, Text, StyleSheet, Dimensions, ImageBackground, Image, TextInput } from "react-native";
import {LinearGradient} from 'expo-linear-gradient';

export default class LoginComponent extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.header}>
                    <ImageBackground 
                    source={require("../images/header.png")}
                    style={{flex:1,width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}}
                    resizeMode={"stretch"}>
                        <View style={styles.logo}>
                            <Image
                                source={require("../images/logo.png")}
                                style={{width:'100%',height:'100%'}}
                                resizeMode={"stretch"}
                            />
                        </View>
                    </ImageBackground>
                </View>
                <View style = {styles.footer}>
                    <TextInput
                        style = {styles.textInput}
                        placeholder="Tên đăng nhập" 
                    />
                    <TextInput
                        style = {styles.textInput}
                        placeholder="Mật khẩu" 
                        secureTextEntry
                    />
                    <LinearGradient colors = {['#039BE5','#3498db','#039BE5']} style = {styles.login}>
                        <Text style = {styles.textLogin}>Đăng nhập</Text>
                    </LinearGradient>
                </View>
            </View>
        )
    }
}

const {width,height} = Dimensions.get("window");
const width_logo = width * 0.5;
const height_logo = width_logo * 1.2;
const width_textInput = width * 0.8;

var styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white'
        },
        header: {
            width: '100%',
            height: '55%'
        },
        footer: {
            width: '100%',
            height: '45%',
            justifyContent: 'center',
            alignItems: 'center'
        },
        logo: {
            width: width_logo,
            height: height_logo
        },
        textInput: {
            width: width_textInput,
            backgroundColor: '#F2F2F2',
            paddingHorizontal: 20,
            paddingVertical: 15,
            borderRadius: 50,
            marginBottom: 15
        },
        login: {
            width: width_textInput,
            paddingVertical: 10,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50
        },
        textLogin: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 20
        }
    }
)