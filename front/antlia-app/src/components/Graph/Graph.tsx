import { Badge, Box, HStack, Image, Text, VStack } from "native-base";
import { BarChart } from "react-native-chart-kit";
import theme from '../../theme/index';
import { Dimensions } from "react-native";

interface GraphProps {

}
const Graph: React.FC<GraphProps> = () => {
    const data = {
        labels: ["JAN", "FEV", "MAR", "ABR", "MAIO", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"],
        datasets: [
            {
                data: [20, 45, 49, 80, 99, 43, 20, 45, 60, 80, 150, 43]
            }
        ]
    }

    const dataWithPrefix = {
        labels: data.labels,
        datasets: data.datasets.map(dataset => ({
            ...dataset,
            data: dataset.data.map(value => `R$ ${value}`)
        }))
    }
    const chartConfig = {
        backgroundGradientFrom: "#fff",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#fff",
        color: (opacity = 1) => `rgba(80, 34, 117, ${opacity})`,
        // color: (opacity = 1) => `rgba(201, 201, 201, ${opacity})`,
        barPercentage: 0.5,
        comVerticalLabels: true,
        barRadius: 7,
        yLabelsFormatter: (value: number) => `R$ ${value}`,
        // fillShadowGradientFrom: "#C9C9C9",
        // fillShadowGradientFromOpacity: 1,
        // fillShadowGradientFromOffset: 1,
        // fillShadowGradientTo: "#000",
    };

    return (
        <>
            <VStack bg={theme.colors.white}>
                <BarChart
                    data={data}
                    // width={Dimensions.get("window").width}
                    width={600}
                    height={220}
                    yAxisLabel=""
                    yAxisSuffix=""
                    chartConfig={chartConfig}
                    verticalLabelRotation={0}
                    withHorizontalLabels={false}
                    showValuesOnTopOfBars={true}
                    showBarTops={false}
                    withInnerLines={false}
                    fromZero={true}
                />
            </VStack>
        </>
    )
}

export default Graph;
