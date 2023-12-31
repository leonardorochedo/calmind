import { View, Text, ScrollView, Dimensions } from "react-native";
import { useState } from 'react';

import { styles } from "../../../utils/styles";
import CustomGradient from "../../../utils/CustomGradient";

import { useNavigation } from "@react-navigation/native";

// Components
import { BackButton } from "../../../components/BackButton/BackButton";
import { Button } from "../../../components/Button/Button";
import { ButtonsSound } from "../../../components/ButtonsSound/ButtonsSound";

const isTablet = Dimensions.get('window').width >= 600;

export function Automassage() {

    const [isSoundOn, setIsSoundOn] = useState(true);

    const navigation = useNavigation();

    const on = () => {
        setIsSoundOn(true);
    };

    const mute = () => {
        setIsSoundOn(false);
    };

    return (
        <CustomGradient>
            <BackButton />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Automassagem</Text>
                <Text style={styles.description}>
                    Explore técnicas simples de automassagem para relaxamento e alívio do estresse nesta seção do aplicativo. Cuide de si mesmo, a qualquer hora e em qualquer lugar.
                </Text>
                <ButtonsSound onFunction={on} offFunction={mute} />
                <View style={{ alignItems: 'center' }}>
                    <Button text="Massagem nos Ombros e Pescoço" onPress={() => navigation.navigate('NeckMassage', { isSoundOn })} style={{ width: isTablet ? 380 : 280, height: 60, marginTop: isTablet ? 70 : 50, backgroundColor: "#a7e5f2" }}/>
                    <Button text="Massagem nas Têmporas" onPress={() => navigation.navigate('TemporaMassage', { isSoundOn })} style={{ width: isTablet ? 380 : 280, height: 60, marginTop: isTablet ? 70 : 50, backgroundColor: "#90E0EF" }}/>
                    <Button text="Massagem nas Mãos" onPress={() => navigation.navigate('HandMassage', { isSoundOn })} style={{ width: isTablet ? 380 : 280, height: 60, marginTop: isTablet ? 70 : 50, backgroundColor: "#00B4D8" }}/>
                    <Button text="Massagem no Peito" onPress={() => navigation.navigate('ChestMassage', { isSoundOn })} style={{ width: isTablet ? 380 : 280, height: 60, marginTop: isTablet ? 70 : 50, backgroundColor: "#0077B6" }}/>
                    <Button text="Massagem no Couro Cabeludo" onPress={() => navigation.navigate('HairMassage', { isSoundOn })} style={{ width: isTablet ? 380 : 280, height: 60, marginTop: isTablet ? 70 : 50, marginBottom: 10,backgroundColor: "#03045E" }}/>
                </View>
            </ScrollView>
        </CustomGradient>
    );
}