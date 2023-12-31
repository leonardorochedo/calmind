import { View, Text, ScrollView, Dimensions } from "react-native";

import { styles } from "../utils/styles";
import { baseColor } from "../utils/baseColor";
import CustomGradient from "../utils/CustomGradient";

// Icons in https://fontawesome.com/v4/icons/
import Icon from "react-native-vector-icons/FontAwesome";

// Components
import { BackButton } from "../components/BackButton/BackButton";
import { CardView } from "../components/CardView/CardView";
import { CardRecomendation } from "../components/CardRecomendation/CardRecomendation";

const isTablet = Dimensions.get('window').width >= 600;

export function SelfcareScreen() {
    return (
        <CustomGradient>
            <BackButton />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Icon style={styles.icon} name="medkit" size={ isTablet ? 120 : 100 } color={baseColor} />
                <Text style={styles.title}>Autocuidados</Text>
                <Text style={styles.description}>
                    Priorize seu bem-estar com nossas práticas de autocuidado.
                </Text>
                <View style={styles.containerCards}>
                    <CardView title="Sofrologia" navigate="Sofrology" bgColor='#B2BEB5'>
                        <CardRecomendation text="Relaxamento Geral" bgColor={baseColor} />
                    </CardView>
                    <CardView title="Automassagem" navigate="Automassage" bgColor='#B2BEB5'>
                        <CardRecomendation text="Relaxamento Muscular" bgColor={baseColor} />
                    </CardView>
                </View>
            </ScrollView>
        </CustomGradient>
    );
}