import { View, StyleSheet, Text, ScrollView } from "react-native"
import { Button, ButtonIcon, ButtonText } from "../../ui/button"
import { EyeIcon, TrashIcon } from '@/components/ui/icon'

interface Props {
    horario: string
    local: string
    dia: string
}

export default function Monitoria({horario, local, dia}: Props){
    return(
        <ScrollView>
            <View style={styles.viewQuadro}>
                <View style={styles.caixaLocalHora}>
                    <Text style={styles.localHoraTexto}>{horario}</Text>
                    <Text style={styles.localHoraTexto}>{local}</Text>
                </View>
                <View style={styles.viewButton}>
                    <Button style={styles.button}>
                        <ButtonIcon as={EyeIcon}/>
                    </Button>
                    <Button style={styles.button}>
                        <ButtonIcon as={TrashIcon}/>
                    </Button>
                </View>
            </View>    
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    viewQuadro: {
        padding: 20,
        backgroundColor: '#1a2224',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    caixaLocalHora: {
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 12,
        alignItems: 'center',
        height: 60,
        width: 160,
        justifyContent: 'center',
    },
    viewButton: {
        flexDirection: 'row',
        padding: 5,
    },
    button: {
        padding: 5,
        width: 20,
        margin: 5,
    },
    localHoraTexto:{
        fontSize: 16,
        color: '#000',
    },
})