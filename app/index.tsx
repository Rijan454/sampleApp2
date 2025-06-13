import { StyleSheet, Text, View } from 'react-native'
export default function SignUp(props:any){
    return(
        <View style = {styles.container}>
            <Text style={styles.title}>Sign up</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        color: "blue",
        textAlign:"center",
      
    },
    container: {
        flex: 1,
        justifyContent: "center"
    }
})