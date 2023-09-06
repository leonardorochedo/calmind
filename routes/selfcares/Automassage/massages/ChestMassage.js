import { Text, View, ScrollView, BackHandler } from 'react-native';
import { useState, useEffect } from 'react';

import { styles } from '../../../../utils/styles';

import { useRoute, useNavigation } from '@react-navigation/native';

import { Audio } from 'expo-av';

// Components
import { Button } from '../../../../components/Button/Button';
import { StepByStep } from '../../../../components/StepByStep/StepByStep';

export function ChestMassage() {

    const navigation = useNavigation();
    const route = useRoute();
    const { isSoundOn } = route.params;

    const listOfSteps = [
        'Sente-se em uma posição confortável.',
        'Use as mãos para fazer movimentos circulares suaves no peito, começando no centro e se movendo para fora.',
        'Isso pode ajudar a aliviar a tensão no peito e promover a respiração mais profunda.'
    ]

    const [sound, setSound] = useState(null);

    // Função para tocar o som
    async function playSound() {
        const { sound } = await Audio.Sound.createAsync(require('../../../../assets/audios/ChestMassage.mp3'));
        setSound(sound);
        await sound.playAsync();
    }

    // Função para parar o som
    async function stopSound() {
        if (sound) {
            await sound.stopAsync();
        }
    }

    const goBack = () => {
        stopSound();
        navigation.goBack();
    }

    useEffect(() => {
        if (isSoundOn) {
            setTimeout(() => {
                playSound()
            }, 3000)
        }
    }, [])

    // Efeito para lidar com o botão de voltar e parar o som ao sair do componente
    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            stopSound();
            navigation.goBack();
            return true;
        });

        return () => {
            backHandler.remove();
        };
    }, [navigation]);

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Massagem no Peito</Text>
                <StepByStep list={listOfSteps} />
                <View style={{alignItems: 'center'}}>
                    <Button text="Encerrar" onPress={goBack} style={styles.buttonGoBack} />
                </View>
            </ScrollView>
        </View>
    );
}