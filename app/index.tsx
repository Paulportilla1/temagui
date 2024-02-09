
import { Link, useRouter } from "expo-router";
import {
  Button,
  H1,
  Paragraph,
  Separator,
  YGroup,
  YStack
} from "tamagui";
import { Image } from 'react-native';

import { MySafeAreaView } from "../components/MySafeAreaView";
import { MyStack } from "../components/MyStack";
import Batman from "../assets/hobby.jpg"

export default function Home() {
  const router = useRouter();

  return (
    <MySafeAreaView>
      <MyStack>
        <YStack
          space="$4"
          maxWidth={600}
        >
          <Image
            source={Batman}
            style={{ width: '110%', height: '60%', alignSelf: 'center' }}/>
          <H1 textAlign="center"  fontSize={40}>HOBBIT</H1>
          <Paragraph textAlign="center">
          Bilbo Bolsón lleva una vida sencilla con sus compañeros hobbits en la comarca, hasta que el mago Gandalf llega y lo convence de unirse a un grupo de enanos para recuperar el reino de Erebor
          </Paragraph>
          
        </YStack>
        
        <YStack space="$2.5">
          
          <Button size="$5" theme="active" style={{ backgroundColor: 'blue', color: 'white' }} onPress={() => router.push("/tabs")}>next</Button>
        </YStack>

        <YStack space="$5">
          <YGroup
            bordered
            separator={<Separator />}
            theme="green"
          >
          </YGroup>
        </YStack>
      </MyStack>
    </MySafeAreaView>
  );
}

