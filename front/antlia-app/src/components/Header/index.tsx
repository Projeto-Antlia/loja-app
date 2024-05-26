import { Box,Text } from "native-base";
import { useNavigationState } from "@react-navigation/native";
import { useAuth } from "../../contexts/auth.context";
import {HomeButton, BackButton, LogOutButton} from "./Button"

const viewName = {
  "Home":{
    title: "BEM-VINDO",
  },
  "MarketScreen":{
    title: "MENU",
    left: () => <HomeButton/>
  },
  "CartScreen":{
    title: "CARRINHO",
    left: () => <BackButton/>
  },
  "PrcScreen":{
    title: "MINHAS DESPESAS",
    left: () => <BackButton/>
  },
  "PurchasesDetail":{
    title: "FATURA DETALHADA",
    left: () => <BackButton/>
  },
  "default": (screenName:string) => ({
    title: screenName,
    left: () => <BackButton/>
  })

}


export default function HeaderHome() {
  const { logout } = useAuth();
  const screenName = useNavigationState(
    (state) => state.routes[state.index].name
  );



  
const options = viewName[screenName] || viewName.default(screenName);

  return (
    <Box
      display="flex"
      flexDir={"row"}
      justifyContent="space-between" // Espaço entre os elementos
      alignItems="center"
      h={110}
      w="100%"
      px={10}
      bg="#ffffff"
    >
      <Box>
      {options.left && options.left()}
      </Box>

      <Box>
          <Text fontSize="15" fontFamily="Rubik_600SemiBold">
            {options.title}
          </Text>
          <Text fontSize="15" fontFamily="Rubik_600SemiBold">
            state
          </Text>
          
      </Box>

      <Box>
      <LogOutButton />
      </Box>
    </Box>
  );
}


