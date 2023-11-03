import { VStack } from "native-base";
import { BarChart } from "@apiel51/react-native-chart-kit";
import { ChartData } from "@apiel51/react-native-chart-kit/dist/HelperTypes";
import { Dimensions } from "react-native";
import { Invoice } from "../../@types/invoice";
import { getMonth } from "../../utils/date-helpers";
import theme from "../../theme/index";

interface GraphProps {
  invoices: Invoice[];
}

const Graph: React.FC<GraphProps> = ({ invoices = [] }) => {
  const defaultData: ChartData = {
    labels: [],
    datasets: [
      {
        data: [],
        colors: [],
      },
    ],
  };

  const data = [...invoices].reverse().reduce((acc, curr) => {
    acc.labels.push(getMonth(curr.end_at));
    acc.datasets[0].data.push(curr.total);
    return acc;
  }, defaultData);

  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#fff",
    color: (opacity = 1) => `rgba(80, 34, 117, ${opacity})`,
    barPercentage: 0.5,
    comVerticalLabels: true,
    barRadius: 7,
    formatTopBarValue: (value: number) => `R$ ${value}`,
  };

  return (
    <>
      <VStack bg={theme.colors.white}>
        <BarChart
          data={data}
          width={Dimensions.get("window").width}
          height={220}
          chartConfig={chartConfig}
          verticalLabelRotation={0}
          withHorizontalLabels={false}
          showValuesOnTopOfBars={true}
          showBarTops={false}
          withInnerLines={true}
          fromZero={true}
          topBarValueSpacing={10}
          style={{
            paddingTop: 20,
          }}
        />
      </VStack>
    </>
  );
};

export default Graph;
