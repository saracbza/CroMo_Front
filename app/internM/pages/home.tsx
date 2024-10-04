import Monitorias from '@/components/monitor/monitoriasM'
import { Button, ButtonText } from '@/components/ui/button'
import { router } from 'expo-router'
import { Text, StyleSheet, SafeAreaView, View, ScrollView } from 'react-native'

export default function Home(){
    const criar = () => {
        router.replace('/profile')
    }

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={[styles.title, {color: '#fff'}]}> Minhas monitorias </Text>
                <View style={styles.viewDia}/>  
                <View style={styles.viewCaixas}>
                    <Monitorias/>
                </View>
                <Button style={{ marginLeft: 10 }} onPress={criar}
                size='xl' variant="link" action="primary">
                    <ButtonText style={styles.buttonText}>Criar nova monitoria</ButtonText>
                </Button>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a2224',
        justifyContent: 'flex-start',
        padding: 16,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    buttonText: {
        fontSize: 20,
        color: '#942226',
        flex: 1,
    },
    viewDia: {
        padding: 10,
        backgroundColor: '#275161',
        margin: 10,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        marginBottom: 0
    },
    viewCaixas: {
        marginTop: 0,
        padding: 10,
        backgroundColor: '#ffffff',
        margin: 10,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },
})